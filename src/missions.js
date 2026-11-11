// Wave objectives. Single-player runs them locally. Co-op only renders the server snapshot.
import * as THREE from 'three';
import { YARD, areaOf } from './nav.js';
import { createMissionUI, nextUnlock, COPY } from './ui/missionui.js';

const $ = (id) => document.getElementById(id);
const ORDER = [
  { id: 'fuel', wave: 1 }, { id: 'carb', wave: 2 }, { id: 'bus', wave: 3 },
  { id: 'parts', wave: 4 }, { id: 'radio', wave: 5 }, { id: 'clear', wave: 5 },
];

function copyJob(i) {
  const def = YARD.jobs[i];
  if (!def) return null;
  return { index: i, id: def.id, title: def.title, kind: def.kind, gate: def.gate || '', area: def.area, need: def.need, pts: def.pts, power: def.power || '', pad: { x: def.pad.x, z: def.pad.z }, have: 0, items: (def.items || []).map((it) => ({ id: it.id, x: it.x, z: it.z, done: false, carried: null })), carry: {} };
}

function detail(s, pid) {
  const carrying = !!(s.carry && s.carry[pid]);
  if (s.id === 'fuel') return carrying ? 'Carry the can to the generator' : `Fuel cans ${s.have}/${s.need}`;
  if (s.id === 'carb') return carrying ? 'Deliver the carb to the side bench' : 'Find the carburetor';
  if (s.id === 'parts') return carrying ? 'Deliver scrap to the Lot C bench' : `Scrap parts ${s.have}/${s.need}`;
  if (s.id === 'bus') return `Board the orange bus ${s.have}/${s.need}`;
  if (s.id === 'radio') return `Hold the radio ${Math.min(s.need, Math.floor(s.have))}/${s.need}s`;
  if (s.id === 'clear') return `Clear Lot D ${s.have}/${s.need}`;
  return `${s.have}/${s.need}`;
}

export function createMissions(ctx) {
  const { world, P, G, sfx, banner, toast, popText, spawnPower } = ctx;
  const state = { mode: 'sp', job: null, pid: 'you', unlocked: [], done: new Set(), gap: false, gapWave: 0, lastArea: '', waves: 0 };
  const ui = createMissionUI({ world, isTouch: document.body.classList.contains('touch') });
  const phase = () => (ctx.phase ? ctx.phase() : G.phase);
  const itemName = (s) => (COPY[s.id] && COPY[s.id].item) || 'item';

  function syncMeshes() {
    const live = new Set();
    if (state.job) for (const it of state.job.items) if (!it.done && !it.carried) live.add(it.id);
    for (const [id, mesh] of world.missionMeshes) {
      const it = state.job && state.job.items.find((q) => q.id === id);
      mesh.visible = live.has(id);
      if (it && mesh.visible) { mesh.position.x = it.x; mesh.position.z = it.z; }
    }
  }
  function begin(i) {
    state.job = copyJob(i);
    syncMeshes();
    if (!state.job && state.mode === 'sp') toast('All objectives complete');
  }
  function tryStart() {
    if (state.job || state.gap || state.mode !== 'sp' || world.mapId !== 'junkyard') return false;
    const next = ORDER.find((row) => state.unlocked.includes(row.id) && !state.done.has(row.id));
    if (!next) return false;
    begin(YARD.jobs.findIndex((j) => j.id === next.id));
    return !!state.job;
  }
  function onWave(n) {
    if (state.mode !== 'sp' || world.mapId !== 'junkyard') return false;
    state.waves = Math.max(state.waves, n | 0);
    for (const row of ORDER) if (row.wave <= state.waves && !state.unlocked.includes(row.id)) state.unlocked.push(row.id);
    if (state.gap) {
      const next = ORDER.find((row) => state.unlocked.includes(row.id) && !state.done.has(row.id));
      const def = next && YARD.jobs.find((j) => j.id === next.id);
      const same = !!(def && def.area === state.lastArea);
      if (same ? state.waves > state.gapWave : state.waves >= state.gapWave) state.gap = false;
    }
    if (!tryStart()) return false;
    ui.start(state.job.id);
    sfx.announce?.(sfx.lineFor?.('mission', state.job.id, G.round));
    return true;
  }
  function finish() {
    const s = state.job; if (!s || state.mode !== 'sp') return;
    const g = s.gate && world.doors.find((d) => d.id === s.gate);
    if (g && !g.open) g.open = true;
    const pts = s.pts * (G.double > 0 ? 2 : 1);
    P.pts += pts;
    for (const sl of P.slots) if (sl && ctx.weapons[sl.id]) { sl.mag = ctx.weapons[sl.id].mag; sl.reserve = ctx.weapons[sl.id].reserve; }
    if (s.power) spawnPower(s.power, s.pad.x, s.pad.z);
    popText('+' + pts); ui.complete(s.id, { pts, next: nextUnlock(s.id, G.round, G.phase) }); sfx.cash(); if (g) sfx.door();
    sfx.announce?.(sfx.lineFor?.('done', s.id, G.round));
    state.done.add(s.id); state.lastArea = s.area; state.gap = true; state.gapWave = G.round; state.job = null; syncMeshes();
  }
  function reset() { state.mode = 'sp'; state.pid = 'you'; state.job = null; state.unlocked = []; state.done = new Set(); state.gap = false; state.gapWave = 0; state.lastArea = ''; state.waves = 0; syncMeshes(); }
  function update(dt) {
    if (state.mode !== 'sp' || !state.job || G.state !== 'playing') return;
    const s = state.job;
    if (s.kind === 'carry' && !s.carry.you) {
      let best = null, bd = YARD.pickup;
      for (const it of s.items) if (!it.done && !it.carried) { const d = Math.hypot(P.x - it.x, P.z - it.z); if (d <= bd) { bd = d; best = it; } }
      if (best) { best.carried = 'you'; s.carry.you = best.id; sfx.click(0, 880, 0.28); toast(`Picked up ${itemName(s)}` + (s.need > 1 ? ` (${s.have + 1}/${s.need})` : '')); }
    } else if (s.kind === 'radio' && G.phase === 'round') {
      const inside = Math.hypot(P.x - s.pad.x, P.z - s.pad.z) <= YARD.radio;
      s.have = inside ? s.have + dt : Math.max(0, s.have - dt * YARD.decay);
    }
    if (s.have >= s.need) finish();
    syncMeshes();
  }
  function use() {
    const s = state.job; if (!s || state.mode !== 'sp') return false;
    if (s.kind === 'carry') {
      if (!s.carry.you) { toast('Pick it up first'); return false; }
      if (Math.hypot(P.x - s.pad.x, P.z - s.pad.z) > YARD.deliver) return false;
      const it = s.items.find((q) => q.id === s.carry.you);
      if (it) { it.done = true; it.carried = null; }
      delete s.carry.you; s.have++; sfx.repair();
      if (s.have >= s.need) finish(); else { syncMeshes(); toast(`Delivered ${itemName(s)} (${s.have}/${s.need})`); }
      return true;
    }
    if (s.kind === 'board') {
      const spot = s.items.find((it) => !it.done && Math.hypot(P.x - it.x, P.z - it.z) <= YARD.board);
      if (!spot) return false;
      spot.done = true; s.have++; sfx.repair();
      if (s.have >= s.need) finish(); else { syncMeshes(); toast(`Window boarded (${s.have}/${s.need})`); }
      return true;
    }
    return false;
  }
  function onKill(z) {
    if (state.mode !== 'sp' || !state.job || state.job.kind !== 'clear' || !z) return;
    const w = z.win, near = !!(w && w.area === state.job.area && Math.hypot(z.pos.x - w.c.x, z.pos.z - w.c.z) < 12);
    if (areaOf(z.pos.x, z.pos.z, world.mapId) !== state.job.area && !near) return; // zombies at a lot's windows stand outside its fence
    state.job.have++; if (state.job.have >= state.job.need) finish();
  }
  function drop() {
    if (state.mode !== 'sp' || !state.job || !state.job.carry.you) return;
    const it = state.job.items.find((q) => q.id === state.job.carry.you);
    if (it && !it.done) { it.x = P.x; it.z = P.z; it.carried = null; }
    delete state.job.carry.you; syncMeshes();
  }
  function applyNet(ms, mi, mc, pid) {
    state.mode = 'net'; state.pid = pid || state.pid;
    const prevJob = state.job, had = !!(prevJob && prevJob.carry && prevJob.carry[state.pid]);
    if (!ms) { state.job = null; syncMeshes(); return; }
    const def = YARD.jobs.find((j) => j.id === ms[0]);
    if (!def) { state.job = null; syncMeshes(); return; }
    const carry = {};
    for (const row of mc || []) carry[row[0]] = row[1];
    const carriedIds = new Set(Object.values(carry));
    state.job = { index: YARD.jobs.indexOf(def), id: def.id, title: def.title, kind: def.kind, gate: def.gate || '', area: def.area, need: ms[2], pts: def.pts, power: def.power || '', pad: { x: ms[3], z: ms[4] }, have: ms[1], carry, items: (mi || []).filter((row) => !carriedIds.has(row[0])).map((row) => ({ id: row[0], x: row[1], z: row[2], done: false, carried: null })) };
    if (prevJob && prevJob.id === def.id && !had && carry[state.pid]) toast(`Picked up ${itemName(state.job)}` + (state.job.need > 1 ? ` (${state.job.have + 1}/${state.job.need})` : ''));
    else if (prevJob && prevJob.id === def.id && state.job.kind !== 'radio' && state.job.have > prevJob.have && state.job.have < state.job.need) toast(`${state.job.kind === 'clear' ? 'Lot D kills' : state.job.kind === 'board' ? 'Window boarded' : 'Delivered ' + itemName(state.job)} (${state.job.have}/${state.job.need})`);
    syncMeshes();
  }
  function onNetEvent(e) {
    if (!e || e.e !== 'mission') return;
    const def = YARD.jobs.find((j) => j.id === e.id);
    if (e.start) { ui.start(e.id); sfx.announce?.(sfx.lineFor?.('mission', e.id, G.round)); return; }
    ui.complete(e.id, { pts: e.pts, next: nextUnlock(e.id, G.round, phase()) });
    sfx.announce?.(sfx.lineFor?.('done', e.id, G.round));
    sfx.cash(); if (def && def.gate) sfx.door();
    for (const sl of P.slots) if (sl && ctx.weapons[sl.id]) { sl.mag = ctx.weapons[sl.id].mag; sl.reserve = ctx.weapons[sl.id].reserve; }
  }
  function focus(px, pz) {
    const s = state.job; if (!s) return null;
    if (s.kind === 'board') {
      let best = null;
      for (const it of s.items) if (!it.done && !it.carried) { const d = Math.hypot(px - it.x, pz - it.z); if (d <= YARD.board && (!best || d < best.d)) best = { d, name: 'Board this window' }; }
      return best && { type: 'job', d: best.d, hold: true, name: best.name };
    }
    if (s.kind === 'carry' && s.carry[state.pid]) {
      const d = Math.hypot(px - s.pad.x, pz - s.pad.z);
      if (d <= YARD.deliver) return { type: 'job', d, hold: false, name: s.id === 'carb' ? 'Install the carb' : 'Deliver' };
    }
    return null;
  }
  function price(door) {
    if (!door) return 0;
    if (state.job && state.job.gate === door.id) return Math.floor(door.price * YARD.discount);
    return door.price;
  }
  function marker() {
    const s = state.job; if (!s) return null;
    if (s.carry && s.carry[state.pid]) return s.pad;
    let best = null, bd = 1e9;
    for (const it of s.items) if (!it.done && !it.carried) { const d = Math.hypot((P.x || 0) - it.x, (P.z || 0) - it.z); if (d < bd) { bd = d; best = it; } }
    return best || s.pad;
  }
  function frame(cam) {
    const playing = G.state === 'playing' && state.job && world.mapId === 'junkyard';
    if (!playing) { ui.hide(); world.marker = null; return; }
    world.marker = ui.frame(state.job, { pid: state.pid, P, phase: phase(), doors: world.doors, cam, time: G.time, price }) || marker();
  }
  reset();
  return { reset, update, use, onKill, drop, applyNet, onNetEvent, onWave, focus, price, frame, get job() { return state.job; } };
}
