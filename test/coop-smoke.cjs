// Headless 2-client co-op smoke test. Needs: npm run build; python3 -m http.server 8099; (cd server && npm start)
const { chromium } = require('playwright'); const OUT = process.env.OUT || '/workspace/qa'; const BASE = process.env.BASE || 'http://localhost:8099/';
let fails = 0; const ok = (c, m) => { console.log((c ? '  PASS ' : '  FAIL ') + m); if (!c) fails++; };
const exe = process.env.CHROME || undefined;
(async () => { const b = await chromium.launch({ executablePath: exe, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const mk = async (w, h, mob) => { const c = await b.newContext({ viewport: { width: w, height: h }, ...(mob ? { isMobile: true, hasTouch: true } : {}) }); await c.route('https://race.vwfestmemecoin.com/**', (r) => r.fulfill({ status: 200, headers: { 'access-control-allow-origin': '*', 'content-type': 'application/json' }, body: '{"ok":true,"top":[]}' })); const p = await c.newPage(); p.errs = []; p.on('pageerror', (e) => p.errs.push(e.message));
    await p.goto(BASE + '?quality=low&noadapt=1&test=1'); await p.waitForFunction(() => window.__game && !document.getElementById('loading'), null, { timeout: 90000 }); return p; };
  const A = await mk(1280, 720), B = await mk(844, 390, true);
  await A.fill('#coName', 'Alpha'); await A.click('#coCreate'); await A.waitForFunction(() => __game.MP.on, null, { timeout: 10000 }).catch(() => {});
  const room = await A.evaluate(() => __game.MP.S.room); ok(/^[A-Z2-9]{5}$/.test(room || ''), 'A created room ' + room);
  await B.fill('#coName', 'Bravo'); await B.fill('#coCode', room); await B.tap('#coJoin'); await B.waitForFunction(() => __game.MP.on, null, { timeout: 10000 }).catch(() => {});
  ok(await B.evaluate((r) => __game.MP.S.room === r, room), 'B joined the same room');
  await A.waitForFunction(() => __game.MP.S.remotes.size === 1, null, { timeout: 10000 }).catch(() => {});
  ok(await A.evaluate(() => __game.MP.S.remotes.size === 1) && await B.evaluate(() => __game.MP.S.remotes.size === 1), 'each client renders the other player');
  await A.waitForFunction(() => __game.MP.S.slot.size > 0, null, { timeout: 30000 }).catch(() => {});
  await B.waitForFunction(() => __game.MP.S.slot.size > 0, null, { timeout: 15000 }).catch(() => {});
  const za = await A.evaluate(() => [...__game.MP.S.slot.keys()].sort().join()), zb = await B.evaluate(() => [...__game.MP.S.slot.keys()].sort().join());
  ok(za.length > 0, 'server spawned zombies (A sees ' + za + ')'); ok(za.split(',').some((x) => zb.split(',').includes(x)), 'both clients see the same server zombie ids');
  ok(await A.evaluate(() => __game.G.round >= 1), 'round 1 driven by server');
  // A walks toward B and look
  await A.evaluate(() => { const g = __game; g.P.yaw = Math.PI; }); await A.waitForTimeout(800);
  await A.screenshot({ path: OUT + '/zombies-mp-A-desktop.png' }); await B.screenshot({ path: OUT + '/zombies-mp-B-phone.png' });
  // A shoots a zombie: server decides the hit and points
  const before = await A.evaluate(() => __game.P.pts); let hit = false;
  for (let i = 0; i < 40 && !hit; i++) { hit = await A.evaluate(() => { const g = __game, z = [...g.MP.S.slot.values()][0]; if (!z) return false; g.P.fireCd = 0; const s = g.P.slots[g.P.cur]; s.mag = 12; g.aimAt(z, false); g.shoot(); return false; }); await A.waitForTimeout(350); hit = (await A.evaluate(() => __game.P.pts)) > before; }
  ok(hit, 'server credited A for hitting a zombie (pts ' + before + ' -> ' + (await A.evaluate(() => __game.P.pts)) + ')');
  ok(await A.evaluate(() => { const p = __game.P.pts; __game.P.pts = 999999; return true; }), 'tamper local points'); await A.waitForTimeout(400);
  ok((await A.evaluate(() => __game.P.pts)) < 999999, 'server overwrites tampered local points');
  // reconnect
  const id = await B.evaluate(() => __game.MP.S.id); await B.evaluate(() => __game.MP.S.ws.close()); await B.waitForTimeout(2500);
  ok(await B.evaluate((id) => __game.MP.on && __game.MP.S.id === id && __game.MP.S.ws && __game.MP.S.ws.readyState === 1, id), 'B reconnected as the same player');
  await A.screenshot({ path: OUT + '/zombies-mp-A-after.png' }); await B.screenshot({ path: OUT + '/zombies-mp-B-after.png' });
  ok(!A.errs.length && !B.errs.length, 'no page errors ' + JSON.stringify(A.errs.concat(B.errs).slice(0, 3)));
  // single-player still offline-only
  const S = await mk(1280, 720); await S.evaluate(() => __game.startGame()); await S.waitForTimeout(500); ok(await S.evaluate(() => !__game.MP.on), 'single-player does not touch the co-op server');
  await b.close(); console.log(fails ? `\n${fails} FAILED` : '\nALL PASS'); process.exit(fails ? 1 : 0); })();
