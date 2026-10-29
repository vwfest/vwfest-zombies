import * as THREE from 'three';

export const WEAPONS = {
  pistol: { id: 'pistol', name: 'Dustdevil .45', dmg: 30, rpm: 380, auto: false, mag: 12, reserve: 60, reload: 1.25, spread: 0.004, pellets: 1, kick: 0.010, shake: 0.12, price: 0, head: 3.2, snd: 'pistol', range: 90 },
  smg: { id: 'smg', name: 'Rattler SMG', dmg: 22, rpm: 820, auto: true, mag: 32, reserve: 160, reload: 1.6, spread: 0.014, pellets: 1, kick: 0.006, shake: 0.08, price: 600, head: 2.4, snd: 'smg', range: 80 },
  shotgun: { id: 'shotgun', name: 'Sidewinder 12g', dmg: 17, rpm: 78, auto: false, mag: 6, reserve: 42, reload: 0.5, perShell: true, spread: 0.055, pellets: 9, kick: 0.04, shake: 0.4, price: 1200, head: 2.0, snd: 'shotgun', range: 30 },
  rifle: { id: 'rifle', name: 'Ridgeback AR', dmg: 42, rpm: 620, auto: true, mag: 30, reserve: 150, reload: 1.9, spread: 0.007, pellets: 1, kick: 0.013, shake: 0.18, price: 1800, head: 2.6, snd: 'rifle', range: 120 },
  lmg: { id: 'lmg', name: 'Hog Hammer LMG', dmg: 40, rpm: 700, auto: true, mag: 100, reserve: 300, reload: 3.8, spread: 0.012, pellets: 1, kick: 0.012, shake: 0.2, price: 0, crateOnly: true, head: 2.4, snd: 'lmg', range: 110 },
};
export const CRATE_POOL = ['smg', 'shotgun', 'rifle', 'lmg'];

const metal = new THREE.MeshStandardMaterial({ color: 0x2c2f35, metalness: 0.9, roughness: 0.34 });
const metal2 = new THREE.MeshStandardMaterial({ color: 0x55595f, metalness: 0.85, roughness: 0.28 });
const wood = new THREE.MeshStandardMaterial({ color: 0x3e2616, metalness: 0.0, roughness: 0.55 });
const accent = new THREE.MeshStandardMaterial({ color: 0x18d1a0, metalness: 0.4, roughness: 0.3, emissive: 0x0a5a45, emissiveIntensity: 0.8 });
const skin = new THREE.MeshStandardMaterial({ color: 0xc58c6b, roughness: 0.7 });
const sleeve = new THREE.MeshStandardMaterial({ color: 0x3d4a3a, roughness: 0.9 });
const glove = new THREE.MeshStandardMaterial({ color: 0x1b1d20, roughness: 0.8 });

function box(g, w, h, d, x, y, z, m = metal, rx = 0) { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); b.rotation.x = rx; g.add(b); return b; }
function cyl(g, r, l, x, y, z, m = metal, r2) { const c = new THREE.Mesh(new THREE.CylinderGeometry(r2 ?? r, r, l, 10), m); c.rotation.x = Math.PI / 2; c.position.set(x, y, z); g.add(c); return c; }

export function buildViewmodel(id, hands = true) {
  const g = new THREE.Group(); let muzzleZ = -0.3, ejectZ = -0.05, pos = [0.2, -0.2, -0.42];
  if (id === 'pistol') {
    box(g, 0.045, 0.06, 0.24, 0, 0, -0.1, metal); box(g, 0.047, 0.014, 0.2, 0, 0.035, -0.1, metal2); box(g, 0.04, 0.11, 0.055, 0, -0.085, 0.0, wood, 0.25); cyl(g, 0.009, 0.05, 0, 0.0, -0.245, metal2); box(g, 0.006, 0.014, 0.01, 0, 0.048, -0.2, accent); muzzleZ = -0.27; ejectZ = -0.12; pos = [0.17, -0.17, -0.38];
  } else if (id === 'smg') {
    box(g, 0.06, 0.08, 0.32, 0, 0, -0.1); box(g, 0.05, 0.02, 0.2, 0, 0.05, -0.1, metal2); cyl(g, 0.013, 0.2, 0, 0.015, -0.36, metal2); box(g, 0.04, 0.16, 0.05, 0, -0.12, -0.04, metal2, 0.1); box(g, 0.04, 0.1, 0.05, 0, -0.08, 0.06, wood, 0.3); box(g, 0.05, 0.06, 0.18, 0, -0.01, 0.2, metal); box(g, 0.012, 0.03, 0.012, 0, 0.07, -0.27, metal2); box(g, 0.062, 0.012, 0.1, 0, 0.0, -0.1, accent); muzzleZ = -0.47; ejectZ = -0.05;
  } else if (id === 'shotgun') {
    box(g, 0.06, 0.08, 0.28, 0, 0, -0.05); cyl(g, 0.016, 0.62, 0, 0.02, -0.46, metal2); cyl(g, 0.02, 0.3, 0, -0.025, -0.38, metal); box(g, 0.075, 0.06, 0.16, 0, -0.03, -0.38, wood); box(g, 0.05, 0.1, 0.3, 0, -0.03, 0.22, wood, -0.12); box(g, 0.04, 0.08, 0.05, 0, -0.07, 0.04, wood, 0.3); box(g, 0.01, 0.02, 0.01, 0, 0.05, -0.77, accent); muzzleZ = -0.78; ejectZ = -0.04; pos = [0.2, -0.2, -0.4];
  } else if (id === 'rifle') {
    box(g, 0.06, 0.09, 0.42, 0, 0, -0.05); box(g, 0.05, 0.03, 0.34, 0, 0.06, -0.1, metal2); cyl(g, 0.014, 0.4, 0, 0.015, -0.46, metal2); cyl(g, 0.024, 0.22, 0, 0.015, -0.34, metal); box(g, 0.04, 0.15, 0.06, 0, -0.12, -0.02, metal2, 0.2); box(g, 0.04, 0.09, 0.05, 0, -0.08, 0.12, wood, 0.3); box(g, 0.05, 0.1, 0.26, 0, -0.02, 0.32, wood, -0.08);
    cyl(g, 0.022, 0.12, 0, 0.1, -0.08, metal); const lens = cyl(g, 0.019, 0.005, 0, 0.1, -0.145, accent); box(g, 0.02, 0.04, 0.03, 0, 0.075, -0.08, metal); muzzleZ = -0.7; ejectZ = -0.02; pos = [0.2, -0.2, -0.4];
  } else { // lmg
    box(g, 0.08, 0.11, 0.46, 0, 0, -0.05); box(g, 0.1, 0.12, 0.18, 0, -0.13, -0.02, metal2); box(g, 0.07, 0.03, 0.4, 0, 0.075, -0.1, metal2); cyl(g, 0.034, 0.34, 0, 0.0, -0.46, metal); cyl(g, 0.014, 0.18, 0, 0.0, -0.72, metal2); box(g, 0.04, 0.1, 0.06, 0, -0.1, 0.12, wood, 0.3); box(g, 0.06, 0.12, 0.28, 0, -0.01, 0.34, wood, -0.06); box(g, 0.012, 0.02, 0.012, 0, 0.1, -0.8, accent); box(g, 0.012, 0.15, 0.012, -0.03, -0.1, -0.72, metal2, 0); muzzleZ = -0.84; ejectZ = -0.02; pos = [0.2, -0.22, -0.44];
  }
  if (!hands) { const muzzle0 = new THREE.Object3D(); g.userData = { muzzle: muzzle0, eject: muzzle0, base: new THREE.Vector3() }; return g; }
  // hands + sleeves
  const rh = box(g, 0.055, 0.075, 0.09, 0, -0.1, 0.03, glove); const ra = box(g, 0.07, 0.07, 0.3, 0.02, -0.14, 0.2, sleeve, -0.25);
  const lz = id === 'pistol' ? -0.04 : id === 'shotgun' ? -0.4 : -0.3;
  const lh = box(g, 0.06, 0.06, 0.1, id === 'pistol' ? -0.02 : -0.03, id === 'pistol' ? -0.08 : -0.06, lz, glove); const la = box(g, 0.07, 0.07, 0.34, -0.1, -0.14, lz + 0.22, sleeve, -0.1); la.rotation.y = 0.35;
  g.traverse((o) => { if (o.isMesh) o.castShadow = false; });
  const muzzle = new THREE.Object3D(); muzzle.position.set(0, 0.015, muzzleZ); g.add(muzzle);
  const eject = new THREE.Object3D(); eject.position.set(0.04, 0.03, ejectZ); g.add(eject);
  g.userData = { muzzle, eject, base: new THREE.Vector3(...pos) };
  g.userData.base.z -= 0.1; g.userData.base.x -= 0.03; g.position.copy(g.userData.base); g.scale.setScalar(0.9);
  return g;
}
