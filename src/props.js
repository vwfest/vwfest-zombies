import * as THREE from 'three';
import { rnd, pick } from './util.js';

export class Mats {
  constructor(T) {
    this.T = T; this.cache = {};
    const std = (o) => new THREE.MeshStandardMaterial(o);
    this.sand = std({ map: T.sand, bumpMap: T.sandBump, bumpScale: 3, roughness: 0.97, metalness: 0, color: 0xcfc2b0 }); T.sand.repeat.set(90, 90); T.sandBump.repeat.set(90, 90);
    this.concrete = std({ map: T.concrete, bumpMap: T.concreteBump, bumpScale: 1.5, roughness: 0.88, metalness: 0.02 }); T.concrete.repeat.set(10, 10); T.concreteBump.repeat.set(10, 10);
    this.fence = std({ color: 0x8d9ea6, map: T.rust, roughnessMap: T.rustRough, bumpMap: T.corr, bumpScale: 2.5, metalness: 0.75, roughness: 1 });
    this.fenceDark = std({ color: 0x3a4248, map: T.rust, roughnessMap: T.rustRough, metalness: 0.7, roughness: 1 });
    this.wood = std({ color: 0xffffff, map: T.wood, roughness: 0.85, metalness: 0 });
    this.tire = std({ color: 0x151517, roughness: 0.92, metalness: 0 });
    this.glass = std({ color: 0x0a1519, roughness: 0.08, metalness: 0.95 });
    this.chrome = std({ color: 0xcfd6da, roughness: 0.18, metalness: 1 });
    this.lampBulb = new THREE.MeshBasicMaterial({ color: new THREE.Color(5, 3.2, 1.4), toneMapped: false });
    this.lampBulbT = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.2, 4.5, 3.4), toneMapped: false });
    this.headlight = std({ color: 0xe9e4c8, emissive: 0x4a4430, emissiveIntensity: 0.6, roughness: 0.2, metalness: 0.2 });
    this.tarp = std({ color: 0x3f5a4a, roughness: 0.95 });
  }
  paint(color) { const k = 'p' + color; return this.cache[k] || (this.cache[k] = new THREE.MeshStandardMaterial({ color, map: this.T.rust, roughnessMap: this.T.rustRough, metalness: 0.55, roughness: 1 })); }
  flat(color, rough = 0.8, metal = 0.1) { const k = 'f' + color + rough + metal; return this.cache[k] || (this.cache[k] = new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal })); }
}
const PAINTS = [0x5bb5a0, 0xe0d19a, 0xd9792a, 0xb23a2e, 0x5e8fc0, 0xcfcfc4, 0x8aa84a, 0xd2a13a];
export const randPaint = () => pick(PAINTS);

const sph = (r, sx, sy, sz, x, y, z, m, w = 14, h = 9) => { const s = new THREE.Mesh(new THREE.SphereGeometry(r, w, h), m); s.scale.set(sx, sy, sz); s.position.set(x, y, z); return s; };
const bx = (w, h, d, x, y, z, m) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); return b; };
const cy = (r, l, x, y, z, m, rz = true, seg = 12) => { const c = new THREE.Mesh(new THREE.CylinderGeometry(r, r, l, seg), m); if (rz) c.rotation.z = Math.PI / 2; c.position.set(x, y, z); return c; };

function wheel(M, x, y, z, r = 0.34) { const g = new THREE.Group(); g.add(cy(r, 0.22, 0, 0, 0, M.tire, true, 14)); g.add(cy(r * 0.55, 0.24, 0, 0, 0, M.chrome, true, 8)); g.position.set(x, y, z); return g; }

// Air-cooled Beetle shell: forward = -Z. Footprint ~1.8 x 4.0
export function makeBeetle(M, color, opt = {}) {
  const g = new THREE.Group(), p = M.paint(color);
  g.add(sph(1, 0.9, 0.5, 1.95, 0, 0.78, 0, p, 18, 10));
  g.add(sph(1, 0.72, 0.42, 0.95, 0, 1.17, 0.12, M.glass, 16, 8));
  g.add(sph(1, 0.74, 0.28, 0.95, 0, 1.42, 0.12, p, 16, 8));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    g.add(sph(1, 0.22, 0.32, 0.55, sx * 0.86, 0.5, sz * 1.2, p, 10, 8));
    if (!(opt.missing && sx === 1 && sz === 1)) g.add(wheel(M, sx * 0.84, 0.34, sz * 1.2));
  }
  for (const sx of [-1, 1]) g.add(sph(0.12, 1, 1, 1, sx * 0.55, 0.92, -1.78, M.headlight, 8, 6));
  g.add(bx(1.5, 0.08, 0.1, 0, 0.44, -2.02, M.chrome)); g.add(bx(1.5, 0.08, 0.1, 0, 0.44, 2.02, M.chrome));
  g.add(bx(0.5, 0.1, 0.05, 0, 0.78, 1.92, M.fenceDark)); // engine lid grille
  if (opt.door) { const d = bx(0.05, 0.5, 1.0, 0.92, 0.9, -0.2, p); d.rotation.y = 0.9; d.position.x = 1.25; d.position.z = -0.85; g.add(d); }
  if (opt.tilt) g.rotation.z = opt.tilt;
  g.userData.size = [1.9, 1.7, 4.1];
  return g;
}
// VW-style microbus: forward = -Z. Footprint ~2.1 x 4.6
export function makeBus(M, c1, c2 = 0xe6dcc0, opt = {}) {
  const g = new THREE.Group(), a = M.paint(c1), b = M.paint(c2);
  g.add(bx(2.0, 0.85, 4.5, 0, 0.78, 0, a)); g.add(bx(1.96, 0.9, 4.4, 0, 1.66, 0, b));
  g.add(bx(2.04, 0.1, 4.55, 0, 1.19, 0, a)); g.add(bx(2.0, 0.08, 4.5, 0, 2.15, 0, a));
  for (const sx of [-1, 1]) { g.add(bx(0.03, 0.55, 3.8, sx * 0.99, 1.7, 0.1, M.glass)); g.add(bx(0.03, 0.14, 0.7, sx * 1.01, 0.82, 0.8, M.fenceDark)); }
  g.add(bx(1.7, 0.6, 0.04, 0, 1.68, -2.2, M.glass));
  const v1 = bx(1.1, 0.8, 0.1, -0.5, 0.78, -2.28, a); v1.rotation.y = 0.3; const v2 = bx(1.1, 0.8, 0.1, 0.5, 0.78, -2.28, a); v2.rotation.y = -0.3; g.add(v1, v2);
  const em = cy(0.17, 0.04, 0, 0.85, -2.43, M.chrome, false, 14); em.rotation.x = Math.PI / 2; g.add(em);
  for (const sx of [-1, 1]) { g.add(sph(0.13, 1, 1, 0.6, sx * 0.72, 0.8, -2.36, M.headlight, 8, 6)); for (const sz of [-1.4, 1.5]) if (!(opt.missing && sx === 1 && sz === 1.5)) g.add(wheel(M, sx * 0.95, 0.38, sz, 0.38)); }
  g.add(bx(2.1, 0.1, 0.12, 0, 0.45, -2.45, M.chrome)); g.add(bx(2.1, 0.1, 0.12, 0, 0.45, 2.3, M.chrome));
  if (opt.tilt) g.rotation.z = opt.tilt;
  g.userData.size = [2.1, 2.2, 4.6];
  return g;
}
export function makeTireStack(M, n = 4) { const g = new THREE.Group(); for (let i = 0; i < n; i++) { const t = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.18, 8, 14), M.tire); t.rotation.x = Math.PI / 2; t.position.set(rnd(-0.04, 0.04), 0.18 + i * 0.3, rnd(-0.04, 0.04)); g.add(t); } g.userData.size = [1.0, 0.3 * n + 0.1, 1.0]; return g; }
export function makeDrum(M, color) { const g = new THREE.Group(); g.add(cy(0.3, 0.9, 0, 0.45, 0, M.paint(color), false, 12)); for (const y of [0.2, 0.7]) g.add(cy(0.31, 0.04, 0, y, 0, M.fenceDark, false, 12)); g.userData.size = [0.62, 0.9, 0.62]; return g; }
export function makeCrate(M, s = 1) { const g = new THREE.Group(); g.add(bx(s, s, s, 0, s / 2, 0, M.wood)); for (const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) g.add(bx(0.07, s * 1.02, 0.07, (x * s) / 2, s / 2, (z * s) / 2, M.fenceDark)); g.userData.size = [s, s, s]; return g; }
export function makePole(M, tealBulb) { const g = new THREE.Group(); g.add(cy(0.09, 5.2, 0, 2.6, 0, M.fenceDark, false, 8)); g.add(bx(0.12, 0.12, 1.1, 0, 5.15, -0.5, M.fenceDark)); g.add(bx(0.5, 0.12, 0.3, 0, 5.08, -1.1, M.fenceDark)); const b = new THREE.Mesh(new THREE.SphereGeometry(0.17, 8, 6), tealBulb ? M.lampBulbT : M.lampBulb); b.position.set(0, 4.98, -1.1); b.userData.bulb = true; g.add(b); g.userData.size = [0.4, 5.2, 0.4]; g.userData.bulbPos = new THREE.Vector3(0, 4.9, -1.1); return g; }
export function makeCactus(M) { const g = new THREE.Group(), m = M.flat(0x2f5a38, 0.9, 0); const h = rnd(1.6, 3.2); g.add(cy(0.22, h, 0, h / 2, 0, m, false, 8)); g.add(sph(0.22, 1, 1, 1, 0, h, 0, m, 8, 5)); if (Math.random() < 0.8) { const a = cy(0.13, 0.7, 0.4, h * 0.6, 0, m, false, 6); g.add(a); g.add(cy(0.13, 0.5, 0.4 + 0.32, h * 0.6 + 0.3, 0, m, false, 6)); g.children[g.children.length - 1].rotation.z = 0; } return g; }
export function makeRock(M, s) { const r = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), M.flat(0x6b5a48, 0.95, 0)); r.scale.set(rnd(0.9, 1.5), rnd(0.5, 0.9), rnd(0.9, 1.4)); r.rotation.set(rnd(3), rnd(3), rnd(3)); r.position.y = s * 0.3; const g = new THREE.Group(); g.add(r); return g; }
