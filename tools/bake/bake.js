// Offline baker: builds zombie bodies (avatar v6) + light junkyard rides, packs them to compact binaries.
import * as THREE from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { MeshoptSimplifier } from 'meshoptimizer';
import { buildAvatar, buildOnce } from './avatar/v6/avatar2.js';
import { buildGhia } from './v5/ghia.js';
import { buildBug } from './rides/bug/bug.js';
import { buildCamper } from './rides/camper/camper.js';
import { buildWagon } from './rides/wagon/wagon.js';
import { buildSafari } from './rides/safari/safari.js';
const BONES = ['hips', 'spine', 'chest', 'neck', 'head', 'upperArmL', 'foreArmL', 'handL', 'upperArmR', 'foreArmR', 'handR', 'thighL', 'shinL', 'footL', 'thighR', 'shinR', 'footR'];
const BASE = { skin: 2, body: 1, hairStyle: 0, hair: 3, shirt: 4, pattern: 0, pants: 9, outfit: 0, hat: 0, glasses: 0, acc: 0, sex: 0, eyes: 3, facial: 0, age: 1, height: 1, vibe: 0, freckles: 0, tattoo: 0, accSide: 0 };
const VARIANTS = [{}, { sex: 1, body: 0, outfit: 2, hairStyle: 1, hair: 1, shirt: 7 }, { sex: 0, body: 2, outfit: 1, hairStyle: 2, hair: 5, shirt: 2 }, { sex: 1, body: 1, outfit: 4, hairStyle: 4, hair: 0, shirt: 9, pants: 3 }];
// ---- binary writer ----
class W { constructor() { this.parts = []; this.off = 0; this.meta = []; } add(arr) { const pad = (4 - (this.off % 4)) % 4; if (pad) { this.parts.push(new Uint8Array(pad)); this.off += pad; } const u = new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength); this.parts.push(u); const o = this.off; this.off += u.length; return [o, arr.length]; }
  out() { const j = new TextEncoder().encode(JSON.stringify(this.meta)); const head = new Uint32Array([j.length]); const all = new Uint8Array(4 + j.length + ((4 - (j.length % 4)) % 4) + this.off); all.set(new Uint8Array(head.buffer), 0); all.set(j, 4); let o = 4 + j.length + ((4 - (j.length % 4)) % 4); const b0 = o; for (const p of this.parts) { all.set(p, o); o += p.length; } return all; } }
function quant(w, pos) { const b = new THREE.Box3().setFromArray(pos), mn = b.min, sz = b.getSize(new THREE.Vector3()); const q = new Uint16Array(pos.length); for (let i = 0; i < pos.length; i++) { const k = i % 3, s = [sz.x, sz.y, sz.z][k] || 1, m = [mn.x, mn.y, mn.z][k]; q[i] = Math.round(((pos[i] - m) / s) * 65535); } return { pos: w.add(q), min: mn.toArray(), size: sz.toArray() }; }
const nrm8 = (n) => Int8Array.from(n, (v) => Math.round(v * 127));
// ---- avatar flatten ----
function flatAvatar(root, skinHex) {
  const scale = root.scale.x; root.scale.setScalar(1); const bones = root.userData.bones; for (const b of BONES) bones[b].rotation.set(0, 0, 0); root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert(); const subs = [];
  root.traverse((o) => { if (!o.isMesh || !o.visible) return; const mats = Array.isArray(o.material) ? o.material : [o.material];
    if (mats.some((m) => m.transparent || (m.alphaTest > 0 && m.side === THREE.DoubleSide))) return; // hair cards, lashes, cornea: dropped for zombies
    let g = o.geometry.clone(); if (!g.index) g = mergeVertices(g); const M4 = new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld); g.applyMatrix4(M4);
    const n = g.attributes.position.count, si = new Uint8Array(n * 4), sw = new Uint8Array(n * 4);
    if (o.isSkinnedMesh) { const map = o.skeleton.bones.map((b) => BONES.indexOf(b.name)); const a = g.attributes.skinIndex, ww = g.attributes.skinWeight; for (let i = 0; i < n; i++) for (let k = 0; k < 4; k++) { si[i * 4 + k] = map[a.getComponent(i, k)]; sw[i * 4 + k] = Math.round(ww.getComponent(i, k) * 255); } }
    else { let p = o.parent; while (p && !p.isBone) p = p.parent; const bi = p ? BONES.indexOf(p.name) : 0; for (let i = 0; i < n; i++) { si[i * 4] = bi; sw[i * 4] = 255; } }
    const groups = g.groups.length ? g.groups : [{ start: 0, count: g.index.count, materialIndex: 0 }];
    for (const gr of groups) { const m = mats[gr.materialIndex] || mats[0]; const isBody = o.isSkinnedMesh && mats.length === 4; let slot = isBody ? gr.materialIndex : -1;
      if (slot === 3) slot = 1; const col = m.color ? m.color.clone() : new THREE.Color(1, 1, 1); if (!isBody && m.color && col.getHex() === new THREE.Color(skinHex).getHex()) slot = 0; if (o === root.userData.headMesh) slot = 0;
      subs.push({ g, si, sw, start: gr.start, count: gr.count, slot, col: col.getHexString() }); } });
  // merge per material key
  const keys = new Map(); for (const s of subs) { const k = s.slot >= 0 ? 's' + s.slot : 'c' + s.col; if (!keys.has(k)) keys.set(k, []); keys.get(k).push(s); }
  const P = [], N = [], SI = [], SW = [], I = [], groups = []; let base = 0; const vmap = new Map();
  for (const [k, list] of keys) { const st = I.length; for (const s of list) { let m = vmap.get(s.g); if (!m) { m = base; const p = s.g.attributes.position, nn = s.g.attributes.normal; for (let i = 0; i < p.count; i++) { P.push(p.getX(i), p.getY(i), p.getZ(i)); N.push(nn.getX(i), nn.getY(i), nn.getZ(i)); for (let q = 0; q < 4; q++) { SI.push(s.si[i * 4 + q]); SW.push(s.sw[i * 4 + q]); } } base += p.count; vmap.set(s.g, m); } for (let i = s.start; i < s.start + s.count; i++) I.push(s.g.index.getX(i) + m); }
    groups.push({ start: st, count: I.length - st, slot: list[0].slot, col: list[0].col }); }
  const bonesOut = BONES.map((b) => ({ n: b, p: BONES.indexOf(bones[b].parent?.name ?? ''), t: bones[b].position.toArray() }));
  return { P, N, SI, SW, I, groups, bones: bonesOut, scale };
}
function decimate(f, target) { const tot = f.I.length / 3; if (tot <= target) return f; const pos = Float32Array.from(f.P); const I = [], groups = [];
  for (const gr of f.groups) { const idx = Uint32Array.from(f.I.slice(gr.start, gr.start + gr.count)); const t = Math.max(12, Math.floor((gr.count / 3) * target / tot)) * 3;
    let [o] = MeshoptSimplifier.simplify(idx, pos, 3, t, 0.05, []); if (o.length > t * 1.2) o = MeshoptSimplifier.simplifySloppy(idx, pos, 3, null, t, 0.08)[0];
    const st = I.length; for (const v of o) I.push(v); groups.push({ ...gr, start: st, count: o.length }); }
  return { ...f, I, groups: groups.filter((g) => g.count > 0) }; }
function packAvatar(w, f, tag) { const q = quant(w, f.P); w.meta.push({ tag, kind: 'av', ...q, nrm: w.add(nrm8(f.N)), si: w.add(Uint8Array.from(f.SI)), sw: w.add(Uint8Array.from(f.SW)), idx: w.add(Uint16Array.from(f.I)), groups: f.groups, bones: f.bones, scale: f.scale, tris: f.I.length / 3 }); }
// ---- cars ----
function flatCar(root, target) {
  root.updateMatrixWorld(true); const P = [], N = [], C = [], PP = [], PN = [], PU = [];
  root.traverse((o) => { if (!o.isMesh || !o.visible) return; const mats = Array.isArray(o.material) ? o.material : [o.material]; let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone(); g.applyMatrix4(o.matrixWorld); if (!g.attributes.normal) g.computeVertexNormals();
    const groups = g.groups.length ? g.groups : [{ start: 0, count: g.attributes.position.count, materialIndex: 0 }];
    for (const gr of groups) { const m = mats[gr.materialIndex] || mats[0]; const bb = new THREE.Box3(); const p = g.attributes.position, n = g.attributes.normal, uv = g.attributes.uv;
      const plate = m.map && m.map.image && m.map.image.width === 256 && m.map.image.height < 140;
      if (plate && uv) { for (let i = gr.start; i < gr.start + gr.count; i++) { PP.push(p.getX(i), p.getY(i), p.getZ(i)); PN.push(n.getX(i), n.getY(i), n.getZ(i)); PU.push(uv.getX(i), uv.getY(i)); } continue; }
      let c = m.color ? m.color.clone() : new THREE.Color(0.5, 0.5, 0.5); if (m.map) c.multiplyScalar(0.45); if (m.transparent) c = new THREE.Color(0.05, 0.07, 0.09); if (m.metalness > 0.8 && m.roughness < 0.3) c.lerp(new THREE.Color(0.75, 0.75, 0.78), 0.3);
      for (let i = gr.start; i < gr.start + gr.count; i++) { P.push(p.getX(i), p.getY(i), p.getZ(i)); N.push(n.getX(i), n.getY(i), n.getZ(i)); C.push(c.r, c.g, c.b); } } });
  let g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(C, 3)); g.deleteAttribute('normal'); g = mergeVertices(g, 1e-4);
  const src = g.index.array, pos = g.attributes.position.array, col = g.attributes.color.array; const byCol = new Map();
  for (let i = 0; i < src.length; i += 3) { const v = src[i]; const k = Math.round(col[v * 3] * 255) + ',' + Math.round(col[v * 3 + 1] * 255) + ',' + Math.round(col[v * 3 + 2] * 255); if (!byCol.has(k)) byCol.set(k, []); byCol.get(k).push(src[i], src[i + 1], src[i + 2]); }
  const total = src.length / 3, out = [];
  for (const tri of byCol.values()) { const n = tri.length / 3; if (n * 1.0 / total < 0.004) continue; // drop tiny specks (bolts, badges) at junkyard distance
    const t = Math.max(6, Math.round(n * target / total)) * 3; const idx = Uint32Array.from(tri); let [o] = MeshoptSimplifier.simplify(idx, pos, 3, t, 0.03, ['LockBorder']);
    if (o.length > t * 1.3) [o] = MeshoptSimplifier.simplify(idx, pos, 3, t, 0.06, []); if (o.length > t * 1.3) o = MeshoptSimplifier.simplifySloppy(idx, pos, 3, null, t, 0.06)[0]; for (const v of o) out.push(v); }
  // flat-ish normals: unindex + compute, then re-merge by angle
  let s = new THREE.BufferGeometry(); s.setAttribute('position', g.attributes.position); s.setAttribute('color', g.attributes.color); s.setIndex(out); s = s.toNonIndexed(); s.computeVertexNormals(); s = mergeVertices(s, 1e-4);
  return { s, plate: { P: PP, N: PN, U: PU } };
}
function packCar(w, c, tag) { const s = c.s; const q = quant(w, s.attributes.position.array); const col = Uint8Array.from(s.attributes.color.array, (v) => Math.round(Math.min(1, v) * 255));
  const m = { tag, kind: 'car', ...q, nrm: w.add(nrm8(s.attributes.normal.array)), col: w.add(col), idx: w.add(Uint16Array.from(s.index.array)), tris: s.index.count / 3 };
  if (c.plate.P.length) m.plate = { pos: w.add(Float32Array.from(c.plate.P)), nrm: w.add(Float32Array.from(c.plate.N)), uv: w.add(Float32Array.from(c.plate.U)) }; w.meta.push(m); }
const CARS = {
  bug: () => buildBug({ model: 0, paint: 'solid', c1: '#888888', c2: null, wheels: 1, stance: 1, extras: 0, plate: 1, tier: 1 }, { lod: 1 }),
  baja: () => buildBug({ model: 5, paint: 'solid', c1: '#888888', c2: null, wheels: 1, stance: 3, extras: 33, plate: 1, tier: 1 }, { lod: 1, baja: true }),
  ghia: () => buildGhia({ model: 2, paint: 'solid', c1: '#888888', c2: null, wheels: 2, stance: 1, extras: 0, plate: 1, tier: 1 }, { lod: 1 }),
  camper: () => buildCamper({ model: 1, paint: 'two', c1: '#888888', c2: '#fefefe', wheels: 0, stance: 1, extras: 0, plate: 1, tier: 1 }, { lod: 1 }),
  wagon: () => buildWagon({ model: 4, paint: 'solid', c1: '#888888', c2: null, wheels: 3, stance: 1, extras: 0, plate: 1, tier: 1 }, { lod: 1 }),
  safari: () => buildSafari({ model: 3, paint: 'solid', c1: '#888888', c2: null, wheels: 1, stance: 1, extras: 0, plate: 1, tier: 1 }, { lod: 1 }),
};
window.bake = async () => { await MeshoptSimplifier.ready; const log = [];
  const wz = new W(); for (let v = 0; v < VARIANTS.length; v++) { const av = { ...BASE, ...VARIANTS[v] };
    const near = await buildAvatar(av, { lod: 1 }), mid = await buildOnce(av, { lod: 2 }, 2400), far = await buildOnce(av, { lod: 2 }, 400);
    for (const [n, r] of [['near', near], ['mid', mid], ['far', far]]) { let f = flatAvatar(r, '#' + new THREE.Color().getHexString()); if (n === 'mid') f = decimate(f, 4800); if (n === 'far') f = decimate(f, 950); packAvatar(wz, f, v + ':' + n); log.push(`z${v} ${n} ${f.I.length / 3} tris, ${f.groups.length} groups`); } }
  const wc = new W(); for (const [k, fn] of Object.entries(CARS)) { const c = flatCar(fn(), 2000); packCar(wc, c, k); log.push(`car ${k} ${c.s.index.count / 3} tris`); }
  const b64 = (u) => { let s = ''; for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000)); return btoa(s); };
  return { log, z: b64(wz.out()), c: b64(wc.out()) }; };
document.title = 'ready';
