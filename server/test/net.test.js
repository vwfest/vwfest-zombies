const test = require('node:test'), assert = require('node:assert'), http = require('http'); const WebSocket = require('ws'); const { createServer, allowedOrigins, secureResponse } = require('../index.js');
let S, port; test.before(async () => { S = createServer({ origins: ['http://ok.test'] }); port = await S.listen(0); }); test.after(() => S.close());
const open = (origin = 'http://ok.test') => new Promise((res, rej) => { const ws = new WebSocket('ws://127.0.0.1:' + port, { origin }); const q = []; ws.on('message', (d) => q.push(JSON.parse(d))); ws.next = (t, ms = 3000) => new Promise((r2, j2) => { const st = Date.now(); const iv = setInterval(() => { const i = q.findIndex((m) => m.t === t); if (i >= 0) { clearInterval(iv); r2(q.splice(i, 1)[0]); } else if (Date.now() - st > ms) { clearInterval(iv); j2(new Error('timeout ' + t)); } }, 10); }); ws.on('open', () => res(ws)); ws.on('error', rej); ws.on('unexpected-response', (_, r) => rej(new Error('HTTP ' + r.statusCode))); });
test('origin check rejects foreign sites', async () => { await assert.rejects(open('https://evil.example'), /403/); });
test('production origin list drops localhost even if configured', () => { assert.deepEqual(allowedOrigins({ NODE_ENV: 'production', ALLOWED_ORIGINS: 'https://vwfest.github.io,http://localhost:8099,http://127.0.0.1:8099' }), ['https://vwfest.github.io']); });
test('room code create + join, snapshots flow', async () => { const a = await open(); a.send(JSON.stringify({ t: 'join', create: true, name: 'A' })); const ja = await a.next('joined'); assert.match(ja.room, /^[A-Z2-9]{5}$/);
  const b = await open(); b.send(JSON.stringify({ t: 'join', code: ja.room, name: 'B' })); const jb = await b.next('joined'); assert.equal(jb.room, ja.room); assert.equal(ja.phase, 'lobby'); const s = await b.next('s'); assert.equal(s.p.length, 2); assert.equal(s.phase, 'lobby'); assert.equal(s.p[0].length, 16); a.close(); b.close(); });
test('quick match groups players and does not wait in the lobby', async () => { const a = await open(), b = await open(); a.send(JSON.stringify({ t: 'join', name: 'Q1' })); const x = await a.next('joined'); b.send(JSON.stringify({ t: 'join', name: 'Q2' })); const y = await b.next('joined'); assert.equal(x.room, y.room); assert.equal(x.phase, 'wait'); a.close(); b.close(); });
test('reconnect with token keeps the same player', async () => { const a = await open(); a.send(JSON.stringify({ t: 'join', create: true })); const j = await a.next('joined'); a.terminate(); await new Promise((r) => setTimeout(r, 100));
  const a2 = await open(); a2.send(JSON.stringify({ t: 'join', token: j.token })); const j2 = await a2.next('joined'); assert.equal(j2.id, j.id); assert.ok(j2.re); a2.close(); });
test('message flood is cut off', async () => { const a = await open(); const closed = new Promise((r) => a.on('close', (c) => r(c))); for (let i = 0; i < 80; i++) a.send('{"t":"in","x":0,"z":0,"yaw":0,"pitch":0}'); assert.equal(await closed, 4008); });
test('oversized payload is rejected', async () => { const a = await open(); const closed = new Promise((r) => a.on('close', (c) => r(c))); a.send('x'.repeat(5000)); assert.equal(await closed, 1009); });
test('dev hooks are refused unless DEV_HOOKS=1', async () => { const a = await open(); a.send(JSON.stringify({ t: 'join', create: true })); await a.next('joined'); const closed = new Promise((r) => a.on('close', (c) => r(c))); a.send(JSON.stringify({ t: 'dev', pts: 99999 })); assert.equal(await closed, 4003); });
test('buy/door/crate requests are answered by the server (far from stations -> rejected)', async () => { const a = await open(); a.send(JSON.stringify({ t: 'join', name: 'Far' })); const j = await a.next('joined'); assert.equal(j.phase, 'wait');
  a.send(JSON.stringify({ t: 'door' })); const d = await a.next('act'); assert.equal(d.a, 'door'); assert.equal(d.ok, false); a.send(JSON.stringify({ t: 'buy', w: 'rifle' })); const b = await a.next('act'); assert.equal(b.why, 'far'); a.send(JSON.stringify({ t: 'crate' })); const c = await a.next('act'); assert.equal(c.why, 'far'); a.close(); });
const SECURITY = {
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'DENY',
  'content-security-policy': "default-src 'none'; frame-ancestors 'none'",
  'referrer-policy': 'no-referrer',
  'permissions-policy': 'accelerometer=(), autoplay=(), camera=(), display-capture=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), usb=(), web-share=(), xr-spatial-tracking=()',
  'cross-origin-resource-policy': 'same-site',
};
function assertSecurity(get) { for (const [name, value] of Object.entries(SECURITY)) assert.equal(get(name), value, name); assert.equal(get('x-powered-by') ?? null, null); assert.equal(get('server') ?? null, null); }
test('security headers on health, and the game origin can still connect and play', async () => {
  const GAME = 'https://vwfest.github.io';
  const leaks = http.createServer((req, res) => { secureResponse(res); res.setHeader('X-Powered-By', 'Express'); res.writeHead(204, { Server: 'node/22.23.4', 'X-Powered-By': 'Express' }); res.end(); });
  const leakPort = await new Promise((r) => leaks.listen(0, '127.0.0.1', () => r(leaks.address().port)));
  const game = createServer({ origins: [GAME] }); const p = await game.listen(0); let player = null;
  try {
    const stripped = await fetch('http://127.0.0.1:' + leakPort + '/'); assert.equal(stripped.status, 204); assertSecurity((n) => stripped.headers.get(n));
    const health = await fetch('http://127.0.0.1:' + p + '/health'); assert.equal(health.status, 200); assert.deepEqual(await health.json(), { ok: true, rooms: 0 });
    assertSecurity((n) => health.headers.get(n)); assert.equal(health.headers.get('content-type'), 'application/json'); assert.equal(health.headers.get('access-control-allow-origin'), null);
    const missing = await fetch('http://127.0.0.1:' + p + '/nope'); assert.equal(missing.status, 404); assertSecurity((n) => missing.headers.get(n));
    await new Promise((resolve, reject) => {
      const sock = new WebSocket('ws://127.0.0.1:' + p, { origin: 'https://evil.example' });
      sock.on('unexpected-response', (_q, res) => { try { assert.equal(res.statusCode, 403); assertSecurity((n) => res.headers[n] ?? null); assert.equal(res.headers['access-control-allow-origin'] ?? null, null); resolve(); } catch (e) { reject(e); } });
      sock.on('open', () => reject(new Error('foreign origin was accepted'))); sock.on('error', () => {});
    });
    player = await new Promise((resolve, reject) => {
      const ws = new WebSocket('ws://127.0.0.1:' + p, { origin: GAME }); const q = [];
      ws.on('message', (d) => q.push(JSON.parse(d)));
      ws.on('upgrade', (res) => { ws.upgradeHeaders = res.headers; });
      ws.until = (pred, ms = 3000) => new Promise((ok, bad) => { const st = Date.now(); const iv = setInterval(() => { const hit = q.find(pred); if (hit) { clearInterval(iv); ok(hit); } else if (Date.now() - st > ms) { clearInterval(iv); bad(new Error('timeout')); } }, 10); });
      ws.on('open', () => resolve(ws)); ws.on('error', reject); ws.on('unexpected-response', (_q, res) => reject(new Error('HTTP ' + res.statusCode)));
    });
    assertSecurity((n) => player.upgradeHeaders[n] ?? null); assert.equal(player.upgradeHeaders['access-control-allow-origin'] ?? null, null);
    player.send(JSON.stringify({ t: 'join', name: 'Dust' }));
    const joined = await player.until((m) => m.t === 'joined'); assert.equal(joined.phase, 'wait');
    const first = await player.until((m) => m.t === 's' && m.p.length === 1); const me = first.p[0]; const x0 = me[2];
    assert.equal(me[12].find((row) => row[0] === 'pistol')[1], 12);
    player.send(JSON.stringify({ t: 'in', x: x0 + 0.3, z: me[3], yaw: 0.4, pitch: 0 }));
    player.send(JSON.stringify({ t: 'shot', w: 'pistol', dirs: [[0, 0, -1]] }));
    const played = await player.until((m) => m.t === 's' && m.p[0] && m.p[0][12].some((row) => row[0] === 'pistol' && row[1] === 11));
    assert.ok(played.p[0][2] > x0 + 0.2, 'moved, x=' + played.p[0][2]); assert.equal(played.phase === 'lobby', false);
  } finally { player?.close(); game.close(); leaks.close(); }
});
