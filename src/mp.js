// Co-op client (2-4 players). Server is authoritative over spawns, zombie positions, health, damage and score.
// The client only predicts its own movement + cosmetic hit effects, and renders everyone else ~100 ms in the past (interpolation).
// Off unless the player picks CO-OP in the menu, so single-player and offline play are untouched.
import * as THREE from 'three';
const DELAY = 100, SEND_MS = 50;
export function createMP(ctx) {
  const { scene, zombies, P, G, cam } = ctx;
  const S = { on: false, ws: null, id: null, room: null, token: null, snaps: [], remotes: new Map(), slot: new Map(), lastSend: 0, over: false, retry: 0, url: null, name: 'Survivor', status: '', alive: true };
  const lerp = (a, b, k) => a + (b - a) * k, lerpAng = (a, b, k) => { let d = ((b - a + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI; return a + d * k; };
  const COLS = [0x18ffb0, 0xffb347, 0x6bb8ff, 0xff6bd5];
  function remoteMesh(name, i) { const g = new THREE.Group(), m = new THREE.MeshStandardMaterial({ color: COLS[i % 4], roughness: 0.6 });
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.3, 0.9, 4, 10), m); body.position.y = 0.95; const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 10), new THREE.MeshStandardMaterial({ color: 0xd9b38c })); head.position.y = 1.68;
    const gun = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.1, 0.5), new THREE.MeshStandardMaterial({ color: 0x222 })); gun.position.set(0.25, 1.35, -0.3);
    const cv = document.createElement('canvas'); cv.width = 256; cv.height = 64; const c2 = cv.getContext('2d'); c2.font = '800 34px system-ui,sans-serif'; c2.textAlign = 'center'; c2.fillStyle = '#' + COLS[i % 4].toString(16).padStart(6, '0'); c2.fillText(name, 128, 44);
    const tag = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false })); tag.scale.set(1.2, 0.3, 1); tag.position.y = 2.2;
    const talk = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: 0x18ffb0 })); talk.position.y = 2.45; talk.visible = false;
    g.add(body, head, gun, tag, talk); g.userData = { body, gun, name, talk }; scene.add(g); return g; }
  function connect(opts) { S.url = opts.url; S.name = opts.name || S.name; S.joinMsg = opts.join; open(); }
  function open() { let ws; try { ws = new WebSocket(S.url); } catch (e) { return fail('bad server url'); } S.ws = ws; S.status = 'connecting';
    ws.onopen = () => { S.retry = 0; ws.send(JSON.stringify(S.token ? { t: 'join', token: S.token } : { t: 'join', name: S.name, ...S.joinMsg })); };
    ws.onmessage = (ev) => { let m; try { m = JSON.parse(ev.data); } catch (e) { return; } onMsg(m); };
    ws.onclose = (ev) => { if (S.ws !== ws) return; S.ws = null; if (!S.on && !S.token) { ctx.onStatus?.('Could not connect to the co-op server'); return; } if (S.over || ev.code === 4001) return;
      if (S.retry++ < 8) { S.status = 'reconnecting'; ctx.onStatus?.('Connection lost, reconnecting…'); setTimeout(open, Math.min(8000, 500 * 2 ** S.retry)); } else { ctx.onStatus?.('Disconnected from co-op server'); stop(); ctx.onQuit?.(); } };
    ws.onerror = () => {}; }
  function fail(msg) { ctx.onStatus?.(msg); }
  function onMsg(m) {
    if (m.t === 'joined') { const first = !S.on; S.id = m.id; S.room = m.room; S.token = m.token; S.status = 'ok'; if (first) { S.on = true; S.over = false; ctx.onJoined?.(m); } else ctx.onStatus?.('Reconnected'); }
    else if (m.t === 'err') { ctx.onStatus?.({ 'no-room': 'No room with that code', 'room-full': 'That room is full', full: 'Server is full', rate: 'Too many messages' }[m.m] || m.m); if (!S.on) { S.ws?.close(); } }
    else if (m.t === 's') { m.recv = performance.now(); S.snaps.push(m); if (S.snaps.length > 30) S.snaps.shift(); for (const e of m.ev || []) ctx.onEvent?.(e, e.p === S.id || e.by === S.id); if (m.over && !S.over) { S.over = true; ctx.onOver?.(m); } }
    else if (m.t === 'hits') ctx.onHits?.(m.h);
    else if (m.t === 'act') { S.lastAct = m; ctx.onAct?.(m); }
    else if (m.t === 'sig') ctx.onSig?.(m);
  }
  function send(o) { if (S.ws && S.ws.readyState === 1) S.ws.send(JSON.stringify(o)); }
  function stop() { S.on = false; if (S.ws) { try { send({ t: 'leave' }); S.ws.close(); } catch (e) {} } S.ws = null; S.token = null; S.snaps = []; for (const g of S.remotes.values()) scene.remove(g); S.remotes.clear(); S.slot.clear(); zombies.reset(); }
  // pick the two snapshots around (now - DELAY)
  function frameAt(now) { const rt = now - DELAY, a = S.snaps; if (!a.length) return null; let i = a.length - 1; while (i > 0 && a[i - 1].recv > rt) i--; const s1 = a[i], s0 = a[Math.max(0, i - 1)]; if (s0 === s1 || s1.recv <= s0.recv) return { s0: s1, s1, k: 1 }; return { s0, s1, k: Math.max(0, Math.min(1, (rt - s0.recv) / (s1.recv - s0.recv))) }; }
  function update(dt, t, cbs) {
    const now = performance.now(); if (now - S.lastSend > SEND_MS && !P.dead) { S.lastSend = now; send({ t: 'in', x: +P.x.toFixed(2), z: +P.z.toFixed(2), yaw: +P.yaw.toFixed(3), pitch: +P.pitch.toFixed(3) }); }
    const f = frameAt(now); if (!f) { zombies.update(dt, t, P, ctx.world.door, cbs); return; } const { s0, s1, k } = f, last = S.snaps[S.snaps.length - 1];
    // self: authoritative hp / points / round, correct big drifts
    const me = last.p.find((p) => p[0] === S.id); if (me) { const hp = me[6]; if (hp < P.hp - 0.5) ctx.onHurt?.(P.hp - hp); P.hp = hp; P.pts = me[7]; P.kills = me[8]; if (me[9] && !P.dead) ctx.onDown?.(); else if (!me[9] && P.dead) ctx.onRevive?.(); if (Math.hypot(me[2] - P.x, me[3] - P.z) > 2.5) { P.x = me[2]; P.z = me[3]; } }
    if (last.round !== G.round && last.round > 0) ctx.onRound?.(last.round); G.mpPhase = last.phase;
    // shared world state: planks, gate, crate, power-ups, double points
    const W = ctx.world; if (last.win) last.win.forEach((n, i) => { const w = W.windows[i]; if (!w) return; while (w.count > n) { W.removePlank(w); ctx.onPlank?.(w, true); } while (w.count < n) { W.addPlank(w); ctx.onPlank?.(w, false); } });
    const openIds = new Set(last.go || []); if (last.door) openIds.add('AB');
    for (const d of (W.doors || [W.door])) if (d && openIds.has(d.id) && !d.open) { d.open = true; ctx.onDoor?.(d); }
    if (last.ms !== undefined) ctx.onMission?.(last.ms, last.mi, last.mc);
    if (last.crate) ctx.onCrate?.(last.crate[0], last.crate[1], last.crate[2] === S.id);
    if (last.up) ctx.syncUps?.(last.up); G.double = last.dbl ? 1 : 0; if (me) S.owned = me[11];
    // remote players
    const seen = new Set(); const p0 = new Map(s0.p.map((p) => [p[0], p]));
    s1.p.forEach((p, i) => { if (p[0] === S.id) return; seen.add(p[0]); let g = S.remotes.get(p[0]); if (!g) { g = remoteMesh(p[1], i); S.remotes.set(p[0], g); } const a = p0.get(p[0]) || p;
      g.position.set(lerp(a[2], p[2], k), 0, lerp(a[3], p[3], k)); g.rotation.y = lerpAng(a[4], p[4], k); g.userData.body.rotation.x = p[9] ? -1.4 : 0; g.position.y = p[9] ? 0.3 : 0; g.visible = true; g.userData.body.material.opacity = p[10] ? 1 : 0.4; g.userData.body.material.transparent = !p[10]; });
    for (const [id, g] of S.remotes) if (!seen.has(id)) { scene.remove(g); S.remotes.delete(id); }
    // zombies: map server ids onto the local pool, then let the local animator pose them (no local AI movement)
    const z0 = new Map(s0.z.map((z) => [z[0], z])), live = new Set();
    for (const z of s1.z) { live.add(z[0]); let lz = S.slot.get(z[0]); if (!lz) { lz = zombies.spawn({ out: { x: z[1], z: z[2] }, n: { x: 0, z: 1 }, t: { x: 1, z: 0 }, count: 0 }, Math.max(1, last.round), !!z[6]); if (!lz) continue; S.slot.set(z[0], lz); lz.runner = !!z[7]; lz.mpX = z[1]; lz.mpZ = z[2]; lz.state = 'chase'; }
      const a = z0.get(z[0]) || z; lz.mpX = lerp(a[1], z[1], k); lz.mpZ = lerp(a[2], z[2], k); lz.mpYaw = lerpAng(a[3], z[3], k); lz.mpClimb = z[5]; if (z[8] && lz.attackT <= 0) lz.attackT = 0.01; }
    for (const [id, lz] of S.slot) if (!live.has(id)) { S.slot.delete(id); if (lz.state !== 'dead' && lz.state !== 'dying') { lz.state = 'dying'; lz.dieT = 0; lz.dieDir = Math.random() * 0.8 - 0.4; ctx.onZDie?.(lz); } }
    for (const lz of S.slot.values()) { const mv = Math.hypot(lz.mpX - lz.pos.x, lz.mpZ - lz.pos.z); lz.pos.x = lz.mpX; lz.pos.z = lz.mpZ; lz.speed = 0; lz.cool = 99; lz.phase += Math.min(0.6, mv * 2.6); lz.stuckTot = 0; }
    zombies.update(dt, t, P, ctx.world.door, { ...cbs, hitPlayer: () => {} });
    for (const lz of S.slot.values()) { lz.pos.x = lz.mpX; lz.pos.z = lz.mpZ; lz.yaw = lz.mpYaw; lz.root.rotation.y = lz.mpYaw; lz.root.position.y = lz.mpClimb || 0; lz.climbY = lz.mpClimb || 0; }
    zombies.alive = S.slot.size;
  }
  // downed: follow a living teammate (third person)
  const _v = new THREE.Vector3();
  function spectate(cam) { const alive = [...S.remotes.values()].filter((g) => g.position.y < 0.1 && g.visible); if (!alive.length) return null; const i = Math.floor(performance.now() / 6000) % alive.length, g = alive[i];
    const yaw = g.rotation.y, bx = g.position.x + Math.sin(yaw) * 3.4, bz = g.position.z + Math.cos(yaw) * 3.4; _v.set(bx, 2.6, bz); cam.position.lerp(_v, 0.2); cam.lookAt(g.position.x, 1.4, g.position.z); return g.userData.name; }
  function setTalking(id, on) { const g = S.remotes.get(id); if (g && g.userData.talk) g.userData.talk.visible = !!on; }
  return { S, spectate, connect, stop, update, send, setTalking, get on() { return S.on; } };
}
