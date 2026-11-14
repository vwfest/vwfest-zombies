// Merge a multi-primitive Carrion Buzzard GLB into one skinned geometry + one
// atlas material so the flock can be drawn as a single InstancedMesh per LOD.
// No Draco / meshopt / WASM.
import * as THREE from 'three';

function imgOf(tex) {
  const im = tex && tex.image;
  if (!im) return null;
  if (im.data) return null; // skip raw DataTexture; treat as missing
  return im;
}

function sizeOf(im) {
  return { w: im.naturalWidth || im.width || 16, h: im.naturalHeight || im.height || 16 };
}

function matColor(mat) {
  const c = mat.color ? mat.color.clone() : new THREE.Color(1, 1, 1);
  return c;
}

function drawImageOrColor(ctx, x, y, w, h, im, color) {
  if (im) {
    try { ctx.drawImage(im, x, y, w, h); return; } catch (e) { /* fall through */ }
  }
  const c = color || new THREE.Color(1, 1, 1);
  ctx.fillStyle = `rgb(${(c.r * 255) | 0},${(c.g * 255) | 0},${(c.b * 255) | 0})`;
  ctx.fillRect(x, y, w, h);
}

function packTiles(tiles, atlasSize) {
  let x = 0, y = 0, rowH = 0;
  for (const t of tiles) {
    const w = Math.min(t.w, atlasSize), h = Math.min(t.h, atlasSize);
    if (x + w > atlasSize) { x = 0; y += rowH; rowH = 0; }
    if (y + h > atlasSize) {
      // shrink oversized leftover into remaining space, or overlap last row
      t.x = 0; t.y = 0; t.pw = Math.min(w, 16); t.ph = Math.min(h, 16);
      continue;
    }
    t.x = x; t.y = y; t.pw = w; t.ph = h;
    x += w + 2; rowH = Math.max(rowH, h + 2);
  }
  return tiles;
}

function makeCanvas(size) {
  const c = (typeof document !== 'undefined') ? document.createElement('canvas') : null;
  if (!c) return null;
  c.width = size; c.height = size;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#8080ff'; ctx.fillRect(0, 0, size, size);
  return { c, ctx };
}

function texFromCanvas(c, srgb) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  t.magFilter = THREE.LinearFilter;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.needsUpdate = true;
  return t;
}

function firstSkin(mesh, i) {
  const idx = mesh.geometry.attributes.skinIndex;
  const w = mesh.geometry.attributes.skinWeight;
  if (!idx || !w) return { index: [0, 0, 0, 0], weight: [1, 0, 0, 0] };
  return {
    index: [idx.getX(i) || 0, idx.getY(i) || 0, idx.getZ(i) || 0, idx.getW(i) || 0],
    weight: [w.getX(i) || 1, w.getY(i) || 0, w.getZ(i) || 0, w.getW(i) || 0],
  };
}

// Replace a high-poly eye primitive with a small sphere at its centroid, same skin.
function lowEyeGeometry(src, bind, target = 24) {
  const pos = src.attributes.position;
  const n = pos.count;
  const c = new THREE.Vector3();
  for (let i = 0; i < n; i++) c.x += pos.getX(i), c.y += pos.getY(i), c.z += pos.getZ(i);
  c.multiplyScalar(1 / Math.max(1, n));
  let r = 0;
  for (let i = 0; i < n; i++) {
    const d = Math.hypot(pos.getX(i) - c.x, pos.getY(i) - c.y, pos.getZ(i) - c.z);
    if (d > r) r = d;
  }
  r = Math.max(0.012, r * 0.9);
  const sg = new THREE.SphereGeometry(r, 6, 4);
  sg.translate(c.x, c.y, c.z);
  const skin = firstSkin({ geometry: src }, 0);
  const sc = sg.attributes.position.count;
  const sIdx = new THREE.BufferAttribute(new Uint16Array(sc * 4), 4);
  const sW = new THREE.BufferAttribute(new Float32Array(sc * 4), 4);
  for (let i = 0; i < sc; i++) {
    sIdx.setXYZW(i, skin.index[0], skin.index[1], skin.index[2], skin.index[3]);
    sW.setXYZW(i, skin.weight[0], skin.weight[1], skin.weight[2], skin.weight[3]);
  }
  sg.setAttribute('skinIndex', sIdx);
  sg.setAttribute('skinWeight', sW);
  return sg;
}

function appendPrim(buckets, mesh, primGeo, mat, tile, atlasSize, bind, eyeLo) {
  let geo = primGeo;
  if (eyeLo) geo = lowEyeGeometry(primGeo, bind);
  geo = geo.index ? geo.toNonIndexed() : geo.clone();
  const n = geo.attributes.position.count;
  const pos = geo.attributes.position;
  const nor = geo.attributes.normal;
  const uvIn = geo.attributes.uv;
  const sIdx = geo.attributes.skinIndex;
  const sW = geo.attributes.skinWeight;
  const bm = bind || new THREE.Matrix4();
  const nMat = new THREE.Matrix3().getNormalMatrix(bm);
  const v = new THREE.Vector3(), nn = new THREE.Vector3();

  const u0 = tile.x / atlasSize, v0 = 1 - (tile.y + tile.ph) / atlasSize;
  const us = tile.pw / atlasSize, vs = tile.ph / atlasSize;
  const uc = u0 + us * 0.5, vc = v0 + vs * 0.5;

  for (let i = 0; i < n; i++) {
    v.set(pos.getX(i), pos.getY(i), pos.getZ(i)).applyMatrix4(bm);
    buckets.pos.push(v.x, v.y, v.z);
    if (nor) {
      nn.set(nor.getX(i), nor.getY(i), nor.getZ(i)).applyMatrix3(nMat).normalize();
      buckets.nor.push(nn.x, nn.y, nn.z);
    } else buckets.nor.push(0, 1, 0);
    if (uvIn && tile.hasMap) {
      const u = uvIn.getX(i), vv = uvIn.getY(i);
      buckets.uv.push(u0 + u * us, v0 + vv * vs);
    } else {
      buckets.uv.push(uc, vc);
    }
    if (sIdx && sW) {
      buckets.idx.push(sIdx.getX(i) || 0, sIdx.getY(i) || 0, sIdx.getZ(i) || 0, sIdx.getW(i) || 0);
      buckets.wt.push(sW.getX(i) || 0, sW.getY(i) || 0, sW.getZ(i) || 0, sW.getW(i) || 0);
    } else {
      buckets.idx.push(0, 0, 0, 0);
      buckets.wt.push(1, 0, 0, 0);
    }
  }
}

/**
 * @param {import('three/examples/jsm/loaders/GLTFLoader.js').GLTF} gltf
 * @param {{ atlasSize?: number, simplifyEyes?: boolean }} [opts]
 */
export function mergeBuzzard(gltf, opts = {}) {
  const scene = gltf.scene;
  scene.updateMatrixWorld(true);
  const meshes = [];
  scene.traverse((o) => { if (o.isMesh && o.geometry) meshes.push(o); });
  if (!meshes.length) throw new Error('buzzard: no meshes');

  const skeleton = meshes.find((m) => m.skeleton)?.skeleton;
  if (!skeleton) throw new Error('buzzard: no skeleton');

  // One tile per unique material.
  const matTiles = new Map();
  function tileFor(mat) {
    if (matTiles.has(mat)) return matTiles.get(mat);
    const mapIm = imgOf(mat.map);
    const sz = mapIm ? sizeOf(mapIm) : { w: 8, h: 8 };
    // keep atlas tight: cap individual tiles
    const cap = opts.atlasSize ? opts.atlasSize / 4 : 256;
    const t = {
      mat,
      w: Math.max(8, Math.min(cap, sz.w)),
      h: Math.max(8, Math.min(cap, sz.h)),
      im: mapIm,
      nor: imgOf(mat.normalMap),
      arm: imgOf(mat.roughnessMap || mat.metalnessMap || mat.aoMap),
      emi: imgOf(mat.emissiveMap),
      color: matColor(mat),
      emissive: mat.emissive ? mat.emissive.clone() : new THREE.Color(0, 0, 0),
      hasMap: !!mapIm,
      alpha: !!(mat.alphaTest > 0 || (mat.map && mat.map.format === THREE.RGBAFormat)),
    };
    matTiles.set(mat, t);
    return t;
  }

  const used = [];
  for (const mesh of meshes) {
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const isEye = /eye/i.test(mesh.name || '') || mats.some((m) => m && /^(ClayEye|ClayIris|ClayPupil)$/i.test(m.name || ''));
    if (isEye) continue;
    for (const m of mats) if (m) used.push(tileFor(m));
  }
  const uniq = [...new Set(used)];
  const atlasSize = opts.atlasSize || (uniq.some((t) => t.w >= 128) ? 1024 : 512);
  packTiles(uniq, atlasSize);

  const diff = makeCanvas(atlasSize);
  const norm = makeCanvas(atlasSize);
  const arm = makeCanvas(atlasSize);
  const emi = makeCanvas(atlasSize);
  if (diff) {
    diff.ctx.fillStyle = '#777777'; diff.ctx.fillRect(0, 0, atlasSize, atlasSize);
    norm.ctx.fillStyle = 'rgb(128,128,255)'; norm.ctx.fillRect(0, 0, atlasSize, atlasSize);
    arm.ctx.fillStyle = 'rgb(255,200,0)'; arm.ctx.fillRect(0, 0, atlasSize, atlasSize);
    emi.ctx.fillStyle = '#000'; emi.ctx.fillRect(0, 0, atlasSize, atlasSize);
    for (const t of uniq) {
      drawImageOrColor(diff.ctx, t.x, t.y, t.pw, t.ph, t.im, t.color);
      if (t.nor) drawImageOrColor(norm.ctx, t.x, t.y, t.pw, t.ph, t.nor, new THREE.Color(0.5, 0.5, 1));
      if (t.arm) drawImageOrColor(arm.ctx, t.x, t.y, t.pw, t.ph, t.arm, new THREE.Color(1, 0.7, 0));
      if (t.emi) drawImageOrColor(emi.ctx, t.x, t.y, t.pw, t.ph, t.emi, t.emissive);
      else if (t.emissive && (t.emissive.r + t.emissive.g + t.emissive.b) > 0.01) {
        drawImageOrColor(emi.ctx, t.x, t.y, t.pw, t.ph, null, t.emissive);
      }
    }
  }

  const material = new THREE.MeshStandardMaterial({
    map: diff ? texFromCanvas(diff.c, true) : null,
    normalMap: norm ? texFromCanvas(norm.c, false) : null,
    metalnessMap: arm ? texFromCanvas(arm.c, false) : null,
    roughnessMap: arm ? texFromCanvas(arm.c, false) : null,
    emissiveMap: emi ? texFromCanvas(emi.c, true) : null,
    emissive: new THREE.Color(1, 1, 1),
    emissiveIntensity: 0.18,
    roughness: 0.75,
    metalness: 0.08,
    side: THREE.DoubleSide,
    alphaTest: uniq.some((t) => t.alpha) ? 0.4 : 0,
    transparent: false,
    depthWrite: true,
    name: 'BuzzardAtlas',
  });

  const buckets = { pos: [], nor: [], uv: [], idx: [], wt: [] };
  const eyeLo = !!opts.simplifyEyes;
  for (const mesh of meshes) {
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const isEye = /eye/i.test(mesh.name || '') || mats.some((m) => m && /^(ClayEye|ClayIris|ClayPupil)$/i.test(m.name || ''));
    if (isEye) continue; // original eye meshes are in a different space; we add tiny head-bone eyes below
    // Group split: geometry may already be non-indexed groups per material
    const geo = mesh.geometry;
    const groups = geo.groups && geo.groups.length ? geo.groups : [{ start: 0, count: (geo.index ? geo.index.count : geo.attributes.position.count), materialIndex: 0 }];
    // Positions are mesh-local. bindMatrix is identity on these GLBs; fall back to matrixWorld.
    const toSkel = mesh.bindMatrix ? mesh.bindMatrix : mesh.matrixWorld;

    if (geo.groups && geo.groups.length) {
      for (const g of geo.groups) {
        const mat = mats[g.materialIndex] || mats[0];
        if (!mat) continue;
        const part = extractGroup(geo, g);
        appendPrim(buckets, mesh, part, mat, tileFor(mat), atlasSize, toSkel, eyeLo && isEye);
        part.dispose?.();
      }
    } else {
      const mat = mats[0];
      if (!mat) continue;
      appendPrim(buckets, mesh, geo, mat, tileFor(mat), atlasSize, toSkel, eyeLo && isEye);
    }
  }

  const eyeTile = paintEyeSwatch(diff, emi, atlasSize);
  addHeadEyes(buckets, skeleton, eyeTile, atlasSize);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(buckets.pos, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(buckets.nor, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(buckets.uv, 2));
  geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(buckets.idx, 4));
  geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(buckets.wt, 4));
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();

  const tris = buckets.pos.length / 9;
  return {
    geometry,
    material,
    skeleton,
    clips: gltf.animations || [],
    bones: skeleton.bones,
    boneInverses: skeleton.boneInverses,
    boneCount: skeleton.bones.length,
    tris: Math.round(tris),
  };
}

function extractGroup(geo, group) {
  // Return a geometry containing only the group range (indexed or not).
  const dst = new THREE.BufferGeometry();
  const index = geo.index;
  const start = group.start, count = group.count;
  const gather = [];
  if (index) {
    for (let i = 0; i < count; i++) gather.push(index.getX(start + i));
  } else {
    for (let i = 0; i < count; i++) gather.push(start + i);
  }
  const n = gather.length;
  function copyAttr(name, defItemSize) {
    const src = geo.attributes[name];
    if (!src) return;
    const item = src.itemSize;
    const arr = [];
    for (let i = 0; i < n; i++) {
      const vi = gather[i];
      for (let k = 0; k < item; k++) arr.push(src.array[vi * item + k]);
    }
    const Ctor = src.array.constructor;
    dst.setAttribute(name, new THREE.BufferAttribute(new Ctor(arr), item));
  }
  copyAttr('position', 3);
  copyAttr('normal', 3);
  copyAttr('uv', 2);
  copyAttr('skinIndex', 4);
  copyAttr('skinWeight', 4);
  return dst;
}


function paintEyeSwatch(diff, emi, atlasSize) {
  const pw = 8, ph = 8;
  const x = Math.max(0, atlasSize - pw), y = 0;
  if (diff) {
    diff.ctx.fillStyle = 'rgb(70, 90, 28)';
    diff.ctx.fillRect(x, y, pw, ph);
    diff.ctx.fillStyle = 'rgb(210, 190, 50)';
    diff.ctx.beginPath();
    diff.ctx.arc(x + pw / 2, y + ph / 2, 2.2, 0, Math.PI * 2);
    diff.ctx.fill();
    diff.ctx.fillStyle = 'rgb(20, 16, 8)';
    diff.ctx.beginPath();
    diff.ctx.arc(x + pw / 2, y + ph / 2, 1.0, 0, Math.PI * 2);
    diff.ctx.fill();
  }
  if (emi) {
    emi.ctx.fillStyle = 'rgb(36, 40, 8)';
    emi.ctx.fillRect(x, y, pw, ph);
  }
  return { x, y, pw, ph };
}

function addHeadEyes(buckets, skeleton, tile, atlasSize) {
  const bones = skeleton.bones || [];
  const head = bones.find((b) => /head/i.test(b.name || '')) || bones[0];
  const bi = Math.max(0, bones.indexOf(head));
  const tmp = new THREE.Vector3();
  // Bind-pose head origin: inverse of the inverse-bind matrix (not live matrixWorld,
  // which can disagree with the IBM scale on these GLBs).
  const invs = skeleton.boneInverses;
  if (invs && invs[bi]) tmp.setFromMatrixPosition(invs[bi].clone().invert());
  else if (head) { head.updateWorldMatrix(true, false); tmp.setFromMatrixPosition(head.matrixWorld); }
  else tmp.set(0, 0.35, 0.08);
  const r = 0.018;
  const offsets = [[-0.032, 0.014, 0.028], [0.032, 0.014, 0.028]];
  const u = (tile.x + tile.pw * 0.5) / atlasSize;
  const v = 1 - (tile.y + tile.ph * 0.5) / atlasSize;
  for (const [ox, oy, oz] of offsets) {
    const sg = new THREE.SphereGeometry(r, 6, 4);
    sg.translate(tmp.x + ox, tmp.y + oy, tmp.z + oz);
    const n = sg.attributes.position.count;
    const pos = sg.attributes.position, nor = sg.attributes.normal;
    const index = sg.index;
    const visit = [];
    if (index) { for (let i = 0; i < index.count; i++) visit.push(index.getX(i)); }
    else { for (let i = 0; i < n; i++) visit.push(i); }
    for (const i of visit) {
      buckets.pos.push(pos.getX(i), pos.getY(i), pos.getZ(i));
      if (nor) buckets.nor.push(nor.getX(i), nor.getY(i), nor.getZ(i));
      else buckets.nor.push(0, 0, 1);
      buckets.uv.push(u, v);
      buckets.idx.push(bi, 0, 0, 0);
      buckets.wt.push(1, 0, 0, 0);
    }
    sg.dispose();
  }
}
