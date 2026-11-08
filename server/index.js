// DUST & DEAD co-op server. LOCAL / DEV ONLY for now — not deployed anywhere.
//   PORT=8787 ALLOWED_ORIGINS=http://localhost:8099 node index.js
'use strict';
const http = require('http'), crypto = require('crypto'), { WebSocketServer } = require('ws'); const { Room, MAX_PLAYERS } = require('./sim.js');
const PORT = +process.env.PORT || 8787, TICK = 1 / 20, SNAP_EVERY = 1, GRACE_MS = 30000;
const ORIGINS = (process.env.ALLOWED_ORIGINS || 'https://vwfest.github.io,http://localhost:8099,http://127.0.0.1:8099').split(',').map((s) => s.trim()).filter(Boolean);
const LIMITS = { msgPerSec: 45, maxPayload: 1024, joinPerMin: 10, maxRooms: 200, connPerIp: 6 };
function createServer(opts = {}) {
  const origins = opts.origins || ORIGINS, rooms = new Map(), sessions = new Map(), perIp = new Map(); // token -> {room, pid, ws, goneAt}
  const srv = http.createServer((req, res) => { if (req.url === '/health') { res.writeHead(200, { 'content-type': 'application/json' }); return res.end(JSON.stringify({ ok: true, rooms: rooms.size })); } res.writeHead(404); res.end(); });
  const wss = new WebSocketServer({ noServer: true, maxPayload: LIMITS.maxPayload, perMessageDeflate: false });
  srv.on('upgrade', (req, sock, head) => { const o = req.headers.origin || ''; const ip = req.socket.remoteAddress;
    if (!origins.includes(o)) { sock.write('HTTP/1.1 403 Forbidden\r\n\r\n'); return sock.destroy(); }
    if ((perIp.get(ip) || 0) >= LIMITS.connPerIp) { sock.write('HTTP/1.1 429 Too Many Requests\r\n\r\n'); return sock.destroy(); }
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
        if (typeof m.token === 'string' && sessions.has(m.token)) { const s = sessions.get(m.token), r = rooms.get(s.room); if (r && r.players.has(s.pid)) { if (s.ws && s.ws !== ws) s.ws.close(4001, 'replaced'); s.ws = ws; s.goneAt = 0; r.players.get(s.pid).connected = true; sess = s; return send(ws, { t: 'joined', room: r.code, id: s.pid, token: m.token, map: r.mapId, re: true }); } }
        let r = null; const want = typeof m.code === 'string' ? m.code.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 5) : '';
        if (m.create) { if (rooms.size >= LIMITS.maxRooms) return send(ws, { t: 'err', m: 'full' }); r = new Room(code(), String(m.map || '')); rooms.set(r.code, r); }
        else if (want) { r = rooms.get(want); if (!r) return send(ws, { t: 'err', m: 'no-room' }); }
        else { r = [...rooms.values()].find((x) => x.quick && !x.over && x.size < MAX_PLAYERS); if (!r) { if (rooms.size >= LIMITS.maxRooms) return send(ws, { t: 'err', m: 'full' }); r = new Room(code(), String(m.map || '')); r.quick = true; rooms.set(r.code, r); } }
        if (r.size >= MAX_PLAYERS || r.over) return send(ws, { t: 'err', m: 'room-full' });
        const pid = crypto.randomBytes(4).toString('hex'), token = crypto.randomBytes(18).toString('base64url'); r.addPlayer(pid, m.name);
        sess = { room: r.code, pid, ws, goneAt: 0, token }; sessions.set(token, sess); return send(ws, { t: 'joined', room: r.code, id: pid, token, map: r.mapId });
      }
      if (!sess) return; const r = rooms.get(sess.room); if (!r) return;
      if (m.t === 'in') r.input(sess.pid, m, now);
      else if (m.t === 'shot') { const res = r.shoot(sess.pid, m, now); if (res.ok && res.hits.length) send(ws, { t: 'hits', h: res.hits }); }
      else if (m.t === 'buy') send(ws, { t: 'buy', w: m.w, ok: r.buy(sess.pid, String(m.w)) });
      else if (m.t === 'leave') { r.removePlayer(sess.pid); sessions.delete(sess.token); sess = null; }
    });
    ws.on('close', () => { if (sess && sess.ws === ws) { sess.goneAt = Date.now(); const r = rooms.get(sess.room); const p = r && r.players.get(sess.pid); if (p) p.connected = false; } });
  });
  const loop = setInterval(() => { const now = Date.now();
    for (const [tok, s] of sessions) if (s.goneAt && now - s.goneAt > GRACE_MS) { const r = rooms.get(s.room); r?.removePlayer(s.pid); sessions.delete(tok); }
    for (const [c, r] of rooms) { if (r.size === 0) { rooms.delete(c); continue; } r.step(TICK); const snap = JSON.stringify({ ...r.snapshot(), room: c });
      for (const s of sessions.values()) if (s.room === c && s.ws && s.ws.readyState === 1) s.ws.send(snap); } }, TICK * 1000);
  return { srv, wss, rooms, sessions, close: () => { clearInterval(loop); wss.clients.forEach((c) => c.terminate()); srv.close(); }, listen: (p = PORT) => new Promise((res) => srv.listen(p, '127.0.0.1', () => res(srv.address().port))) };
}
module.exports = { createServer, LIMITS };
if (require.main === module) createServer().listen().then((p) => console.log('DUST & DEAD co-op server (dev) on ws://127.0.0.1:' + p, 'origins:', ORIGINS.join(' ')));
