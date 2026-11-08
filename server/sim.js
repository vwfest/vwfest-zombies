// Authoritative co-op simulation: spawns, zombie movement, player health, damage, score.
// Pure logic (no sockets) so it can be unit tested. Coordinates match the client maps (metres, y up).
'use strict';
const MAPS = require('./maps.json');
const WEAPONS = require('./weapons.js');
const MAX_PLAYERS = 4, PLAYER_HP = 200, START_PTS = 500, ZDMG = 22, BRUTE_DMG = 44, MAX_SPEED = 9.5, EYE = 1.7;
const fin = (v) => typeof v === 'number' && Number.isFinite(v);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
function boundsOf(map) { const xs = [], zs = []; for (const w of map.windows) { xs.push(w.in.x); zs.push(w.in.z); } return { x0: Math.min(...xs), x1: Math.max(...xs), z0: Math.min(...zs), z1: Math.max(...zs) }; }
function roundCount(r, n) { return Math.max(3, Math.round((6 + r * 2.3 + r * r * 0.12) * (1 + 0.5 * (n - 1)))); }
function zStats(round) { return { hp: round < 10 ? 80 + 35 * round : 430 * Math.pow(1.1, round - 9), sp: Math.min(5.0, 1.5 + round * 0.24) }; }

class Room {
  constructor(code, mapId = 'junkyard', rng = Math.random) {
    this.code = code; this.mapId = MAPS[mapId] ? mapId : 'junkyard'; this.map = MAPS[this.mapId]; this.b = boundsOf(this.map); this.rng = rng;
    this.players = new Map(); this.zombies = new Map(); this.nextZ = 1; this.events = [];
    this.round = 0; this.phase = 'wait'; this.interT = 4; this.toSpawn = 0; this.spawnT = 0; this.time = 0; this.over = false; this.cap = 24;
    this.wins = this.map.windows.filter((w) => w.area === 'A');
  }
  get size() { return this.players.size; }
  addPlayer(id, name) {
    if (this.players.size >= MAX_PLAYERS) return null; const s = this.map.spawn, k = this.players.size;
    const p = { id, name: String(name || 'Survivor').replace(/[^A-Za-z0-9_\- .]/g, '').slice(0, 16) || 'Survivor', x: s.x + (k - 1.5) * 1.2, z: s.z, yaw: 0, pitch: 0, hp: PLAYER_HP, pts: START_PTS, kills: 0, heads: 0, dead: false, lastShot: {}, lastIn: 0, lastHit: 0, connected: true, owned: new Set(['pistol']) };
    this.players.set(id, p); return p;
  }
  removePlayer(id) { this.players.delete(id); }
  // client movement report: validated against max speed and map bounds (server keeps the authoritative copy)
  input(id, m, now) {
    const p = this.players.get(id); if (!p || p.dead) return false;
    if (![m.x, m.z, m.yaw, m.pitch].every(fin)) return false;
    const dt = Math.max(0.03, Math.min(0.5, (now - (p.lastIn || now - 100)) / 1000)); p.lastIn = now;
    let dx = m.x - p.x, dz = m.z - p.z; const d = Math.hypot(dx, dz), lim = MAX_SPEED * dt + 0.25;
    if (d > lim) { dx *= lim / d; dz *= lim / d; }
    p.x = clamp(p.x + dx, this.b.x0, this.b.x1); p.z = clamp(p.z + dz, this.b.z0, this.b.z1);
    p.yaw = m.yaw; p.pitch = clamp(m.pitch, -1.5, 1.5); return d <= lim;
  }
  buy(id, w) { const p = this.players.get(id), W = WEAPONS[w]; if (!p || !W || p.owned.has(w)) return false; const price = W.price || 950; if (p.pts < price) return false; p.pts -= price; p.owned.add(w); return true; }
  // shot: weapon must be owned + off cooldown; origin is the server's player position; directions are normalised and checked
  shoot(id, m, now) {
    const p = this.players.get(id); if (!p || p.dead) return { ok: false, why: 'dead' }; const W = WEAPONS[m.w];
    if (!W || !p.owned.has(m.w)) return { ok: false, why: 'weapon' };
    const gap = 60000 / W.rpm * 0.8; if (now - (p.lastShot[m.w] ?? -1e15) < gap) return { ok: false, why: 'rate' }; p.lastShot[m.w] = now;
    if (!Array.isArray(m.dirs) || m.dirs.length < 1 || m.dirs.length > W.pellets) return { ok: false, why: 'dirs' };
    const o = { x: p.x, y: EYE, z: p.z }, hits = new Map();
    for (const d0 of m.dirs) {
      if (!Array.isArray(d0) || d0.length !== 3 || !d0.every(fin)) return { ok: false, why: 'dirs' };
      const l = Math.hypot(d0[0], d0[1], d0[2]); if (l < 0.5 || l > 1.5) return { ok: false, why: 'dirs' }; const d = { x: d0[0] / l, y: d0[1] / l, z: d0[2] / l };
      const h = this.ray(o, d, W.range); if (!h) continue; const fall = W.pellets > 1 ? clamp(1.25 - h.t / 16, 0.25, 1) : 1;
      const e = hits.get(h.z) || { dmg: 0, head: false }; e.dmg += W.dmg * (h.head ? W.head : 1) * fall; e.head = e.head || h.head; hits.set(h.z, e);
    }
    const res = [];
    for (const [z, e] of hits) { z.hp -= e.dmg; let gain = 10; const killed = z.hp <= 0;
      if (killed) { gain = e.head ? 100 : z.value; this.zombies.delete(z.id); p.kills++; if (e.head) p.heads++; this.events.push({ e: 'kill', z: z.id, by: id, head: e.head }); }
      else this.events.push({ e: 'hit', z: z.id, by: id, head: e.head });
      p.pts += gain; res.push({ z: z.id, killed, head: e.head, gain }); }
    return { ok: true, hits: res };
  }
  ray(o, d, max) { let best = null;
    for (const z of this.zombies.values()) { const s = z.scale, y0 = z.climb || 0;
      const hc = { x: z.x - o.x, y: y0 + 1.66 * s - o.y, z: z.z - o.z }, hr = 0.3 * s, b = hc.x * d.x + hc.y * d.y + hc.z * d.z, c = hc.x * hc.x + hc.y * hc.y + hc.z * hc.z - hr * hr, disc = b * b - c;
      let th = disc >= 0 && b - Math.sqrt(disc) > 0 ? b - Math.sqrt(disc) : null, tb = null;
      const ox = o.x - z.x, oz = o.z - z.z, a = d.x * d.x + d.z * d.z, br = 0.42 * s;
      if (a > 1e-8) { const bb = 2 * (ox * d.x + oz * d.z), cc = ox * ox + oz * oz - br * br, ds = bb * bb - 4 * a * cc; if (ds >= 0) { const sq = Math.sqrt(ds); for (const t of [(-bb - sq) / (2 * a), (-bb + sq) / (2 * a)]) if (t > 0) { const y = o.y + d.y * t - y0; if (y >= 0 && y <= 1.45 * s) { tb = t; break; } } } }
      let t = null, head = false; if (th !== null && (tb === null || th <= tb + 0.15)) { t = th; head = true; } else if (tb !== null) t = tb;
      if (t !== null && t < max && (!best || t < best.t)) best = { z, t, head }; }
    return best; }
  startRound(n) { this.round = n; this.phase = 'round'; this.toSpawn = roundCount(n, this.size); this.brutes = n >= 5 && n % 5 === 0 ? Math.min(4, 1 + ((n / 5) | 0)) : 0; this.spawnT = 1.5; this.events.push({ e: 'round', n }); }
  spawn() { const w = this.wins[(this.rng() * this.wins.length) | 0], st = zStats(this.round), brute = this.brutes > 0 && this.toSpawn <= this.brutes; const runner = this.round >= 3 && this.rng() < Math.min(0.55, (this.round - 2) * 0.09);
    const d = 4 + this.rng() * 5, side = (this.rng() * 2 - 1) * 3; const z = { id: this.nextZ++, x: w.out.x + w.n.x * d + w.t.x * side, z: w.out.z + w.n.z * d + w.t.z * side, yaw: Math.atan2(-w.n.x, -w.n.z), win: w, state: 'approach', scale: brute ? 1.38 : 0.94 + this.rng() * 0.12, brute, runner,
      hp: st.hp * (brute ? 3.3 : 1) * (1 + 0.25 * (this.size - 1)), speed: Math.min(6, st.sp * (0.82 + this.rng() * 0.3) * (runner ? 1.45 : 1) * (brute ? 0.78 : 1)), dmg: brute ? BRUTE_DMG : ZDMG, value: brute ? 150 : 60, t: 0, cool: 0, v: (this.zombies.size + this.nextZ) % 4 };
    this.zombies.set(z.id, z); this.toSpawn--; return z; }
  nearest(z) { let best = null, bd = 1e9; for (const p of this.players.values()) { if (p.dead || !p.connected) continue; const d = Math.hypot(p.x - z.x, p.z - z.z); if (d < bd) { bd = d; best = p; } } return best ? { p: best, d: bd } : null; }
  step(dt) {
    if (this.over || this.size === 0) return; this.time += dt;
    if (this.phase === 'wait' || this.phase === 'inter') { this.interT -= dt; if (this.interT <= 0) this.startRound(this.round + 1); }
    else if (this.phase === 'round') { if (this.toSpawn > 0) { this.spawnT -= dt; if (this.spawnT <= 0 && this.zombies.size < this.cap) { this.spawn(); this.spawnT = Math.max(0.3, 2.0 - this.round * 0.13) / Math.max(1, this.size * 0.75); } }
      if (this.toSpawn <= 0 && this.zombies.size === 0) { this.phase = 'inter'; this.interT = 8; for (const p of this.players.values()) if (p.dead) { p.dead = false; p.hp = PLAYER_HP / 2; this.events.push({ e: 'revive', p: p.id }); } } }
    for (const z of this.zombies.values()) {
      z.t += dt; z.atk = 0;
      if (z.state === 'approach') { const dx = z.win.out.x - z.x, dz = z.win.out.z - z.z, d = Math.hypot(dx, dz); if (d < 0.3) { z.state = 'breach'; z.t = 0; } else { const s = Math.min(d, z.speed * dt); z.x += dx / d * s; z.z += dz / d * s; z.yaw = Math.atan2(dx, dz); } }
      else if (z.state === 'breach') { if (z.t > 2.5) { z.state = 'climb'; z.t = 0; } }
      else if (z.state === 'climb') { const k = Math.min(1, z.t / 1.25); z.x = z.win.out.x + (z.win.in.x - z.win.out.x) * k; z.z = z.win.out.z + (z.win.in.z - z.win.out.z) * k; z.climb = Math.sin(k * Math.PI) * 0.75; if (k >= 1) { z.state = 'chase'; z.climb = 0; } }
      else { const n = this.nearest(z); if (!n) continue; const dx = n.p.x - z.x, dz = n.p.z - z.z; z.yaw = Math.atan2(dx, dz); z.cool -= dt;
        if (n.d > 1.0) { const s = Math.min(n.d - 0.9, z.speed * dt); z.x += dx / n.d * s; z.z += dz / n.d * s; }
        if (n.d < 1.4 && z.cool <= 0) { z.cool = 1.05; z.atk = 1; this.hurt(n.p, z.dmg); } }
      // separation
      for (const o of this.zombies.values()) { if (o === z || o.state !== 'chase' || z.state !== 'chase') continue; const ex = z.x - o.x, ez = z.z - o.z, dd = ex * ex + ez * ez; if (dd < 0.5 && dd > 1e-6) { const q = Math.sqrt(dd); z.x += ex / q * 0.02; z.z += ez / q * 0.02; } }
    }
    const alive = [...this.players.values()].filter((p) => !p.dead);
    if (this.phase === 'round' && alive.length === 0 && this.size > 0) { this.over = true; this.events.push({ e: 'over', round: this.round }); }
  }
  hurt(p, dmg) { if (p.dead) return; p.hp -= dmg; p.lastHit = this.time; this.events.push({ e: 'hurt', p: p.id, dmg }); if (p.hp <= 0) { p.hp = 0; p.dead = true; this.events.push({ e: 'down', p: p.id }); } }
  snapshot() { const r = (v) => Math.round(v * 100) / 100;
    return { t: 's', time: r(this.time), round: this.round, phase: this.phase, over: this.over,
      p: [...this.players.values()].map((p) => [p.id, p.name, r(p.x), r(p.z), r(p.yaw), r(p.pitch), Math.max(0, Math.round(p.hp)), p.pts, p.kills, p.dead ? 1 : 0, p.connected ? 1 : 0]),
      z: [...this.zombies.values()].map((z) => [z.id, r(z.x), r(z.z), r(z.yaw), z.state === 'chase' ? 3 : z.state === 'climb' ? 2 : z.state === 'breach' ? 1 : 0, r(z.climb || 0), z.brute ? 1 : 0, z.runner ? 1 : 0, z.atk, z.v]),
      ev: this.events.splice(0) }; }
}
module.exports = { Room, MAPS, WEAPONS, MAX_PLAYERS, PLAYER_HP, MAX_SPEED, roundCount };
