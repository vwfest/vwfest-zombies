// Authoritative co-op simulation: walls/LOS, spawns, planks, door, buys, crate, power-ups, zombies, health, damage, score.
// Pure logic (no sockets) so it can be unit tested. Coordinates match the client maps (metres, y up).
'use strict';
const MAPS = require('./maps.json'); const WEAPONS = require('./weapons.js'); const { World, areaOf, DOOR_Z } = require('./world.js');
const MAX_PLAYERS = 4, PLAYER_HP = 200, START_PTS = 500, ZDMG = 22, BRUTE_DMG = 44, MAX_SPEED = 9.5, EYE = 1.7, PR = 0.35, ZR = 0.36;
const CRATE_POOL = ['smg', 'shotgun', 'rifle', 'lmg'], REPAIR_GAP = 450, PLANKS = 6, MED_CD = 20, UP_LIFE = 28;
const fin = (v) => typeof v === 'number' && Number.isFinite(v); const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
function roundCount(r, n) { return Math.max(3, Math.round((6 + r * 2.3 + r * r * 0.12) * (1 + 0.5 * (n - 1)))); }
function zStats(round) { return { hp: round < 10 ? 80 + 35 * round : 430 * Math.pow(1.1, round - 9), sp: Math.min(5.0, 1.5 + round * 0.24) }; }

class Room {
  constructor(code, mapId = 'junkyard', rng = Math.random) {
    this.code = code; this.mapId = MAPS[mapId] ? mapId : 'junkyard'; this.map = MAPS[this.mapId]; this.rng = rng; this.world = new World(this.map);
    this.players = new Map(); this.zombies = new Map(); this.nextZ = 1; this.events = []; this.ups = new Map(); this.nextU = 1;
    this.round = 0; this.phase = 'wait'; this.interT = 4; this.toSpawn = 0; this.spawnT = 0; this.time = 0; this.over = false; this.cap = 24; this.double = 0; this.drops = 0; this.lastDrop = -99;
    this.wins = this.map.windows.map((w) => ({ ...w, count: PLANKS, cool: 0 })); this.door = { ...this.map.door, open: false }; this.crate = { ...this.map.crate, state: 'idle', t: 0, weapon: null, by: null };
  }
  get size() { return this.players.size; }
  activeWins() { return this.wins.filter((w) => w.area === 'A' || this.door.open); }
  addPlayer(id, name) {
    if (this.players.size >= MAX_PLAYERS) return null; const s = this.map.spawn, k = this.players.size;
    const p = { id, name: String(name || 'Survivor').replace(/[^A-Za-z0-9_\- .]/g, '').slice(0, 16) || 'Survivor', x: s.x + (k - 1.5) * 1.2, z: s.z, yaw: 0, pitch: 0, hp: PLAYER_HP, pts: START_PTS, kills: 0, heads: 0, dead: false, lastShot: {}, lastIn: 0, lastHit: -99, lastRepair: 0, lastMed: -99, connected: true, owned: new Set(['pistol']) };
    this.world.resolve(p, PR); this.players.set(id, p); return p;
  }
  removePlayer(id) { this.players.delete(id); }
  near(p, x, z, r) { return Math.hypot(p.x - x, p.z - z) <= r; }
  // movement: speed-capped, cannot pass through walls (segment test), then pushed out of colliders
  input(id, m, now) {
    const p = this.players.get(id); if (!p || p.dead) return false;
    if (![m.x, m.z, m.yaw, m.pitch].every(fin)) return false;
    const dt = Math.max(0.03, Math.min(0.5, (now - (p.lastIn || now - 100)) / 1000)); p.lastIn = now;
    let dx = m.x - p.x, dz = m.z - p.z; const d = Math.hypot(dx, dz), lim = MAX_SPEED * dt + 0.25; let ok = d <= lim;
    if (d > lim) { dx *= lim / d; dz *= lim / d; }
    const tgt = { x: p.x + dx, z: p.z + dz }, hit = this.world.segBlock(p, tgt); if (hit !== null) { ok = false; const k = Math.max(0, hit - 0.05); tgt.x = p.x + dx * k; tgt.z = p.z + dz * k; }
    this.world.resolve(tgt, PR); p.x = tgt.x; p.z = tgt.z; p.yaw = m.yaw; p.pitch = clamp(m.pitch, -1.5, 1.5); return ok;
  }
  gain(p, n) { const g = n * (this.double > 0 ? 2 : 1); p.pts += g; return g; }
  // ---- interactions (all distance-checked + paid server-side) ----
  buy(id, w) { const p = this.players.get(id); if (!p || p.dead) return { ok: false, why: 'dead' }; const st = this.map.buys.find((b) => b.id === w);
    if (!st) return { ok: false, why: 'station' }; if (!this.near(p, st.x, st.z, 2.2)) return { ok: false, why: 'far' };
    const price = p.owned.has(w) ? Math.floor(st.price / 2) : st.price; if (p.pts < price) return { ok: false, why: 'pts' }; p.pts -= price; p.owned.add(w); this.events.push({ e: 'buy', p: id, w }); return { ok: true, w, refill: price < st.price }; }
  openDoor(id) { const p = this.players.get(id); if (!p || p.dead || this.door.open) return { ok: false, why: 'state' }; if (!this.near(p, this.door.x, DOOR_Z + 1, 3.6)) return { ok: false, why: 'far' };
    if (p.pts < this.door.price) return { ok: false, why: 'pts' }; p.pts -= this.door.price; this.door.open = true; this.world.setDoorOpen(true); this.events.push({ e: 'door', p: id }); return { ok: true }; }
  repair(id, winId, now) { const p = this.players.get(id), w = this.wins.find((x) => x.id === winId); if (!p || p.dead || !w) return { ok: false, why: 'state' };
    if (!this.near(p, w.in.x, w.in.z, 2.3)) return { ok: false, why: 'far' }; if (now - p.lastRepair < REPAIR_GAP) return { ok: false, why: 'rate' }; if (w.count >= PLANKS) return { ok: false, why: 'full' };
    p.lastRepair = now; w.count++; this.gain(p, 10); this.events.push({ e: 'plank', w: w.id, n: w.count, by: id }); return { ok: true }; }
  useCrate(id) { const p = this.players.get(id), c = this.crate; if (!p || p.dead) return { ok: false, why: 'dead' }; if (!this.near(p, c.x, c.z, 2.4)) return { ok: false, why: 'far' };
    if (c.state === 'idle') { if (p.pts < c.price) return { ok: false, why: 'pts' }; p.pts -= c.price; const pool = CRATE_POOL.filter((w) => !p.owned.has(w)); c.weapon = (pool.length ? pool : CRATE_POOL)[(this.rng() * (pool.length || CRATE_POOL.length)) | 0]; c.state = 'roll'; c.t = 0; c.by = id; this.events.push({ e: 'crate', s: 'roll', by: id }); return { ok: true, s: 'roll' }; }
    if (c.state === 'ready') { if (c.by !== id) return { ok: false, why: 'not-yours' }; p.owned.add(c.weapon); this.events.push({ e: 'crate', s: 'take', by: id, w: c.weapon }); const w = c.weapon; c.state = 'idle'; c.weapon = null; c.by = null; return { ok: true, s: 'take', w }; }
    return { ok: false, why: 'busy' }; }
  // ---- shooting: weapon owned + off cooldown, origin = server position, walls block bullets ----
  shoot(id, m, now) {
    const p = this.players.get(id); if (!p || p.dead) return { ok: false, why: 'dead' }; const W = WEAPONS[m.w];
    if (!W || !p.owned.has(m.w)) return { ok: false, why: 'weapon' };
    const gap = 60000 / W.rpm * 0.8; if (now - (p.lastShot[m.w] ?? -1e15) < gap) return { ok: false, why: 'rate' }; p.lastShot[m.w] = now;
    if (!Array.isArray(m.dirs) || m.dirs.length < 1 || m.dirs.length > W.pellets) return { ok: false, why: 'dirs' };
    const o = { x: p.x, y: EYE, z: p.z }, hits = new Map(); let blocked = 0;
    for (const d0 of m.dirs) {
      if (!Array.isArray(d0) || d0.length !== 3 || !d0.every(fin)) return { ok: false, why: 'dirs' };
      const l = Math.hypot(d0[0], d0[1], d0[2]); if (l < 0.5 || l > 1.5) return { ok: false, why: 'dirs' }; const d = { x: d0[0] / l, y: d0[1] / l, z: d0[2] / l };
      const h = this.ray(o, d, W.range); if (!h) continue; if (this.world.ray(o, d, h.t) < h.t) { blocked++; continue; }
      const fall = W.pellets > 1 ? clamp(1.25 - h.t / 16, 0.25, 1) : 1; const e = hits.get(h.z) || { dmg: 0, head: false }; e.dmg += W.dmg * (h.head ? W.head : 1) * fall; e.head = e.head || h.head; hits.set(h.z, e);
    }
    const res = [];
    for (const [z, e] of hits) { z.hp -= e.dmg; const killed = z.hp <= 0; let g;
      if (killed) { g = this.gain(p, e.head ? 100 : z.value); this.zombies.delete(z.id); p.kills++; if (e.head) p.heads++; this.events.push({ e: 'kill', z: z.id, by: id, head: e.head }); this.onKill(z, p); }
      else { g = this.gain(p, 10); this.events.push({ e: 'hit', z: z.id, by: id, head: e.head }); }
      res.push({ z: z.id, killed, head: e.head, gain: g }); }
    return { ok: true, hits: res, blocked };
  }
  onKill(z, p) { // drops: med kit for a hurt killer, otherwise rare power-ups
    if (p.hp <= PLAYER_HP * 0.5 && this.time - p.lastMed >= MED_CD && ![...this.ups.values()].some((u) => u.type === 'health')) { p.lastMed = this.time; return this.drop('health', z.x, z.z); }
    if (this.round >= 2 && this.drops < 4 && this.time - this.lastDrop >= 18 && this.rng() < 0.05) { this.drops++; this.lastDrop = this.time; this.drop(['ammo', 'double', 'nuke'][(this.rng() * 3) | 0], z.x, z.z); } }
  drop(type, x, z) { const u = { id: this.nextU++, type, x, z, t: UP_LIFE }; this.ups.set(u.id, u); this.events.push({ e: 'up', u: u.id, type }); return u; }
  pickup(p, u) { this.ups.delete(u.id); this.events.push({ e: 'pick', u: u.id, type: u.type, p: p.id });
    if (u.type === 'health') p.hp = Math.min(PLAYER_HP, p.hp + PLAYER_HP * 0.5);
    else if (u.type === 'double') this.double = 30;
    else if (u.type === 'nuke') { const n = this.zombies.size; for (const z of this.zombies.values()) this.events.push({ e: 'kill', z: z.id, by: p.id, nuke: 1 }); this.zombies.clear(); p.kills += n; this.gain(p, 400); }
    /* ammo: client refills its own mags (ammo counts are cosmetic; fire rate is enforced here) */ }
  ray(o, d, max) { let best = null;
    for (const z of this.zombies.values()) { const s = z.scale, y0 = z.climb || 0;
      const hc = { x: z.x - o.x, y: y0 + 1.66 * s - o.y, z: z.z - o.z }, hr = 0.3 * s, b = hc.x * d.x + hc.y * d.y + hc.z * d.z, c = hc.x * hc.x + hc.y * hc.y + hc.z * hc.z - hr * hr, disc = b * b - c;
      let th = disc >= 0 && b - Math.sqrt(disc) > 0 ? b - Math.sqrt(disc) : null, tb = null;
      const ox = o.x - z.x, oz = o.z - z.z, a = d.x * d.x + d.z * d.z, br = 0.42 * s;
      if (a > 1e-8) { const bb = 2 * (ox * d.x + oz * d.z), cc = ox * ox + oz * oz - br * br, ds = bb * bb - 4 * a * cc; if (ds >= 0) { const sq = Math.sqrt(ds); for (const t of [(-bb - sq) / (2 * a), (-bb + sq) / (2 * a)]) if (t > 0) { const y = o.y + d.y * t - y0; if (y >= 0 && y <= 1.45 * s) { tb = t; break; } } } }
      let t = null, head = false; if (th !== null && (tb === null || th <= tb + 0.15)) { t = th; head = true; } else if (tb !== null) t = tb;
      if (t !== null && t < max && (!best || t < best.t)) best = { z, t, head }; }
    return best; }
  startRound(n) { this.round = n; this.phase = 'round'; this.toSpawn = roundCount(n, this.size); this.brutes = n >= 5 && n % 5 === 0 ? Math.min(4, 1 + ((n / 5) | 0)) : 0; this.spawnT = 1.5; this.drops = 0; this.events.push({ e: 'round', n }); }
  spawn() { const act = this.activeWins(), w = act[(this.rng() * act.length) | 0], st = zStats(this.round), brute = this.brutes > 0 && this.toSpawn <= this.brutes; const runner = this.round >= 3 && this.rng() < Math.min(0.55, (this.round - 2) * 0.09);
    const d = 4 + this.rng() * 5, side = (this.rng() * 2 - 1) * 3; const z = { id: this.nextZ++, x: w.out.x + w.n.x * d + w.t.x * side, z: w.out.z + w.n.z * d + w.t.z * side, yaw: Math.atan2(-w.n.x, -w.n.z), win: w, state: 'approach', scale: brute ? 1.38 : 0.94 + this.rng() * 0.12, brute, runner, slot: (this.rng() * 2 - 1) * 0.8,
      hp: st.hp * (brute ? 3.3 : 1) * (1 + 0.25 * (this.size - 1)), speed: Math.min(6, st.sp * (0.82 + this.rng() * 0.3) * (runner ? 1.45 : 1) * (brute ? 0.78 : 1)), dmg: brute ? BRUTE_DMG : ZDMG, value: brute ? 150 : 60, t: 0, cool: 0, v: (this.zombies.size + this.nextZ) % 4 };
    this.zombies.set(z.id, z); this.toSpawn--; return z; }
  nearest(z) { let best = null, bd = 1e9; for (const p of this.players.values()) { if (p.dead || !p.connected) continue; const d = Math.hypot(p.x - z.x, p.z - z.z); if (d < bd) { bd = d; best = p; } } return best ? { p: best, d: bd } : null; }
  step(dt) {
    if (this.over || this.size === 0) return; this.time += dt; if (this.double > 0) this.double -= dt;
    if (this.phase === 'wait' || this.phase === 'inter') { this.interT -= dt; if (this.interT <= 0) this.startRound(this.round + 1); }
    else if (this.phase === 'round') { if (this.toSpawn > 0) { this.spawnT -= dt; if (this.spawnT <= 0 && this.zombies.size < this.cap) { this.spawn(); this.spawnT = Math.max(0.3, 2.0 - this.round * 0.13) / Math.max(1, this.size * 0.75); } }
      if (this.toSpawn <= 0 && this.zombies.size === 0) { this.phase = 'inter'; this.interT = 8; for (const p of this.players.values()) if (p.dead) { p.dead = false; p.hp = PLAYER_HP / 2; this.events.push({ e: 'revive', p: p.id }); } } }
    for (const w of this.wins) if (w.cool > 0) w.cool -= dt;
    for (const z of this.zombies.values()) {
      z.t += dt; z.atk = 0; const w = z.win;
      if (z.state === 'approach') { const tx = w.out.x + w.t.x * z.slot, tz = w.out.z + w.t.z * z.slot, dx = tx - z.x, dz = tz - z.z, d = Math.hypot(dx, dz); if (d < 0.3) { z.state = w.count > 0 ? 'breach' : 'climb'; z.t = 0; z.cool = 0.6 + this.rng(); } else { const s = Math.min(d, z.speed * dt); z.x += dx / d * s; z.z += dz / d * s; z.yaw = Math.atan2(dx, dz); } }
      else if (z.state === 'breach') { z.cool -= dt; z.yaw = Math.atan2(-w.n.x, -w.n.z); if (w.count <= 0) { z.state = 'climb'; z.t = 0; } else if (z.cool <= 0) { z.cool = 1.2 + this.rng() * 0.8; z.atk = 1; if (w.cool <= 0) { w.count--; w.cool = 2.2 + this.rng(); this.events.push({ e: 'plank', w: w.id, n: w.count }); } } }
      else if (z.state === 'climb') { const k = Math.min(1, z.t / 1.25); const sx = w.out.x + w.t.x * z.slot, sz = w.out.z + w.t.z * z.slot, ex = w.in.x + w.t.x * z.slot * 0.6, ez = w.in.z + w.t.z * z.slot * 0.6; z.x = sx + (ex - sx) * k; z.z = sz + (ez - sz) * k; z.climb = Math.sin(k * Math.PI) * 0.75; if (k >= 1) { z.state = 'chase'; z.climb = 0; } }
      else { const n = this.nearest(z); if (!n) continue; let tx = n.p.x, tz = n.p.z;
        if (areaOf(z.z) !== areaOf(n.p.z)) { if (this.door.open) { tx = this.door.x; tz = DOOR_Z + (areaOf(z.z) === 'A' ? -1.5 : 1.5); if (Math.abs(z.z - DOOR_Z) < 1.2 && Math.abs(z.x - this.door.x) < 1.5) tz = n.p.z; } else continue; }
        const dx = tx - z.x, dz = tz - z.z, dl = Math.hypot(dx, dz) || 1; z.yaw = Math.atan2(n.p.x - z.x, n.p.z - z.z); z.cool -= dt;
        if (n.d > 1.0) { const s = Math.min(Math.max(0, dl - 0.9) || z.speed * dt, z.speed * dt); z.x += dx / dl * s; z.z += dz / dl * s; this.world.resolve(z, ZR); }
        if (n.d < 1.4 && z.cool <= 0 && this.world.segBlock(z, n.p) === null) { z.cool = 1.05; z.atk = 1; this.hurt(n.p, z.dmg); } }
      for (const o of this.zombies.values()) { if (o === z || o.state !== 'chase' || z.state !== 'chase') continue; const ex = z.x - o.x, ez = z.z - o.z, dd = ex * ex + ez * ez; if (dd < 0.5 && dd > 1e-6) { const q = Math.sqrt(dd); z.x += ex / q * 0.02; z.z += ez / q * 0.02; } }
    }
    // crate timer
    const c = this.crate; if (c.state !== 'idle') { c.t += dt; if (c.state === 'roll' && c.t > 3.6) { c.state = 'ready'; c.t = 0; this.events.push({ e: 'crate', s: 'ready', w: c.weapon, by: c.by }); } else if (c.state === 'ready' && c.t > 9) { c.state = 'idle'; c.weapon = null; c.by = null; this.events.push({ e: 'crate', s: 'shut' }); } }
    // power-ups: pickup by proximity, expire
    for (const u of [...this.ups.values()]) { u.t -= dt; if (u.t <= 0) { this.ups.delete(u.id); continue; } for (const p of this.players.values()) if (!p.dead && this.near(p, u.x, u.z, 1.5)) { this.pickup(p, u); break; } }
    const alive = [...this.players.values()].filter((p) => !p.dead);
    if (this.phase === 'round' && alive.length === 0 && this.size > 0) { this.over = true; this.events.push({ e: 'over', round: this.round }); }
  }
  hurt(p, dmg) { if (p.dead || p.god) return; p.hp -= dmg; p.lastHit = this.time; this.events.push({ e: 'hurt', p: p.id, dmg }); if (p.hp <= 0) { p.hp = 0; p.dead = true; this.events.push({ e: 'down', p: p.id }); } }
  snapshot() { const r = (v) => Math.round(v * 100) / 100;
    return { t: 's', time: r(this.time), round: this.round, phase: this.phase, over: this.over, dbl: this.double > 0 ? 1 : 0, door: this.door.open ? 1 : 0,
      win: this.wins.map((w) => w.count), crate: [this.crate.state, this.crate.weapon, this.crate.by],
      up: [...this.ups.values()].map((u) => [u.id, u.type, r(u.x), r(u.z)]),
      p: [...this.players.values()].map((p) => [p.id, p.name, r(p.x), r(p.z), r(p.yaw), r(p.pitch), Math.max(0, Math.round(p.hp)), p.pts, p.kills, p.dead ? 1 : 0, p.connected ? 1 : 0, [...p.owned]]),
      z: [...this.zombies.values()].map((z) => [z.id, r(z.x), r(z.z), r(z.yaw), z.state === 'chase' ? 3 : z.state === 'climb' ? 2 : z.state === 'breach' ? 1 : 0, r(z.climb || 0), z.brute ? 1 : 0, z.runner ? 1 : 0, z.atk, z.v]),
      ev: this.events.splice(0) }; }
}
module.exports = { Room, MAPS, WEAPONS, MAX_PLAYERS, PLAYER_HP, MAX_SPEED, roundCount, PLANKS };
