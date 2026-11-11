// Server-authoritative objectives. Keep the rules aligned with src/missions.js.
'use strict';
const { yard } = require('./nav.js');
const { areaOf } = require('./nav.js');
const WEAPONS = require('./weapons.js');
const pack = (id) => { const W = WEAPONS[id]; return W ? { mag: W.mag, res: W.reserve } : null; };

class Missions {
  constructor(room) { this.room = room; this.job = null; this.boardAt = new Map(); }
  begin(i) {
    if (i >= yard.jobs.length) { this.job = null; return; }
    const def = yard.jobs[i];
    this.job = { index: i, id: def.id, title: def.title, kind: def.kind, gate: def.gate || '', area: def.area, need: def.need, pts: def.pts, power: def.power || '', pad: { ...def.pad }, have: 0, items: (def.items || []).map((it) => ({ id: it.id, x: it.x, z: it.z, done: false, carried: null })), carry: {} };
  }
  price(g) { const j = this.job; if (j && j.gate && j.gate === g.id) return Math.floor(g.price * yard.discount); return g.price; }
  step(dt) {
    const room = this.room; if (room.mapId !== 'junkyard' || room.phase === 'lobby' || room.over) return;
    if (!this.job) this.begin(0);
    const j = this.job; if (!j) return;
    const players = [...room.players.values()].filter((p) => p.connected && !p.dead);
    if (j.kind === 'carry') {
      for (const p of players) {
        if (j.carry[p.id]) continue;
        let best = null, bd = yard.pickup;
        for (const it of j.items) if (!it.done && !it.carried) { const d = Math.hypot(p.x - it.x, p.z - it.z); if (d <= bd) { bd = d; best = it; } }
        if (best) { best.carried = p.id; j.carry[p.id] = best.id; }
      }
    } else if (j.kind === 'radio' && room.phase === 'round') {
      const holder = players.filter((p) => Math.hypot(p.x - j.pad.x, p.z - j.pad.z) <= yard.radio).sort((a, b) => Math.hypot(a.x - j.pad.x, a.z - j.pad.z) - Math.hypot(b.x - j.pad.x, b.z - j.pad.z))[0];
      j.have = holder ? j.have + dt : Math.max(0, j.have - dt * yard.decay);
      if (j.have >= j.need) this.finish(holder && holder.id);
      return;
    }
    if (j.have >= j.need) this.finish(players[0] && players[0].id);
  }
  use(pid, now) {
    const room = this.room, p = room.players.get(pid), j = this.job;
    if (!p || p.dead || !j) return { ok: false, why: 'state' };
    if (room.phase === 'lobby') return { ok: false, why: 'lobby' };
    if (j.kind === 'carry') {
      const id = j.carry[pid]; if (!id) return { ok: false, why: 'empty' };
      if (Math.hypot(p.x - j.pad.x, p.z - j.pad.z) > yard.deliver) return { ok: false, why: 'far' };
      const it = j.items.find((q) => q.id === id);
      if (it) { it.done = true; it.carried = null; }
      delete j.carry[pid]; j.have++;
      if (j.have >= j.need) this.finish(pid);
      return { ok: true, id: j.id, have: j.have };
    }
    if (j.kind === 'board') {
      if (now - (this.boardAt.get(pid) || 0) < 480) return { ok: false, why: 'rate' };
      const spot = j.items.find((it) => !it.done && Math.hypot(p.x - it.x, p.z - it.z) <= yard.board);
      if (!spot) return { ok: false, why: 'far' };
      this.boardAt.set(pid, now); spot.done = true; j.have++;
      if (j.have >= j.need) this.finish(pid);
      return { ok: true, id: j.id, have: j.have };
    }
    return { ok: false, why: 'state' };
  }
  onKill(z) {
    const j = this.job; if (!j || j.kind !== 'clear' || !z) return;
    if (areaOf(z.x, z.z, this.room.mapId) !== j.area) return;
    j.have++; if (j.have >= j.need) this.finish();
  }
  drop(p) {
    const j = this.job; if (!j || !p || !j.carry[p.id]) return;
    const it = j.items.find((q) => q.id === j.carry[p.id]);
    if (it && !it.done) { it.x = p.x; it.z = p.z; it.carried = null; }
    delete j.carry[p.id];
  }
  finish(pid) {
    const room = this.room, j = this.job; if (!j) return;
    const p = (pid && room.players.get(pid)) || [...room.players.values()].find((q) => q.connected && !q.dead);
    if (p) room.gain(p, j.pts);
    for (const pl of room.players.values()) if (!pl.dead) for (const id of pl.owned) { const a = pack(id); if (a) pl.ammo[id] = a; }
    if (j.power) room.drop(j.power, j.pad.x, j.pad.z);
    if (j.gate) room.openGate(j.gate, p && p.id, true);
    room.events.push({ e: 'mission', id: j.id, gate: j.gate || '', power: j.power || '', pts: j.pts });
    this.begin(j.index + 1);
  }
  snap() { const j = this.job; if (!j) return null; return [j.id, Math.floor(j.have), j.need, j.pad.x, j.pad.z]; }
  items() { const j = this.job; if (!j) return []; return j.items.filter((it) => !it.done && !it.carried).map((it) => [it.id, Math.round(it.x * 100) / 100, Math.round(it.z * 100) / 100]); }
  carried() { const j = this.job; if (!j) return []; return Object.entries(j.carry).map(([pid, id]) => [pid, id]); }
}
module.exports = { Missions };
