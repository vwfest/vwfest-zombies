// Mission HUD: goal card, segmented progress, waypoint diamond + ground ring, edge arrow, start banner and
// MISSION COMPLETE stamp. Pure DOM (CSP-safe: no inline style attributes, widths go through the CSSOM).
import * as THREE from 'three';
import { YARD, activeAreas, areaOf } from '../nav.js';

const $ = (id) => document.getElementById(id);
export const ICON = {
  can: '<svg viewBox="0 0 24 24"><path d="M6 6.5L9 3h8.5a1.5 1.5 0 0 1 1.5 1.5v16a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20.5V8z" fill="currentColor"/><rect x="11" y="4.6" width="5.5" height="2.4" rx="1" fill="#2a1606"/><path d="M8 11.5l8 7.5M16 11.5l-8 7.5" stroke="#2a1606" stroke-width="2" stroke-linecap="round"/></svg>',
  bolt: '<svg viewBox="0 0 24 24"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="currentColor"/></svg>',
  gear: '<svg viewBox="0 0 24 24"><path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zm8.6 5.3l2-1.5-2-3.5-2.4.8a7.6 7.6 0 0 0-1.9-1.1L15.8 5.7h-4l-.5 2.5a7.6 7.6 0 0 0-1.9 1.1L7 8.5 5 12l2 1.5a7 7 0 0 0 0 2.2L5 17.2l2 3.5 2.4-.8c.6.5 1.2.8 1.9 1.1l.5 2.5h4l.5-2.5c.7-.3 1.3-.6 1.9-1.1l2.4.8 2-3.5-2-1.5a7 7 0 0 0 0-2.2z" fill="currentColor" transform="translate(0 -2.2) scale(1 1)"/></svg>',
  wrench: '<svg viewBox="0 0 24 24"><path d="M21 6.5a5 5 0 0 1-6.6 4.7L6.3 19.3a1.9 1.9 0 0 1-2.7-2.7l8.1-8.1A5 5 0 0 1 17.5 3l-3 3 .7 2.8 2.8.7z" fill="currentColor"/></svg>',
  hammer: '<svg viewBox="0 0 24 24"><path d="M3 9l6-6 3 3-1.5 1.5L21 18l-3 3L7.5 10.5 6 12z" fill="currentColor"/></svg>',
  radio: '<svg viewBox="0 0 24 24"><path d="M12 10.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM11 14.5h2l2.5 7.5h-2l-.6-2h-1.8l-.6 2h-2z" fill="currentColor"/><path d="M7.8 8.2a6 6 0 0 0 0 8.4M16.2 8.2a6 6 0 0 1 0 8.4M5 5.5a10 10 0 0 0 0 14M19 5.5a10 10 0 0 1 0 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  skull: '<svg viewBox="0 0 24 24"><path d="M12 2.5c-4.7 0-8 3.2-8 7.6 0 2.5 1.1 4.3 2.8 5.4V19c0 .8.6 1.4 1.4 1.4h1v-2h1.6v2h2.4v-2h1.6v2h1c.8 0 1.4-.6 1.4-1.4v-3.5c1.7-1.1 2.8-2.9 2.8-5.4 0-4.4-3.3-7.6-8-7.6zm-3.2 6.7a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6.4 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="currentColor"/></svg>',
  gate: '<svg viewBox="0 0 24 24"><path d="M3 21V5l4-2v18M21 21V5l-4-2v18M7 8h10M7 13h10M7 18h10" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>',
  ammo: '<svg viewBox="0 0 24 24"><path d="M5 22V10c0-3 1.5-6 2.5-7 1 1 2.5 4 2.5 7v12zM14 22V10c0-3 1.5-6 2.5-7 1 1 2.5 4 2.5 7v12z" fill="currentColor"/></svg>',
  x2: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M6.5 8.5l4.5 7M11 8.5l-4.5 7M13.5 10.2c.4-1.2 1.4-1.8 2.6-1.8 1.4 0 2.4.9 2.4 2.1 0 1.9-2.7 2.9-5 5h5.2" fill="none" stroke="#2a1606" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21l1.5-7L2 9.3l7-.8z" fill="currentColor"/></svg>',
  lock: '<svg viewBox="0 0 24 24"><path d="M7 10V7.5a5 5 0 0 1 10 0V10h1.5v11h-13V10zm2.5 0h5V7.5a2.5 2.5 0 0 0-5 0z" fill="currentColor"/></svg>',
};
export const ORDER = ['fuel', 'carb', 'bus', 'parts', 'radio', 'clear'];
export const UNLOCK = { fuel: 1, carb: 2, bus: 3, parts: 4, radio: 5, clear: 5 };
const GATE_WORD = { AB: 'the back gate', AC: 'the Lot C gate', AD: 'the Lot D gate', SD: 'the side gate', BE: 'the Lot E gate' };
const GATE_LABEL = { AB: 'BACK GATE', AC: 'LOT C GATE', AD: 'LOT D GATE', SD: 'SIDE GATE', BE: 'LOT E GATE' };
const POWER = { double: { t: '2× POINTS DROP', i: 'x2', tl: true }, ammo: { t: 'FULL MAGS DROP', i: 'ammo', tl: false } };
// Per-mission copy. goal(s, carrying) returns { html, icon, label } for the live card + waypoint.
export const COPY = {
  fuel: { icon: 'can', item: 'fuel can', items: 'fuel cans', brief: 'Find <em>3 fuel cans</em> and carry them to the <em>generator</em>', find: 'Find a <em>fuel can</em>', bring: 'Bring the can to the <em>generator</em>', itemLabel: 'FUEL CAN', itemIcon: 'can', padLabel: 'GENERATOR', padIcon: 'bolt' },
  carb: { icon: 'gear', item: 'carburetor', items: 'carburetor', brief: 'Grab the <em>carburetor</em> and install it on the <em>back-lot bench</em>', find: 'Find the <em>carburetor</em>', bring: 'Install it on the <em>back-lot bench</em>', itemLabel: 'CARBURETOR', itemIcon: 'gear', padLabel: 'BACK-LOT BENCH', padIcon: 'wrench' },
  bus: { icon: 'hammer', brief: 'Board up the <em>bus windows</em>: hold <em>E</em> at each one', find: 'Hold <em>E</em> at each <em>bus window</em>', itemLabel: 'BUS WINDOW', itemIcon: 'hammer' },
  parts: { icon: 'gear', item: 'scrap part', items: 'scrap parts', brief: 'Collect <em>3 scrap parts</em> in Lot C and bring them to the <em>Lot C bench</em>', find: 'Find a <em>scrap part</em> in Lot C', bring: 'Bring it to the <em>Lot C bench</em>', itemLabel: 'SCRAP PART', itemIcon: 'gear', padLabel: 'LOT C BENCH', padIcon: 'wrench' },
  radio: { icon: 'radio', brief: 'Stand in the <em>radio ring</em> during a wave for <em>20 s</em>. Leaving drains the timer', padLabel: 'RADIO', padIcon: 'radio' },
  clear: { icon: 'skull', brief: 'Get <em>8 kills in Lot D</em>, including zombies at its windows', find: 'Get <em>kills in Lot D</em>', padLabel: 'LOT D', padIcon: 'skull' },
};
const fmt = (n) => Math.round(n).toLocaleString('en-US');

export function nextUnlock(id, round, phase) {
  const i = ORDER.indexOf(id), nx = ORDER[i + 1]; if (!nx) return null;
  const a = (YARD.jobs.find((j) => j.id === id) || {}).area, b = (YARD.jobs.find((j) => j.id === nx) || {}).area;
  const same = a && a === b; const r = phase === 'round' ? (same ? round + 1 : round) : round + 1;
  return { id: nx, title: (YARD.jobs.find((j) => j.id === nx) || {}).title || nx, round: Math.max(UNLOCK[nx], r) };
}
// Closed gate the player must buy to reach `area` (null when reachable).
export function gateNeeded(area, doors) {
  const act = activeAreas(doors); if (!area || act.has(area)) return null;
  const want = { B: ['AB'], C: ['AC'], D: ['AD', 'SD'], E: ['BE'] }[area] || [];
  for (const id of want) { const d = doors.find((q) => q.id === id); if (d && !d.open && d.areas.some((a) => act.has(a))) return d; }
  if (!act.has('B')) return doors.find((q) => q.id === 'AB' && !q.open) || null;
  return null;
}

export function createMissionUI(ctx) {
  const { world, isTouch } = ctx;
  const card = $('mission'), ic = $('msIc'), eb = $('msEb'), goal = $('msGoal'), pips = $('msPips'), cnt = $('msCount'), rw = $('msRw');
  const wp = $('wp'), wpLab = $('wpLab'), wpDist = $('wpDist'), wpIc = $('wpIc');
  const arrow = $('objArrow'), oaLab = $('oaLab'), oaDist = $('oaDist'), oaIc = $('oaIc'), oaChev = $('oaChev');
  const ban = $('mBan'), edge = $('fx-edge');
  const last = {}; const set = (el, k, v, html) => { if (last[k] === v) return; last[k] = v; if (html) el.innerHTML = v; else el.textContent = v; };
  let pipEls = [], pipKey = '', banT = 0;
  // ---- 3D: ground ring (pulsing) under the waypoint, radio hold ring with progress, item glows ----
  const ringMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 1.25, 0.35), transparent: true, opacity: 0.85, depthWrite: false, side: THREE.DoubleSide, fog: false, toneMapped: false });
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.62, 0.74, 48), ringMat); ring.rotation.x = -Math.PI / 2; ring.position.y = 0.05; ring.userData.noAO = true; ring.renderOrder = 3;
  const ring2 = new THREE.Mesh(new THREE.RingGeometry(1.0, 1.06, 48), ringMat.clone()); ring2.rotation.x = -Math.PI / 2; ring2.position.y = 0.05; ring2.userData.noAO = true; ring2.material.opacity = 0.35;
  const mark = new THREE.Group(); mark.add(ring, ring2); mark.visible = false; world.scene.add(mark);
  const R = YARD.radio;
  const radMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.15, 2.2, 1.4), transparent: true, opacity: 0.55, depthWrite: false, side: THREE.DoubleSide, fog: false, toneMapped: false });
  const radRing = new THREE.Mesh(new THREE.RingGeometry(R - 0.12, R, 96), radMat); radRing.rotation.x = -Math.PI / 2;
  const radFill = new THREE.Mesh(new THREE.RingGeometry(R - 0.34, R - 0.16, 96, 1, 0, 0.001), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 1.4, 0.3), transparent: true, opacity: 0.9, depthWrite: false, side: THREE.DoubleSide, fog: false, toneMapped: false })); radFill.rotation.x = -Math.PI / 2; radFill.rotation.z = Math.PI / 2;
  const radDisc = new THREE.Mesh(new THREE.CircleGeometry(R - 0.12, 64), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.05, 0.6, 0.4), transparent: true, opacity: 0.12, depthWrite: false, fog: false, toneMapped: false })); radDisc.rotation.x = -Math.PI / 2;
  const radio = new THREE.Group(); radio.add(radDisc, radRing, radFill); radio.position.y = 0.04; radio.visible = false; radio.traverse((o) => { o.userData.noAO = true; o.renderOrder = 3; }); world.scene.add(radio);
  let radFrac = -1;
  // item glow: one additive halo + small ring per mission item mesh
  const glows = new Map();
  for (const [id, mesh] of world.missionMeshes) {
    const h = new THREE.Sprite(new THREE.SpriteMaterial({ map: world.T && world.T.glow, color: new THREE.Color(2.4, 1.4, 0.4), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false }));
    h.scale.setScalar(1.3); h.position.y = id.startsWith('b') ? 1.35 : 0.35; h.userData.noAO = true;
    const r = new THREE.Mesh(new THREE.RingGeometry(0.42, 0.5, 32), ringMat); r.rotation.x = -Math.PI / 2; r.position.y = 0.04; r.userData.noAO = true; if (id.startsWith('b')) r.visible = false;
    mesh.add(h, r); glows.set(id, { h, r });
  }
  const _v = new THREE.Vector3();
  function project(x, y, z, cam) { _v.set(x, y, z).project(cam); const behind = _v.z > 1; return { behind, x: (_v.x * 0.5 + 0.5) * innerWidth, y: (-_v.y * 0.5 + 0.5) * innerHeight, nx: _v.x, ny: _v.y }; }
  function buildPips(n) { pips.textContent = ''; pipEls = []; for (let i = 0; i < n; i++) { const p = document.createElement('i'); p.className = 'pip'; const f = document.createElement('b'); p.appendChild(f); pips.appendChild(p); pipEls.push(p); } pips.classList.toggle('many', n > 6); }
  function hide() { card.classList.add('hidden'); wp.classList.add('hidden'); arrow.classList.add('hidden'); mark.visible = false; radio.visible = false; edge && edge.classList.remove('on'); for (const k in last) delete last[k]; }
  // s: job, view: { pid, P, phase, doors, cam, time }
  function frame(s, v) {
    if (!s) { hide(); return null; }
    const C = COPY[s.id] || {}, carrying = !!(s.carry && s.carry[v.pid]), nCarry = s.carry ? Object.keys(s.carry).length : 0;
    card.classList.remove('hidden');
    const idx = ORDER.indexOf(s.id) + 1;
    set(ic, 'ic', ICON[C.icon] || ICON.star, true);
    set(eb, 'eb', `Mission ${idx}/6 · ${s.title}`);
    // target + goal text
    let tgt = null, label = '', icon = 'bolt', html = '', radioHint = '';
    const near = () => { let best = null, bd = 1e9; for (const it of s.items) if (!it.done && !it.carried) { const d = Math.hypot(v.P.x - it.x, v.P.z - it.z); if (d < bd) { bd = d; best = it; } } return best; };
    if (s.kind === 'carry') {
      if (carrying) { tgt = s.pad; label = C.padLabel; icon = C.padIcon; html = C.bring; }
      else { tgt = near() || s.pad; label = near() ? C.itemLabel : C.padLabel; icon = near() ? C.itemIcon : C.padIcon; html = near() ? C.find : 'A teammate has it: <em>cover them</em>'; }
    } else if (s.kind === 'board') { tgt = near() || s.pad; label = C.itemLabel; icon = C.itemIcon; html = C.find; }
    else if (s.kind === 'radio') {
      tgt = s.pad; label = C.padLabel; icon = C.padIcon; const inside = Math.hypot(v.P.x - s.pad.x, v.P.z - s.pad.z) <= R;
      html = v.phase !== 'round' ? (inside ? 'Wait in the <em>ring</em> for the next wave' : 'Go to the <em>radio ring</em>') : inside ? 'Hold the <em>radio ring</em>!' : 'Get back in the <em>ring</em>! Timer draining';
      radioHint = v.phase !== 'round' ? 'Counts <b>during waves</b>' : inside ? '<b>Holding…</b>' : '<b>Draining</b>';
    } else if (s.kind === 'clear') { tgt = s.pad; label = C.padLabel; icon = C.padIcon; html = C.find; }
    // locked area -> route to the gate first
    const g = gateNeeded(areaOf(tgt.x, tgt.z, 'junkyard'), v.doors);
    if (g) { const st = g.stand ? Object.values(g.stand).reduce((b, p) => (Math.hypot(v.P.x - p.x, v.P.z - p.z) < Math.hypot(v.P.x - b.x, v.P.z - b.z) ? p : b)) : g; tgt = { x: st.x, z: st.z }; label = GATE_LABEL[g.id] || 'GATE'; icon = 'lock'; html = `Open <em>${GATE_WORD[g.id] || 'the gate'}</em> (${fmt(v.price(g))}) to get there`; }
    set(goal, 'goal', html, true);
    // progress
    const many = s.kind === 'radio'; const n = many ? 10 : s.need, key = s.id + n;
    if (pipKey !== key) { pipKey = key; buildPips(n); }
    const have = Math.min(s.need, s.have);
    for (let i = 0; i < n; i++) {
      const p = pipEls[i]; let st = '', f = 0;
      if (many) { const seg = s.need / n; f = Math.max(0, Math.min(1, (have - i * seg) / seg)); st = f >= 1 ? 'on' : f > 0 ? 'part' : ''; }
      else st = i < Math.floor(have) ? 'on' : i < Math.floor(have) + nCarry && s.kind === 'carry' ? 'go' : '';
      if (p._st !== st) { p._st = st; p.className = 'pip ' + st; }
      if (many && p._f !== f) { p._f = f; p.firstChild.style.width = Math.round(f * 100) + '%'; }
    }
    set(cnt, 'cnt', s.kind === 'radio' ? `${Math.floor(have)}/${s.need}s` : `${Math.floor(have)}/${s.need}`);
    // waypoint
    const dist = Math.hypot(v.P.x - tgt.x, v.P.z - tgt.z), dTxt = dist < 1.5 ? 'HERE' : Math.round(dist) + ' m';
    const pr = project(tgt.x, s.kind === 'board' && !g ? 2.2 : 1.3, tgt.z, v.cam);
    const m = isTouch ? 60 : 70, on = !pr.behind && pr.x > m && pr.x < innerWidth - m && pr.y > m && pr.y < innerHeight - m * 0.6;
    let turn = '';
    if (on) {
      wp.classList.remove('hidden'); arrow.classList.add('hidden'); edge && edge.classList.remove('on');
      wp.style.left = pr.x + 'px'; wp.style.top = pr.y + 'px';
      const k = Math.max(0.62, Math.min(1, 9 / Math.max(9, dist)) * 1.0); wp.style.setProperty('--k', k.toFixed(3));
      set(wpLab, 'wl', label); set(wpDist, 'wd', dTxt); set(wpIc, 'wi', ICON[icon] || ICON.bolt, true);
      wp.classList.toggle('close', dist < 2.5);
    } else {
      wp.classList.add('hidden'); arrow.classList.remove('hidden');
      let nx = pr.behind ? -pr.nx : pr.nx, ny = pr.behind ? -pr.ny : pr.ny; if (pr.behind && Math.abs(nx) < 0.2) nx = nx < 0 ? -1 : 1;
      const ang = Math.atan2(-ny, nx); const cx = innerWidth / 2, cy = innerHeight / 2;
      // clamp to an inset rectangle (keeps clear of the top card and the bottom HUD / thumbs)
      const top = isTouch ? 92 : 120, bot = innerHeight - (isTouch ? 150 : 150), lft = isTouch ? 170 : 120, rgt = innerWidth - (isTouch ? 250 : 150);
      const dx = Math.cos(ang), dy = Math.sin(ang); let t = 1e9;
      if (dx > 1e-3) t = Math.min(t, (rgt - cx) / dx); if (dx < -1e-3) t = Math.min(t, (lft - cx) / dx); if (dy > 1e-3) t = Math.min(t, (bot - cy) / dy); if (dy < -1e-3) t = Math.min(t, (top - cy) / dy);
      const ax = cx + dx * t, ay = cy + dy * t;
      arrow.style.left = ax + 'px'; arrow.style.top = ay + 'px'; oaChev.style.transform = `rotate(${ang}rad)`;
      arrow.classList.toggle('left', dx < 0);
      set(oaLab, 'al', label); set(oaDist, 'ad', dTxt); set(oaIc, 'ai', ICON[icon] || ICON.bolt, true);
      turn = pr.behind && Math.abs(pr.nx) < 0.35 ? 'Turn <b>around ⟲</b>' : dx < 0 ? '<b>◀ Turn</b> left' : 'Turn <b>right ▶</b>';
      if (edge) { edge.classList.add('on'); edge.classList.toggle('l', dx < 0); }
    }
    // reward / hint line
    const gname = s.gate ? ((YARD.gates.find((q) => q.id === s.gate) || {}).name || '') : '';
    set(rw, 'rw', turn || radioHint || `Reward <b>+${fmt(s.pts)}${gname ? ' · ' + gname : ''}</b>`, true);
    // 3D markers
    mark.visible = !(s.kind === 'radio' && !g); mark.position.set(tgt.x, 0, tgt.z); const pulse = 1 + 0.12 * Math.sin(v.time * 4); ring.scale.setScalar(pulse); ring2.scale.setScalar(1 + ((v.time * 0.8) % 1) * 0.8); ring2.material.opacity = 0.45 * (1 - ((v.time * 0.8) % 1));
    radio.visible = s.kind === 'radio'; if (radio.visible) { radio.position.set(s.pad.x, 0.04, s.pad.z); const f = Math.min(1, have / s.need); if (Math.abs(f - radFrac) > 0.004) { radFrac = f; radFill.geometry.dispose(); radFill.geometry = new THREE.RingGeometry(R - 0.34, R - 0.16, 96, 1, 0, Math.max(0.001, f * Math.PI * 2)); }
      const inside = Math.hypot(v.P.x - s.pad.x, v.P.z - s.pad.z) <= R; radMat.color.setRGB(inside ? 0.15 : 2.4, inside ? 2.2 : 0.5, inside ? 1.4 : 0.2); radMat.opacity = 0.45 + 0.25 * Math.sin(v.time * (inside ? 3 : 7)); }
    for (const [id, gl] of glows) { const k = 0.75 + 0.25 * Math.sin(v.time * 5 + id.length); gl.h.material.opacity = k; gl.r.scale.setScalar(1 + 0.15 * Math.sin(v.time * 4)); }
    return tgt;
  }
  function showBan(cls, html, ms) { document.body.dataset.mban = String(performance.now() + ms - 600); ban.className = 'mBan ' + cls; ban.innerHTML = html; void ban.offsetWidth; ban.classList.add('on'); clearTimeout(banT); banT = setTimeout(() => ban.classList.remove('on'), ms); }
  const chip = (i, t, tl) => `<span class="chip${tl ? ' tl' : ''}">${ICON[i] || ''}${t}</span>`;
  function start(id) {
    const def = YARD.jobs.find((j) => j.id === id); if (!def) return; const C = COPY[id] || {}, idx = ORDER.indexOf(id) + 1;
    const gname = def.gate ? (YARD.gates.find((q) => q.id === def.gate) || {}).name : '';
    const pw = POWER[def.power];
    showBan('start', `<i class="stripe t"></i><i class="stripe b"></i><div class="e">NEW MISSION · ${idx} OF 6</div><div class="ttl">${def.title.toUpperCase()}</div><div class="g">${C.brief || ''}</div><div class="chips">${chip('star', '+' + fmt(def.pts) + ' PTS')}${gname ? chip('gate', 'OPENS ' + gname.toUpperCase()) : ''}${pw ? chip(pw.i, pw.t, pw.tl) : ''}</div>`, 5200);
  }
  function complete(id, o = {}) {
    const def = YARD.jobs.find((j) => j.id === id); if (!def) return;
    const gname = def.gate ? (YARD.gates.find((q) => q.id === def.gate) || {}).name : '';
    const nx = o.next; const pw = POWER[def.power];
    showBan('done', `<i class="stripe t"></i><i class="stripe b"></i><div class="stamp">MISSION COMPLETE</div><div class="row1"><span class="big">${def.title.toUpperCase()}</span><span class="pts">+${fmt(o.pts || def.pts)}</span></div><div class="chips">${gname ? chip('gate', gname.toUpperCase() + ' GATE OPEN', true) : ''}${chip('ammo', 'AMMO REFILLED')}${pw ? chip(pw.i, pw.t.replace('DROP', 'DROPPED'), pw.tl) : ''}</div><div class="next">${nx ? `NEXT MISSION · ${nx.title.toUpperCase()} · UNLOCKS AFTER ROUND ${nx.round}` : 'ALL 6 MISSIONS DONE · THE YARD IS YOURS'}</div>`, 4600);
    const fl = $('fx-mflash'); if (fl) { fl.classList.remove('on'); void fl.offsetWidth; fl.classList.add('on'); }
  }
  return { frame, start, complete, hide };
}
