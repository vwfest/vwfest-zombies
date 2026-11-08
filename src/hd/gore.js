// Close-up zombie detail: dropped/flapping jaw with teeth, hair tufts, scalp wound, exposed ribs + gash,
// torn hanging cloth strips. Merged per part with vertex colours (3 small meshes per zombie, shown only
// on near/mid LOD = at most 5 zombies) so mid-range phones keep their frame rate.
// Also per-spawn variety: skin/cloth palettes, body proportions, shamble style.
import * as THREE from 'three';
import { rnd, pick } from '../util.js';
const C = (h) => new THREE.Color(h);
function part(g, col, x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  g = g.index ? g.toNonIndexed() : g.clone(); const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(sx, sy, sz));
  g.applyMatrix4(m); const n = g.attributes.position.count, c = new Float32Array(n * 3), cc = C(col); for (let i = 0; i < n; i++) { const j = 0.85 + 0.3 * Math.random(); c[i * 3] = cc.r * j; c[i * 3 + 1] = cc.g * j; c[i * 3 + 2] = cc.b * j; }
  g.setAttribute('color', new THREE.BufferAttribute(c, 3)); for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'color'].includes(k)) g.deleteAttribute(k); return g; }
function merge(list) { const out = new THREE.BufferGeometry(); for (const k of ['position', 'normal', 'color']) { const arrs = list.map((g) => g.attributes[k].array); const a = new Float32Array(arrs.reduce((s, x) => s + x.length, 0)); let o = 0; for (const x of arrs) { a.set(x, o); o += x.length; } out.setAttribute(k, new THREE.BufferAttribute(a, 3)); } out.computeBoundingSphere(); return out; }
const BONE = 0x6e6552, TOOTH = 0xa89a6c, GUM = 0x2e0508, BLOOD = 0x1e0204, MEAT = 0x4a0a0c, HAIR = [0x1c1712, 0x3a2a1a, 0x5a5a52, 0x2a2420, 0x6b4a2a];
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d), cone = (r, h) => new THREE.ConeGeometry(r, h, 4), sph = (r) => new THREE.IcosahedronGeometry(r, 0);
// head-bone space, fitted to the baked head's bounds (hb)
function headKit(hb, hair) { const L = [], c = hb.c, r = hb.r, fz = c.z + r.z * 0.86, my = c.y - r.y * 0.42;
  for (let i = 0; i < 6; i++) L.push(part(box(r.x * 0.12, r.y * 0.11, 0.008), TOOTH, (i - 2.5) * r.x * 0.14, my + r.y * 0.04, fz - Math.abs(i - 2.5) * 0.004, 0, 0, rnd(-0.2, 0.2)));
  L.push(part(box(r.x * 0.9, r.y * 0.07, r.z * 0.25), GUM, 0, my + r.y * 0.1, fz - r.z * 0.12));
  L.push(part(sph(r.x * 0.38), MEAT, c.x + rnd(-0.3, 0.3) * r.x, c.y + r.y * 0.9, c.z + r.z * 0.15, 0, 0, 0, 1.2, 0.3, 1)); // scalp wound
  L.push(part(box(r.x * 0.35, 0.005, 0.005), BLOOD, c.x + r.x * 0.62, c.y - r.y * 0.1, c.z + r.z * 0.8, 0, 0.6, 1.1)); // cheek gash
  const n = 6 + ((Math.random() * 5) | 0), hc = pick(HAIR); if (hair) for (let i = 0; i < n; i++) { const a = rnd(0, Math.PI * 2), el = rnd(0.35, 1.2), dx = Math.cos(a) * Math.cos(el), dy = Math.sin(el), dz = Math.sin(a) * Math.cos(el) - 0.25;
    L.push(part(cone(r.x * 0.12, r.y * rnd(0.35, 0.6)), hc, c.x + dx * r.x * 0.95, c.y + dy * r.y * 0.95, c.z + dz * r.z * 0.9, dz * 0.9, 0, -dx * 0.9)); }
  return merge(L); }
function jawKit(hb, skin) { const r = hb.r, w = r.x * 0.9, d = r.z * 0.6; const L = [part(box(w, r.y * 0.16, d), skin, 0, -r.y * 0.08, d / 2), part(box(w * 0.82, r.y * 0.06, d * 0.8), GUM, 0, r.y * 0.01, d / 2)];
  for (let i = 0; i < 5; i++) L.push(part(box(w * 0.13, r.y * 0.11, 0.008), TOOTH, (i - 2) * w * 0.17, r.y * 0.05, d - 0.006 - Math.abs(i - 2) * 0.004));
  return merge(L); }
function chestKit(f, torn) { const L = [part(sph(0.06), BLOOD, 0.035, f.y, f.z - 0.012, 0, 0, 0, 1.1, 1.15, 0.25)];
  for (let i = 0; i < 4; i++) { const y = f.y + 0.04 - i * 0.026; L.push(part(new THREE.CylinderGeometry(0.0055, 0.0055, 0.085 - i * 0.008, 5), BONE, 0.04, y, f.z + 0.002, 0, 0, Math.PI / 2 + 0.22)); }
  L.push(part(box(0.012, 0.1, 0.01), BONE, -0.006, f.y, f.z + 0.002)); // sternum
  L.push(part(box(0.04, 0.02, 0.01), MEAT, 0.06, f.y - 0.07, f.z, 0, 0, 0.6));
  if (torn) for (let i = 0; i < 4; i++) L.push(part(box(rnd(0.03, 0.05), rnd(0.1, 0.18), 0.006), torn, rnd(-0.1, 0.1), f.y - 0.2 - rnd(0, 0.04), f.z - 0.01, rnd(-0.1, 0.1), 0, rnd(-0.25, 0.25)));
  return merge(L); }
function pbox(mesh, name) { const pos = mesh.geometry.attributes.position, si = mesh.geometry.attributes.skinIndex, sw = mesh.geometry.attributes.skinWeight, bi = mesh.skeleton.bones.findIndex((b) => b.name === name), inv = mesh.skeleton.boneInverses[bi], v = new THREE.Vector3(), mn = new THREE.Vector3(9, 9, 9), mx = new THREE.Vector3(-9, -9, -9);
  for (let i = 0; i < pos.count; i++) { let w = 0; for (let k = 0; k < 4; k++) if (si.getComponent(i, k) === bi) w = Math.max(w, sw.getComponent(i, k)); if (w < 0.6) continue; v.fromBufferAttribute(pos, i).applyMatrix4(mesh.bindMatrix).applyMatrix4(inv); mn.min(v); mx.max(v); }
  return { mn, mx, c: mn.clone().add(mx).multiplyScalar(0.5), r: mx.clone().sub(mn).multiplyScalar(0.5) }; }
// front surface of a bone's skin region, in that bone's space
function probe(mesh, name) { const pos = mesh.geometry.attributes.position, si = mesh.geometry.attributes.skinIndex, sw = mesh.geometry.attributes.skinWeight, bi = mesh.skeleton.bones.findIndex((b) => b.name === name), inv = mesh.skeleton.boneInverses[bi], v = new THREE.Vector3(); let z = -1, ys = 0, n = 0;
  for (let i = 0; i < pos.count; i++) { let w = 0; for (let k = 0; k < 4; k++) if (si.getComponent(i, k) === bi) w = Math.max(w, sw.getComponent(i, k)); if (w < 0.5) continue; v.fromBufferAttribute(pos, i).applyMatrix4(mesh.bindMatrix).applyMatrix4(inv); if (Math.abs(v.x) < 0.06) { z = Math.max(z, v.z); ys += v.y; n++; } }
  return { y: n ? ys / n : 0.05, z: z > 0 ? z : 0.12 }; }
const SKIN = [0x5e7a52, 0x6a8460, 0x8a9478, 0x9aa0a4, 0x7a6a8a, 0xa09a6a, 0x6e5a4a, 0x8c7f70], CLOTH = [0x7a2f2f, 0x2f4a7a, 0x5a5a2a, 0x3a3a44, 0x8a6a2a, 0x1f8f78, 0xb2562a, 0xd8d0c0, 0x4a2a4a, 0x2a4a2a, 0x9a8a60], PANTS = [0x2a2f3a, 0x3a2f24, 0x20262a, 0x2c3a2a, 0x46413a, 0x2a3550];
export function addGore(zombies) {
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 }), probes = {}, heads = {};
  zombies.list.forEach((z) => { const near = z.lods[0]; probes[z.variant] = probes[z.variant] || probe(near, 'chest'); const hb = heads[z.variant] = heads[z.variant] || pbox(near, 'head');
    z.gHead = new THREE.Mesh(headKit(hb, Math.random() < 0.8), mat); z.gJaw = new THREE.Mesh(jawKit(hb, 0x56604a), mat); z.gJaw.position.set(hb.c.x, hb.c.y - hb.r.y * 0.5, hb.c.z + hb.r.z * 0.25);
    z.gChest = new THREE.Mesh(chestKit(probes[z.variant], null), mat); z.gChest.position.z = 0.004;
    for (const m of [z.gHead, z.gJaw, z.gChest]) { m.frustumCulled = false; m.visible = false; m.castShadow = false; }
    z.bones.head.add(z.gHead, z.gJaw); z.bones.chest.add(z.gChest); z.lodRoot = near.parent; });
  const os = zombies.spawn.bind(zombies);
  zombies.spawn = (...a) => { const z = os(...a); if (!z) return z; z.style = (Math.random() * 3) | 0; z.jawOpen = rnd(0.18, 0.45); z.ribs = Math.random() < 0.45; z.skull = Math.random() < 0.9;
    if (!z.brute) z.sk.color.setHex(pick(SKIN)); z.sh.color.setHex(pick(CLOTH)); z.pa.color.setHex(pick(PANTS));
    const w = z.brute ? 1.1 : rnd(0.9, 1.14), h = z.brute ? 1 : rnd(0.92, 1.08); if (z.lodRoot) { z.lodRoot.scale.set(w, h, Math.min(1.12, w)); z.lodRoot.position.y = 0; }
    z.twitch = rnd(8, 14); return z; };
  const ou = zombies.update.bind(zombies);
  zombies.update = (dt, time, player, ...r) => { ou(dt, time, player, ...r);
    for (const z of zombies.list) { const on = z.root.visible && z.state !== 'dead' && (z.lods[0].visible || z.lods[1].visible); z.gHead.visible = z.gJaw.visible = on && z.skull !== false; z.gChest.visible = on && !!z.ribs; if (!z.root.visible || z.state === 'dead') continue;
      const b = z.bones, s = z.style | 0, ph = z.phase || 0;
      z.gJaw.rotation.x = (z.jawOpen || 0.4) + Math.max(0, Math.sin(time * 6 + ph)) * 0.25 + (z.attackT > 0 ? 0.3 : 0);
      if (z.state === 'dying') continue;
      if (s === 1) { // dragger: limp arm, heavy head tilt, dragged leg
        b.upperArmL.rotation.set(0.15 + Math.sin(ph) * 0.1, 0, 0.12); b.foreArmL.rotation.x = -0.1; b.head.rotation.z += 0.35; b.shinR.rotation.x += 0.35; b.chest.rotation.z += 0.12;
      } else if (s === 2) { // lurcher: twitchy head, side-to-side lurch, hunched
        b.head.rotation.y += Math.sin(time * z.twitch) * 0.12 * (Math.sin(time * 1.7 + ph) > 0.4 ? 1 : 0); b.chest.rotation.x += 0.22; b.chest.rotation.z += Math.sin(ph * 0.5) * 0.22; b.spine.rotation.z = Math.sin(ph * 0.5) * 0.12; b.head.rotation.x -= 0.25;
      } else b.spine.rotation.z = 0; } };
}
