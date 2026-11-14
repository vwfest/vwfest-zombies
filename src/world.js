import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Mats, makeBeetle, makeBus, makeBeetleLo, makeBusLo, makeTireStack, makeDrum, makeCrate, makePole, makeCactus, makeRock, randPaint } from './props.js';
import { setYardCars } from './hd/cars.js';
import { buildViewmodel, WEAPONS } from './weapons.js';
import { rnd, pick, clamp, TAU } from './util.js';
import { areaOf, YARD } from './nav.js';

export const DOOR_Z = -24;
export { areaOf };

function labelTex(lines, color = '#18d1a0', w = 512, h = 256) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d');
  g.fillStyle = 'rgba(8,12,16,0.82)'; g.fillRect(0, 0, w, h); g.strokeStyle = color; g.lineWidth = 6; g.strokeRect(8, 8, w - 16, h - 16);
  g.textAlign = 'center'; g.textBaseline = 'middle';
  lines.forEach((l, i) => { g.font = `${l.w || 700} ${l.s}px system-ui, "Segoe UI", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji"`; g.fillStyle = l.c || '#fff'; g.fillText(l.t, w / 2, l.y); });
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}

// Does this device draw 💣 as a real colour emoji in a canvas? (a missing glyph draws a mono box or nothing)
function emojiOK() {
  try { const c = document.createElement('canvas'); c.width = c.height = 32; const g = c.getContext('2d'); g.textBaseline = 'middle'; g.textAlign = 'center';
    g.font = '28px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",system-ui,sans-serif'; g.fillStyle = '#ffffff'; g.fillText('\u{1F4A3}', 16, 16);
    const d = g.getImageData(0, 0, 32, 32).data; let col = 0; for (let i = 0; i < d.length; i += 4) if (d[i + 3] > 60 && Math.max(d[i], d[i + 1], d[i + 2]) - Math.min(d[i], d[i + 1], d[i + 2]) > 40) col++;
    return col > 12; } catch (e) { return false; }
}

export class World {
  constructor(scene, T, tier) {
    this.scene = scene; this.T = T; this.M = new Mats(T); this.tier = tier;
    this.colliders = []; this.windows = []; this.buys = []; this.lamps = []; this.dyn = []; this.fall = [];
    this.doorInfos = []; this.doors = []; this.missionMeshes = new Map(); this.mapId = 'junkyard';
    this.staticGroup = new THREE.Group(); this.root = new THREE.Group(); scene.add(this.root);
    this.build();
    this.batch();
    this.dress(tier);
  }
  // Medium/High only: dirt, galvanized fence and car paint stop sharing one flat response, and the existing lamps fall off sooner. Low keeps the previous numbers.
  dress(tier = this.tier) {
    const hi = tier > 0, M = this.M;
    M.sand.color.setHex(hi ? 0xa89078 : 0xcfc2b0); M.sand.bumpScale = hi ? 5.5 : 3; M.sand.roughness = hi ? 0.96 : 0.97;
    M.concrete.color.setHex(hi ? 0xc8baa8 : 0xffffff); M.concrete.bumpScale = hi ? 2.8 : 1.5; M.concrete.roughness = hi ? 0.96 : 0.88; M.concrete.metalness = hi ? 0 : 0.02;
    M.fence.roughness = hi ? 0.42 : 1; M.fence.metalness = hi ? 0.84 : 0.75; M.fence.bumpScale = hi ? 4.2 : 2.5;
    M.fenceDark.roughness = hi ? 0.6 : 1; M.fenceDark.metalness = hi ? 0.55 : 0.7;
    for (const m of Object.values(M.cache)) if (m.userData.paint) { m.roughness = hi ? 0.4 : 1; m.metalness = hi ? 0.25 : 0.55; }
    this.lampReach = hi ? 18 : 30; this.lampDecay = hi ? 2 : 1.7; this.lampBase = hi ? 90 : 95;
    if (this.moon) this.moon.intensity = hi ? 1.4 : 1.7;
    if (this.lampPool) for (const l of this.lampPool) { l.distance = this.lampReach; l.decay = this.lampDecay; }
    setYardCars(tier);
  }
  // ---- collider helpers ----
  addCol(x0, x1, z0, z1, y1 = 3, o = {}) { const c = { x0, x1, z0, z1, y0: o.y0 || 0, y1, ...o }; this.colliders.push(c); return c; }
  box(w, h, d, x, y, z, mat, o = {}) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); m.castShadow = o.cast !== false; m.receiveShadow = true; (o.dynamic ? this.root : this.staticGroup).add(m); return m; }
  place(obj, x, z, rotY = 0, collide = true) {
    obj.position.x += x; obj.position.z += z; obj.rotation.y = rotY; obj.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } }); this.staticGroup.add(obj);
    const hd = obj.userData.hd; if (hd) { // remember where HD props go; the procedural stand-ins are batched separately so they can be hidden
      obj.updateMatrix(); obj.traverse((m) => { if (m.isMesh) m.userData.hdProp = true; });
      const items = hd.kind === 'tyre' ? obj.children.map((c) => new THREE.Matrix4().makeTranslation(c.position.x, c.position.y, c.position.z).premultiply(obj.matrix).multiply(new THREE.Matrix4().makeRotationY(rnd(TAU)))) : [obj.matrix.clone()];
      for (const m of items) (this.hdProps || (this.hdProps = [])).push({ ...hd, m }); }
    if (collide && obj.userData.size) { let [w, h, d] = obj.userData.size; if (Math.abs(Math.sin(rotY)) > 0.7) [w, d] = [d, w]; this.addCol(x - w / 2 + 0.05, x + w / 2 - 0.05, z - d / 2 + 0.05, z + d / 2 - 0.05, h); }
    return obj;
  }
  build() {
    const { M, T, scene } = this;
    this.mapId = 'junkyard';
    this.buildSky(); this.buildGround();
    // ---- perimeter + divider walls with window openings ----
    const H = 3.2, th = 0.4;
    const wallX = (z, xa, xb, opens = [], mat = M.fence) => this.wall('x', z, xa, xb, opens, H, th, mat);
    const wallZ = (x, za, zb, opens = [], mat = M.fence) => this.wall('z', x, za, zb, opens, H, th, mat);
    const gate = (id) => { const g = YARD.gates.find((q) => q.id === id); return { c: g.axis === 'x' ? g.x : g.z, id: g.id, door: true, w: g.w, price: g.price, name: g.name, blurb: g.blurb, areas: g.areas, stand: g.stand }; };
    wallX(24, -24, 24, [{ c: -10, id: 'S1', area: 'A' }, { c: 11, id: 'S2', area: 'A' }]);
    wallZ(24, -24, 24, [{ c: -4, id: 'E1', area: 'A' }, gate('AC')]);
    wallZ(-24, -24, 24, [{ c: 6, id: 'W1', area: 'A' }, gate('AD')]);
    wallX(-24, -24, 24, [gate('AB')]);
    wallZ(24, -52, -24, [{ c: -40, id: 'E2', area: 'B' }]);
    wallZ(-24, -52, -24, [{ c: -38, id: 'W2', area: 'B' }, gate('SD')]);
    wallX(-52, -24, 24, [{ c: -12, id: 'N1', area: 'B' }, gate('BE')]);
    // ---- interior floors ----
    const fl = (w, d, x, z) => { const f = new THREE.Mesh(new THREE.PlaneGeometry(w, d), M.concrete); f.rotation.x = -Math.PI / 2; f.position.set(x, 0.015, z); f.receiveShadow = true; this.staticGroup.add(f); };
    fl(48, 48, 0, 0); fl(48, 28, 0, -38);
    this.buildLots(wallX, wallZ, fl);
    // ---- gate (dynamic) + neon sign ----
    this.buildGate();
    // ---- props: area A ----
    const P = this.place.bind(this);
    P(makeBeetle(M, 0x5bb5a0, { door: true }), -9, -9, 0.2 * 0); P(makeBeetle(M, 0xd9792a, { missing: true, tilt: 0.04 }), 13, -10, Math.PI / 2);
    P(makeBus(M, 0x5e8fc0), 9, 11, Math.PI / 2); P(makeBus(M, 0xd9792a, 0xe6dcc0, { missing: true }), -15, 1, 0);
    P(makeBeetle(M, 0xe0d19a), -4, 16, Math.PI / 2 + 0.0); P(makeBeetle(M, 0xb23a2e, { tilt: -0.05 }), 19, 16, 0);
    P(makeBus(M, 0x8aa84a, 0xe6dcc0), 3, -14, Math.PI / 2);
    for (const [x, z, n] of [[17, 2, 5], [-20, -5, 4], [-3, -4, 3], [-19, 19, 6], [21, -20, 4]]) P(makeTireStack(M, n), x, z);
    for (const [x, z, c] of [[5, 19, 0x3a6ea5], [6.2, 19.8, 0xb23a2e], [4.4, 20.6, 0x8aa84a], [-1, -19, 0xd9792a], [0.2, -20, 0x3a6ea5]]) P(makeDrum(M, c), x, z);
    P(makeCrate(M, 1.1), -21, 12); P(makeCrate(M, 0.9), -20.8, 13.2); P(makeCrate(M, 1.3), 21, 9); P(makeCrate(M, 1.0), 20.4, 10.4);
    // shack in A (NE-ish)
    this.shack(18, -17, 6, 5);
    // ---- props: area B ----
    P(makeBeetle(M, 0xcfcfc4, { missing: true }), -12, -36, Math.PI / 2); P(makeBeetle(M, 0x5bb5a0, { tilt: 0.05 }), 14, -46, 0.3 * 0); P(makeBus(M, 0xb23a2e, 0xe6dcc0), 6, -35, 0);
    P(makeBus(M, 0x5bb5a0, 0xe6dcc0, { tilt: 0.04 }), -10, -47, Math.PI / 2); P(makeBeetle(M, 0xd2a13a, { door: true }), 0, -43, Math.PI / 2);
    for (const [x, z, n] of [[18, -30, 5], [-20, -29, 3], [19, -36, 4], [-3, -30, 4]]) P(makeTireStack(M, n), x, z);
    for (const [x, z, c] of [[-19, -49, 0xd9792a], [-18, -50, 0x3a6ea5], [20, -50, 0xb23a2e]]) P(makeDrum(M, c), x, z);
    P(makeCrate(M, 1.2), 21, -46); P(makeCrate(M, 1.0), -21, -42); P(makeCrate(M, 0.9), 20.6, -47.4);
    // ---- lamp poles ----
    for (const [x, z, t, r] of [[-11, 11, 0, 0.6], [14, 5, 0, 2.6], [-13, -12, 1, -0.5], [10, -19, 0, 3.4], [-8, -30, 0, 0.3], [11, -40, 1, 3.0], [-4, -49, 0, 1.4]]) {
      const p = makePole(this.M, !!t); p.position.set(x, 0, z); p.rotation.y = r; p.traverse((m) => { if (m.isMesh) m.castShadow = !m.userData.bulb; }); p.updateMatrixWorld(true);
      this.addCol(x - 0.2, x + 0.2, z - 0.2, z + 0.2, 5);
      const bp = p.userData.bulbPos.clone().applyMatrix4(p.matrixWorld); this.lamps.push({ pos: bp, teal: !!t, ph: rnd(100) }); this.staticGroup.add(p);
    }
    // ---- wall-buys, crate, scenery ----
    this.wallBuy('smg', -14, DOOR_Z + 0.25, 0); this.wallBuy('shotgun', 23.75, -15, -Math.PI / 2); this.wallBuy('rifle', -23.75, -44, Math.PI / 2);
    this.wallBuy('akimbo', 23.75, 8, -Math.PI / 2); this.wallBuy('lever', -23.75, -32, Math.PI / 2); this.wallBuy('nailer', 10, 23.65, Math.PI); this.nadeBuy(4, 16.2, 0);
    this.wallBuy('smg', 49.65, 12, -Math.PI / 2); this.wallBuy('shotgun', -49.65, -16, Math.PI / 2); this.wallBuy('rifle', 18, -75.65, 0);
    this.buildCrate(-17.5, 14.5);
    this.scenery();
    // lights
    this.buildLights();
  }
  // ---- wall with openings ----
  wall(axis, c, a, b, opens, H, th, mat) {
    const { M } = this; const ow = (o) => o.w || 3.2; const sorted = [...opens].sort((p, q) => p.c - q.c); let cur = a;
    const seg = (s0, s1) => { if (s1 - s0 < 0.05) return; const L = s1 - s0, m = (s0 + s1) / 2; let n = Math.max(1, Math.ceil(L / 8)); for (let i = 0; i < n; i++) { const p0 = s0 + (L * i) / n, p1 = s0 + (L * (i + 1)) / n; this.wseg(axis, c, p0, p1, H, th, mat); } };
    for (const o of sorted) { seg(cur, o.c - ow(o) / 2); this.opening(axis, c, o, H, th, mat); cur = o.c + ow(o) / 2; }
    seg(cur, b);
  }
  wseg(axis, c, p0, p1, H, th, mat) {
    const L = p1 - p0, m = (p0 + p1) / 2;
    if (axis === 'x') { this.box(L, H, th, m, H / 2, c, mat); this.addCol(p0, p1, c - th / 2, c + th / 2, H); this.box(0.35, H + 0.5, 0.55, p0, (H + 0.5) / 2, c, this.M.fenceDark); this.box(L, 0.1, 0.12, m, H + 0.4, c, this.M.fenceDark); }
    else { this.box(th, H, L, c, H / 2, m, mat); this.addCol(c - th / 2, c + th / 2, p0, p1, H); this.box(0.55, H + 0.5, 0.35, c, (H + 0.5) / 2, p0, this.M.fenceDark); this.box(0.12, 0.1, L, c, H + 0.4, m, this.M.fenceDark); }
  }
  opening(axis, c, o, H, th, mat) {
    const { M } = this, w = o.w || 3.2;
    if (o.door) { // gate gap: posts only; the gate itself is dynamic
      const gx = axis === 'x' ? o.c : c, gz = axis === 'x' ? c : o.c;
      if (axis === 'x') { this.box(0.5, H + 0.8, 0.7, gx - w / 2, (H + 0.8) / 2, gz, M.fenceDark); this.box(0.5, H + 0.8, 0.7, gx + w / 2, (H + 0.8) / 2, gz, M.fenceDark); }
      else { this.box(0.7, H + 0.8, 0.5, gx, (H + 0.8) / 2, gz - w / 2, M.fenceDark); this.box(0.7, H + 0.8, 0.5, gx, (H + 0.8) / 2, gz + w / 2, M.fenceDark); }
      const id = o.id === 'DOOR' ? 'AB' : (o.id || 'AB');
      const areas = o.areas || ['A', 'B'];
      const stand = o.stand || (axis === 'x' ? { A: { x: gx, z: gz + 1.8 }, B: { x: gx, z: gz - 1.8 } } : { A: { x: gx - 1.8, z: gz }, B: { x: gx + 1.8, z: gz } });
      this.doorInfos.push({ id, x: gx, z: gz, w, axis, price: o.price || 1250, name: o.name || 'Back lot', blurb: o.blurb || 'The back lot awaits', areas, stand });
      return;
    }
    let n = axis === 'x' ? { x: 0, z: c > 0 ? 1 : -1 } : { x: c > 0 ? 1 : -1, z: 0 };
    if (axis === 'x' && c === -52) n.z = -1;
    if (o.outN) n = axis === 'x' ? { x: 0, z: o.outN } : { x: o.outN, z: 0 };
    const cx = axis === 'x' ? o.c : c, cz = axis === 'x' ? c : o.c;
    const sill = 0.95, top = 2.5, len = w;
    const dims = (l, h, y) => (axis === 'x' ? [l, h, th] : [th, h, l]);
    const [sw, sh, sd] = dims(len, sill, 0); this.box(sw, sh, sd, cx, sill / 2, cz, mat);
    const [tw, th2, td] = dims(len, H - top, 0); this.box(tw, th2, td, cx, (H + top) / 2, cz, mat);
    // frame
    const fr = M.wood; for (const s of [-1, 1]) { const [fw, fh, fd] = dims(0.2, top - sill, 0); this.box(axis === 'x' ? 0.2 : th + 0.12, top - sill, axis === 'x' ? th + 0.12 : 0.2, axis === 'x' ? cx + s * (len / 2 - 0.1) : cx, (sill + top) / 2, axis === 'x' ? cz : cz + s * (len / 2 - 0.1), fr); }
    this.addCol(axis === 'x' ? cx - len / 2 : cx - th / 2, axis === 'x' ? cx + len / 2 : cx + th / 2, axis === 'x' ? cz - th / 2 : cz - len / 2, axis === 'x' ? cz + th / 2 : cz + len / 2, sill, { bulletOnly: false });
    this.addCol(axis === 'x' ? cx - len / 2 : cx - th / 2, axis === 'x' ? cx + len / 2 : cx + th / 2, axis === 'x' ? cz - th / 2 : cz - len / 2, axis === 'x' ? cz + th / 2 : cz + len / 2, H, { y0: top, bulletOnly: true });
    this.addCol(axis === 'x' ? cx - len / 2 : cx - th / 2, axis === 'x' ? cx + len / 2 : cx + th / 2, axis === 'x' ? cz - th / 2 - 0.02 : cz - len / 2, axis === 'x' ? cz + th / 2 + 0.02 : cz + len / 2, H, { noBullet: true });
    // planks
    const planks = []; const ry = Math.atan2(n.x, n.z);
    for (let i = 0; i < 6; i++) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(len - 0.15, 0.2, 0.07), M.wood); const home = new THREE.Vector3(cx + n.x * 0.23, sill + 0.16 + i * 0.255, cz + n.z * 0.23);
      p.position.copy(home); p.rotation.set(0, ry, rnd(-0.05, 0.05)); p.castShadow = true; p.receiveShadow = true; p.userData = { home, rotZ: p.rotation.z, ry }; this.root.add(p); planks.push(p);
    }
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(axis === 'x' ? 0.3 : 0.06, 0.06, axis === 'x' ? 0.06 : 0.3), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.8, 0.3, 0.15), toneMapped: false })); lamp.position.set(cx - n.x * 0.3, 2.85, cz - n.z * 0.3); lamp.userData.noAO = true; this.root.add(lamp);
    this.windows.push({ id: o.id, area: o.area || areaOf(cx, cz, this.mapId), c: new THREE.Vector3(cx, 0, cz), n, t: { x: -n.z, z: n.x }, out: { x: cx + n.x * 1.5, z: cz + n.z * 1.5 }, in: { x: cx - n.x * 1.6, z: cz - n.z * 1.6 }, planks, count: 6, attackers: 0, cool: 0, axis, lamp });
  }
  removePlank(w) { if (w.count <= 0) return false; const p = w.planks[w.count - 1]; w.count--; p.userData.fall = { vx: w.n.x * rnd(1, 3) + rnd(-1, 1), vy: rnd(1, 3), vz: w.n.z * rnd(1, 3) + rnd(-1, 1), t: 0, rx: rnd(-6, 6), rz: rnd(-6, 6) }; this.fall.push(p); return true; }
  addPlank(w) { if (w.count >= 6) return false; const p = w.planks[w.count]; w.count++; p.userData.fall = null; const i = this.fall.indexOf(p); if (i >= 0) this.fall.splice(i, 1); p.visible = true; p.position.copy(p.userData.home); p.rotation.set(0, p.userData.ry, p.userData.rotZ); return true; }
  // ---- gates (AB is also exposed as this.door) ----
  buildGate() { this.buildGates(); }
  buildGates() {
    const { M } = this; const stripe = new THREE.MeshStandardMaterial({ color: 0xe8b82e, roughness: 0.6, metalness: 0.3 });
    this.doors = [];
    for (const d of this.doorInfos) {
      const alongX = d.axis !== 'z';
      const g = new THREE.Group();
      const panel = new THREE.Mesh(new THREE.BoxGeometry(alongX ? d.w : 0.25, 3.4, alongX ? 0.25 : d.w), M.fence);
      panel.position.y = 1.7; panel.castShadow = panel.receiveShadow = true; g.add(panel);
      const n = Math.max(3, Math.round(d.w));
      for (let i = 0; i < n; i++) {
        const s = new THREE.Mesh(new THREE.BoxGeometry(alongX ? 0.42 : 0.05, 3.4, alongX ? 0.05 : 0.42), i % 2 ? stripe : M.fenceDark);
        const u = -d.w / 2 + (d.w * (i + 0.5)) / n;
        s.position.set(alongX ? u : 0.15, 1.7, alongX ? 0.15 : u); g.add(s);
      }
      g.position.set(d.x, 0, d.z); this.root.add(g);
      const col = alongX
        ? this.addCol(d.x - d.w / 2, d.x + d.w / 2, d.z - 0.2, d.z + 0.2, 3.4, { door: true, gate: d.id })
        : this.addCol(d.x - 0.2, d.x + 0.2, d.z - d.w / 2, d.z + d.w / 2, 3.4, { door: true, gate: d.id });
      const door = { id: d.id, mesh: g, open: false, t: 0, price: d.price, name: d.name, blurb: d.blurb, areas: d.areas, stand: d.stand, axis: d.axis, col, pos: { x: d.x, z: d.z }, x: d.x, z: d.z };
      this.doors.push(door);
      if (d.id === 'AB') {
        const s = new THREE.Mesh(new THREE.PlaneGeometry(7.5, 1.9), new THREE.MeshBasicMaterial({ map: this.T.sign, color: new THREE.Color(1.9, 1.9, 1.9), toneMapped: false }));
        s.position.set(d.x, 5.0, d.z + 0.45); this.staticGroup.add(s);
        for (const sx of [-1, 1]) this.box(0.18, 4.4, 0.18, d.x + sx * 3.5, 2.5, d.z + 0.4, M.fenceDark);
        this.signPos = new THREE.Vector3(d.x, 5.0, d.z + 1);
      } else {
        const face = d.axis === 'z' ? Math.PI / 2 : 0;
        const lab = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 0.7), new THREE.MeshBasicMaterial({ map: labelTex([{ t: d.name.toUpperCase(), s: 64, y: 128, w: 800, c: '#ffd36b' }], '#ffd36b', 512, 256), toneMapped: false, color: new THREE.Color(0.9, 0.9, 0.9) }));
        lab.position.set(d.x, 4.15, d.z); lab.rotation.y = face; this.root.add(lab);
      }
    }
    this.door = this.doors.find((d) => d.id === 'AB') || this.doors[0];
  }
  buildLots(wallX, wallZ, fl) {
    const { M } = this; const P = this.place.bind(this);
    // Lot C — fuel yard, east of A. Shared west wall is A's east fence (gate AC).
    wallZ(50, 2, 22, [{ c: 8, id: 'C1', area: 'C' }, { c: 16, id: 'C2', area: 'C' }]);
    wallX(22, 24, 50, [{ c: 36, id: 'C3', area: 'C' }]);
    wallX(2, 24, 50, []);
    fl(26, 20, 37, 12);
    P(makeBeetle(M, 0xd2a13a, { missing: true }), 32, 16, 0.4); P(makeBus(M, 0xc45a2a, 0xe6dcc0), 30, 8, Math.PI / 2);
    for (const [x, z, c] of [[40, 18, 0xb23a2e], [41.2, 17.2, 0xd9792a], [39.2, 18.8, 0x3a6ea5], [44, 7, 0x8aa84a]]) P(makeDrum(M, c), x, z);
    P(makeCrate(M, 1.1), 46, 14); P(makeCrate(M, 0.9), 46.8, 15.1);
    this.lampAt(44, 14, 1, 1.2);
    // Lot D — bus barn, west of A and the south edge of B. Gates AD and SD.
    wallZ(-50, -34, -2, [{ c: -10, id: 'D1', area: 'D' }, { c: -24, id: 'D2', area: 'D' }]);
    wallX(-2, -50, -24, []);
    wallX(-34, -50, -24, [{ c: -38, id: 'D3', area: 'D' }]);
    fl(26, 32, -37, -18);
    P(makeBus(M, 0x5e8fc0, 0xe6dcc0), -38, -10, 0); P(makeBus(M, 0xd9792a, 0xcfc6ae, { tilt: 0.03 }), -38, -24, 0);
    P(makeBeetle(M, 0x8aa84a, { door: true }), -44, -16, Math.PI / 2);
    P(makeCrate(M, 1.2), -46, -6); P(makeCrate(M, 1.0), -32, -30);
    this.lampAt(-44, -22, 0, 0.4);
    // Lot E — radio yard, north-east of B. Gate BE.
    wallX(-76, 4, 24, [{ c: 8, id: 'EN', area: 'E' }]);
    wallZ(4, -76, -52, [{ c: -68, id: 'EW', area: 'E', outN: -1 }]);
    wallZ(24, -76, -52, [{ c: -64, id: 'EE', area: 'E' }]);
    fl(20, 24, 14, -64);
    P(makeBeetle(M, 0xcfcfc4, { missing: true, tilt: -0.04 }), 10, -64, 0.6); P(makeBus(M, 0x3a6ea5, 0xe6dcc0), 18, -68, Math.PI / 2);
    P(makeCrate(M, 1.0), 8, -72); P(makeDrum(M, 0xd9792a), 20, -58); P(makeDrum(M, 0x3a6ea5), 21, -57.2);
    this.lampAt(10, -70, 1, 2.2);
    this.buildDressing();
  }
  lampAt(x, z, t, r) {
    const p = makePole(this.M, !!t); p.position.set(x, 0, z); p.rotation.y = r; p.traverse((m) => { if (m.isMesh) m.castShadow = !m.userData.bulb; }); p.updateMatrixWorld(true);
    this.addCol(x - 0.2, x + 0.2, z - 0.2, z + 0.2, 5);
    const bp = p.userData.bulbPos.clone().applyMatrix4(p.matrixWorld); this.lamps.push({ pos: bp, teal: !!t, ph: rnd(100) }); this.staticGroup.add(p);
  }
  buildDressing() {
    const { M } = this; const job = (id) => YARD.jobs.find((j) => j.id === id);
    const fuel = job('fuel').pad, carb = job('carb').pad, radio = job('radio').pad, parts = job('parts').pad;
    // generator just inside A, in front of gate AC
    this.box(1.5, 0.9, 0.9, 21.05, 0.45, 12, M.fenceDark); this.box(1.6, 0.12, 1.0, 21.05, 0.96, 12, M.fence);
    this.addCol(20.3, 21.8, 11.55, 12.45, 1.05);
    const gen = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.16, 0.16), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.2, 2.4, 1.2), toneMapped: false }));
    gen.position.set(20.2, 1.05, 12); gen.userData.noAO = true; this.root.add(gen);
    // carb bench in B, clear of the side-gate stand
    this.box(1.3, 0.75, 0.7, -19.5, 0.38, -31.15, M.wood); this.addCol(-20.2, -18.8, -31.55, -30.75, 0.9);
    // scrap bench in C
    this.box(1.4, 0.8, 0.7, 42.2, 0.4, 6.3, M.wood); this.addCol(41.5, 42.9, 5.95, 6.65, 0.95);
    // radio mast in B. The hold pad is beside the pole, not inside it.
    this.box(0.18, 5.2, 0.18, 9.4, 2.6, -43.4, M.fenceDark); this.box(1.1, 0.16, 0.16, 9.4, 4.9, -43.4, M.fence);
    this.box(0.7, 0.45, 0.4, 6.7, 0.9, -43.1, M.fenceDark); this.addCol(9.25, 9.55, -43.55, -43.25, 5.2);
    const ant = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 0.35, 0.25), toneMapped: false }));
    ant.position.set(9.9, 5.05, -43.4); ant.userData.noAO = true; this.root.add(ant);
    // radio yard mast so lot E reads as the transmitter once the gate opens
    this.box(0.16, 6.4, 0.16, 16, 3.2, -62, M.fenceDark); this.box(1.4, 0.1, 0.1, 16, 6.2, -62, M.fence);
    this.addCol(15.85, 16.15, -62.15, -61.85, 6.4);
    const mark = (id, x, z, mesh) => { mesh.position.set(x, 0, z); mesh.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } }); this.root.add(mesh); this.missionMeshes.set(id, mesh); };
    const can = () => { const g = new THREE.Group(); g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.18, 0.42, 8), M.paint(0xb23a2e))); g.children[0].position.y = 0.22; const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.12, 6), M.fenceDark); cap.position.y = 0.46; g.add(cap); return g; };
    for (const it of job('fuel').items) { const c = can(); c.userData.hdKind = 'jerry'; mark(it.id, it.x, it.z, c); }
    const carbM = new THREE.Group(); carbM.add(new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.16, 0.2), M.chrome)); carbM.children[0].position.y = 0.2; const horn = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 0.22, 6), M.paint(0xd2a13a)); horn.position.set(0, 0.28, 0); carbM.add(horn);
    mark('carb', job('carb').items[0].x, job('carb').items[0].z, carbM);
    for (const it of job('parts').items) { const g = new THREE.Group(); const m = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.05, 6, 10), M.chrome); m.rotation.x = Math.PI / 2; m.position.y = 0.12; g.add(m); mark(it.id, it.x, it.z, g); }
    for (const it of job('bus').items) { const g = new THREE.Group(); const p = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.55, 0.7), M.wood); p.position.y = 1.35; g.add(p); mark(it.id, it.x, it.z, g); }
    for (const [id, mesh] of this.missionMeshes) mesh.visible = id.startsWith('f');
    this._dress = { fuel, carb, radio, parts };
  }
  resetDoors() { for (const d of this.doors) { d.open = false; d.t = 0; d.mesh.position.y = 0; d.col.off = false; } }
  shack(x, z, w, d) {
    const { M } = this; this.box(w, 3.0, d, x, 1.5, z, M.fence); this.box(w + 0.5, 0.2, d + 0.5, x, 3.1, z, M.fenceDark); this.addCol(x - w / 2, x + w / 2, z - d / 2, z + d / 2, 3.2);
    this.box(1.4, 2.1, 0.1, x - 1.2, 1.05, z + d / 2 + 0.05, M.wood, { cast: false }); const win = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.9), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.6, 1.7, 0.7), toneMapped: false })); win.position.set(x + 1.5, 1.8, z + d / 2 + 0.03); this.staticGroup.add(win);
  }
  // ---- wall buys ----
  nadeBuy(x, z, rotY) {
    const g = new THREE.Group(); g.position.set(x, 1.7, z); g.rotation.y = rotY;
    const can = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), new THREE.MeshStandardMaterial({ color: 0x8a1018, roughness: 0.4 })); can.position.set(0, 0.35, 0.2);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.1, 6), new THREE.MeshStandardMaterial({ color: 0xff2a3a, emissive: 0x4a0008 })); cap.position.set(0, 0.58, 0.2);
    const lab = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.2), new THREE.MeshBasicMaterial({ map: labelTex([{ t: 'BLOOD BAIT', s: 48, y: 88, w: 800, c: '#ff5a6e' }, { t: '$250  ·  ' + (document.body.classList.contains('touch') ? (emojiOK() ? '\u{1F4A3} TO THROW' : 'TAP BAIT TO THROW') : 'G TO THROW'), s: 32, y: 168, c: '#ffd36b' }], '#ff5a6e'), toneMapped: false })); lab.position.set(0, -0.35, 0.04);
    const back = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.2, 0.08), this.M.fenceDark); back.position.set(0, 0.05, 0);
    // Free-standing board: mirror the label + can onto the back face so it reads (not mirrored) from both sides.
    const lab2 = new THREE.Mesh(lab.geometry, lab.material); lab2.position.set(0, -0.35, -0.04); lab2.rotation.y = Math.PI;
    const can2 = can.clone(); can2.position.z = -0.2; const cap2 = cap.clone(); cap2.position.z = -0.2;
    g.add(back, lab, can, cap, lab2, can2, cap2); this.root.add(g);
    const nx = Math.sin(rotY), nz = Math.cos(rotY);
    // pos = front buy point (matches server/maps.json). back = same distance behind; client only offers the back
    // spot within reach of the server's 2.2 m check on the front point (see findFocus).
    this.buys.push({ id: 'nade', price: 250, pos: { x: x + nx * 0.9, z: z + nz * 0.9 }, back: { x: x - nx * 0.25, z: z - nz * 0.25 }, name: 'Blood Bait' });
  }
  wallBuy(id, x, z, rotY) {
    if (id === 'nade') { this.nadeBuy(x, z, rotY); return; }
    const W = WEAPONS[id]; const g = new THREE.Group(); g.position.set(x, 1.7, z); g.rotation.y = rotY;
    const lab = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.2), new THREE.MeshBasicMaterial({ map: labelTex([{ t: W.name.toUpperCase(), s: 44, y: 88, w: 800 }, { t: '$' + W.price + '  ·  AMMO $' + Math.floor(W.price / 2), s: 36, y: 168, c: '#ffd36b' }]), toneMapped: false, color: new THREE.Color(0.9, 0.9, 0.9) })); lab.position.set(0, -0.35, 0.04);
    const gun = buildViewmodel(id, false); gun.position.set(0, 0.35, 0.18); gun.rotation.y = Math.PI / 2; gun.scale.setScalar(1.7); gun.userData.base = null;
    const back = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.2, 0.08), this.M.fenceDark); back.position.set(0, 0.05, 0.0);
    g.add(back, lab, gun); g.traverse((m) => { if (m.isMesh) m.castShadow = false; }); this.root.add(g);
    const nx = Math.sin(rotY), nz = Math.cos(rotY); // outward normal of the board
    this.buys.push({ id, price: W.price, pos: { x: x + nx * 0.9, z: z + nz * 0.9 }, name: W.name });
  }
  // ---- mystery crate ("Lucky Toolbox") ----
  buildCrate(x, z) {
    const { M } = this; const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = 0.5; const teal = M.paint(0x1fb89a);
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.7, 0.8), teal); base.position.y = 0.35; g.add(base);
    const lid = new THREE.Group(); lid.position.set(0, 0.7, -0.4); const lm = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.2, 0.8), teal); lm.position.set(0, 0.1, 0.4); lid.add(lm); g.add(lid);
    for (const sx of [-0.45, 0.45]) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.92, 0.84), M.fenceDark); b.position.set(sx, 0.46, 0); g.add(b); }
    const hand = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.06, 0.06), M.chrome); hand.position.set(0, 0.8, 0.43); g.add(hand);
    const q = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.4), new THREE.MeshBasicMaterial({ map: labelTex([{ t: 'LUCKY', s: 70, y: 70, w: 900, c: '#18ffb0' }, { t: 'TOOLBOX', s: 62, y: 150, w: 900, c: '#fff' }, { t: '950', s: 52, y: 215, c: '#ffd36b' }], '#18ffb0', 384, 256), toneMapped: false, color: new THREE.Color(0.9, 0.9, 0.9) })); q.position.set(0, 0.38, 0.41); g.add(q);
    g.traverse((m) => { if (m.isMesh && !m.material.isMeshBasicMaterial) { m.castShadow = true; m.receiveShadow = true; } });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.65, 9, 16, 1, true), new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: { c: { value: new THREE.Color(0.1, 1.0, 0.7) }, k: { value: 0.35 } }, vertexShader: 'varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }', fragmentShader: 'uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(1.-vy,2.2)*pow(f,2.5)*k); }' }));
    beam.position.set(0, 4.5, 0); beam.userData.noAO = true; g.add(beam);
    this.root.add(g); this.addCol(x - 0.8, x + 0.8, z - 0.8, z + 0.8, 1.0);
    const hold = new THREE.Group(); hold.position.set(0, 1.5, 0.1); g.add(hold);
    this.crate = { group: g, lid, hold, beam, pos: { x, z }, price: 950, state: 'idle', t: 0, weapon: null, shown: null, model: null, x, z };
  }
  // ---- sky, ground, scenery ----
  buildSky() {
    const mat = new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { moonDir: { value: new THREE.Vector3(-0.55, 0.6, 0.58).normalize() } },
      vertexShader: 'varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: `varying vec3 vP; uniform vec3 moonDir;
        float h(vec3 p){ return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453); }
        void main(){ vec3 d=normalize(vP); float y=clamp(d.y,-.2,1.);
          vec3 hor=vec3(.20,.12,.16), mid=vec3(.025,.045,.10), top=vec3(.004,.008,.03);
          vec3 c=mix(hor,mid,smoothstep(0.,.25,y)); c=mix(c,top,smoothstep(.2,.9,y)); c+=vec3(.5,.18,.1)*pow(max(0.,1.-abs(y)*4.),3.)*.35;
          vec3 g=floor(d*220.); float s=step(.9975,h(g))*smoothstep(.05,.3,y); c+=vec3(.9,.95,1.)*s*(.4+.4*h(g+3.))*0.8;
          float md=dot(d,moonDir); c+=vec3(.75,.85,1.)*smoothstep(.9992,.9996,md)*2.5; c+=vec3(.25,.35,.6)*pow(max(0.,md),60.)*.5+vec3(.1,.15,.3)*pow(max(0.,md),8.)*.25;
          gl_FragColor=vec4(c,1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }` });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(500, 32, 16), mat); this.sky.renderOrder = -10; this.sky.frustumCulled = false; this.sky.userData.noAO = true; this.scene.add(this.sky);
    this.moonDir = mat.uniforms.moonDir.value;
  }
  buildGround() {
    const g = new THREE.Mesh(new THREE.PlaneGeometry(1200, 1200), this.M.sand); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; this.scene.add(g); this.ground = g;
  }
  scenery() {
    const { M } = this; const S = this.staticGroup;
    // dunes + rocks + cacti + distant mesas (non-colliding, outside the fences)
    const inside = (x, z) => (x > -26 && x < 26 && z > -54 && z < 26) || (x > 22 && x < 52 && z > 0 && z < 24) || (x < -22 && x > -52 && z > -36 && z < 0) || (x > 2 && x < 26 && z < -50 && z > -78);
    // dunes: textured sand (own repeat), lumpy smooth-shaded mound instead of a flat-shaded 12x6 ellipsoid
    const dm = M.sand.clone(); dm.map = M.sand.map.clone(); dm.map.repeat.set(6, 3); dm.bumpMap = M.sand.bumpMap.clone(); dm.bumpMap.repeat.set(6, 3); dm.color = new THREE.Color(0xb7a184); dm.bumpScale = 1.5; M.dune = dm;
    let dg; const duneGeo = () => dg || (dg = (() => { const g = new THREE.SphereGeometry(1, 40, 14, 0, TAU, 0, Math.PI / 2), p = g.attributes.position;
      for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i), a = Math.atan2(z, x); const h = y * (0.75 + 0.25 * Math.sin(a * 3 + 1) + 0.12 * Math.sin(a * 7)); p.setXYZ(i, x * (1 + 0.08 * Math.sin(a * 5)), Math.pow(Math.max(h, 0), 1.6), z); }
      g.computeVertexNormals(); return g; })());
    for (let i = 0; i < 26; i++) { const a = rnd(TAU), r = rnd(60, 190), x = Math.cos(a) * r, z = -14 + Math.sin(a) * r; const s = Math.min(rnd(14, 38), (r - 48) / 2.1); if (s < 6) continue; /* keep the whole mound outside the yard (old: up to 76 m wide at r=60, a flat slab poking into the lot) */ const d = new THREE.Mesh(duneGeo(), dm); d.scale.set(s * rnd(1.2, 2), s * rnd(0.12, 0.28), s * rnd(1, 1.6)); d.position.set(x, 0, z); d.rotation.y = rnd(3); d.receiveShadow = true; S.add(d); }
    const mm = M.flat(0x2a2634, 1, 0);
    for (let i = 0; i < 12; i++) { const a = (i / 12) * TAU + rnd(-0.2, 0.2), r = rnd(230, 330); const w = rnd(30, 70), h = rnd(25, 60); const m = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.55, w * 0.8, h, 6), mm); m.position.set(Math.cos(a) * r, h / 2 - 2, -14 + Math.sin(a) * r); m.rotation.y = rnd(3); S.add(m); }
    for (let i = 0; i < 38; i++) { let x, z, tries = 0; do { const a = rnd(TAU), r = rnd(34, 90); x = Math.cos(a) * r; z = -14 + Math.sin(a) * r * 0.9; } while (inside(x, z) && ++tries < 20); const c = makeCactus(M); c.position.set(x, 0, z); c.rotation.y = rnd(3); c.traverse((m) => { if (m.isMesh) m.castShadow = true; }); S.add(c); }
    for (let i = 0; i < 40; i++) { let x, z, tries = 0; do { const a = rnd(TAU), r = rnd(30, 110); x = Math.cos(a) * r; z = -14 + Math.sin(a) * r * 0.9; } while (inside(x, z) && ++tries < 20); const r = makeRock(M, rnd(0.4, 1.8)); r.position.set(x, 0, z); r.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } }); S.add(r); }
    // wrecks outside, visible past the fence
    for (let i = 0; i < 9; i++) { const a = rnd(TAU), r = rnd(34, 70); const x = Math.cos(a) * r, z = -14 + Math.sin(a) * r * 0.9; if (inside(x, z)) continue; const w = Math.random() < 0.35 ? makeBusLo(M, randPaint(), 0xe6dcc0, { tilt: rnd(-0.08, 0.08) }) : makeBeetleLo(M, randPaint(), { tilt: rnd(-0.1, 0.1), missing: Math.random() < 0.5 }); w.position.set(x, 0, z); w.rotation.y = rnd(3); w.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } }); S.add(w); }
  }
  buildLights() {
    const sc = this.scene;
    this.hemi = new THREE.HemisphereLight(0x6f86c8, 0x3a2c22, 0.85); sc.add(this.hemi);
    this.moon = new THREE.DirectionalLight(0x9db4ff, 1.7); this.moon.castShadow = true; this.moon.position.set(0, 0, 0); sc.add(this.moon, this.moon.target);
    const sh = this.moon.shadow; sh.camera.left = sh.camera.bottom = -34; sh.camera.right = sh.camera.top = 34; sh.camera.near = 1; sh.camera.far = 140; sh.bias = -0.0004; sh.normalBias = 0.04; sh.mapSize.set(2048, 2048);
    this.lampPool = []; for (let i = 0; i < 7; i++) { const l = new THREE.PointLight(0xffb066, 95, 30, 1.7); sc.add(l); this.lampPool.push(l); }
    // soft halo sprites + volumetric cones for each lamp
    this.halos = []; this.cones = [];
    const coneMat = (col) => new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: { c: { value: col }, k: { value: 0.22 } }, vertexShader: 'varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }', fragmentShader: 'uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.5)*pow(f,1.6)*k); }' });
    for (const L of this.lamps) {
      const col = L.teal ? new THREE.Color(0.2, 0.9, 0.7) : new THREE.Color(1.0, 0.62, 0.28);
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.T.glow, color: L.teal ? new THREE.Color(0.5, 3, 2.4) : new THREE.Color(3, 1.8, 0.7), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false })); s.scale.setScalar(3.4); s.position.copy(L.pos); s.userData.noAO = true; this.scene.add(s); this.halos.push(s);
      const cone = new THREE.Mesh(new THREE.ConeGeometry(4.2, 5, 24, 1, true), coneMat(col)); cone.position.copy(L.pos).add(new THREE.Vector3(0, -2.5, 0)); cone.userData.noAO = true; this.scene.add(cone); this.cones.push(cone);
      L.light = col;
    }
  }
  setTier(tier) {
    this.tier = tier; this.dress(tier); const n = [3, 5, 7][tier];
    this.lampPool.forEach((l, i) => (l.visible = i < n)); this.cones.forEach((c) => (c.visible = tier > 0)); this.moon.castShadow = tier > 0;
    const ms = tier === 2 ? 2048 : 1024; if (this.moon.shadow.mapSize.x !== ms) { this.moon.shadow.mapSize.set(ms, ms); this.moon.shadow.map?.dispose(); this.moon.shadow.map = null; }
  }
  // merge static geometry per material to cut draw calls
  batch() {
    const S = this.staticGroup; S.updateMatrixWorld(true); const buckets = new Map(); const keep = [];
    S.traverse((o) => { if (!o.isMesh) return; if (o.userData.bulb || o.userData.noBatch) { keep.push(o); return; } let hp = false; for (let q = o; q; q = q.parent) if (q.userData.hd) { hp = true; break; } const key = o.material.uuid + (o.castShadow ? 'c' : 'n') + (o.receiveShadow ? 'r' : 'n') + (hp ? 'h' : ''); let b = buckets.get(key); if (!b) { b = { mat: o.material, cast: o.castShadow, rec: o.receiveShadow, geos: [], hp }; buckets.set(key, b); } const g = o.geometry.clone(); g.applyMatrix4(o.matrixWorld); for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k); b.geos.push(g); });
    for (const b of buckets.values()) { const mg = mergeGeometries(b.geos, false); if (!mg) { console.warn('merge failed'); continue; } const m = new THREE.Mesh(mg, b.mat); m.castShadow = b.cast; m.receiveShadow = b.rec; m.frustumCulled = false; this.root.add(m); if (b.hp) (this.propLo || (this.propLo = [])).push(m); b.geos.forEach((g) => g.dispose()); }
    for (const o of keep) { if (o.userData.noBatch) { const q = o.clone(); q.matrixAutoUpdate = false; q.matrix.copy(o.matrixWorld); q.matrixWorldNeedsUpdate = true; this.root.add(q); continue; } const p = new THREE.Mesh(o.geometry, o.material); p.applyMatrix4(o.matrixWorld); p.matrixAutoUpdate = true; p.position.setFromMatrixPosition(o.matrixWorld); p.rotation.set(0, 0, 0); p.scale.setScalar(1); this.root.add(p); }
    this.staticGroup = null;
  }
  // ---- collision + raycast ----
  resolve(p, r, ignoreWin = false) { // p: {x,z}; pushes out of colliders, returns true if moved
    let hit = false;
    for (const c of this.colliders) {
      if (c.bulletOnly || c.off) continue;
      const cx = clamp(p.x, c.x0, c.x1), cz = clamp(p.z, c.z0, c.z1); let dx = p.x - cx, dz = p.z - cz; const d2 = dx * dx + dz * dz;
      if (d2 >= r * r) continue; hit = true;
      if (d2 > 1e-8) { const d = Math.sqrt(d2), k = (r - d) / d; p.x += dx * k; p.z += dz * k; }
      else { const l = p.x - c.x0, rr = c.x1 - p.x, t = p.z - c.z0, b = c.z1 - p.z, m = Math.min(l, rr, t, b); if (m === l) p.x = c.x0 - r; else if (m === rr) p.x = c.x1 + r; else if (m === t) p.z = c.z0 - r; else p.z = c.z1 + r; }
    }
    return hit;
  }
  ray(o, d, max) { // nearest world hit {t, n:{x,y,z}} or null (ground included)
    let best = max, nrm = null, kind = null;
    if (d.y < -1e-5) { const t = -o.y / d.y; if (t > 0 && t < best) { best = t; nrm = { x: 0, y: 1, z: 0 }; kind = 'ground'; } }
    for (const c of this.colliders) {
      if (c.noBullet || c.off) continue;
      let t0 = 0, t1 = best, ax = -1, sg = 0;
      const sl = (oo, dd, a, b, axis) => { if (Math.abs(dd) < 1e-9) return oo >= a && oo <= b; let ta = (a - oo) / dd, tb = (b - oo) / dd, s = -1; if (ta > tb) { const q = ta; ta = tb; tb = q; s = 1; } if (ta > t0) { t0 = ta; ax = axis; sg = s; } if (tb < t1) t1 = tb; return t0 <= t1; };
      if (!sl(o.x, d.x, c.x0, c.x1, 0)) continue; if (!sl(o.y, d.y, c.y0, c.y1, 1)) continue; if (!sl(o.z, d.z, c.z0, c.z1, 2)) continue;
      if (t0 > 0 && t0 < best) { best = t0; nrm = { x: ax === 0 ? sg : 0, y: ax === 1 ? sg : 0, z: ax === 2 ? sg : 0 }; kind = 'wall'; }
    }
    return nrm ? { t: best, n: nrm, kind } : null;
  }
  // ---- per-frame ----
  update(dt, time, player) {
    // falling planks
    for (let i = this.fall.length - 1; i >= 0; i--) { const p = this.fall[i], f = p.userData.fall; if (!f) { this.fall.splice(i, 1); continue; } f.t += dt; f.vy -= 9.8 * dt; p.position.x += f.vx * dt; p.position.y += f.vy * dt; p.position.z += f.vz * dt; p.rotation.x += f.rx * dt; p.rotation.z += f.rz * dt; if (p.position.y < 0.08) { p.position.y = 0.08; f.vy = 0; f.vx *= 0.5; f.vz *= 0.5; } if (f.t > 1.4) { p.visible = false; this.fall.splice(i, 1); } }
    // gate
    for (const d of this.doors) if (d.open && d.t < 1) { d.t = Math.min(1, d.t + dt / 2.4); d.mesh.position.y = d.t * 3.6; if (d.t > 0.5) d.col.off = true; }
    // lights: assign nearest lamps to pool; flicker
    const px = player.x, pz = player.z; const order = this.lamps.map((l, i) => ({ i, d: (l.pos.x - px) ** 2 + (l.pos.z - pz) ** 2 })).sort((a, b) => a.d - b.d);
    this.lampPool.forEach((l, k) => { const L = this.lamps[order[k].i]; l.position.copy(L.pos); l.color.copy(L.teal ? new THREE.Color(0.35, 1, 0.8) : new THREE.Color(1, 0.7, 0.4)); const fl = 0.85 + 0.15 * Math.sin(time * 9 + L.ph) * Math.sin(time * 3.7 + L.ph * 2) + (Math.sin(time * 31 + L.ph) > 0.97 ? -0.5 : 0); l.intensity = (this.lampBase || 95) * Math.max(0.2, fl); });
    this.halos.forEach((h, i) => { const dd = Math.hypot(this.lamps[i].pos.x - px, this.lamps[i].pos.z - pz); h.visible = dd < 70; });
    // crate
    const c = this.crate; c.beam.material.uniforms.k.value = 0.22 + 0.1 * Math.sin(time * 2);
    for (const w of this.windows) { if (!w.lamp) continue; const open = 6 - w.count; const k = open <= 0 ? 0.55 + 0.08 * Math.sin(time * 2.2 + w.c.x) : 0.3 + 0.7 * Math.abs(Math.sin(time * (3.2 + open))); w.lamp.material.color.setRGB(1.85 * k, 0.22 * k, 0.07 * k); }
    if (c.model) { c.model.rotation.y += dt * 2; c.model.position.y = Math.sin(time * 3) * 0.04; }
    // moon shadow follows player
    this.moon.position.set(px + this.moonDir.x * 60, this.moonDir.y * 60, pz + this.moonDir.z * 60); this.moon.target.position.set(px, 0, pz); this.moon.target.updateMatrixWorld();
    this.sky.position.set(px, 0, pz);
  }
}
