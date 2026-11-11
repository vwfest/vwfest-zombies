// Wave objectives. Single-player runs them locally. Co-op only renders the server snapshot.
import * as THREE from 'three';
import { YARD, areaOf } from './nav.js';

const $ = (id) => document.getElementById(id);

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
  const state = { mode: 'sp', job: null, pid: 'you' };
  const beacon = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 7, 5), new THREE.MeshBasicMaterial({ color: 0xffd36b, transparent: true, opacity: 0.9, depthWrite: false }));
  pole.position.y = 3.5; pole.userData.noAO = true;
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: world.T && world.T.glow, color: new THREE.Color(3, 2.1, 0.4), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false }));
  glow.scale.setScalar(1.6); glow.position.y = 6.6; glow.userData.noAO = true;
  beacon.add(pole, glow); beacon.visible = false; world.scene.add(beacon);
  const arrow = $('objArrow');
  const hud = $('mission');
  const _v = new THREE.Vector3();

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
  function finish() {
    const s = state.job; if (!s || state.mode !== 'sp') return;
    const g = s.gate && world.doors.find((d) => d.id === s.gate);
    if (g && !g.open) g.open = true;
    const pts = s.pts * (G.double > 0 ? 2 : 1);
    P.pts += pts;
    for (const sl of P.slots) if (sl && ctx.weapons[sl.id]) { sl.mag = ctx.weapons[sl.id].mag; sl.reserve = ctx.weapons[sl.id].reserve; }
    if (s.power) spawnPower(s.power, s.pad.x, s.pad.z);
    popText('+' + pts); banner(s.title.toUpperCase(), g ? g.blurb : 'Objective complete'); sfx.cash(); if (g) sfx.door();
    begin(s.index + 1);
  }
  function reset() { state.mode = 'sp'; state.pid = 'you'; if (world.mapId !== 'junkyard') { state.job = null; syncMeshes(); return; } begin(0); }
  function update(dt) {
    if (state.mode !== 'sp' || !state.job || G.state !== 'playing') return;
    const s = state.job;
    if (s.kind === 'carry' && !s.carry.you) {
      let best = null, bd = YARD.pickup;
      for (const it of s.items) if (!it.done && !it.carried) { const d = Math.hypot(P.x - it.x, P.z - it.z); if (d <= bd) { bd = d; best = it; } }
      if (best) { best.carried = 'you'; s.carry.you = best.id; sfx.click(0, 880, 0.28); }
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
      if (s.have >= s.need) finish(); else syncMeshes();
      return true;
    }
    if (s.kind === 'board') {
      const spot = s.items.find((it) => !it.done && Math.hypot(P.x - it.x, P.z - it.z) <= YARD.board);
      if (!spot) return false;
      spot.done = true; s.have++; sfx.repair();
      if (s.have >= s.need) finish(); else syncMeshes();
      return true;
    }
    return false;
  }
  function onKill(z) {
    if (state.mode !== 'sp' || !state.job || state.job.kind !== 'clear' || !z) return;
    if (areaOf(z.pos.x, z.pos.z, world.mapId) !== state.job.area) return;
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
    if (!ms) { state.job = null; syncMeshes(); return; }
    const def = YARD.jobs.find((j) => j.id === ms[0]);
    if (!def) { state.job = null; syncMeshes(); return; }
    const carry = {};
    for (const row of mc || []) carry[row[0]] = row[1];
    const carriedIds = new Set(Object.values(carry));
    state.job = { index: YARD.jobs.indexOf(def), id: def.id, title: def.title, kind: def.kind, gate: def.gate || '', area: def.area, need: ms[2], pts: def.pts, power: def.power || '', pad: { x: ms[3], z: ms[4] }, have: ms[1], carry, items: (mi || []).filter((row) => !carriedIds.has(row[0])).map((row) => ({ id: row[0], x: row[1], z: row[2], done: false, carried: null })) };
    syncMeshes();
  }
  function onNetEvent(e) {
    if (!e || e.e !== 'mission') return;
    const def = YARD.jobs.find((j) => j.id === e.id);
    banner((def ? def.title : 'OBJECTIVE').toUpperCase(), def && def.gate ? 'Gate open' : 'Objective complete');
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
    const playing = G.state === 'playing' && state.job;
    if (hud) hud.classList.toggle('hidden', !playing);
    if (!playing) { beacon.visible = false; if (arrow) arrow.classList.add('hidden'); world.marker = null; return; }
    const s = state.job, m = marker();
    $('msTitle').textContent = s.title;
    $('msDetail').textContent = detail(s, state.pid);
    $('msCount').textContent = Math.min(s.need, Math.floor(s.have)) + '/' + s.need;
    const bar = $('msBar'); if (bar) bar.style.width = Math.max(0, Math.min(100, (s.have / s.need) * 100)) + '%';
    world.marker = m;
    beacon.visible = true; beacon.position.set(m.x, 0, m.z); glow.position.y = 6.2 + Math.sin(G.time * 3) * 0.25;
    if (!arrow || !cam) return;
    _v.set(m.x, 2.2, m.z).project(cam);
    const behind = _v.z > 1;
    let nx = behind ? -_v.x : _v.x, ny = behind ? -_v.y : _v.y;
    const ax = (nx * 0.5 + 0.5) * innerWidth, ay = (-ny * 0.5 + 0.5) * innerHeight;
    const onScreen = !behind && ax > 48 && ax < innerWidth - 48 && ay > 48 && ay < innerHeight - 48;
    if (onScreen) { arrow.classList.add('hidden'); return; }
    const ang = Math.atan2(ay - innerHeight / 2, ax - innerWidth / 2);
    const cx = innerWidth / 2 + Math.cos(ang) * Math.min(innerWidth, innerHeight) * 0.38;
    const cy = innerHeight / 2 + Math.sin(ang) * Math.min(innerWidth, innerHeight) * 0.38;
    arrow.classList.remove('hidden');
    arrow.style.left = cx + 'px'; arrow.style.top = cy + 'px';
    arrow.style.transform = `translate(-50%,-50%) rotate(${ang + Math.PI / 4}rad)`;
  }
  reset();
  return { reset, update, use, onKill, drop, applyNet, onNetEvent, focus, price, frame, get job() { return state.job; } };
}
