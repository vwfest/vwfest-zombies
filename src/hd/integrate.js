// PREVIEW: HD code-built models (rides + avatar v6) wired into DUST & DEAD.
import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { buildGhia } from './v5/ghia.js';
import { buildBug } from './rides/bug/bug.js';
import { buildCamper } from './rides/camper/camper.js';
import { buildWagon } from './rides/wagon/wagon.js';
import { buildSafari } from './rides/safari/safari.js';
import { buildAvatar } from './avatar/v6/avatar2.js';

// ---------- cars ----------
const SMALL = [ // beetle-sized slots
  (c) => buildBug({ model: 0, paint: 'solid', c1: c, c2: null, wheels: 1, stance: 1, extras: 0, plate: 1, tier: 1 }, { lod: 1 }),
  (c) => buildBug({ model: 5, paint: 'solid', c1: c, c2: null, wheels: 1, stance: 3, extras: 33, plate: 1, tier: 1 }, { lod: 1, baja: true }),
  (c) => buildGhia({ model: 2, paint: 'solid', c1: c, c2: null, wheels: 2, stance: 1, extras: 0, plate: 1, tier: 1 }, { lod: 1 }),
];
const BIG = [ // bus-sized slots
  (c, c2) => buildCamper({ model: 1, paint: 'two', c1: c, c2, wheels: 0, stance: 1, extras: 0, plate: 1, tier: 1 }, { lod: 1 }),
  (c) => buildWagon({ model: 4, paint: 'solid', c1: c, c2: null, wheels: 3, stance: 1, extras: 0, plate: 1, tier: 1 }, { lod: 1 }),
  (c) => buildSafari({ model: 3, paint: 'solid', c1: c, c2: null, wheels: 1, stance: 1, extras: 0, plate: 1, tier: 1 }, { lod: 1 }),
];
const hex = (n) => '#' + new THREE.Color(n).getHexString();
const cache = new Map(); let si = 0, bi = 0;
function wrap(src, opt) {
  const car = src.clone(); car.rotation.y = Math.PI; // rides face +Z, junkyard props face -Z
  const g = new THREE.Group(); g.add(car);
  // rust/dust: dull the paint a little so the wrecks sit in the junkyard
  if (opt.tilt) g.rotation.z = opt.tilt;
  const b = new THREE.Box3().setFromObject(car), s = b.getSize(new THREE.Vector3()); g.userData.size = [s.x, s.y, s.z]; g.userData.hd = true; car.traverse((m) => { if (m.isMesh) m.userData.noBatch = true; }); // complex multi-material meshes: skip the static merge
  return g;
}
export function hdCar(kind, color, c2, opt = {}) {
  const list = kind === 'big' ? BIG : SMALL, i = kind === 'big' ? bi++ % 3 : si++ % 3, key = kind + i + color;
  let src = cache.get(key); if (!src) { src = list[i](hex(color), hex(c2 ?? 0xe6dcc0)); cache.set(key, src); }
  return wrap(src, opt);
}

// ---------- zombies from the v6 body ----------
const ZAV = { skin: 2, body: 1, hairStyle: 0, hair: 3, shirt: 4, pattern: 0, pants: 9, outfit: 0, hat: 0, glasses: 0, acc: 0, sex: 0, eyes: 3, facial: 0, age: 1, height: 1, vibe: 0, freckles: 0, tattoo: 0, accSide: 0 };
function noiseTex(draw, n = 256) { const cv = document.createElement('canvas'); cv.width = cv.height = n; const x = cv.getContext('2d'); draw(x, n); const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; }
const ROT = noiseTex((x, n) => { x.fillStyle = '#fff'; x.fillRect(0, 0, n, n); for (let i = 0; i < 900; i++) { const r = Math.random() * 10 + 2; x.fillStyle = `rgba(${60 + Math.random() * 60},${40 + Math.random() * 40},${40},${Math.random() * 0.35})`; x.beginPath(); x.arc(Math.random() * n, Math.random() * n, r, 0, 7); x.fill(); } for (let i = 0; i < 40; i++) { x.fillStyle = 'rgba(110,16,24,0.7)'; x.beginPath(); x.arc(Math.random() * n, Math.random() * n, Math.random() * 6 + 2, 0, 7); x.fill(); } });
const TORN = noiseTex((x, n) => { x.fillStyle = '#fff'; x.fillRect(0, 0, n, n); x.fillStyle = '#000'; for (let i = 0; i < 26; i++) { x.beginPath(); const cx = Math.random() * n, cy = Math.random() * n, r = Math.random() * 18 + 6; for (let k = 0; k < 9; k++) { const a = k / 9 * 6.283, rr = r * (0.5 + Math.random()); x.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } x.fill(); } for (let i = 0; i < 300; i++) { x.fillStyle = `rgba(40,20,10,${Math.random() * 0.5})`; x.fillRect(Math.random() * n, Math.random() * n, 4, 4); } });
const AVS = 1.1; // v6 is 1.66m; DUST & DEAD hitboxes assume ~1.85m

function prep(fig, z, near) {
  fig.scale.multiplyScalar(AVS);
  fig.traverse((o) => { if (!o.isMesh) return; o.castShadow = true; o.frustumCulled = false;
    if (o.isSkinnedMesh && Array.isArray(o.material) && o.material.length === 4) o.material = [z.sk, z.sh, z.pa, z.pa];
    else { const m = (Array.isArray(o.material) ? o.material[0] : o.material).clone(); if (m.color) m.color.multiplyScalar(0.55); o.material = m; } });
  const b = fig.userData.bones, hipY = b.hips.position.y; fig.visible = false; return { fig, b, hipY, near };
}
export async function upgradeZombies(zombies) {
  const t0 = performance.now();
  const far = await buildAvatar(ZAV, { lod: 2 }), near = await buildAvatar(ZAV, { lod: 1 });
  const tb = performance.now() - t0;
  for (const z of zombies.list) {
    // zombie materials (keep emissive so hit-flash still works)
    z.sk = new THREE.MeshStandardMaterial({ map: ROT, roughness: 0.8 }); z.sh = new THREE.MeshStandardMaterial({ map: TORN, alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.95 }); z.pa = new THREE.MeshStandardMaterial({ map: TORN, alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.95 });
    const f = SkeletonUtils.clone(far); f.userData = { ...far.userData, bones: {} }; f.traverse((o) => { if (o.isBone) f.userData.bones[o.name] = o; });
    const n = SkeletonUtils.clone(near); n.userData = { ...near.userData, bones: {} }; n.traverse((o) => { if (o.isBone) n.userData.bones[o.name] = o; });
    z.hd = [prep(f, z, false), prep(n, z, true)];
    // hide the old box body, keep its groups as the animation driver
    z.pelvis.traverse((o) => { if (o.isMesh) o.visible = false; }); z.root.add(f, n);
  }
  const ou = zombies.update.bind(zombies), os = zombies.spawn.bind(zombies);
  zombies.spawn = (...a) => { const z = os(...a); if (z) { z.sk.color.multiplyScalar(0.9); } return z; };
  zombies.update = (dt, time, player, ...r) => { ou(dt, time, player, ...r); for (const z of zombies.list) if (z.root.visible) sync(z, player); };
  zombies.hdStats = { farTris: far.userData.tris, nearTris: near.userData.tris, buildMs: Math.round(tb) };
  return zombies.hdStats;
}
export let NEAR_DIST = 9;
function sync(z, p) {
  const d = Math.hypot(z.pos.x - p.x, z.pos.z - p.z), useNear = d < NEAR_DIST;
  for (const h of z.hd) { h.fig.visible = h.near === useNear; if (!h.fig.visible) continue; const b = h.b;
    b.hips.position.y = h.hipY + (z.pelvis.position.y - 0.95) / AVS; b.hips.rotation.set(z.pelvis.rotation.x, 0, z.pelvis.rotation.z);
    b.chest.rotation.set(z.upper.rotation.x + 0.18, z.upper.rotation.y, z.upper.rotation.z); b.spine.rotation.x = 0.1;
    b.head.rotation.set(z.head.rotation.x + 0.15, 0.1, z.head.rotation.z + 0.22);
    b.thighL.rotation.set(z.legL.rotation.x, 0, 0.03); b.thighR.rotation.set(z.legR.rotation.x, 0, -0.03); b.shinL.rotation.x = Math.max(0, -z.legL.rotation.x) * 0.9 + 0.08; b.shinR.rotation.x = Math.max(0, -z.legR.rotation.x) * 0.9 + 0.08;
    b.upperArmL.rotation.set(z.armL.rotation.x, 0, z.armL.rotation.z); b.upperArmR.rotation.set(z.armR.rotation.x, 0, z.armR.rotation.z); b.foreArmL.rotation.x = -0.35; b.foreArmR.rotation.x = -0.25; b.handL.rotation.x = 0.4; b.handR.rotation.x = 0.5; }
}
