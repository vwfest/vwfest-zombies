// DUST & DEAD co-op server. LOCAL / DEV ONLY for now — not deployed anywhere.
//   PORT=8787 ALLOWED_ORIGINS=http://localhost:8099 node index.js
'use strict';
const http = require('http'), crypto = require('crypto'), { WebSocketServer } = require('ws'); const { Room, MAX_PLAYERS } = require('./sim.js');
const DEV = process.env.DEV_HOOKS === '1' && process.env.NODE_ENV !== 'production';
const PORT = +process.env.PORT || 8787, TICK = 1 / 20, SNAP_EVERY = 1, GRACE_MS = 30000;
const PROD = process.env.NODE_ENV === 'production', HOST = process.env.HOST || (PROD ? '0.0.0.0' : '127.0.0.1'), TRUST_PROXY = process.env.TRUST_PROXY === '1';
const LOCAL_ORIGIN = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;
function allowedOrigins(env = process.env) {
  const prod = env.NODE_ENV === 'production';
  const raw = env.ALLOWED_ORIGINS || (prod ? 'https://vwfest.github.io' : 'https://vwfest.github.io,http://localhost:8099,http://127.0.0.1:8099');
  return raw.split(',').map((s) => s.trim()).filter((s) => s && !(prod && LOCAL_ORIGIN.test(s)));
}
const ORIGINS = allowedOrigins();
// 4096 leaves room for an audio-only WebRTC SDP (offers are often ~2 KB) while the 5000-byte flood test still trips the cap.
const LIMITS = { msgPerSec: 45, maxPayload: 4096, joinPerMin: 10, maxRooms: 200, connPerIp: 6 };
// Browser responses only. The game client is a WebSocket on another site; these headers do not change the origin allow-list.
const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'",
  'Referrer-Policy': 'no-referrer',
  'Permissions-Policy': 'accelerometer=(), autoplay=(), camera=(), display-capture=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), usb=(), web-share=(), xr-spatial-tracking=()',
  'Cross-Origin-Resource-Policy': 'same-site',
};
const LEAK_HEADERS = new Set(['x-powered-by', 'server']);
function stripLeakHeaders(headers) {
  if (Array.isArray(headers)) {
    const kept = [];
    for (let i = 0; i < headers.length; i += 2) if (!LEAK_HEADERS.has(String(headers[i]).toLowerCase())) kept.push(headers[i], headers[i + 1]);
    return kept;
  }
  if (headers && typeof headers === 'object') for (const name of Object.keys(headers)) if (LEAK_HEADERS.has(name.toLowerCase())) delete headers[name];
  return headers;
}
function applySecurityHeaders(res) {
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) res.setHeader(name, value);
  for (const name of LEAK_HEADERS) res.removeHeader(name);
}
// Every ServerResponse write, including implicit headers from res.end(), gets the policy and drops version leaks.
function secureResponse(res) {
  const writeHead = res.writeHead;
  res.writeHead = function writeHeadSecure(...args) {
    if (args.length >= 2 && args[1] != null && typeof args[1] !== 'string') args[1] = stripLeakHeaders(args[1]);
    else if (args.length >= 3 && args[2] != null) args[2] = stripLeakHeaders(args[2]);
    applySecurityHeaders(this);
    return writeHead.apply(this, args);
  };
  return res;
}
function securityHeaderLines() { return Object.entries(SECURITY_HEADERS).map(([name, value]) => name + ': ' + value); }
function rejectUpgrade(sock, status, reason) {
  const raw = ['HTTP/1.1 ' + status + ' ' + reason, 'Connection: close', 'Content-Length: 0', ...securityHeaderLines(), '', ''].join('\r\n');
  const done = () => { if (!sock.destroyed) sock.destroy(); };
  sock.once('error', done);
  sock.write(raw, done);
}
function headerName(line) { const cut = line.indexOf(':'); return cut === -1 ? '' : line.slice(0, cut).trim().toLowerCase(); }
// `ws` puts the status line in this list. Leave that line alone and append the policy to the 101.
function secureUpgradeHeaders(headers) {
  for (let i = headers.length - 1; i >= 0; i--) { const name = headerName(headers[i]); if (name && LEAK_HEADERS.has(name)) headers.splice(i, 1); }
  const present = new Set(headers.map(headerName));
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) if (!present.has(name.toLowerCase())) headers.push(name + ': ' + value);
}
function tellBye(sessions, room, pid, send) {
  if (!room || !pid) return;
  for (const s of sessions.values()) if (s.room === room && s.pid !== pid && s.ws && s.ws.readyState === 1) send(s.ws, { t: 'sig', from: pid, k: 'bye' });
}
// Relay one signaling blob to a member of the sender's room. `from` is always the socket's player id.
function relaySig(sessions, rooms, sess, m, send) {
  const k = m && m.k;
  if (k !== 'offer' && k !== 'answer' && k !== 'ice') return;
  const to = typeof m.to === 'string' ? m.to.slice(0, 16) : '';
  if (!to || to === sess.pid) return;
  const r = rooms.get(sess.room);
  if (!r || !r.players.has(to)) return;
  let dest = null;
  for (const s of sessions.values()) if (s.room === sess.room && s.pid === to && s.ws && s.ws.readyState === 1) dest = s;
  if (!dest) return;
  if (k === 'ice') {
    const body = m.s;
    if (!body || typeof body !== 'object') return;
    const c = String(body.c || body.candidate || '');
    if (!c || c.length > 800) return;
    const line = Number.isFinite(+body.l) ? +body.l : (Number.isFinite(+body.sdpMLineIndex) ? +body.sdpMLineIndex : 0);
    send(dest.ws, { t: 'sig', from: sess.pid, k, s: { c, m: body.m != null ? String(body.m).slice(0, 8) : (body.sdpMid != null ? String(body.sdpMid).slice(0, 8) : ''), l: line } });
    return;
  }
  const sdp = typeof m.s === 'string' ? m.s : '';
  if (sdp.length < 20 || sdp.length > 3500) return;
  send(dest.ws, { t: 'sig', from: sess.pid, k, s: sdp });
}
function createServer(opts = {}) {
  const origins = opts.origins || ORIGINS, rooms = new Map(), sessions = new Map(), perIp = new Map(); // token -> {room, pid, ws, goneAt}
  const srv = http.createServer((req, res) => {
    secureResponse(res);
    if (req.url === '/health') { res.writeHead(200, { 'content-type': 'application/json' }); return res.end(JSON.stringify({ ok: true, rooms: rooms.size })); }
    res.writeHead(404); res.end();
  });
  const wss = new WebSocketServer({ noServer: true, maxPayload: LIMITS.maxPayload, perMessageDeflate: false });
  wss.on('headers', (headers) => secureUpgradeHeaders(headers));
  srv.on('upgrade', (req, sock, head) => { const o = req.headers.origin || ''; const ip = (TRUST_PROXY && String(req.headers['x-forwarded-for'] || '').split(',')[0].trim()) || req.socket.remoteAddress;
    if (!origins.includes(o)) return rejectUpgrade(sock, 403, 'Forbidden');
    if ((perIp.get(ip) || 0) >= LIMITS.connPerIp) return rejectUpgrade(sock, 429, 'Too Many Requests');
    wss.handleUpgrade(req, sock, head, (ws) => { perIp.set(ip, (perIp.get(ip) || 0) + 1); ws.on('close', () => perIp.set(ip, Math.max(0, (perIp.get(ip) || 1) - 1))); wss.emit('connection', ws, req); }); });
  const code = () => { const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; let c; do { c = ''; for (let i = 0; i < 5; i++) c += A[crypto.randomInt(A.length)]; } while (rooms.has(c)); return c; };
  const send = (ws, m) => { if (ws && ws.readyState === 1) ws.send(JSON.stringify(m)); };
  wss.on('connection', (ws) => {
    let sess = null, win = Date.now(), n = 0, joins = 0; ws.on('error', () => {});
    ws.on('message', (buf, bin) => {
      const now = Date.now(); if (now - win > 1000) { win = now; n = 0; } if (++n > LIMITS.msgPerSec) { send(ws, { t: 'err', m: 'rate' }); return ws.close(4008, 'rate'); }
      if (bin) return ws.close(4003, 'binary'); let m; try { m = JSON.parse(buf.toString()); } catch (e) { return ws.close(4003, 'json'); } if (!m || typeof m.t !== 'string') return;
      if (m.t === 'join') { if (sess || ++joins > LIMITS.joinPerMin) return;
        // reconnect
        if (typeof m.token === 'string' && sessions.has(m.token)) { const s = sessions.get(m.token), r = rooms.get(s.room); if (r && r.players.has(s.pid)) { if (s.ws && s.ws !== ws) s.ws.close(4001, 'replaced'); s.ws = ws; s.goneAt = 0; r.onReconnect(s.pid); sess = s; tellBye(sessions, s.room, s.pid, send); return send(ws, { t: 'joined', room: r.code, id: s.pid, token: m.token, map: r.mapId, re: true, phase: r.phase }); } }
        let r = null; const want = typeof m.code === 'string' ? m.code.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 5) : '';
        if (m.create) { if (rooms.size >= LIMITS.maxRooms) return send(ws, { t: 'err', m: 'full' }); r = new Room(code(), String(m.map || '')); r.phase = 'lobby'; r.minStart = 2; rooms.set(r.code, r); }
        else if (want) { r = rooms.get(want); if (!r) return send(ws, { t: 'err', m: 'no-room' }); }
        else { r = [...rooms.values()].find((x) => x.quick && !x.over && x.size < MAX_PLAYERS); if (!r) { if (rooms.size >= LIMITS.maxRooms) return send(ws, { t: 'err', m: 'full' }); r = new Room(code(), String(m.map || '')); r.quick = true; rooms.set(r.code, r); } }
        if (r.size >= MAX_PLAYERS || r.over) return send(ws, { t: 'err', m: 'room-full' });
        const pid = crypto.randomBytes(4).toString('hex'), token = crypto.randomBytes(18).toString('base64url'); r.addPlayer(pid, m.name);
        sess = { room: r.code, pid, ws, goneAt: 0, token }; sessions.set(token, sess); return send(ws, { t: 'joined', room: r.code, id: pid, token, map: r.mapId, phase: r.phase });
      }
      if (!sess) return; const r = rooms.get(sess.room); if (!r) return;
      if (m.t === 'in') r.input(sess.pid, m, now);
      else if (m.t === 'ready') r.setReady(sess.pid, m.on === true || m.on === 1);
      else if (m.t === 'shot') { const res = r.shoot(sess.pid, m, now); if (res.ok && res.hits.length) send(ws, { t: 'hits', h: res.hits }); else if (!res.ok) send(ws, { t: 'act', a: 'shot', ...res }); }
      else if (m.t === 'nade') send(ws, { t: 'act', a: 'nade', ...r.throwNade(sess.pid, m) });
      else if (m.t === 'reload') { const res = r.reload(sess.pid, String(m.w || '')); if (!res.ok && res.why !== 'full' && res.why !== 'busy') send(ws, { t: 'act', a: 'reload', ...res }); }
      else if (m.t === 'buy') send(ws, { t: 'act', a: 'buy', ...r.buy(sess.pid, String(m.w)) });
      else if (m.t === 'door') send(ws, { t: 'act', a: 'door', ...r.openDoor(sess.pid, typeof m.id === 'string' ? m.id : 'AB') });
      else if (m.t === 'obj') send(ws, { t: 'act', a: 'obj', ...r.missions.use(sess.pid, now) });
      else if (m.t === 'sig') relaySig(sessions, rooms, sess, m, send);
      else if (m.t === 'repair') { const res = r.repair(sess.pid, String(m.w), now); if (!res.ok && res.why !== 'rate') send(ws, { t: 'act', a: 'repair', ...res }); }
      else if (m.t === 'crate') send(ws, { t: 'act', a: 'crate', ...r.useCrate(sess.pid) });
      else if (m.t === 'dev') { if (!DEV) return ws.close(4003, 'no-dev'); const p = r.players.get(sess.pid); if (!p) return; // test-only hooks (DEV_HOOKS=1), never enable in production
        if (Number.isFinite(m.pts)) p.pts = m.pts; if (Number.isFinite(m.hp)) { p.hp = Math.max(1, Math.min(200, m.hp)); p.dead = false; } if (Array.isArray(m.tp)) { p.x = +m.tp[0]; p.z = +m.tp[1]; p.lastIn = now; } if (m.drop) r.drop(String(m.drop), +m.x, +m.z); if (m.god !== undefined) p.god = !!m.god; if (m.down) { p.god = false; r.hurt(p, 9999); } }
      else if (m.t === 'leave') { const pid = sess.pid, room = sess.room; r.removePlayer(pid); sessions.delete(sess.token); sess = null; tellBye(sessions, room, pid, send); }
    });
    ws.on('close', () => { if (sess && sess.ws === ws) { sess.goneAt = Date.now(); const r = rooms.get(sess.room); const p = r && r.players.get(sess.pid); if (p) p.connected = false; tellBye(sessions, sess.room, sess.pid, send); } });
  });
  const loop = setInterval(() => { const now = Date.now();
    for (const [tok, s] of sessions) if (s.goneAt && now - s.goneAt > GRACE_MS) { const r = rooms.get(s.room); r?.removePlayer(s.pid); sessions.delete(tok); }
    for (const [c, r] of rooms) { if (r.size === 0) { rooms.delete(c); continue; } r.step(TICK); const snap = JSON.stringify({ ...r.snapshot(), room: c });
      for (const s of sessions.values()) if (s.room === c && s.ws && s.ws.readyState === 1) s.ws.send(snap); } }, TICK * 1000);
  return { srv, wss, rooms, sessions, close: () => { clearInterval(loop); wss.clients.forEach((c) => c.terminate()); srv.close(); }, listen: (p = PORT) => new Promise((res) => srv.listen(p, HOST, () => res(srv.address().port))) };
}
module.exports = { createServer, LIMITS, allowedOrigins, secureResponse };
if (require.main === module) createServer().listen().then((p) => console.log('DUST & DEAD co-op on ' + (PROD ? 'wss' : 'ws') + '://' + HOST + ':' + p, 'origins:', ORIGINS.join(' ') || '(none)'));
