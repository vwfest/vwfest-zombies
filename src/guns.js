// HD code-built first-person weapons: extruded machined profiles, baked canvas detail (wear, stipple, grain), PBR materials.
// Generic designs, no real manufacturer names or marks.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
const R = (a, b) => a + Math.random() * (b - a);
function canvas(n, fn) { const c = document.createElement('canvas'); c.width = c.height = n; fn(c.getContext('2d'), n); const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4; return t; }
// worn metal: dark base, fine brushing, edge-wear scuffs (lighter, more metallic), pitting
const wearTex = (base, hi) => canvas(512, (x, n) => { x.fillStyle = base; x.fillRect(0, 0, n, n); for (let i = 0; i < 2600; i++) { x.strokeStyle = `rgba(255,255,255,${R(0.01, 0.04)})`; const y = R(0, n); x.beginPath(); x.moveTo(R(0, n), y); x.lineTo(R(0, n), y + R(-2, 2)); x.stroke(); }
  for (let i = 0; i < 160; i++) { x.strokeStyle = hi; x.globalAlpha = R(0.15, 0.5); x.lineWidth = R(0.5, 1.6); const a = R(0, n), b = R(0, n); x.beginPath(); x.moveTo(a, b); x.lineTo(a + R(-30, 30), b + R(-6, 6)); x.stroke(); } x.globalAlpha = 1;
  for (let i = 0; i < 900; i++) { x.fillStyle = `rgba(0,0,0,${R(0.1, 0.35)})`; x.fillRect(R(0, n), R(0, n), 1.5, 1.5); } });
const roughTex = () => canvas(256, (x, n) => { const d = x.createImageData(n, n); for (let i = 0; i < d.data.length; i += 4) { const v = 120 + Math.random() * 90; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255; } x.putImageData(d, 0, 0); });
const stipple = () => canvas(256, (x, n) => { x.fillStyle = 'rgb(128,128,255)'; x.fillRect(0, 0, n, n); for (let i = 0; i < 5000; i++) { const px = R(0, n), py = R(0, n), r = R(1, 2.2); const g = x.createRadialGradient(px - r * 0.4, py - r * 0.4, 0, px, py, r); g.addColorStop(0, 'rgb(90,90,255)'); g.addColorStop(1, 'rgba(170,170,255,0)'); x.fillStyle = g; x.beginPath(); x.arc(px, py, r, 0, 7); x.fill(); } });
const grain = () => canvas(512, (x, n) => { x.fillStyle = '#4a2c17'; x.fillRect(0, 0, n, n); for (let i = 0; i < 260; i++) { x.strokeStyle = `rgba(${R(20, 60)},${R(10, 30)},5,${R(0.15, 0.45)})`; x.lineWidth = R(0.5, 3); x.beginPath(); let y = R(0, n); x.moveTo(0, y); for (let k = 0; k <= 16; k++) x.lineTo((k / 16) * n, y += R(-3, 3) + Math.sin(k * 0.7 + i) * 1.4); x.stroke(); } for (let i = 0; i < 40; i++) { x.fillStyle = 'rgba(210,170,120,0.08)'; x.fillRect(R(0, n), R(0, n), R(10, 60), R(1, 3)); } });
let MAT; function mats() { if (MAT) return MAT; const rt = roughTex(), st = stipple();
  const metal = (base, hi, rough, metal) => new THREE.MeshStandardMaterial({ map: wearTex(base, hi), roughnessMap: rt, roughness: rough, metalness: metal, color: 0xffffff });
  MAT = { blued: metal('#1b1e24', '#9aa3ad', 0.42, 0.9), park: metal('#34372f', '#8d9184', 0.78, 0.55), steel: metal('#4a4e54', '#cfd4da', 0.3, 0.95),
    poly: new THREE.MeshStandardMaterial({ color: 0x1d1e20, roughness: 0.72, metalness: 0.0, normalMap: st, normalScale: new THREE.Vector2(0.9, 0.9) }),
    polyTan: new THREE.MeshStandardMaterial({ color: 0x6f604a, roughness: 0.75, normalMap: st, normalScale: new THREE.Vector2(0.6, 0.6) }),
    wood: new THREE.MeshStandardMaterial({ map: grain(), roughness: 0.5, metalness: 0, color: 0xffffff }), brass: new THREE.MeshStandardMaterial({ color: 0xb08a3a, metalness: 1, roughness: 0.3 }),
    dot: new THREE.MeshBasicMaterial({ color: new THREE.Color(0.4, 2.2, 0.8), toneMapped: false }), dotR: new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 0.3, 0.2), toneMapped: false }),
    glass: new THREE.MeshStandardMaterial({ color: 0x0b1a22, metalness: 0.9, roughness: 0.05, emissive: 0x062030 }),
    glove: new THREE.MeshStandardMaterial({ color: 0x1e2022, roughness: 0.85, normalMap: st, normalScale: new THREE.Vector2(0.4, 0.4) }), sleeve: new THREE.MeshStandardMaterial({ color: 0x3b4636, roughness: 0.95, normalMap: st, normalScale: new THREE.Vector2(0.25, 0.25) }) };
  for (const m of Object.values(MAT)) { if (m.map) m.map.colorSpace = THREE.SRGBColorSpace; } return MAT; }
// side profile (z forward = -, y up) extruded in x, bevelled
function ext(g, pts, w, m, { x = 0, bevel = 0.0025, curve = 6 } = {}) { const s = new THREE.Shape(); pts.forEach(([z, y], i) => (i ? s.lineTo(z, y) : s.moveTo(z, y)));
  const geo = new THREE.ExtrudeGeometry(s, { depth: w - bevel * 2, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments: curve }); geo.translate(0, 0, -(w - bevel * 2) / 2); geo.rotateY(-Math.PI / 2);
  const uv = geo.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 4, uv.getY(i) * 4); const o = new THREE.Mesh(geo, m); o.position.x = x; g.add(o); return o; }
const rbox = (g, w, h, d, x, y, z, m, r = 0.004, rx = 0) => { const o = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 2, r), m); o.position.set(x, y, z); o.rotation.x = rx; g.add(o); return o; };
const box1 = (g, w, h, d, x, y, z, m, rx = 0) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); o.rotation.x = rx; g.add(o); return o; }; // sharp machined ribs: 12 tris
const tube = (g, r, l, x, y, z, m, seg = 20, r2) => { const o = new THREE.Mesh(new THREE.CylinderGeometry(r2 ?? r, r, l, seg, 1), m); o.rotation.x = Math.PI / 2; o.position.set(x, y, z); g.add(o); return o; };
const ring = (g, r, t, x, y, z, m) => { const o = new THREE.Mesh(new THREE.TorusGeometry(r, t, 8, 24), m); o.position.set(x, y, z); g.add(o); return o; };
function serrations(g, n, w, h, z0, dz, y, m) { for (let i = 0; i < n; i++) rbox(g, w, h, 0.0022, 0, y, z0 + i * dz, m, 0.0008); }
function trigger(g, z, y, M) { const tg = new THREE.Mesh(new THREE.TorusGeometry(0.022, 0.0035, 6, 18, Math.PI * 1.15), M.poly); tg.rotation.set(0, Math.PI / 2, Math.PI * 0.93); tg.position.set(0, y, z); g.add(tg); const tr = new THREE.Mesh(new THREE.TorusGeometry(0.012, 0.003, 6, 10, Math.PI * 0.6), M.steel); tr.rotation.set(0, Math.PI / 2, Math.PI * 1.15); tr.position.set(0, y + 0.006, z + 0.004); g.add(tr); }
function sights(g, zf, zr, y, M) { rbox(g, 0.004, 0.009, 0.006, 0, y + 0.004, zf, M.blued, 0.001); const d = tube(g, 0.0016, 0.002, 0, y + 0.006, zf + 0.003, M.dot, 8); d.rotation.x = 0; d.rotation.z = Math.PI / 2; d.rotation.y = Math.PI / 2;
  for (const s of [-1, 1]) { rbox(g, 0.005, 0.009, 0.008, s * 0.0055, y + 0.004, zr, M.blued, 0.001); const q = tube(g, 0.0013, 0.002, s * 0.0055, y + 0.006, zr - 0.0045, M.dotR, 8); q.rotation.x = 0; } }
const BUILD = {
  pistol(g, M) { // generic full-size .45 style: steel slide, polymer frame
    const slide = new THREE.Group(); g.add(slide); g.userData.slide = slide;
    ext(slide, [[0.02, 0.0], [-0.17, 0.0], [-0.172, 0.022], [-0.165, 0.03], [0.012, 0.03], [0.02, 0.022]], 0.026, M.blued, { bevel: 0.002 });
    rbox(slide, 0.0262, 0.012, 0.032, 0, 0.014, -0.045, M.steel, 0.001); // ejection port
    for (const s of [-1, 1]) for (let i = 0; i < 9; i++) rbox(slide, 0.0015, 0.022, 0.0016, s * 0.0132, 0.014, 0.008 - i * 0.0036, M.steel, 0.0004); // rear serrations
    for (const s of [-1, 1]) for (let i = 0; i < 6; i++) rbox(slide, 0.0015, 0.016, 0.0016, s * 0.0132, 0.012, -0.13 - i * 0.0036, M.steel, 0.0004); // front serrations
    sights(slide, -0.16, 0.008, 0.03, M); tube(slide, 0.0075, 0.012, 0, 0.012, -0.172, M.steel, 20); tube(slide, 0.0045, 0.014, 0, 0.012, -0.175, M.poly, 12);
    ext(g, [[0.03, -0.002], [-0.16, -0.002], [-0.16, -0.012], [-0.06, -0.016], [-0.05, -0.022], [0.0, -0.018], [0.006, -0.03], [0.022, -0.13], [0.06, -0.13], [0.045, -0.02], [0.034, -0.008]], 0.028, M.poly, { bevel: 0.003 });
    for (let i = 0; i < 4; i++) rbox(g, 0.0285, 0.003, 0.012, 0, -0.012, -0.075 - i * 0.012, M.poly, 0.001); // accessory rail
    trigger(g, -0.02, -0.03, M); rbox(g, 0.03, 0.006, 0.042, 0, -0.133, 0.042, M.blued, 0.002, -0.2); // mag base
    rbox(g, 0.004, 0.006, 0.014, 0.0145, -0.008, -0.02, M.steel, 0.001); rbox(g, 0.0035, 0.008, 0.02, 0.0145, 0.005, 0.02, M.steel, 0.001); // slide stop + safety
    rbox(g, 0.012, 0.014, 0.008, 0, 0.018, 0.032, M.steel, 0.002); // hammer
    return { muzzle: -0.18, eject: -0.045, pos: [0.17, -0.17, -0.38], lz: -0.04 }; },
  smg(g, M) { ext(g, [[0.09, 0.0], [-0.2, 0.0], [-0.2, 0.05], [0.09, 0.05]], 0.05, M.park, { bevel: 0.004 }); tube(g, 0.016, 0.12, 0, 0.026, -0.26, M.blued, 20); for (let i = 0; i < 6; i++) ring(g, 0.017, 0.0022, 0, 0.026, -0.22 - i * 0.015, M.steel).rotation.y = 0;
    for (let i = 0; i < 6; i++) rbox(g, 0.052, 0.003, 0.012, 0, 0.051, -0.18 + i * 0.03, M.blued, 0.001); sights(g, -0.19, 0.06, 0.052, M); rbox(g, 0.036, 0.16, 0.026, 0, -0.08, -0.06, M.blued, 0.004, 0.12);
    for (let i = 0; i < 8; i++) rbox(g, 0.038, 0.004, 0.028, 0, -0.01 - i * 0.018, -0.06 + i * 0.002, M.steel, 0.001, 0.12);
    ext(g, [[0.0, 0.0], [0.03, 0.0], [0.05, -0.11], [0.02, -0.11]], 0.032, M.poly, { bevel: 0.004 }); trigger(g, -0.005, -0.012, M);
    tube(g, 0.006, 0.2, 0.018, 0.02, 0.18, M.steel, 10); tube(g, 0.006, 0.2, -0.018, 0.02, 0.18, M.steel, 10); rbox(g, 0.05, 0.07, 0.012, 0, 0.0, 0.28, M.poly, 0.004);
    rbox(g, 0.012, 0.012, 0.03, 0.03, 0.03, 0.02, M.steel, 0.003); return { muzzle: -0.33, eject: -0.05, pos: [0.19, -0.19, -0.4], lz: -0.2 }; },
  shotgun(g, M) { ext(g, [[0.06, -0.01], [-0.14, -0.01], [-0.14, 0.055], [0.04, 0.055], [0.06, 0.04]], 0.05, M.blued, { bevel: 0.004 }); tube(g, 0.0125, 0.6, 0, 0.038, -0.44, M.blued, 22); tube(g, 0.0145, 0.52, 0, 0.0, -0.4, M.blued, 22);
    ring(g, 0.016, 0.003, 0, 0.0, -0.66, M.steel); const bead = new THREE.Mesh(new THREE.SphereGeometry(0.003, 10, 8), M.brass); bead.position.set(0, 0.052, -0.735); g.add(bead);
    const fore = ext(g, [[-0.28, -0.02], [-0.46, -0.02], [-0.46, 0.02], [-0.28, 0.02]], 0.05, M.wood, { bevel: 0.008 }); for (let i = 0; i < 9; i++) rbox(g, 0.052, 0.004, 0.006, 0, -0.022, -0.3 - i * 0.017, M.wood, 0.002); g.userData.pump = fore;
    ext(g, [[0.06, 0.04], [0.32, 0.03], [0.34, 0.05], [0.36, -0.1], [0.3, -0.11], [0.1, -0.03], [0.06, -0.01]], 0.042, M.wood, { bevel: 0.008 }); rbox(g, 0.044, 0.15, 0.02, 0, -0.03, 0.355, M.poly, 0.006, -0.12);
    trigger(g, 0.035, -0.02, M); rbox(g, 0.051, 0.012, 0.05, 0, 0.022, -0.05, M.steel, 0.002); return { muzzle: -0.75, eject: -0.05, pos: [0.2, -0.2, -0.4], lz: -0.38 }; },
  rifle(g, M) { ext(g, [[0.12, 0.0], [-0.17, 0.0], [-0.17, 0.045], [0.12, 0.045]], 0.052, M.park, { bevel: 0.004 }); for (let i = 0; i < 18; i++) box1(g, 0.042, 0.004, 0.006, 0, 0.049, -0.16 + i * 0.016, M.blued);
    ext(g, [[-0.17, -0.005], [-0.44, -0.005], [-0.44, 0.05], [-0.17, 0.05]], 0.056, M.polyTan, { bevel: 0.006 }); for (let i = 0; i < 7; i++) for (const s of [-1, 1]) box1(g, 0.004, 0.018, 0.022, s * 0.028, 0.022, -0.2 - i * 0.034, M.poly);
    tube(g, 0.0095, 0.26, 0, 0.022, -0.56, M.blued, 18); tube(g, 0.016, 0.05, 0, 0.022, -0.71, M.park, 6); for (let i = 0; i < 3; i++) rbox(g, 0.004, 0.006, 0.03, 0.017, 0.03, -0.71, M.poly, 0.001).rotation.z = i;
    rbox(g, 0.008, 0.045, 0.012, 0, 0.07, -0.43, M.park, 0.002); // front sight post
    tube(g, 0.019, 0.1, 0, 0.1, -0.05, M.blued, 24); tube(g, 0.023, 0.03, 0, 0.1, -0.11, M.blued, 24); tube(g, 0.021, 0.025, 0, 0.1, 0.01, M.blued, 24); const lens = tube(g, 0.019, 0.002, 0, 0.1, -0.126, M.glass, 24); rbox(g, 0.024, 0.03, 0.05, 0, 0.068, -0.05, M.park, 0.003);
    ext(g, [[0.0, 0.0], [-0.06, 0.0], [-0.06, -0.12], [-0.03, -0.14], [0.0, -0.12]], 0.03, M.park, { bevel: 0.003 }).rotation.x = -0.15; for (let i = 0; i < 6; i++) box1(g, 0.032, 0.003, 0.03, 0, -0.03 - i * 0.02, -0.03 + i * 0.003, M.blued, -0.15);
    ext(g, [[0.03, -0.0], [0.07, -0.0], [0.09, -0.11], [0.055, -0.115]], 0.032, M.poly, { bevel: 0.004 }); trigger(g, 0.0, -0.012, M);
    tube(g, 0.014, 0.14, 0, 0.025, 0.19, M.poly, 16); ext(g, [[0.2, 0.05], [0.36, 0.045], [0.36, -0.07], [0.33, -0.08], [0.2, 0.0]], 0.044, M.polyTan, { bevel: 0.006 }); rbox(g, 0.046, 0.13, 0.014, 0, -0.012, 0.365, M.poly, 0.005);
    rbox(g, 0.014, 0.014, 0.034, 0.03, 0.03, 0.0, M.steel, 0.003); return { muzzle: -0.74, eject: -0.03, pos: [0.2, -0.2, -0.4], lz: -0.3 }; },
  lmg(g, M) { ext(g, [[0.12, -0.01], [-0.2, -0.01], [-0.2, 0.06], [0.12, 0.06]], 0.07, M.park, { bevel: 0.005 }); rbox(g, 0.075, 0.03, 0.2, 0, 0.075, -0.06, M.park, 0.004); for (let i = 0; i < 12; i++) rbox(g, 0.05, 0.005, 0.008, 0, 0.093, -0.15 + i * 0.016, M.blued, 0.001);
    tube(g, 0.024, 0.36, 0, 0.025, -0.38, M.blued, 22); for (let i = 0; i < 14; i++) ring(g, 0.026, 0.004, 0, 0.025, -0.24 - i * 0.02, M.park); tube(g, 0.012, 0.16, 0, 0.025, -0.64, M.blued, 16); tube(g, 0.018, 0.06, 0, 0.025, -0.73, M.park, 8);
    rbox(g, 0.13, 0.13, 0.15, 0.0, -0.1, -0.03, M.polyTan, 0.012); for (let i = 0; i < 5; i++) rbox(g, 0.132, 0.006, 0.152, 0, -0.15 + i * 0.025, -0.03, M.poly, 0.002); // ammo box
    for (let i = 0; i < 6; i++) { const c = tube(g, 0.005, 0.03, 0.04, 0.05, -0.01 + i * 0.011, M.brass, 8); c.rotation.set(0, 0, Math.PI / 2); }
    ext(g, [[0.04, -0.01], [0.08, -0.01], [0.1, -0.12], [0.065, -0.125]], 0.034, M.poly, { bevel: 0.004 }); trigger(g, 0.01, -0.02, M); ext(g, [[0.12, 0.05], [0.4, 0.04], [0.4, -0.08], [0.36, -0.09], [0.12, -0.01]], 0.05, M.poly, { bevel: 0.007 });
    sights(g, -0.66, 0.08, 0.093, M); for (const s of [-1, 1]) { const b = tube(g, 0.005, 0.18, s * 0.03, -0.05, -0.62, M.steel, 8); b.rotation.x = Math.PI / 2 + 0.35; }
    return { muzzle: -0.76, eject: -0.02, pos: [0.2, -0.21, -0.4], lz: -0.3 }; },
  akimbo(g, M) {
    const L = new THREE.Group(); L.position.set(-0.12, -0.01, 0.02); L.rotation.y = 0.22; L.rotation.z = 0.08;
    const R = new THREE.Group(); R.position.set(0.12, -0.01, 0); R.rotation.y = -0.12; R.rotation.z = -0.04;
    g.add(L, R);
    const a = BUILD.pistol(L, M), b = BUILD.pistol(R, M);
    const mL = new THREE.Object3D(); mL.position.set(0, 0.012, a.muzzle); L.add(mL);
    const mR = new THREE.Object3D(); mR.position.set(0, 0.012, b.muzzle); R.add(mR);
    rbox(L, 0.048, 0.04, 0.07, 0.01, -0.09, 0.01, M.glove, 0.012);
    rbox(R, 0.048, 0.04, 0.07, -0.01, -0.09, 0.0, M.glove, 0.012);
    const sleeveL = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.04, 0.28, 12), M.sleeve); sleeveL.rotation.set(Math.PI / 2, 0.4, 0.2); sleeveL.position.set(-0.08, -0.16, 0.16); g.add(sleeveL);
    const sleeveR = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.04, 0.28, 12), M.sleeve); sleeveR.rotation.set(Math.PI / 2, -0.2, -0.15); sleeveR.position.set(0.08, -0.16, 0.16); g.add(sleeveR);
    return { muzzle: b.muzzle, eject: -0.04, pos: [0.0, -0.16, -0.36], lz: 0, akimbo: true, muzzles: [mL, mR], slides: [L.userData.slide, R.userData.slide] };
  },
  lever(g, M) {
    tube(g, 0.011, 0.62, 0, 0.03, -0.42, M.blued, 18);
    tube(g, 0.016, 0.18, 0, 0.012, -0.22, M.steel, 16);
    ext(g, [[0.02, 0.02], [0.28, 0.015], [0.3, -0.08], [0.24, -0.09], [0.06, -0.01]], 0.04, M.wood, { bevel: 0.006 });
    rbox(g, 0.038, 0.12, 0.016, 0, -0.02, 0.29, M.poly, 0.004);
    const lever = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.004, 6, 16, Math.PI), M.steel); lever.rotation.set(0, Math.PI / 2, Math.PI); lever.position.set(0, -0.04, 0.02); g.add(lever); g.userData.pump = lever;
    sights(g, -0.7, 0.02, 0.045, M); tube(g, 0.008, 0.04, 0, 0.03, -0.74, M.blued, 12);
    rbox(g, 0.03, 0.05, 0.04, 0, -0.02, 0.04, M.wood, 0.004);
    return { muzzle: -0.76, eject: 0.0, pos: [0.18, -0.18, -0.42], lz: -0.28 };
  },
  nailer(g, M) {
    rbox(g, 0.09, 0.11, 0.22, 0, 0, -0.02, M.park, 0.008);
    rbox(g, 0.07, 0.06, 0.16, 0, -0.02, 0.12, M.polyTan, 0.006);
    tube(g, 0.012, 0.16, 0, 0.01, -0.2, M.steel, 14);
    tube(g, 0.02, 0.04, 0, 0.01, -0.28, M.blued, 12);
    for (let i = 0; i < 5; i++) rbox(g, 0.004, 0.012, 0.05, 0.048, 0.02 - i * 0.012, -0.02, M.brass, 0.001);
    const hose = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.006, 6, 14), M.poly); hose.rotation.x = Math.PI / 2; hose.position.set(0.02, -0.02, 0.2); g.add(hose);
    rbox(g, 0.035, 0.08, 0.04, 0, -0.08, 0.02, M.poly, 0.004, 0.3);
    const tip = tube(g, 0.004, 0.02, 0, 0.01, -0.31, M.dot, 8);
    tip.material = M.dot;
    return { muzzle: -0.32, eject: -0.02, pos: [0.2, -0.18, -0.36], lz: -0.08 };
  },
  sawed(g, M) {
    tube(g, 0.014, 0.28, 0.012, 0.02, -0.16, M.blued, 16);
    tube(g, 0.014, 0.28, -0.012, 0.02, -0.16, M.blued, 16);
    rbox(g, 0.05, 0.04, 0.08, 0, 0.0, -0.02, M.steel, 0.004);
    ext(g, [[0.0, 0.0], [0.02, -0.02], [0.05, -0.12], [0.02, -0.13], [-0.01, -0.02]], 0.032, M.wood, { bevel: 0.005 });
    rbox(g, 0.02, 0.03, 0.02, 0.03, 0.03, 0.0, M.steel, 0.002);
    const bead = new THREE.Mesh(new THREE.SphereGeometry(0.004, 8, 6), M.brass); bead.position.set(0, 0.04, -0.3); g.add(bead);
    return { muzzle: -0.31, eject: -0.02, pos: [0.18, -0.16, -0.34], lz: -0.02 };
  },
};
// stylised star flash (3 crossed additive quads), procedurally drawn
let FLASH; function flashMat() { if (FLASH) return FLASH; const t = canvas(128, (x, n) => { const c = n / 2; const g = x.createRadialGradient(c, c, 0, c, c, c); g.addColorStop(0, 'rgba(255,250,230,1)'); g.addColorStop(0.25, 'rgba(255,190,90,0.9)'); g.addColorStop(1, 'rgba(255,90,20,0)'); x.fillStyle = g; for (let i = 0; i < 7; i++) { x.save(); x.translate(c, c); x.rotate(i / 7 * 6.283 + R(-0.2, 0.2)); x.beginPath(); x.moveTo(0, -6); x.lineTo(c * R(0.7, 1), 0); x.lineTo(0, 6); x.fill(); x.restore(); } x.beginPath(); x.arc(c, c, c * 0.35, 0, 7); x.fill(); });
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; return (FLASH = new THREE.MeshBasicMaterial({ map: t, color: new THREE.Color(3, 2.2, 1.2), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, side: THREE.DoubleSide, toneMapped: false })); }
export function buildViewmodelHD(id, hands = true) { const M = mats(), g = new THREE.Group(); const spec = (BUILD[id] || BUILD.rifle)(g, M);
  if (!hands) { const m0 = new THREE.Object3D(); g.userData = { muzzle: m0, eject: m0, base: new THREE.Vector3() }; return g; }
  if (!spec.akimbo) {
    rbox(g, 0.05, 0.08, 0.075, 0, -0.065, 0.035, M.glove, 0.018).rotation.x = 0.25; for (let i = 0; i < 3; i++) rbox(g, 0.052, 0.016, 0.03, 0.002, -0.04 - i * 0.02, 0.0, M.glove, 0.007);
    const ra = new THREE.Mesh(new THREE.CylinderGeometry(0.034, 0.042, 0.32, 16), M.sleeve); ra.rotation.x = Math.PI / 2 - 0.25; ra.position.set(0.02, -0.13, 0.22); g.add(ra);
    const lh = rbox(g, 0.055, 0.05, 0.09, id === 'pistol' ? -0.018 : -0.028, id === 'pistol' ? -0.07 : -0.03, spec.lz, M.glove, 0.016); const la = new THREE.Mesh(new THREE.CylinderGeometry(0.034, 0.042, 0.34, 16), M.sleeve); la.rotation.set(Math.PI / 2 - 0.1, 0.35, 0); la.position.set(-0.1, -0.12, spec.lz + 0.22); g.add(la);
  }
  g.traverse((o) => { if (o.isMesh) o.castShadow = false; });
  const muzzle = new THREE.Object3D(); muzzle.position.set(0, id === 'pistol' ? 0.012 : 0.022, spec.muzzle); g.add(muzzle); const eject = new THREE.Object3D(); eject.position.set(0.04, 0.03, spec.eject); g.add(eject);
  const flash = new THREE.Group(); const fm = flashMat(); for (let i = 0; i < 2; i++) { const q = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 0.16), fm); q.rotation.set(Math.PI / 2, i * Math.PI / 2, 0); q.position.z = -0.07; flash.add(q); } const fr = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.12), fm); flash.add(fr); flash.position.copy(muzzle.position); flash.visible = false; g.add(flash);
  let tris = 0; g.traverse((o) => { if (o.isMesh) tris += (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3; });
  g.userData = { muzzle, eject, flash, slide: g.userData.slide, slides: spec.slides || null, muzzles: spec.muzzles || null, pump: g.userData.pump, base: new THREE.Vector3(...spec.pos), tris: Math.round(tris) }; g.userData.base.z -= 0.1; g.userData.base.x -= 0.03; g.position.copy(g.userData.base); g.scale.setScalar(0.9); return g; }
