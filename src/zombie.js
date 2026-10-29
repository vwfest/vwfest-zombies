import * as THREE from 'three';
import { rnd, pick, clamp, TAU } from './util.js';
import { areaOf, DOOR_Z } from './world.js';

const G = {
  torso: new THREE.BoxGeometry(0.52, 0.62, 0.3), hip: new THREE.BoxGeometry(0.46, 0.2, 0.28), leg: new THREE.BoxGeometry(0.2, 0.9, 0.22), arm: new THREE.BoxGeometry(0.15, 0.62, 0.16),
  head: new THREE.IcosahedronGeometry(0.27, 1), eye: new THREE.BoxGeometry(0.07, 0.04, 0.03), jaw: new THREE.BoxGeometry(0.2, 0.08, 0.16), rag: new THREE.BoxGeometry(0.12, 0.28, 0.03), hand: new THREE.BoxGeometry(0.17, 0.14, 0.17),
};
const EYE = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.7, 0.22, 0.1), toneMapped: false });
const WOUND = new THREE.MeshStandardMaterial({ color: 0x6e1018, roughness: 0.6 });
const DARK = new THREE.MeshStandardMaterial({ color: 0x1a1214, roughness: 1 });
const SKINS = [0x5e7a52, 0x6a8460, 0x587a62, 0x71856a, 0x4f7058], SHIRTS = [0x7a2f2f, 0x2f4a7a, 0x5a5a2a, 0x3a3a44, 0x8a6a2a, 0x1f8f78, 0xb2562a], PANTS = [0x2a2f3a, 0x3a2f24, 0x20262a, 0x2c3a2a];

class Zombie {
  constructor() {
    this.root = new THREE.Group(); this.sk = new THREE.MeshStandardMaterial({ roughness: 0.75, emissive: 0x000000 }); this.sh = new THREE.MeshStandardMaterial({ roughness: 0.95, emissive: 0x000000 }); this.pa = new THREE.MeshStandardMaterial({ roughness: 0.95, emissive: 0x000000 });
    const m = (g, mat, x, y, z) => { const o = new THREE.Mesh(g, mat); o.position.set(x, y, z); o.castShadow = true; return o; };
    this.pelvis = new THREE.Group(); this.pelvis.position.y = 0.95; this.root.add(this.pelvis);
    this.legL = new THREE.Group(); this.legL.position.set(-0.13, 0, 0); this.legL.add(m(G.leg, this.pa, 0, -0.45, 0)); this.legR = new THREE.Group(); this.legR.position.set(0.13, 0, 0); this.legR.add(m(G.leg, this.pa, 0, -0.45, 0));
    this.pelvis.add(this.legL, this.legR, m(G.hip, this.pa, 0, 0.0, 0));
    this.upper = new THREE.Group(); this.pelvis.add(this.upper); this.upper.add(m(G.torso, this.sh, 0, 0.36, 0));
    const r1 = m(G.rag, this.sh, 0.12, 0.0, 0.15); r1.rotation.z = 0.2; const r2 = m(G.rag, this.sh, -0.1, 0.02, -0.15); r2.rotation.z = -0.15; this.upper.add(r1, r2); const w1 = m(G.rag, WOUND, -0.1, 0.45, 0.155); w1.scale.set(1.6, 1.0, 1); w1.rotation.z = 0.5; const w2 = m(G.rag, WOUND, 0.14, 0.2, 0.156); w2.scale.set(1.0, 0.7, 1); this.upper.add(w1, w2);
    this.head = new THREE.Group(); this.head.position.set(0, 0.88, 0.03); this.head.add(m(G.head, this.sk, 0, 0, 0)); this.head.add(m(G.eye, EYE, -0.1, 0.04, 0.24), m(G.eye, EYE, 0.1, 0.04, 0.24), m(G.jaw, DARK, 0, -0.14, 0.18)); this.head.scale.set(1.05, 1.1, 1); this.upper.add(this.head);
    this.armL = new THREE.Group(); this.armL.position.set(-0.35, 0.58, 0); this.armL.add(m(G.arm, this.sk, 0, -0.28, 0), m(G.hand, this.sk, 0, -0.64, 0)); this.armR = new THREE.Group(); this.armR.position.set(0.35, 0.58, 0); this.armR.add(m(G.arm, this.sk, 0, -0.28, 0), m(G.hand, this.sk, 0, -0.64, 0));
    this.upper.add(this.armL, this.armR);
    this.root.visible = false; this.state = 'dead'; this.pos = this.root.position;
  }
}

export class Zombies {
  constructor(scene, world, tier) {
    this.world = world; this.scene = scene; this.list = []; this.max = tier > 0 ? 26 : 16;
    for (let i = 0; i < this.max + 4; i++) { const z = new Zombie(); scene.add(z.root); this.list.push(z); }
    this.alive = 0; this.t = 0; this.hooks = {};
  }
  setTier(tier) { this.max = tier > 0 ? 26 : 16; }
  reset() { for (const z of this.list) { z.state = 'dead'; z.root.visible = false; } this.alive = 0; }
  stats(round) {
    const hp = round < 10 ? 80 + 35 * round : 430 * Math.pow(1.1, round - 9);
    const sp = Math.min(5.0, 1.5 + round * 0.24);
    return { hp, sp };
  }
  spawn(w, round, brute = false) {
    const z = this.list.find((q) => q.state === 'dead' && !q.root.visible); if (!z) return null;
    const st = this.stats(round); const runner = round >= 3 && Math.random() < Math.min(0.55, (round - 2) * 0.09);
    z.brute = brute; z.scale = brute ? 1.38 : rnd(0.94, 1.06); z.root.scale.setScalar(z.scale);
    z.maxHp = z.hp = st.hp * (brute ? 3.3 : 1); z.speed = st.sp * rnd(0.82, 1.12) * (runner ? 1.45 : 1) * (brute ? 0.78 : 1); z.speed = Math.min(z.speed, 6.0); z.runner = runner; z.dmg = brute ? 75 : 50; z.value = brute ? 150 : 60;
    z.sk.color.setHex(brute ? 0x9a6f5a : pick(SKINS)); z.sh.color.setHex(pick(SHIRTS)); z.pa.color.setHex(pick(PANTS));
    for (const m of [z.sk, z.sh, z.pa]) m.emissive.setHex(0);
    z.win = w; z.state = 'approach'; z.slot = rnd(-1.2, 1.2); z.phase = rnd(TAU); z.attackT = 0; z.cool = 0; z.stuck = 0; z.stuckTot = 0; z.side = 1; z.flash = 0; z.hitT = 0; z.groanT = rnd(1, 4); z.dieT = 0; z.climbT = 0; z.chk = 0; z.chkX = 0; z.chkZ = 0; z.limp = Math.random() < 0.3;
    const d = rnd(4, 9); z.pos.set(w.out.x + w.n.x * d + w.t.x * rnd(-3, 3), 0, w.out.z + w.n.z * d + w.t.z * rnd(-3, 3)); z.yaw = Math.atan2(-w.n.x, -w.n.z); z.root.rotation.set(0, z.yaw, 0); z.root.visible = true; z.pelvis.rotation.set(0, 0, 0);
    z.root.position.y = 0; this.alive++; return z;
  }
  // ---- raycast vs zombies ----
  rayHit(o, d, max) {
    let best = null;
    for (const z of this.list) {
      if (z.state === 'dead' || z.state === 'dying') continue; const s = z.scale;
      // head sphere
      const hc = { x: z.pos.x, y: (z.climbY || 0) + 1.66 * s, z: z.pos.z }; const hr = 0.3 * s;
      const th = raySphere(o, d, hc, hr); let tb = null;
      // body: vertical cylinder
      const ox = o.x - z.pos.x, oz = o.z - z.pos.z, a = d.x * d.x + d.z * d.z, br = 0.42 * s;
      if (a > 1e-8) { const b = 2 * (ox * d.x + oz * d.z), c = ox * ox + oz * oz - br * br, disc = b * b - 4 * a * c; if (disc >= 0) { const sq = Math.sqrt(disc); for (const t of [(-b - sq) / (2 * a), (-b + sq) / (2 * a)]) { if (t > 0) { const y = o.y + d.y * t - (z.climbY || 0); if (y >= 0 && y <= 1.45 * s) { tb = t; break; } } } } } else if (ox * ox + oz * oz < br * br) tb = 0.01;
      let t = null, head = false; if (th !== null && (tb === null || th <= tb + 0.15)) { t = th; head = true; } else if (tb !== null) t = tb;
      if (t !== null && t < max && (!best || t < best.t)) best = { z, t, head };
    }
    return best;
  }
  damage(z, dmg, head, p, n) {
    if (z.state === 'dead' || z.state === 'dying') return null; z.hp -= dmg; z.flash = 0.12; z.hitT = 0.15; const killed = z.hp <= 0;
    if (killed) { z.state = 'dying'; z.dieT = 0; this.alive--; z.dieDir = rnd(-0.4, 0.4); }
    else if (z.state === 'attack' || z.state === 'approach') { /* keep going */ } return { killed, head };
  }
  killAll() { const out = []; for (const z of this.list) if (z.state !== 'dead' && z.state !== 'dying') { z.hp = 0; z.state = 'dying'; z.dieT = 0; z.dieDir = rnd(-0.4, 0.4); this.alive--; out.push(z); } return out; }
  // ---- update ----
  update(dt, time, player, door, cb) {
    const W = this.world; this.t = time; for (const w of W.windows) if (w.cool > 0) w.cool -= dt; const pArea = areaOf(player.z);
    for (let i = 0; i < this.list.length; i++) {
      const z = this.list[i]; if (z.state === 'dead') continue; const s = z.scale;
      // flash
      if (z.flash > 0) { z.flash -= dt; const e = Math.max(0, z.flash / 0.12); for (const m of [z.sk, z.sh, z.pa]) m.emissive.setRGB(0.9 * e, 0.08 * e, 0.05 * e); }
      if (z.state === 'dying') { z.dieT += dt; const k = Math.min(1, z.dieT / 0.55); z.pelvis.rotation.x = -k * 1.5 * (1 - 0.1); z.pelvis.rotation.z = z.dieDir * k; z.pelvis.position.y = 0.95 - k * 0.55; z.armL.rotation.x = -1.4 + k * 2.2; z.armR.rotation.x = -1.4 + k * 2.2; if (z.dieT > 2.2) z.root.position.y = -(z.dieT - 2.2) * 0.9; if (z.dieT > 3.2) { z.state = 'dead'; z.root.visible = false; z.root.position.y = 0; z.pelvis.position.y = 0.95; z.pelvis.rotation.set(0, 0, 0); } continue; }
      z.groanT -= dt; if (z.groanT <= 0) { z.groanT = rnd(2.5, 6); const dx = z.pos.x - player.x, dz = z.pos.z - player.z, dist = Math.hypot(dx, dz); if (dist < 40) cb.groan?.(z, dist); }
      let mvx = 0, mvz = 0, sp = 0, armPose = -1.3;
      const px = player.x, pz = player.z;
      if (z.state === 'approach') {
        const w = z.win, tx = w.out.x + w.t.x * z.slot * 0.8, tz = w.out.z + w.t.z * z.slot * 0.8; const dx = tx - z.pos.x, dz = tz - z.pos.z, d = Math.hypot(dx, dz);
        if (d < 0.25) { z.state = w.count > 0 ? 'attack' : 'climb'; z.climbT = 0; z.cool = rnd(0.6, 1.6); }
        else { mvx = dx / d; mvz = dz / d; sp = z.speed; z.pos.x += mvx * sp * dt; z.pos.z += mvz * sp * dt; z.yaw = lerpAng(z.yaw, Math.atan2(mvx, mvz), Math.min(1, dt * 8)); }
      } else if (z.state === 'attack') {
        const w = z.win; z.yaw = lerpAng(z.yaw, Math.atan2(-w.n.x, -w.n.z), Math.min(1, dt * 8)); z.cool -= dt;
        if (w.count <= 0) { z.state = 'climb'; z.climbT = 0; }
        else { z.attackT += dt; armPose = -1.2 + Math.sin(z.attackT * 7) * 0.7; if (z.cool <= 0 && w.count > 0) { z.cool = rnd(1.2, 2.0); if (w.cool <= 0 && W.removePlank(w)) { w.cool = rnd(2.2, 3.2); cb.plank?.(w, true); } } }
      } else if (z.state === 'climb') {
        const w = z.win; z.climbT += dt / 1.25; const k = Math.min(1, z.climbT); const sx = w.out.x + w.t.x * z.slot * 0.8, sz = w.out.z + w.t.z * z.slot * 0.8, ex = w.in.x + w.t.x * z.slot * 0.5, ez = w.in.z + w.t.z * z.slot * 0.5;
        z.pos.x = sx + (ex - sx) * k; z.pos.z = sz + (ez - sz) * k; z.climbY = Math.sin(k * Math.PI) * 0.75; z.root.position.y = z.climbY; z.yaw = lerpAng(z.yaw, Math.atan2(-w.n.x, -w.n.z), Math.min(1, dt * 8)); armPose = -1.6; sp = 1.5;
        if (k >= 1) { z.state = 'chase'; z.climbY = 0; z.root.position.y = 0; }
      } else { // chase
        let tx = px, tz = pz; const zArea = areaOf(z.pos.z);
        if (zArea !== pArea && door.open) { const nearGate = Math.abs(z.pos.x) < 4 && Math.abs(z.pos.z - DOOR_Z) < 2.5; tx = 0; tz = nearGate ? (pArea === 'A' ? DOOR_Z + 4 : DOOR_Z - 4) : DOOR_Z + (zArea === 'A' ? 1.8 : -1.8); }
        let dx = tx - z.pos.x, dz = tz - z.pos.z; const d = Math.hypot(dx, dz) || 1; dx /= d; dz /= d;
        const pd = Math.hypot(px - z.pos.x, pz - z.pos.z);
        // stuck sidestep
        if (z.stuck > 0) { z.stuck -= dt; const a = 1.2 * z.side, c = Math.cos(a), sn = Math.sin(a); const ndx = dx * c - dz * sn, ndz = dx * sn + dz * c; dx = ndx; dz = ndz; }
        // separation
        let sx = 0, sz = 0; for (let j = 0; j < this.list.length; j++) { if (j === i) continue; const o = this.list[j]; if (o.state !== 'chase' && o.state !== 'attack') continue; const ex = z.pos.x - o.pos.x, ez = z.pos.z - o.pos.z, dd = ex * ex + ez * ez; if (dd < 0.7 && dd > 1e-4) { const q = 1 / Math.sqrt(dd); sx += ex * q * (0.9 - Math.sqrt(dd)); sz += ez * q * (0.9 - Math.sqrt(dd)); } }
        dx += sx * 1.2; dz += sz * 1.2;
        const dl = Math.hypot(dx, dz) || 1; dx /= dl; dz /= dl;
        if (pd < 1.0 && zArea === pArea) { sp = 0; } else { sp = z.speed; }
        // attack
        z.cool -= dt;
        if (pd < 1.35 && zArea === pArea) {
          if (z.attackT <= 0 && z.cool <= 0) { z.attackT = 0.01; }
        }
        if (z.attackT > 0) { z.attackT += dt; armPose = -2.2 + Math.min(1, z.attackT / 0.4) * 1.1; if (z.attackT > 0.42) { if (pd < 1.7 && zArea === pArea) cb.hitPlayer?.(z); z.attackT = 0; z.cool = 1.05; } sp *= 0.3; }
        z.pos.x += dx * sp * dt; z.pos.z += dz * sp * dt; mvx = dx; mvz = dz; W.resolve(z.pos, 0.36 * s);
        z.yaw = lerpAng(z.yaw, Math.atan2(player.x - z.pos.x, player.z - z.pos.z) * (pd < 4 ? 1 : 0) + Math.atan2(dx, dz) * (pd < 4 ? 0 : 1), Math.min(1, dt * 9));
        if (pd < 4) z.yaw = lerpAng(z.yaw, Math.atan2(px - z.pos.x, pz - z.pos.z), Math.min(1, dt * 9));
        // stuck detection
        z.chk += dt; if (z.chk > 0.5) { const mv = Math.hypot(z.pos.x - z.chkX, z.pos.z - z.chkZ); if (sp > 0.5 && mv < sp * 0.5 * 0.3) { z.stuck = 1.0; z.side = Math.random() < 0.5 ? -1 : 1; z.stuckTot += 0.5; } else z.stuckTot = Math.max(0, z.stuckTot - 0.25); z.chkX = z.pos.x; z.chkZ = z.pos.z; z.chk = 0; if (z.stuckTot > 6) { this.reroute(z); } }
      }
      // pose
      z.root.rotation.y = z.yaw; if (z.state !== 'climb') z.root.position.y = 0;
      const ws = sp > 0.1 ? sp : 0; z.phase += ws * dt * (z.runner ? 2.2 : 3.0) / Math.max(0.6, s); const sw = Math.sin(z.phase), amp = Math.min(0.75, 0.25 + ws * 0.14);
      z.legL.rotation.x = sw * amp; z.legR.rotation.x = -sw * amp * (z.limp ? 0.35 : 1);
      const lean = 0.12 + Math.min(0.35, ws * 0.06) + (z.runner ? 0.12 : 0); z.upper.rotation.x = lean + Math.abs(Math.sin(z.phase)) * 0.04; z.upper.rotation.z = Math.sin(z.phase * 0.5) * 0.06 * (z.limp ? 2 : 1); z.upper.rotation.y = Math.sin(z.phase * 0.5) * 0.12;
      z.armL.rotation.x = armPose + Math.sin(z.phase + 1) * 0.15 + (z.state === 'chase' && z.attackT <= 0 ? 0 : 0); z.armR.rotation.x = armPose + (z.state === 'attack' ? Math.sin(z.attackT * 7 + 1.6) * 0.7 - Math.sin(z.attackT * 7) * 0.7 : 0) + Math.sin(z.phase + 3) * 0.15;
      z.armL.rotation.z = 0.12; z.armR.rotation.z = -0.12; z.head.rotation.z = Math.sin(z.phase * 0.5 + 1) * 0.12; z.head.rotation.x = 0.1; z.pelvis.position.y = 0.95 + Math.abs(Math.sin(z.phase)) * 0.03;
    }
  }
  reroute(z) { const act = this.world.windows.filter((w) => w.area === 'A' || this.world.door.open); const w = pick(act); z.win = w; z.state = 'approach'; z.stuckTot = 0; z.stuck = 0; z.pos.set(w.out.x + w.n.x * 3, 0, w.out.z + w.n.z * 3); }
}

function raySphere(o, d, c, r) { const ox = o.x - c.x, oy = o.y - c.y, oz = o.z - c.z; const b = ox * d.x + oy * d.y + oz * d.z, cc = ox * ox + oy * oy + oz * oz - r * r, disc = b * b - cc; if (disc < 0) return null; const t = -b - Math.sqrt(disc); return t > 0 ? t : null; }
function lerpAng(a, b, t) { let d = ((b - a + Math.PI) % TAU + TAU) % TAU - Math.PI; return a + d * t; }
