// v6-derived zombies from pre-baked packs: 4 bodies (2 male, 2 female; slim/regular/heavy; tee, hawaiian, overalls, vest) x near/mid/far LOD.
import * as THREE from 'three';
import { unpack, posAttr, nrmAttr, PACKS } from './pack.js';
const T = {}; let meta;
function init() { const u = unpack(PACKS.zombies), view = u.view; meta = u.meta;
for (const m of meta) { const g = new THREE.BufferGeometry(); g.setAttribute('position', posAttr(view, m)); g.setAttribute('normal', nrmAttr(view, m)); g.setAttribute('skinIndex', new THREE.BufferAttribute(view(Uint8Array, m.si), 4)); g.setAttribute('skinWeight', new THREE.BufferAttribute(view(Uint8Array, m.sw), 4, true)); const ix = view(Uint16Array, m.idx); trimHair(ix, g.attributes.position.array, m); g.setIndex(new THREE.BufferAttribute(ix, 1));
  m.groups.forEach((gr) => g.addGroup(gr.start, gr.count, gr.slot >= 0 ? gr.slot : 3)); g.computeBoundingSphere(); T[m.tag] = { g, m }; } }
// The baked hair is a closed ellipsoid shell (z -0.11..+0.12) that encloses the whole head incl. eyes/brow (z~0.11),
// so from the front it renders as a dark faceted ball. Cut its front-lower faces (degenerate them) to leave a cap.
function trimHair(ix, p, m) { const gs = m.groups.filter((gr) => gr.slot < 0); for (const gr of gs) { let top = -9; for (let i = gr.start; i < gr.start + gr.count; i++) top = Math.max(top, p[ix[i] * 3 + 1]); if (top < 1.75 || gr.count < 200) continue; gr.hair = true;
    // oversized afro shell (variant 3: 0.38 m wide vs a 0.18 m head, 29-vert far LOD) -> fit it to the skull
    const vs = new Set(); for (let i = gr.start; i < gr.start + gr.count; i++) vs.add(ix[i]); let w = 0; for (const v of vs) w = Math.max(w, Math.abs(p[v * 3]));
    if (w > 0.12) { const k = 0.12 / w; for (const v of vs) { p[v * 3] *= k; p[v * 3 + 2] = (p[v * 3 + 2] + 0.01) * k - 0.01; p[v * 3 + 1] = 1.66 + (p[v * 3 + 1] - 1.66) * (p[v * 3 + 1] > 1.66 ? 0.72 : k); } }
    for (let i = gr.start; i < gr.start + gr.count; i += 3) { let y = 0, z = 0; for (let j = 0; j < 3; j++) { y += p[ix[i + j] * 3 + 1] / 3; z += p[ix[i + j] * 3 + 2] / 3; }
      if ((z > 0.035 && y < 1.715) || (z > 0.075 && y < 1.74) || y < 1.6) ix[i + 1] = ix[i + 2] = ix[i]; } } }
export const VARIANTS = 4, LODS = ['near', 'mid', 'far'];
const shared = new Map(); const colMat = (hex, hair) => { let m = shared.get(hex); if (!m) { const c = new THREE.Color('#' + hex).multiplyScalar(hair ? 0.85 : 0.6); if (hair) c.offsetHSL(0, 0, 0.04); m = new THREE.MeshStandardMaterial({ color: c, roughness: 0.85, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 }); shared.set(hex, m); } return m; };
// procedural rot + tears in object space (no UVs, no alpha holes: tears show rotten skin underneath)
const NOISE = `float zh(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);} float zn(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(zh(i),zh(i+vec3(1,0,0)),f.x),mix(zh(i+vec3(0,1,0)),zh(i+vec3(1,1,0)),f.x),f.y),mix(mix(zh(i+vec3(0,0,1)),zh(i+vec3(1,0,1)),f.x),mix(zh(i+vec3(0,1,1)),zh(i+vec3(1,1,1)),f.x),f.y),f.z);}`;
function zmat(kind, seed) { const m = new THREE.MeshStandardMaterial({ roughness: kind === 0 ? 0.7 : 0.95, polygonOffset: kind !== 0, polygonOffsetFactor: -1.5, polygonOffsetUnits: -4 }); m.userData.seed = { value: seed };
  m.onBeforeCompile = (s) => { s.uniforms.zSeed = m.userData.seed; s.vertexShader = s.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vZ;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvZ = position;');
    s.fragmentShader = s.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vZ; uniform float zSeed;\n' + NOISE).replace('#include <color_fragment>', `#include <color_fragment>
      vec3 q = vZ*vec3(18.)+zSeed; float n = zn(q)*0.6+zn(q*2.3)*0.4;
      ${kind === 0 ? 'diffuseColor.rgb *= mix(vec3(0.55,0.62,0.5), vec3(1.0), smoothstep(0.25,0.75,n)); float b = smoothstep(0.78,0.86,zn(q*0.7+3.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.25,0.03,0.04), b*0.8);'
        : 'float m2 = zn(vZ*7.+zSeed)*0.65+zn(vZ*15.+zSeed)*0.35; float t = smoothstep(0.70,0.78,m2)*0.8; float e = smoothstep(0.62,0.70,m2)*0.5-t*0.5; diffuseColor.rgb *= 0.85+0.2*zn(q*2.); diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb*0.35, e); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.075,0.095,0.06)*mix(1.,0.6,zn(q*3.)), t); float bl = smoothstep(0.8,0.9,zn(q*0.5+7.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.22,0.03,0.03), bl*0.7);'}`); };
  m.customProgramCacheKey = () => 'zmat' + kind; return m; }
const AVS = 1.1;
const _e = new THREE.Vector3(), _c = new THREE.Color(), _o = new THREE.Object3D(), _hot = new THREE.Color(1, 0.92, 0.75);
const eyeCache = new Array(VARIANTS);
function glowMap() {
  const c = document.createElement('canvas'); c.width = c.height = 32; const g = c.getContext('2d');
  const gr = g.createRadialGradient(16, 16, 1, 16, 16, 16); gr.addColorStop(0, '#fff'); gr.addColorStop(0.28, 'rgba(255,255,255,.7)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 32, 32); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
// Eye sockets in head-bone space, from the near-LOD head (mid/far LODs drop the sculpted eyes).
function eyeLocals(mesh) {
  const pos = mesh.geometry.attributes.position, si = mesh.geometry.attributes.skinIndex, sw = mesh.geometry.attributes.skinWeight;
  const hi = mesh.skeleton.bones.findIndex((b) => b.name === 'head');
  const inv = mesh.skeleton.boneInverses[hi], bind = mesh.bindMatrix, v = new THREE.Vector3();
  let L = null, R = null, ls = -1e9, rs = -1e9;
  for (let i = 0; i < pos.count; i++) {
    let w = 0; for (let k = 0; k < 4; k++) if (si.getComponent(i, k) === hi) w = Math.max(w, sw.getComponent(i, k));
    if (w < 0.45) continue;
    v.fromBufferAttribute(pos, i).applyMatrix4(bind).applyMatrix4(inv);
    if (v.z < 0.015) continue;
    const s = v.z - Math.abs(Math.abs(v.x) - 0.032) * 2.4 - Math.abs(v.y - 0.012) * 2.2;
    if (v.x < -0.01 && s > ls) { ls = s; L = v.clone(); } else if (v.x > 0.01 && s > rs) { rs = s; R = v.clone(); }
  }
  L = L || new THREE.Vector3(-0.034, 0.02, 0.08); R = R || new THREE.Vector3(0.034, 0.02, 0.08); L.y += 0.022; R.y += 0.022; L.z += 0.01; R.z += 0.01; return { L, R };
}
function hideRead(eye, blob, i) {
  _o.position.set(0, -20, 0); _o.scale.set(0, 0, 0); _o.rotation.set(0, 0, 0); _o.updateMatrix();
  eye.setMatrixAt(i * 2, _o.matrix); eye.setMatrixAt(i * 2 + 1, _o.matrix); blob.setMatrixAt(i, _o.matrix);
}
function placeReads(zombies, time) {
  const eye = zombies.eyeMesh, blob = zombies.blob, list = zombies.list, cam = zombies.cam, q = cam && cam.quaternion;
  let dirty = false;
  for (let i = 0; i < list.length; i++) {
    const z = list[i], on = z.root.visible && z.state !== 'dead' && z.eyeL;
    if (!on) { if (z._eyeOn) { z._eyeOn = false; dirty = true; hideRead(eye, blob, i); } continue; }
    z._eyeOn = true; dirty = true;
    z.bones.head.updateWorldMatrix(true, false);
    const head = z.bones.head.matrixWorld, pulse = 1 + 0.12 * Math.sin(time * (z.runner ? 9 : 3.1) + z.phase);
    const sc = 0.05 * pulse * (z.flash > 0 ? 1.35 : 1) * (z.brute ? 1.22 : 1);
    _c.setRGB(z.brute ? 0.85 : z.runner ? 1 : 0.95, z.brute ? 0.08 : z.runner ? 0.42 : 0.16, 0.04);
    if (z.flash > 0) _c.lerp(_hot, Math.min(0.65, z.flash * 2.5));
    if (q) _o.quaternion.copy(q);
    _e.copy(z.eyeL).applyMatrix4(head); _o.position.copy(_e); _o.scale.setScalar(sc); _o.updateMatrix(); eye.setMatrixAt(i * 2, _o.matrix); eye.setColorAt(i * 2, _c);
    _e.copy(z.eyeR).applyMatrix4(head); _o.position.copy(_e); _o.updateMatrix(); eye.setMatrixAt(i * 2 + 1, _o.matrix); eye.setColorAt(i * 2 + 1, _c);
    const sink = z.state === 'dying' ? Math.min(0.85, z.dieT * 0.45) : 0;
    _o.position.set(z.pos.x, 0.04, z.pos.z); _o.rotation.set(-Math.PI / 2, 0, 0); _o.scale.setScalar(Math.max(0.01, z.scale * (z.brute ? 1.15 : 0.92) * (1 - sink))); _o.updateMatrix();
    blob.setMatrixAt(i, _o.matrix);
  }
  if (!dirty) return;
  eye.instanceMatrix.needsUpdate = true; eye.instanceColor.needsUpdate = true; blob.instanceMatrix.needsUpdate = true;
}
export function upgradeZombies(zombies) { init();
  zombies.list.forEach((z, i) => { const v = i % VARIANTS; const bones = T[v + ':near'].m.bones; const B = bones.map((b) => { const o = new THREE.Bone(); o.name = b.n; o.position.fromArray(b.t); return o; });
    bones.forEach((b, k) => { if (b.p >= 0) B[b.p].add(B[k]); }); const root = new THREE.Group(); root.add(B[0]); root.scale.setScalar(T[v + ':near'].m.scale * AVS); root.updateMatrixWorld(true); const sk = new THREE.Skeleton(B);
    z.sk = zmat(0, i * 7.3); z.sh = zmat(1, i * 3.1); z.pa = zmat(1, i * 5.7 + 2);
    z.lods = LODS.map((l) => { const t = T[v + ':' + l]; const mats = [z.sk, z.sh, z.pa, ...[]]; const gm = t.m.groups.map((gr) => (gr.slot >= 0 ? [z.sk, z.sh, z.pa][gr.slot] : colMat(gr.col, gr.hair)));
      const g = t.g.clone(); g.clearGroups(); t.m.groups.forEach((gr, k) => g.addGroup(gr.start, gr.count, k)); const mesh = new THREE.SkinnedMesh(g, gm); mesh.frustumCulled = false; mesh.castShadow = true; mesh.bind(sk); mesh.visible = false; root.add(mesh); return mesh; });
    z.bones = Object.fromEntries(B.map((b) => [b.name, b])); z.hipY = z.bones.hips.position.y; z.root.add(root); z.pelvis.traverse((o) => { if (o.isMesh) o.visible = false; }); z.variant = v;
    if (!eyeCache[v]) eyeCache[v] = eyeLocals(z.lods[0]); z.eyeL = eyeCache[v].L; z.eyeR = eyeCache[v].R; });
  const n = zombies.list.length;
  const eye = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: glowMap(), color: 0xffffff, transparent: true, depthWrite: false, blending: THREE.NormalBlending, toneMapped: true, fog: true, side: THREE.DoubleSide }), n * 2);
  eye.frustumCulled = false; eye.userData.noAO = true; eye.renderOrder = 6; eye.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 6), 3);
  const blobMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false });
  const blob = new THREE.InstancedMesh(new THREE.CircleGeometry(0.7, 14), blobMat, n);
  blob.frustumCulled = false; blob.userData.noAO = true; blob.renderOrder = 1; blob.receiveShadow = false;
  zombies.scene.add(eye, blob); zombies.eyeMesh = eye; zombies.blob = blob;
  const prevTier = zombies.setTier.bind(zombies);
  zombies.setTier = (t) => { zombies.tier = t; blobMat.opacity = t === 0 ? 0.5 : 0.26; prevTier(t); };
  const ou = zombies.update.bind(zombies); const vis = [];
  zombies.update = (dt, time, player, ...r) => { ou(dt, time, player, ...r); vis.length = 0;
    for (const z of zombies.list) if (z.root.visible) { z.d = Math.hypot(z.pos.x - player.x, z.pos.z - player.z); vis.push(z); }
    vis.sort((a, b) => a.d - b.d); vis.forEach((z, k) => { const L = k < 2 && z.d < 7 ? 0 : k < 5 && z.d < 16 ? 1 : 2; z.lods.forEach((m, j) => (m.visible = j === L)); sync(z); });
    placeReads(zombies, time); };
  zombies.lodCounts = () => { const c = [0, 0, 0]; for (const z of zombies.list) if (z.root.visible) z.lods.forEach((m, j) => { if (m.visible) c[j]++; }); return c; };
  return Object.fromEntries(meta.map((m) => [m.tag, m.tris]));
}
function sync(z) { const b = z.bones;
  b.hips.position.y = z.hipY + (z.pelvis.position.y - 0.95) / AVS; b.hips.rotation.set(z.pelvis.rotation.x, 0, z.pelvis.rotation.z);
  b.chest.rotation.set(z.upper.rotation.x + 0.18 + (z.brute ? 0.1 : 0), z.upper.rotation.y, z.upper.rotation.z); b.spine.rotation.x = 0.1 + (z.brute ? 0.05 : 0); b.head.rotation.set(z.head.rotation.x + 0.15, 0.1 + (z.head.rotation.y || 0), z.head.rotation.z + 0.22);
  b.thighL.rotation.set(z.legL.rotation.x, 0, 0.03); b.thighR.rotation.set(z.legR.rotation.x, 0, -0.03); b.shinL.rotation.x = Math.max(0, -z.legL.rotation.x) * 1.25 + 0.1; b.shinR.rotation.x = Math.max(0, -z.legR.rotation.x) * 1.25 + 0.1;
  b.upperArmL.rotation.set(z.armL.rotation.x, 0, z.armL.rotation.z); b.upperArmR.rotation.set(z.armR.rotation.x, 0, z.armR.rotation.z);
  const bend = (ax) => -0.4 - Math.max(0, -ax - 0.32) * 0.42;
  b.foreArmL.rotation.x = bend(z.armL.rotation.x); b.foreArmR.rotation.x = bend(z.armR.rotation.x); b.handL.rotation.x = 0.22; b.handR.rotation.x = 0.28;
  if (z.state === 'dying') { const k = Math.min(1, z.dieT / 0.55); b.foreArmL.rotation.x = -0.35 - k; b.foreArmR.rotation.x = -0.3 - k; } }
