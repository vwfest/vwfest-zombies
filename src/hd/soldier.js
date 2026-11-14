// Procedural co-op teammate. 100% original geo/textures. Faces -Z at yaw 0 (same as player look).
// Shared kit, skinned fatigues, rigid rounded gear, LOD, planted locomotion. No extra lights.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as skClone } from 'three/examples/jsm/utils/SkeletonUtils.js';

export const TEAM_COLS = [0x18ffb0, 0xffb347, 0x6bb8ff, 0xff6bd5];
const PAL = {
  camoA: '#9C8A6B', camoB: '#7A6A4F', camoC: '#5E5A3E', camoD: '#B8A887',
  gear: 0x6e5b40, helm: 0x8a7656, dark: 0x2b2a27, glove: 0x5c5a3c,
  boot: 0xa58c66, sole: 0x3a3128, gaiter: 0x4f5038, skin: 0xb98b6a,
  glass: 0x1e1f22, rifle: 0x1a1a1a, rail: 0x2a2a2a, strap: 0x3a3328
};

// ---- GLB kit (external WebP; procedural path stays the fallback) ----
const SBASE = 'assets/hd/soldier/';
const _sgl = new GLTFLoader();
_sgl.register((parser) => { parser.textureLoader = new THREE.TextureLoader(parser.options.manager); return { name: 'csp_img' }; });
export const SFILES = (hi) => [
  hi ? 'soldier.glb' : 'soldier_lo.glb',
  `soldier_diff_${hi ? 1024 : 512}.webp`,
  `soldier_nrm_${hi ? 1024 : 512}.webp`,
  `soldier_orm_${hi ? 1024 : 512}.webp`
];

let SKIT = null;
export function soldierKitLoaded() { return !!SKIT; }

export async function loadSoldierKit(hi) {
  const tl = new THREE.TextureLoader();
  const tex = (u, srgb) => tl.loadAsync(SBASE + u).then((t) => {
    t.flipY = false;
    t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    t.anisotropy = 4;
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; // atlas, not a tile
    t.needsUpdate = true;
    return t;
  });
  const sz = hi ? 1024 : 512;
  const [gltf, diff, nrm, orm] = await Promise.all([
    _sgl.loadAsync(SBASE + (hi ? 'soldier.glb' : 'soldier_lo.glb')),
    tex(`soldier_diff_${sz}.webp`, true),
    tex(`soldier_nrm_${sz}.webp`, false),
    tex(`soldier_orm_${sz}.webp`, false)
  ]);
  const bodyMat = new THREE.MeshStandardMaterial({
    map: diff, normalMap: nrm, roughnessMap: orm, metalnessMap: orm,
    roughness: 0.88, metalness: 0.05
  });
  // albedo already has a gentle AO multiply; do not also hook aoMap
  const rifleMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.45, metalness: 0.32 });
  gltf.scene.updateMatrixWorld(true);
  gltf.scene.traverse((o) => {
    if (!o.isMesh) return;
    const geo = o.geometry;
    if (geo && !geo.attributes.tangent && geo.attributes.uv && geo.index) {
      try { geo.computeTangents(); } catch (e) { /* bind-pose tangents optional */ }
    }
    const isRifle = /rifle/i.test(o.name);
    o.material = isRifle ? rifleMat : bodyMat;
    o.castShadow = true;
    o.receiveShadow = true;
    o.frustumCulled = false;
  });
  const clips = {};
  for (const c of gltf.animations || []) clips[c.name] = c;
  SKIT = { hi, scene: gltf.scene, clips, bodyMat, rifleMat };
  return SKIT;
}

const BONE_NAMES = ['root','hips','spine','chest','neck','head','clavL','upperL','lowerL','handL','clavR','upperR','lowerR','handR','thighL','calfL','footL','toeL','thighR','calfR','footR','toeR','weapon'];

function bindMap(root) {
  const map = {};
  root.traverse((o) => { if (o.isBone || BONE_NAMES.includes(o.name)) map[o.name] = o; });
  for (const n of BONE_NAMES) if (!map[n]) map[n] = root.getObjectByName(n);
  return map;
}

function createFromKit(name, teamIdx) {
  const team = ((teamIdx % 4) + 4) % 4, K = kit();
  const model = skClone(SKIT.scene);
  model.traverse((o) => {
    if (!o.isMesh) return;
    o.material = o.material.clone();
  });
  const map = bindMap(model);
  const mixer = new THREE.AnimationMixer(model);
  const acts = {};
  for (const [k, c] of Object.entries(SKIT.clips)) {
    if (!c || !c.tracks.length) continue;
    const a = mixer.clipAction(c);
    a.enabled = true;
    a.setEffectiveWeight(0);
    if (k === 'reload' || k === 'flinch' || k === 'aim') {
      a.setLoop(THREE.LoopOnce, 1);
      a.clampWhenFinished = true;
    } else {
      a.setLoop(THREE.LoopRepeat);
    }
    acts[k] = a;
  }
  if (acts.idle) { acts.idle.setEffectiveWeight(1); acts.idle.play(); }

  const g = new THREE.Group();
  const body = new THREE.Group();
  body.add(model);
  g.add(body);

  // Team ID band on the left upper arm (or chest if the bone is missing).
  const band = meshOf(rbox(0.05, 0.035, 0.01, 0.002), K.teams[team]);
  band.position.set(-0.075, 0.02, -0.06); band.castShadow = false;
  (map.upperL || map.clavL || map.chest || body).add(band);

  let rifle = null;
  model.traverse((o) => { if (o.isMesh && /rifle/i.test(o.name)) rifle = o; });

  const pistol = makePistol(K); pistol.visible = false;
  if (map.weapon) map.weapon.add(pistol);
  else body.add(pistol);
  const gun2 = makePistol(K); gun2.visible = false;
  if (map.handL) map.handL.add(gun2);

  const tag = makeNametag(name, team); g.add(tag);
  const talk = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: 0x18ffb0 }));
  talk.position.y = 2.45; talk.visible = false; g.add(talk);

  const mats = [];
  const seen = new Set();
  g.traverse((o) => {
    if (!o.isMesh || !o.material) return;
    const list = Array.isArray(o.material) ? o.material : [o.material];
    for (const m of list) if (!seen.has(m)) { seen.add(m); mats.push(m); }
  });

  g.userData = {
    body, gun: rifle, gun2, name, talk, gunId: '', map, mixer, acts, kit: true,
    weapons: { rifle, pistol }, mount: map.weapon || null, mats, tag,
    phase: 0, distAcc: 0, spd: 0, fwd: 0, strafe: 0, conn: true, stats: trisOf(g),
    lodFar: [band], lod: 0,
    recoilT: 0, reloadT: 0, flinchT: 0, plantL: null, plantR: null,
    lastMag: null, lastHp: null, clipW: { idle: 1, walk: 0, run: 0, strafe: 0 }
  };
  dressWeapon(g, 'rifle');
  poseSoldier(g, { dt: 0, t: 0, speed: 0, pitch: 0, down: false });
  return g;
}

function poseKitSoldier(g, { dt, speed, fwd, strafe, pitch, down, dist, recoil, reload, flinch }) {
  const U = g.userData, acts = U.acts || {};
  setSoldierLod(g, dist);
  const spd = Math.max(0, speed || 0);
  const moving = spd > 0.35;
  const runAmt = moving ? THREE.MathUtils.smoothstep(spd, 2.2, 4.2) : 0;
  let walkAmt = moving ? (1 - runAmt) : 0;
  const strafeDom = moving && !runAmt && Math.abs(strafe || 0) > Math.abs(fwd || 0) + 0.25;
  const strafeAmt = strafeDom ? Math.min(1, walkAmt) : 0;
  if (strafeAmt) walkAmt *= (1 - strafeAmt);
  const idleAmt = Math.max(0, 1 - walkAmt - runAmt - strafeAmt);
  const w = { idle: idleAmt, walk: walkAmt, run: runAmt, strafe: strafeAmt };
  const k = Math.min(1, (dt || 0.016) * 8);
  U.clipW = U.clipW || { idle: 1, walk: 0, run: 0, strafe: 0 };
  // Walk clip is 32f @ 24fps (1.33s). Scale playback to move speed so feet don't slide.
  const walkScale = THREE.MathUtils.clamp(spd * 1.333 / 0.62, 0.7, 2.4);
  const runScale = THREE.MathUtils.clamp(spd * 0.833 / 1.05, 0.8, 2.2);
  for (const name of ['idle', 'walk', 'run', 'strafe']) {
    const a = acts[name]; if (!a) continue;
    U.clipW[name] += (w[name] - U.clipW[name]) * k;
    const wt = U.clipW[name];
    if (wt > 0.02) {
      if (!a.isRunning()) a.play();
      a.setEffectiveWeight(wt);
      if (name === 'walk') a.setEffectiveTimeScale((fwd || 0) < -0.2 ? -walkScale : walkScale);
      else if (name === 'run') a.setEffectiveTimeScale((fwd || 0) < -0.2 ? -runScale : runScale);
      else if (name === 'strafe') a.setEffectiveTimeScale((strafe || 0) < 0 ? -1 : 1);
      else a.setEffectiveTimeScale(1);
    } else {
      a.setEffectiveWeight(0);
      if (a.isRunning()) a.stop();
    }
  }
  if (reload > 0 && acts.reload) { acts.reload.reset().setEffectiveWeight(1).play(); U.reloadT = acts.reload.getClip().duration; }
  if (flinch > 0 && acts.flinch) { acts.flinch.reset().setEffectiveWeight(1).play(); U.flinchT = acts.flinch.getClip().duration; }
  if (recoil > 0) U.recoilT = 1;
  if (U.reloadT > 0) U.reloadT = Math.max(0, U.reloadT - dt);
  if (U.flinchT > 0) U.flinchT = Math.max(0, U.flinchT - dt);
  const aimW = (!moving && Math.abs(pitch || 0) > 0.12) ? Math.min(1, Math.abs(pitch) * 1.2) : 0;
  if (acts.aim) {
    if (aimW > 0.05) { if (!acts.aim.isRunning()) acts.aim.play(); acts.aim.setEffectiveWeight(aimW); }
    else { acts.aim.setEffectiveWeight(0); if (acts.aim.isRunning() && acts.aim.weight === 0) acts.aim.stop(); }
  }
  U.mixer.update(dt || 0);
  // Pitch and recoil are applied after the mixer so they are not overwritten.
  if (U.map.chest) U.map.chest.rotateX(-(pitch || 0) * 0.65);
  if (U.map.head) U.map.head.rotateX(-(pitch || 0) * 0.35);
  if (U.recoilT > 0) {
    const kck = U.recoilT;
    if (U.map.weapon) U.map.weapon.rotateX(-kck * 0.35);
    if (U.map.chest) U.map.chest.rotateX(-kck * 0.08);
    U.recoilT = Math.max(0, U.recoilT - (dt || 0.016) * 6);
  }
  // Downed tilt is applied on userData.body by mp.js.
  void down;
}


function canvas(n, fn) {
  const c = document.createElement('canvas'); c.width = c.height = n; fn(c.getContext('2d'), n);
  const t = new THREE.CanvasTexture(c); t.anisotropy = 4; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.needsUpdate = true; return t;
}
const hex = (s) => { const n = s[0] === '#' ? s.slice(1) : s; return [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)]; };
const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const ss = (e0, e1, x) => { const t = Math.min(1, Math.max(0, (x - e0) / Math.max(1e-6, e1 - e0))); return t * t * (3 - 2 * t); };

function camoAlbedo() {
  const A = hex(PAL.camoA), B = hex(PAL.camoB), C = hex(PAL.camoC), D = hex(PAL.camoD);
  return canvas(512, (x, n) => {
    const img = x.createImageData(n, n), d = img.data;
    const blobs = [];
    for (let i = 0; i < 80; i++) blobs.push({ x: Math.random() * n, y: Math.random() * n, rx: 16 + Math.random() * 72, ry: 10 + Math.random() * 52, a: Math.random() * 6.28, c: [B, C, D, B, C][i % 5] });
    for (let y = 0; y < n; y++) for (let px = 0; px < n; px++) {
      const n1 = Math.sin(px * 0.033 + y * 0.021) * Math.cos(px * 0.018 - y * 0.029);
      let col = mix(A, B, 0.2 + 0.12 * n1);
      for (const b of blobs) {
        const dx = px - b.x, dy = y - b.y, ca = Math.cos(b.a), sa = Math.sin(b.a);
        const u = (dx * ca + dy * sa) / b.rx, v = (-dx * sa + dy * ca) / b.ry, k = u * u + v * v;
        if (k < 1) col = mix(col, b.c, (1 - k) * 0.5);
      }
      const grain = Math.sin(px * 1.7 + y * 2.1) * 2.5 + (Math.random() - 0.5) * 5;
      const i = (y * n + px) * 4;
      d[i] = Math.max(0, Math.min(255, col[0] + grain)); d[i + 1] = Math.max(0, Math.min(255, col[1] + grain * 0.9)); d[i + 2] = Math.max(0, Math.min(255, col[2] + grain * 0.7)); d[i + 3] = 255;
    }
    x.putImageData(img, 0, 0);
  });
}
function heightToNormal(n, h, str) {
  const c = document.createElement('canvas'); c.width = c.height = n; const x = c.getContext('2d'); const img = x.createImageData(n, n), d = img.data;
  const at = (ix, iy) => h[((iy + n) % n) * n + ((ix + n) % n)];
  for (let y = 0; y < n; y++) for (let px = 0; px < n; px++) {
    const dx = (at(px + 1, y) - at(px - 1, y)) * str, dy = (at(px, y + 1) - at(px, y - 1)) * str;
    let nx = -dx, ny = -dy, nz = 1, l = Math.hypot(nx, ny, nz) || 1;
    const i = (y * n + px) * 4; d[i] = nx / l * 127 + 128; d[i + 1] = ny / l * 127 + 128; d[i + 2] = nz / l * 127 + 128; d[i + 3] = 255;
  }
  x.putImageData(img, 0, 0); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.NoColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4; return t;
}
function fabricMaps() {
  const n = 512, h = new Float32Array(n * n);
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    const weave = ((x % 4 < 2) ? 0.4 : 0) + ((y % 4 < 2) ? 0.25 : 0);
    const fold = Math.sin(x * 0.038 + Math.sin(y * 0.028) * 2) * 0.5 + Math.sin(y * 0.065 + x * 0.02) * 0.32;
    h[y * n + x] = weave * 0.4 + fold;
  }
  return { nor: heightToNormal(n, h, 1.8), rough: (() => { const t = canvas(256, (x, n) => { const img = x.createImageData(n, n), d = img.data; for (let i = 0; i < n * n; i++) { const v = 195 + (Math.random() * 45 | 0); d[i * 4] = d[i * 4 + 1] = v; d[i * 4 + 2] = 170; d[i * 4 + 3] = 255; } x.putImageData(img, 0, 0); }); t.colorSpace = THREE.NoColorSpace; return t; })() };
}
function leatherMaps() {
  const n = 256, h = new Float32Array(n * n);
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) h[y * n + x] = Math.sin(x * 0.2) * 0.15 + Math.sin(y * 0.31 + x * 0.07) * 0.2 + Math.random() * 0.25;
  return heightToNormal(n, h, 2.2);
}
function metalMaps() {
  const n = 256, h = new Float32Array(n * n);
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) h[y * n + x] = ((x + y * 3) % 9 < 1 ? 0.6 : 0) + Math.random() * 0.15;
  return heightToNormal(n, h, 1.4);
}

let KIT;
function kit() {
  if (KIT) return KIT;
  const albedo = camoAlbedo(); albedo.colorSpace = THREE.SRGBColorSpace;
  const { nor, rough } = fabricMaps(); const leatherN = leatherMaps(); const metalN = metalMaps();
  const fabric = new THREE.MeshStandardMaterial({ map: albedo, normalMap: nor, normalScale: new THREE.Vector2(0.55, 0.55), roughnessMap: rough, roughness: 0.9, metalness: 0, vertexColors: true, color: 0xffffff });
  const gaiter = new THREE.MeshStandardMaterial({ color: PAL.gaiter, roughness: 0.92, metalness: 0, normalMap: nor, normalScale: new THREE.Vector2(0.3, 0.3) });
  const gear = new THREE.MeshStandardMaterial({ color: PAL.gear, roughness: 0.88, metalness: 0, normalMap: nor, normalScale: new THREE.Vector2(0.85, 0.85), vertexColors: true });
  const helm = new THREE.MeshStandardMaterial({ map: albedo, color: 0xc4b28a, roughness: 0.78, metalness: 0, normalMap: nor, normalScale: new THREE.Vector2(0.55, 0.55) });
  const dark = new THREE.MeshStandardMaterial({ color: PAL.dark, roughness: 0.55, metalness: 0.12, normalMap: metalN, normalScale: new THREE.Vector2(0.3, 0.3) });
  const glove = new THREE.MeshStandardMaterial({ color: PAL.glove, roughness: 0.86, metalness: 0, normalMap: leatherN, normalScale: new THREE.Vector2(0.4, 0.4) });
  const boot = new THREE.MeshStandardMaterial({ color: PAL.boot, roughness: 0.9, metalness: 0, normalMap: leatherN, normalScale: new THREE.Vector2(0.7, 0.7) });
  const sole = new THREE.MeshStandardMaterial({ color: PAL.sole, roughness: 0.96, metalness: 0 });
  const skin = new THREE.MeshStandardMaterial({ color: PAL.skin, roughness: 0.62, metalness: 0 });
  const glass = new THREE.MeshStandardMaterial({ color: PAL.glass, roughness: 0.12, metalness: 0.45, side: THREE.DoubleSide });
  const rifle = new THREE.MeshStandardMaterial({ color: PAL.rifle, roughness: 0.45, metalness: 0.32, normalMap: metalN, normalScale: new THREE.Vector2(0.35, 0.35) });
  const rail = new THREE.MeshStandardMaterial({ color: PAL.rail, roughness: 0.4, metalness: 0.38, normalMap: metalN, normalScale: new THREE.Vector2(0.4, 0.4) });
  const strap = new THREE.MeshStandardMaterial({ color: PAL.strap, roughness: 0.85, metalness: 0 });
  const teams = TEAM_COLS.map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.55, metalness: 0, emissive: c, emissiveIntensity: 0.12 }));
  KIT = { fabric, gaiter, gear, helm, dark, glove, boot, sole, skin, glass, rifle, rail, strap, teams };
  return KIT;
}

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3();
function bake(geo, x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  const g = geo.clone(); _p.set(x, y, z); _e.set(rx, ry, rz); _q.setFromEuler(_e); _s.set(sx, sy, sz);
  g.applyMatrix4(_m.compose(_p, _q, _s)); return g;
}
function rbox(w, h, d, r = 0.01) { return new RoundedBoxGeometry(w, h, d, 1, r); }
function boxG(w, h, d) { return new THREE.BoxGeometry(w, h, d); }
function cylG(rt, rb, h, seg = 10) { return new THREE.CylinderGeometry(rt, rb, h, seg, 1, false); }
function prep(g) {
  if (!g) return g;
  for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv', 'color', 'skinIndex', 'skinWeight'].includes(k)) g.deleteAttribute(k);
  if (!g.attributes.normal) g.computeVertexNormals();
  if (!g.attributes.uv) { const n = g.attributes.position.count, uv = new Float32Array(n * 2); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); }
  if (!g.index) { const n = g.attributes.position.count, idx = n < 65536 ? new Uint16Array(n) : new Uint32Array(n); for (let i = 0; i < n; i++) idx[i] = i; g.setIndex(new THREE.BufferAttribute(idx, 1)); }
  return g;
}
function merge(geos) { const g = mergeGeometries(geos.filter(Boolean).map(prep), false); if (!g) throw new Error('mergeGeometries failed'); return g; }
function meshOf(geo, mat) { const m = new THREE.Mesh(geo, mat); m.castShadow = true; m.receiveShadow = true; return m; }
function paint(geo, ao) {
  const n = geo.attributes.position.count, col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = ao; }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); return geo;
}
function assemble(geos, mat) { const g = merge(geos.map((x) => x.attributes && x.attributes.color ? x : paint(x, 0.85))); return meshOf(g, mat); }

function skinTube(ax, ay, az, bx, by, bz, r0, r1, i0, i1, { segs = 10, rings = 6, bulge = 0, ao0 = 1, ao1 = 1, dust = 0, uvS = 1.6, flare0 = 0, flare1 = 0 } = {}) {
  const dx = bx - ax, dy = by - ay, dz = bz - az, len = Math.hypot(dx, dy, dz) || 1;
  const fx = dx / len, fy = dy / len, fz = dz / len;
  let px = 0, py = 1, pz = 0; if (Math.abs(fy) > 0.9) { px = 1; py = 0; }
  let sx = py * fz - pz * fy, sy = pz * fx - px * fz, sz = px * fy - py * fx, sl = Math.hypot(sx, sy, sz) || 1; sx /= sl; sy /= sl; sz /= sl;
  let tx = fy * sz - fz * sy, ty = fz * sx - fx * sz, tz = fx * sy - fy * sx;
  const pos = [], nrm = [], uv = [], col = [], si = [], sw = [], idx = [], cols = segs + 1;
  for (let r = 0; r <= rings; r++) {
    const t = r / rings, k = ss(0.28, 0.78, t);
    const rad = (r0 + (r1 - r0) * t + Math.sin(t * Math.PI) * bulge) * (t < 0.12 ? 1 + flare0 * (1 - t / 0.12) : t > 0.88 ? 1 + flare1 * ((t - 0.88) / 0.12) : 1);
    const ao = ao0 + (ao1 - ao0) * t, dustK = dust * ss(0.55, 1, t);
    const cr = Math.min(1, ao * (1 + dustK * 0.22)), cg = Math.min(1, ao * (1 + dustK * 0.16)), cb = Math.min(1, ao * (1 - dustK * 0.04));
    const px0 = ax + dx * t, py0 = ay + dy * t, pz0 = az + dz * t;
    for (let s = 0; s <= segs; s++) {
      const a = s / segs * Math.PI * 2, ca = Math.cos(a), sa = Math.sin(a);
      const nx = sx * ca + tx * sa, ny = sy * ca + ty * sa, nz = sz * ca + tz * sa;
      pos.push(px0 + nx * rad, py0 + ny * rad, pz0 + nz * rad);
      nrm.push(nx, ny, nz); uv.push(s / segs * uvS, t * len * uvS); col.push(cr, cg, cb);
      si.push(i0, i1, 0, 0); sw.push(1 - k, k, 0, 0);
    }
  }
  for (let r = 0; r < rings; r++) for (let s = 0; s < segs; s++) { const a = r * cols + s, b = a + 1, c = a + cols, d = c + 1; idx.push(a, c, b, b, c, d); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4));
  g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));
  g.setIndex(idx); return g;
}

// Bind joints. Helmet top ~1.85 m. Neck is short (hidden by gaiter + collar).
const JW = {
  root: [0, 0, 0], hips: [0, 0.94, 0], spine: [0, 1.12, 0.015], chest: [0, 1.34, 0.01],
  neck: [0, 1.50, 0.025], head: [0, 1.58, 0.03],
  clavL: [-0.08, 1.47, 0.02], clavR: [0.08, 1.47, 0.02],
  upperL: [-0.24, 1.46, 0.02], upperR: [0.24, 1.46, 0.02],
  lowerL: [-0.52, 1.46, 0.02], lowerR: [0.52, 1.46, 0.02],
  handL: [-0.76, 1.46, 0.02], handR: [0.76, 1.46, 0.02],
  thighL: [-0.10, 0.94, 0], thighR: [0.10, 0.94, 0],
  calfL: [-0.105, 0.50, 0], calfR: [0.105, 0.50, 0],
  footL: [-0.105, 0.08, 0.03], footR: [0.105, 0.08, 0.03]
};
const BONES = ['root', 'hips', 'spine', 'chest', 'neck', 'head', 'clavL', 'upperL', 'lowerL', 'handL', 'clavR', 'upperR', 'lowerR', 'handR', 'thighL', 'calfL', 'footL', 'thighR', 'calfR', 'footR'];
const PARENT = { hips: 'root', spine: 'hips', chest: 'spine', neck: 'chest', head: 'neck', clavL: 'chest', upperL: 'clavL', lowerL: 'upperL', handL: 'lowerL', clavR: 'chest', upperR: 'clavR', lowerR: 'upperR', handR: 'lowerR', thighL: 'hips', calfL: 'thighL', footL: 'calfL', thighR: 'hips', calfR: 'thighR', footR: 'calfR' };

function makeSkeleton() {
  const map = {}, list = [];
  for (const n of BONES) { const b = new THREE.Bone(); b.name = n; map[n] = b; list.push(b); }
  for (const n of BONES) {
    if (n === 'root') continue;
    const pw = JW[PARENT[n]], w = JW[n];
    map[n].position.set(w[0] - pw[0], w[1] - pw[1], w[2] - pw[2]);
    map[PARENT[n]].add(map[n]);
  }
  return { map, list, skel: new THREE.Skeleton(list) };
}

function bodyGeo(idx) {
  const P = JW, I = idx, parts = [];
  parts.push(skinTube(P.hips[0], P.hips[1] - 0.07, P.hips[2], P.spine[0], P.spine[1], P.spine[2], 0.155, 0.15, I.hips, I.spine, { segs: 12, rings: 5, bulge: 0.018, ao0: 0.74, ao1: 0.9 }));
  parts.push(skinTube(P.spine[0], P.spine[1], P.spine[2], P.chest[0], P.chest[1] + 0.05, P.chest[2], 0.15, 0.19, I.spine, I.chest, { segs: 12, rings: 6, bulge: 0.025, ao0: 0.9, ao1: 0.96 }));
  parts.push(skinTube(P.chest[0], P.chest[1] + 0.04, P.chest[2], P.neck[0], P.neck[1] - 0.01, P.neck[2], 0.175, 0.095, I.chest, I.neck, { segs: 12, rings: 4, ao0: 0.95, ao1: 0.82 }));
  parts.push(skinTube(P.upperL[0] + 0.05, P.upperL[1] + 0.01, P.upperL[2], P.upperL[0] - 0.05, P.upperL[1] - 0.02, P.upperL[2], 0.09, 0.072, I.clavL, I.upperL, { segs: 10, rings: 4, bulge: 0.022, ao0: 0.86, ao1: 0.9 }));
  parts.push(skinTube(P.upperR[0] - 0.05, P.upperR[1] + 0.01, P.upperR[2], P.upperR[0] + 0.05, P.upperR[1] - 0.02, P.upperR[2], 0.09, 0.072, I.clavR, I.upperR, { segs: 10, rings: 4, bulge: 0.022, ao0: 0.86, ao1: 0.9 }));
  parts.push(skinTube(P.upperL[0], P.upperL[1], P.upperL[2], P.lowerL[0], P.lowerL[1], P.lowerL[2], 0.072, 0.06, I.upperL, I.lowerL, { segs: 10, rings: 5, bulge: 0.014, ao0: 0.9, ao1: 0.86 }));
  parts.push(skinTube(P.upperR[0], P.upperR[1], P.upperR[2], P.lowerR[0], P.lowerR[1], P.lowerR[2], 0.072, 0.06, I.upperR, I.lowerR, { segs: 10, rings: 5, bulge: 0.014, ao0: 0.9, ao1: 0.86 }));
  parts.push(skinTube(P.lowerL[0], P.lowerL[1], P.lowerL[2], P.handL[0] + 0.035, P.handL[1], P.handL[2], 0.056, 0.05, I.lowerL, I.handL, { segs: 10, rings: 5, flare1: 0.4, ao0: 0.86, ao1: 0.8 }));
  parts.push(skinTube(P.lowerR[0], P.lowerR[1], P.lowerR[2], P.handR[0] - 0.035, P.handR[1], P.handR[2], 0.056, 0.05, I.lowerR, I.handR, { segs: 10, rings: 5, flare1: 0.4, ao0: 0.86, ao1: 0.8 }));
  parts.push(skinTube(P.thighL[0], P.thighL[1] + 0.02, P.thighL[2], P.calfL[0], P.calfL[1] + 0.05, P.calfL[2], 0.10, 0.078, I.thighL, I.calfL, { segs: 12, rings: 6, bulge: 0.022, ao0: 0.8, ao1: 0.9, dust: 0.12 }));
  parts.push(skinTube(P.thighR[0], P.thighR[1] + 0.02, P.thighR[2], P.calfR[0], P.calfR[1] + 0.05, P.calfR[2], 0.10, 0.078, I.thighR, I.calfR, { segs: 12, rings: 6, bulge: 0.022, ao0: 0.8, ao1: 0.9, dust: 0.12 }));
  parts.push(skinTube(P.calfL[0], P.calfL[1] + 0.05, P.calfL[2], P.footL[0], P.footL[1] + 0.13, P.footL[2], 0.076, 0.055, I.calfL, I.footL, { segs: 10, rings: 6, bulge: 0.014, flare0: 0.22, ao0: 0.9, ao1: 0.86, dust: 0.7 }));
  parts.push(skinTube(P.calfR[0], P.calfR[1] + 0.05, P.calfR[2], P.footR[0], P.footR[1] + 0.13, P.footR[2], 0.076, 0.055, I.calfR, I.footR, { segs: 10, rings: 6, bulge: 0.014, flare0: 0.22, ao0: 0.9, ao1: 0.86, dust: 0.7 }));
  // cargo pockets, 100% thigh
  for (const [side, iTh] of [[-1, idx.thighL], [1, idx.thighR]]) {
    const g = paint(bake(rbox(0.085, 0.12, 0.06, 0.012), side * 0.175, 0.70, 0.03, 0.12, 0, side * 0.1), 0.82);
    const n = g.attributes.position.count, si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
    for (let i = 0; i < n; i++) { si[i * 4] = iTh; sw[i * 4] = 1; }
    g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4));
    g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));
    parts.push(g);
  }
  return merge(parts);
}

function makeHelmet(K, team) {
  // High-cut dome (lathe), NVG shroud, rails, ear-pro, team band, chin strap. Merged by material.
  const pts = [
    new THREE.Vector2(0.10, 0.02),
    new THREE.Vector2(0.12, 0.015),
    new THREE.Vector2(0.138, 0.03),
    new THREE.Vector2(0.142, 0.07),
    new THREE.Vector2(0.135, 0.13),
    new THREE.Vector2(0.11, 0.18),
    new THREE.Vector2(0.06, 0.205),
    new THREE.Vector2(0.00, 0.20)
  ];
  const dome = new THREE.LatheGeometry(pts, 16);
  const helmGeos = [
    bake(dome, 0, 0.0, 0.01),
    bake(rbox(0.20, 0.045, 0.09, 0.012), 0, 0.03, 0.10, 0.35, 0, 0) // nape / counterweight
  ];
  const darkGeos = [
    bake(rbox(0.06, 0.038, 0.045, 0.006), 0, 0.13, -0.12, -0.3, 0, 0), // NVG shroud
    bake(rbox(0.045, 0.028, 0.032, 0.004), 0, 0.15, -0.145, -0.45, 0, 0),
    bake(cylG(0.019, 0.017, 0.075, 8), -0.022, 0.185, -0.08, 1.15, 0, 0), // NVG tubes stowed up
    bake(cylG(0.019, 0.017, 0.075, 8), 0.022, 0.185, -0.08, 1.15, 0, 0),
    bake(rbox(0.072, 0.03, 0.032, 0.004), 0, 0.175, -0.05, -0.9, 0, 0),
    bake(rbox(0.018, 0.05, 0.13, 0.004), -0.135, 0.08, 0.0), // rails
    bake(rbox(0.018, 0.05, 0.13, 0.004), 0.135, 0.08, 0.0),
    bake(new THREE.SphereGeometry(0.055, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.75), -0.155, 0.05, 0.01, 0, 0, 0, 0.72, 1, 0.92),
    bake(new THREE.SphereGeometry(0.055, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.75), 0.155, 0.05, 0.01, 0, 0, 0, 0.72, 1, 0.92),
    bake(rbox(0.016, 0.10, 0.012, 0.003), -0.09, -0.02, 0.0, 0, 0, 0.45),
    bake(rbox(0.016, 0.10, 0.012, 0.003), 0.09, -0.02, 0.0, 0, 0, -0.45),
    bake(rbox(0.15, 0.012, 0.012, 0.003), 0, -0.07, 0.02)
  ];
  const g = new THREE.Group();
  g.add(assemble(helmGeos, K.helm));
  g.add(assemble(darkGeos, K.dark));
  // Team ID: small back-of-helmet patch only (a full ring reads as a glowing visor).
  const band = meshOf(rbox(0.055, 0.03, 0.01, 0.003), K.teams[team]);
  band.position.set(0, 0.10, 0.145); band.castShadow = false; g.add(band);
  return g;
}

function makeHead(K) {
  const g = new THREE.Group();
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.105, 12, 10), K.skin);
  skull.scale.set(0.96, 1.02, 0.98); skull.position.set(0, 0.07, 0.0); skull.castShadow = true; g.add(skull);
  // gaiter covers neck + lower face, bunched
  const gait = assemble([
    bake(new THREE.CylinderGeometry(0.09, 0.10, 0.14, 12, 1, true), 0, -0.01, 0.015),
    bake(new THREE.SphereGeometry(0.102, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.62), 0, 0.06, 0.02, 0, 0, 0, 1.04, 0.85, 1.1)
  ], K.gaiter);
  g.add(gait);
  // glasses: dark lenses + frame
  const lenses = assemble([
    bake(new THREE.CircleGeometry(0.036, 12), -0.04, 0.105, -0.112, 0, Math.PI, 0),
    bake(new THREE.CircleGeometry(0.036, 12), 0.04, 0.105, -0.112, 0, Math.PI, 0)
  ], K.glass);
  g.add(lenses);
  g.add(assemble([
    bake(rbox(0.032, 0.012, 0.012, 0.002), 0, 0.105, -0.112),
    bake(rbox(0.06, 0.012, 0.012, 0.002), -0.075, 0.10, -0.05, 0, 0.9, 0),
    bake(rbox(0.06, 0.012, 0.012, 0.002), 0.075, 0.10, -0.05, 0, -0.9, 0),
    bake(new THREE.SphereGeometry(0.012, 8, 6), -0.032, 0.105, -0.10),
    bake(new THREE.SphereGeometry(0.012, 8, 6), 0.032, 0.105, -0.10)
  ], K.dark));
  return g;
}

function makeCarrier(K, team) {
  // Wraps the torso; 3 front mags; cummerbund; pack; straps. One gear mesh + small team tab.
  const wrap = [
    paint(bake(rbox(0.30, 0.34, 0.09, 0.02), 0, 0.02, -0.145), 0.72),           // front plate
    paint(bake(rbox(0.30, 0.32, 0.08, 0.02), 0, 0.03, 0.145), 0.68),            // back plate
    paint(bake(rbox(0.075, 0.06, 0.24, 0.012), -0.125, 0.19, 0.0, 0.18, 0, 0), 0.74),
    paint(bake(rbox(0.075, 0.06, 0.24, 0.012), 0.125, 0.19, 0.0, 0.18, 0, 0), 0.74),
    paint(bake(rbox(0.09, 0.18, 0.24, 0.016), -0.195, -0.02, 0.0), 0.7),         // cummerbund
    paint(bake(rbox(0.09, 0.18, 0.24, 0.016), 0.195, -0.02, 0.0), 0.7),
    paint(bake(rbox(0.24, 0.20, 0.09, 0.016), 0, 0.04, 0.21), 0.7),              // hydration pack
    paint(bake(rbox(0.18, 0.11, 0.08, 0.014), 0, -0.12, 0.17), 0.72),
    paint(bake(rbox(0.34, 0.045, 0.24, 0.01), 0, -0.18, 0.0), 0.7)               // belt
  ];
  // 3 mag pouches + radio + admin + side + mid
  const mags = [-0.085, 0, 0.085].map((x) => paint(bake(rbox(0.078, 0.15, 0.075, 0.01), x, -0.02, -0.195), 0.8));
  const extras = [
    paint(bake(rbox(0.12, 0.07, 0.055, 0.01), 0, 0.13, -0.195), 0.78),
    paint(bake(rbox(0.065, 0.11, 0.055, 0.01), -0.13, 0.08, -0.195), 0.76),
    paint(bake(rbox(0.075, 0.11, 0.08, 0.01), 0.23, 0.0, -0.07), 0.76),
    paint(bake(rbox(0.085, 0.11, 0.065, 0.01), -0.13, -0.22, -0.10), 0.76)
  ];
  const g = new THREE.Group();
  g.add(assemble([...wrap, ...mags, ...extras], K.gear));
  g.add(assemble([
    bake(rbox(0.06, 0.02, 0.05, 0.003), -0.085, 0.05, -0.21),
    bake(rbox(0.06, 0.02, 0.05, 0.003), 0, 0.05, -0.21),
    bake(rbox(0.06, 0.02, 0.05, 0.003), 0.085, 0.05, -0.21),
    bake(cylG(0.006, 0.004, 0.16, 6), -0.13, 0.20, -0.195)
  ], K.dark));
  const tab = meshOf(rbox(0.05, 0.04, 0.01, 0.002), K.teams[team]); tab.position.set(-0.17, 0.15, -0.155); tab.castShadow = false; g.add(tab);
  return g;
}

function makeBoot(K) {
  const g = new THREE.Group();
  g.add(assemble([
    bake(rbox(0.115, 0.125, 0.15, 0.02), 0, 0.085, 0.02),
    bake(rbox(0.11, 0.07, 0.09, 0.02), 0, 0.055, -0.09)
  ], K.boot));
  g.add(assemble([
    bake(rbox(0.12, 0.038, 0.25, 0.012), 0, 0.018, -0.02),
    bake(rbox(0.112, 0.04, 0.07, 0.01), 0, 0.03, 0.085)
  ], K.sole));
  return g;
}

function makeKnee(K) {
  return assemble([
    paint(bake(rbox(0.11, 0.13, 0.065, 0.02), 0, 0, -0.08), 0.82),
    paint(bake(rbox(0.09, 0.075, 0.045, 0.016), 0, 0.01, -0.11, 0.35, 0, 0), 0.85)
  ], K.gear);
}

function makeHolster(K) {
  const g = new THREE.Group();
  g.add(assemble([
    paint(bake(rbox(0.075, 0.17, 0.085, 0.014), 0.09, 0, 0), 0.8),
    paint(bake(rbox(0.022, 0.2, 0.022, 0.006), 0.04, 0.08, 0), 0.75)
  ], K.gear));
  g.add(meshOf(bake(rbox(0.032, 0.12, 0.055, 0.008), 0.09, 0.0, -0.01), K.rifle));
  return g;
}

function makeGlove(K, side) {
  return assemble([
    bake(rbox(0.06, 0.038, 0.095, 0.014), 0, 0, -0.02),
    bake(rbox(0.028, 0.028, 0.06, 0.01), side * 0.042, 0.012, -0.01, 0, side * 0.5, 0.4),
    bake(rbox(0.05, 0.02, 0.05, 0.008), 0, 0.012, -0.07)
  ], K.glove);
}

function makeRifle(K) {
  // 0.85 m carbine, origin at pistol grip, barrel along -Z, up +Y.
  const M = K.rifle, R = K.rail;
  const rec = assemble([
    bake(rbox(0.048, 0.058, 0.24, 0.006), 0, 0.032, -0.05),
    bake(rbox(0.032, 0.095, 0.042, 0.006), 0, -0.03, 0.02),       // pistol grip
    bake(rbox(0.03, 0.13, 0.045, 0.006), 0, -0.04, -0.08),        // mag
    bake(rbox(0.036, 0.07, 0.20, 0.006), 0, 0.03, 0.17),          // stock
    bake(rbox(0.055, 0.095, 0.032, 0.006), 0, 0.02, 0.28),        // butt
    bake(cylG(0.013, 0.012, 0.30, 8), 0, 0.032, -0.50, Math.PI / 2, 0, 0) // barrel
  ], M);
  const rails = assemble([
    bake(rbox(0.04, 0.042, 0.23, 0.004), 0, 0.026, -0.26),        // handguard
    bake(rbox(0.022, 0.026, 0.18, 0.003), 0, 0.058, -0.04),       // top rail
    bake(rbox(0.028, 0.042, 0.085, 0.004), 0, 0.09, -0.02),       // optic
    bake(cylG(0.017, 0.017, 0.055, 8), 0, 0.105, -0.02, Math.PI / 2, 0, 0),
    bake(cylG(0.017, 0.015, 0.045, 8), 0, 0.032, -0.66, Math.PI / 2, 0, 0) // muzzle
  ], R);
  const g = new THREE.Group(); g.add(rec, rails);
  const grip = new THREE.Object3D(); grip.position.set(0.0, -0.02, 0.02); g.add(grip);
  const guard = new THREE.Object3D(); guard.position.set(-0.01, 0.0, -0.28); g.add(guard);
  g.add(meshOf(bake(rbox(0.012, 0.012, 0.38, 0.003), 0.03, -0.02, -0.04, 0.35, 0, 0), K.strap));
  g.userData = { grip, guard, length: 0.85 };
  return g;
}

function makePistol(K) {
  const g = new THREE.Group();
  g.add(assemble([
    bake(rbox(0.032, 0.085, 0.042, 0.005), 0, -0.03, 0.0),
    bake(rbox(0.03, 0.036, 0.17, 0.004), 0, 0.02, -0.05),
    bake(cylG(0.008, 0.008, 0.04, 6), 0, 0.02, -0.15, Math.PI / 2, 0, 0)
  ], K.rifle));
  const grip = new THREE.Object3D(); grip.position.set(0, -0.02, 0); g.add(grip);
  g.userData = { grip, guard: grip, length: 0.22 };
  return g;
}

function makeLong(K, kind) {
  if (kind === 'pistol') return makePistol(K);
  const g = makeRifle(K);
  if (kind === 'shotgun') g.scale.set(1.05, 1.05, 1.12);
  else if (kind === 'sawed') g.scale.set(1.05, 1.05, 0.7);
  else if (kind === 'smg') g.scale.setScalar(0.85);
  else if (kind === 'lmg') g.scale.set(1.15, 1.15, 1.15);
  else if (kind === 'lever') g.scale.set(1, 1, 1.15);
  else if (kind === 'nailer') g.scale.set(0.9, 1.1, 0.72);
  return g;
}

function makeNametag(name, team) {
  const cv = document.createElement('canvas'); cv.width = 256; cv.height = 64;
  const c2 = cv.getContext('2d'); c2.font = '800 34px system-ui,sans-serif'; c2.textAlign = 'center';
  c2.fillStyle = '#' + TEAM_COLS[team % 4].toString(16).padStart(6, '0'); c2.fillText(name, 128, 44);
  const tag = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false }));
  tag.scale.set(1.2, 0.3, 1); tag.position.y = 2.2; return tag;
}

function cloneMats(root) {
  const map = new Map(); const cl = (m) => { if (!map.has(m)) map.set(m, m.clone()); return map.get(m); };
  root.traverse((o) => { if (o.isMesh) o.material = Array.isArray(o.material) ? o.material.map(cl) : cl(o.material); });
  return [...map.values()];
}
function trisOf(root) {
  const seen = new Set(); let n = 0, m = 0, vis = 0;
  root.traverse((o) => { if (!o.isMesh) return; m++; if (o.visible) vis++; const g = o.geometry; if (seen.has(g.uuid)) return; seen.add(g.uuid); n += (g.index ? g.index.count : g.attributes.position.count) / 3; });
  return { meshes: m, visible: vis, tris: Math.round(n) };
}

let SHARED_BODY;
function sharedBody(idx) { return SHARED_BODY || (SHARED_BODY = bodyGeo(idx)); }

export function createSoldier(name, teamIdx) {
  if (SKIT) return createFromKit(name, teamIdx);
  return createProceduralSoldier(name, teamIdx);
}

function createProceduralSoldier(name, teamIdx) {
  const team = ((teamIdx % 4) + 4) % 4, K = kit();
  const g = new THREE.Group();
  const body = new THREE.Group(); g.add(body);
  const { map, list, skel } = makeSkeleton();
  const idx = {}; list.forEach((b, i) => { idx[b.name] = i; });
  const skin = new THREE.SkinnedMesh(sharedBody(idx), K.fabric);
  skin.castShadow = true; skin.receiveShadow = true;
  skin.add(map.root); skin.bind(skel); body.add(skin);

  const head = makeHead(K); map.head.add(head);
  const helm = makeHelmet(K, team); helm.position.set(0, 0.02, 0); map.head.add(helm);
  const vest = makeCarrier(K, team); map.chest.add(vest);
  map.footL.add(makeBoot(K)); map.footR.add(makeBoot(K));
  const kneeL = makeKnee(K), kneeR = makeKnee(K);
  kneeL.position.set(0, 0.36, 0); kneeR.position.set(0, 0.36, 0);
  map.calfL.add(kneeL); map.calfR.add(kneeR);
  const holster = makeHolster(K); map.thighR.add(holster);
  map.handL.add(makeGlove(K, -1)); map.handR.add(makeGlove(K, 1));
  const band = meshOf(rbox(0.05, 0.035, 0.01, 0.002), K.teams[team]);
  band.position.set(-0.075, 0.02, -0.06); band.castShadow = false; map.upperL.add(band);

  // Weapon mount lives on the chest so both hands can IK to it (low-ready / aim).
  const mount = new THREE.Group(); mount.position.set(0.12, -0.06, -0.10); map.chest.add(mount);
  const weapons = { rifle: makeRifle(K), pistol: makePistol(K) };
  for (const w of Object.values(weapons)) { w.visible = false; mount.add(w); }
  const gun2 = makePistol(K); gun2.visible = false; map.handL.add(gun2);

  const tag = makeNametag(name, team); g.add(tag);
  const talk = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: 0x18ffb0 }));
  talk.position.y = 2.45; talk.visible = false; g.add(talk);

  const lodFar = [holster, kneeL, kneeR, band, head]; // hidden at long range; helmet/vest/rifle stay
  const mats = cloneMats(g);
  g.userData = {
    body, gun: weapons.rifle, gun2, name, talk, gunId: '', map, skel, skin, weapons, mount, mats, tag,
    phase: 0, distAcc: 0, spd: 0, fwd: 0, strafe: 0, conn: true, stats: trisOf(g),
    bindHips: map.hips.position.y, lodFar, lod: 0,
    recoilT: 0, reloadT: 0, flinchT: 0, plantL: null, plantR: null,
    lastMag: null, lastHp: null
  };
  dressWeapon(g, 'rifle');
  poseSoldier(g, { dt: 0, t: 0, speed: 0, pitch: 0, down: false });
  return g;
}

const LONG_SCALE = { rifle: [1, 1, 1], smg: [0.85, 0.85, 0.85], shotgun: [1.05, 1.05, 1.12], sawed: [1.05, 1.05, 0.7], lmg: [1.15, 1.15, 1.15], lever: [1, 1, 1.15], nailer: [0.9, 1.1, 0.72] };
export function dressWeapon(g, id) {
  const W = g.userData.weapons || {};
  const akimbo = id === 'akimbo';
  const show = (id === 'pistol' || akimbo) ? 'pistol' : 'rifle';
  const key = akimbo ? 'akimbo' : (id === 'pistol' ? 'pistol' : (LONG_SCALE[id] ? id : 'rifle'));
  if (g.userData.gunId === key) { if (g.userData.gun2) g.userData.gun2.visible = akimbo; return; }
  g.userData.gunId = key;
  if (W.rifle) W.rifle.visible = show === 'rifle';
  if (W.pistol) W.pistol.visible = show === 'pistol';
  if (show === 'rifle' && W.rifle) { const s = LONG_SCALE[key] || LONG_SCALE.rifle; W.rifle.scale.set(s[0], s[1], s[2]); }
  g.userData.gun = W[show];
  if (g.userData.gun2) g.userData.gun2.visible = akimbo;
}

export function setConnected(g, on) {
  if (g.userData.conn === !!on) return;
  g.userData.conn = !!on;
  const op = on ? 1 : 0.4;
  for (const m of g.userData.mats) { m.transparent = !on; m.opacity = op; m.depthWrite = !!on; }
  if (g.userData.tag && g.userData.tag.material) g.userData.tag.material.opacity = on ? 1 : 0.4;
}

export function setSoldierLod(g, dist) {
  const lod = dist > 12 ? 2 : dist > 5 ? 1 : 0;
  if (g.userData.lod === lod) return;
  g.userData.lod = lod;
  const hi = lod < 2;
  for (const o of g.userData.lodFar || []) o.visible = hi;
}

// ---- animation ----
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3(), _d = new THREE.Vector3();
const _inv = new THREE.Matrix4(), _q2 = new THREE.Quaternion();
const HINT_L = new THREE.Vector3(-1, 0, 0), HINT_R = new THREE.Vector3(1, 0, 0), HINT_LEG = new THREE.Vector3(0, -1, 0);

function lookAlong(bone, fromW, toW, bindAxis) {
  const parent = bone.parent; parent.updateWorldMatrix(true, false);
  _inv.copy(parent.matrixWorld).invert();
  _a.copy(fromW).applyMatrix4(_inv); _b.copy(toW).applyMatrix4(_inv).sub(_a);
  if (_b.lengthSq() < 1e-8) return;
  _b.normalize();
  bone.quaternion.copy(_q2.setFromUnitVectors(bindAxis, _b));
}

function ik2(upper, lower, targetW, poleW, l1, l2, hint) {
  upper.parent.updateWorldMatrix(true, false);
  const p0 = _a.setFromMatrixPosition(upper.matrixWorld);
  _b.copy(targetW).sub(p0);
  let d = _b.length(); d = Math.max(0.05, Math.min(l1 + l2 - 0.012, d));
  _b.normalize();
  _c.copy(poleW).sub(p0);
  const axis = _d.crossVectors(_b, _c);
  if (axis.lengthSq() < 1e-8) axis.set(0, 0, 1); axis.normalize();
  const midDir = new THREE.Vector3().crossVectors(axis, _b).normalize();
  const cosA = THREE.MathUtils.clamp((l1 * l1 + d * d - l2 * l2) / (2 * l1 * d), -1, 1);
  const ang = Math.acos(cosA);
  const mid = p0.clone().add(_b.clone().multiplyScalar(Math.cos(ang) * l1)).add(midDir.multiplyScalar(Math.sin(ang) * l1));
  lookAlong(upper, p0, mid, hint);
  lower.parent.updateWorldMatrix(true, false);
  const p1 = new THREE.Vector3().setFromMatrixPosition(lower.matrixWorld);
  lookAlong(lower, p1, targetW, hint);
}

export function poseSoldier(g, {
  dt = 0.016, t = 0, speed = 0, fwd = 0, strafe = 0, pitch = 0, down = false, dist = 4,
  recoil = 0, reload = 0, flinch = 0
} = {}) {
  const U = g.userData, m = U.map; if (!m) return;
  if (U.mixer) { poseKitSoldier(g, { dt, speed, fwd, strafe, pitch, down, dist, recoil, reload, flinch }); return; }
  setSoldierLod(g, dist);
  const dt0 = Math.max(0, Math.min(0.05, dt || 0.016));
  U.spd = THREE.MathUtils.damp(U.spd || 0, speed, 8, dt0);
  U.fwd = THREE.MathUtils.damp(U.fwd || 0, fwd, 8, dt0);
  U.strafe = THREE.MathUtils.damp(U.strafe || 0, strafe, 8, dt0);
  const spd = U.spd, walk = ss(0.28, 1.5, spd), run = ss(2.6, 5.8, spd);
  // Distance-driven phase so stride length stays constant (no moonwalk).
  const stride = 0.70 + 0.32 * run;
  const move = Math.min(spd, 9) * dt0;
  if (spd > 0.25) U.distAcc = (U.distAcc || 0) + move;
  U.phase = stride > 1e-4 ? (U.distAcc / stride) * Math.PI : U.phase; // π per step
  if (recoil) U.recoilT = 0.14;
  if (reload) U.reloadT = 1.15;
  if (flinch) U.flinchT = 0.28;
  U.recoilT = Math.max(0, (U.recoilT || 0) - dt0);
  U.reloadT = Math.max(0, (U.reloadT || 0) - dt0);
  U.flinchT = Math.max(0, (U.flinchT || 0) - dt0);
  const recK = U.recoilT > 0 ? ss(0, 0.05, 0.14 - U.recoilT) * (U.recoilT / 0.14) : 0;
  const relK = U.reloadT > 0 ? 1 : 0;
  const flK = U.flinchT > 0 ? (U.flinchT / 0.28) : 0;
  const long = U.gunId && U.gunId !== 'pistol' && U.gunId !== 'akimbo';
  const aim = ss(0.08, 0.28, Math.abs(pitch) + (pitch > 0 ? 0 : 0)); // raise when looking
  const aimK = ss(-0.15, 0.35, pitch) * 0.25 + ss(0.15, 0.55, Math.max(0, -pitch + 0.15)); // mostly follow look
  const raise = Math.max(0, -pitch) * 0.85 + 0.12 * (1 - walk) * 0; // pitch>0 looks up in game? P.pitch: + is look up (grenade used pitch 0.25 to throw up). raise muzzle when pitch > 0? low ready is muzzle down; aiming is pitch around 0 to slightly negative or positive. We'll map pitch directly onto the mount.

  for (const b of Object.values(m)) { if (b !== m.root) b.quaternion.identity(); }
  // Lower body yaws toward move dir (strafe/backpedal); chest stays on look (identity in local).
  const moveAng = (Math.abs(U.fwd) + Math.abs(U.strafe) > 0.35) ? Math.atan2(U.strafe, Math.max(0.15, U.fwd)) : 0;
  const pelvis = moveAng * walk * 0.65;
  m.hips.rotation.y = pelvis;
  m.spine.rotation.y = -pelvis * 0.45;
  m.chest.rotation.y = -pelvis * 0.35;
  // weight shift + bob + idle breathe
  const ph = U.phase, support = Math.sin(ph);
  m.hips.position.y = U.bindHips + Math.abs(Math.sin(ph)) * (0.01 + 0.028 * walk + 0.04 * run) + Math.sin(t * 1.5) * 0.005 * (1 - walk);
  m.hips.position.x = (U.bindX != null ? U.bindX : (U.bindX = 0)) + support * 0.025 * walk + Math.sin(t * 0.7) * 0.012 * (1 - walk);
  m.spine.rotation.x = Math.sin(ph) * 0.035 * walk + 0.04 + Math.sin(t * 1.5) * 0.02 * (1 - walk) + flK * 0.25;
  m.chest.rotation.x = -pitch * 0.45 - 0.06 + recK * 0.18 + flK * 0.2;
  m.head.rotation.x = -pitch * 0.4 + flK * -0.1;
  m.head.rotation.z = flK * 0.15;
  // legs: plant-synced swing, mirrored. Forward/back from fwd sign; strafe leans.
  const amb = 0.48 * walk + 0.38 * run;
  const L = Math.sin(ph), R = Math.sin(ph + Math.PI);
  m.thighL.rotation.x = L * amb * (U.fwd >= -0.2 ? 1 : -0.7);
  m.thighR.rotation.x = R * amb * (U.fwd >= -0.2 ? 1 : -0.7);
  m.thighL.rotation.z = 0.04 + U.strafe * 0.04 * walk;
  m.thighR.rotation.z = -0.04 + U.strafe * 0.04 * walk;
  m.calfL.rotation.x = Math.max(0, -L) * (0.75 + 0.4 * run);
  m.calfR.rotation.x = Math.max(0, -R) * (0.75 + 0.4 * run);
  m.footL.rotation.x = -m.thighL.rotation.x * 0.3 - m.calfL.rotation.x * 0.25;
  m.footR.rotation.x = -m.thighR.rotation.x * 0.3 - m.calfR.rotation.x * 0.25;
  if (walk < 0.15) { m.thighL.rotation.x *= 0.2; m.thighR.rotation.x *= 0.2; m.calfL.rotation.x *= 0.2; m.calfR.rotation.x *= 0.2; }

  // Weapon mount: point the rifle barrel (-Z in gun space) down-forward in character space.
  const mount = U.mount, pistol = (U.gunId === 'pistol' || U.gunId === 'akimbo');
  if (mount) {
    const dip = pistol ? (0.25 - pitch * 0.7) : (0.70 - pitch * 0.95 - recK * 0.35);
    const yawOff = pistol ? 0.35 : 0.22;
    _d.set(Math.sin(yawOff) * 0.55, -Math.sin(Math.max(0.05, dip)), -Math.cos(Math.max(0.05, dip))).normalize();
    mount.quaternion.copy(_q.setFromUnitVectors(_c.set(0, 0, -1), _d));
    mount.position.set(pistol ? 0.16 : 0.12, (pistol ? -0.02 : -0.08) - recK * 0.03, pistol ? -0.14 : -0.12);
  }
  // Open the clavicles slightly so the arms can reach a chest-level gun.
  m.clavR.rotation.set(0.12, 0.25, -0.35);
  m.clavL.rotation.set(0.12, -0.2, 0.35);
  m.root.updateWorldMatrix(true, true);

  // Hands on the weapon (IK after the rifle is posed). Poles keep elbows out, not behind the back.
  if (!pistol && U.gun && U.gun.visible && U.gun.userData.grip) {
    U.gun.userData.grip.getWorldPosition(_a);
    const gripW = _a.clone();
    U.gun.userData.guard.getWorldPosition(_b);
    const guardW = _b.clone();
    const pr = new THREE.Vector3().setFromMatrixPosition(m.upperR.matrixWorld); pr.x += 0.35; pr.y -= 0.05; pr.z += 0.15;
    const pl = new THREE.Vector3().setFromMatrixPosition(m.upperL.matrixWorld); pl.x -= 0.3; pl.y += 0.05; pl.z += 0.2;
    ik2(m.upperR, m.lowerR, gripW, pr, 0.28, 0.24, HINT_R);
    const relT = U.reloadT || 0;
    if (relT > 0.35 && relT < 0.95) {
      const mag = gripW.clone(); mag.y -= 0.12; mag.z += 0.05;
      ik2(m.upperL, m.lowerL, mag, pl, 0.28, 0.24, HINT_L);
    } else {
      ik2(m.upperL, m.lowerL, guardW, pl, 0.28, 0.24, HINT_L);
    }
    m.handR.quaternion.identity(); m.handL.quaternion.identity();
  } else if (U.gunId === 'akimbo') {
    m.upperR.rotation.set(0.25, 0.4, -1.15); m.lowerR.rotation.set(0.05, 0.15, -0.35);
    m.upperL.rotation.set(0.25, -0.4, 1.15); m.lowerL.rotation.set(0.05, -0.15, 0.35);
  } else if (pistol && U.gun && U.gun.userData.grip) {
    U.gun.userData.grip.getWorldPosition(_a);
    const pr = new THREE.Vector3().setFromMatrixPosition(m.upperR.matrixWorld); pr.x += 0.25; pr.z += 0.1;
    ik2(m.upperR, m.lowerR, _a.clone(), pr, 0.28, 0.24, HINT_R);
    m.upperL.rotation.set(0.2, -0.1, 0.4); m.lowerL.rotation.set(0, 0, 0.2);
  }
  m.root.updateWorldMatrix(true, true);

  // Foot planting: lock XZ of the stance foot to its heel-strike so walks don't slide.
  if (walk > 0.2 && spd < 8.5) {
    for (const [side, thigh, calf, foot, key] of [['L', m.thighL, m.calfL, m.footL, 'plantL'], ['R', m.thighR, m.calfR, m.footR, 'plantR']]) {
      const st = Math.cos(ph + (side === 'L' ? 0 : Math.PI));
      const fw = new THREE.Vector3().setFromMatrixPosition(foot.matrixWorld);
      if (st > 0.25) {
        if (!U[key]) U[key] = new THREE.Vector3(fw.x, 0.04, fw.z);
        const tgt = U[key].clone(); tgt.y = 0.04;
        const pole = new THREE.Vector3().setFromMatrixPosition(thigh.matrixWorld);
        pole.x += side === 'L' ? -0.15 : 0.15; pole.z += 0.12;
        ik2(thigh, calf, tgt, pole, 0.44, 0.42, HINT_LEG);
      } else U[key] = null;
    }
    m.root.updateWorldMatrix(true, true);
  } else { U.plantL = U.plantR = null; }

  if (down) m.hips.rotation.x = 0.25;
}

export function soldierStats(g) { return g.userData.stats; }
