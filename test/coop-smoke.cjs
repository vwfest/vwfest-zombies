// Headless 2-client co-op smoke test. Needs: npm run build; python3 -m http.server 8099; (cd server && npm start)
const { chromium } = require('playwright'); const OUT = process.env.OUT || '/tmp/coop-qa'; const BASE = process.env.BASE || 'http://localhost:8099/'; const COOP_WS = process.env.COOP_WS || 'ws://127.0.0.1:8787';
let fails = 0; const ok = (c, m) => { console.log((c ? '  PASS ' : '  FAIL ') + m); if (!c) fails++; };
const exe = process.env.CHROME || undefined;
(async () => { const b = await chromium.launch({ executablePath: exe, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--disable-features=LocalNetworkAccessChecks'] });
  const mk = async (w, h, mob) => { const c = await b.newContext({ viewport: { width: w, height: h }, ...(mob ? { isMobile: true, hasTouch: true } : {}) });
    await c.route('**/*', async (route) => { const req = route.request(); if (req.url().includes('race.vwfestmemecoin.com')) return route.fulfill({ status: 200, headers: { 'access-control-allow-origin': '*', 'content-type': 'application/json' }, body: '{"ok":true,"top":[]}' });
      if (req.resourceType() !== 'document') return route.continue(); const res = await route.fetch(); let body = await res.text(); body = body.replace('wss://vwfest-zombies-coop.onrender.com ', 'wss://vwfest-zombies-coop.onrender.com ws://127.0.0.1:8787 ws://localhost:8787 '); const headers = { ...res.headers() }; delete headers['content-length']; return route.fulfill({ status: res.status(), headers, body }); });
    const p = await c.newPage(); p.errs = []; p.on('pageerror', (e) => p.errs.push(e.message + ' @ ' + (e.stack || '').split('\n').slice(1, 3).join(' | ')));
    await p.goto(BASE + '?quality=low&noadapt=1&test=1&server=' + encodeURIComponent(COOP_WS)); await p.waitForFunction(() => window.__game && !document.getElementById('loading'), null, { timeout: 90000 }); return p; };
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
  await A.evaluate(() => __game.MP.send({ t: 'dev', hp: 200, god: 1 })); await B.evaluate(() => __game.MP.send({ t: 'dev', hp: 200, god: 1 })); await A.waitForTimeout(300);
  // A walks toward B and look
  await A.evaluate(() => { const g = __game; g.P.yaw = Math.PI; }); await A.waitForTimeout(800);
  await A.screenshot({ path: OUT + '/zombies-mp-A-desktop.png' }); await B.screenshot({ path: OUT + '/zombies-mp-B-phone.png' });
  // A shoots a zombie: server decides the hit and points
  const before = await A.evaluate(() => __game.P.pts); let hit = false;
  for (let i = 0; i < 120 && !hit; i++) { hit = await A.evaluate(() => { const g = __game, z = [...g.MP.S.slot.values()].filter((q) => Math.abs(q.pos.x) < 22 && q.pos.z < 22 && q.pos.z > -23).sort((a, b) => Math.hypot(a.pos.x - g.P.x, a.pos.z - g.P.z) - Math.hypot(b.pos.x - g.P.x, b.pos.z - g.P.z))[0]; if (!z) return false; g.P.fireCd = 0; const s = g.P.slots[g.P.cur]; s.mag = 12; g.aimAt(z, false); g.shoot(); return false; }); await A.waitForTimeout(350); hit = (await A.evaluate(() => __game.P.pts)) > before; }
  ok(hit, 'server credited A for hitting a zombie (pts ' + before + ' -> ' + (await A.evaluate(() => __game.P.pts)) + ')');
  ok(await A.evaluate(() => { const p = __game.P.pts; __game.P.pts = 999999; return true; }), 'tamper local points'); await A.waitForTimeout(400);
  ok((await A.evaluate(() => __game.P.pts)) < 999999, 'server overwrites tampered local points');
  // reconnect
  const id = await B.evaluate(() => __game.MP.S.id); await B.evaluate(() => __game.MP.S.ws.close()); await B.waitForTimeout(2500);
  ok(await B.evaluate((id) => __game.MP.on && __game.MP.S.id === id && __game.MP.S.ws && __game.MP.S.ws.readyState === 1, id), 'B reconnected as the same player');
  await A.screenshot({ path: OUT + '/zombies-mp-A-after.png' }); await B.screenshot({ path: OUT + '/zombies-mp-B-after.png' });
  // ---- shared world (needs the server started with DEV_HOOKS=1 for teleport / points / drops)
  const dev = (pg, o) => pg.evaluate((o) => { const g = __game; if (o.tp) { g.P.x = o.tp[0]; g.P.z = o.tp[1]; } g.MP.send({ t: 'dev', ...o }); }, o);
  const use = (pg) => pg.evaluate(() => { const g = __game, f = g.findFocus(); if (!f) return null; g.input.interactEdge = true; g.interact(f, true, 0.016); g.input.interactEdge = false; return f.type; });
  await dev(A, { hp: 200, god: 1 }); await dev(B, { hp: 200, god: 1 }); await A.waitForTimeout(300);
  // walls: try to walk through the shed (x 15..21, z -19.5..-14.5)
  await dev(A, { tp: [13, -17], god: 1, hp: 200 }); await A.waitForFunction(() => Math.abs(__game.P.x - 13) < 3 && Math.abs(__game.P.z + 17) < 3, null, { timeout: 5000 }).catch(() => {});
  await A.evaluate(() => { __game.P.x = 26; __game.P.z = -17; }); await A.waitForFunction(() => __game.P.x < 15, null, { timeout: 4000 }).catch(() => {});
  ok(await A.evaluate(() => __game.P.x < 15), 'server wall collision pulls A back out of the shed (x=' + (await A.evaluate(() => __game.P.x.toFixed(2))) + ')');
  // gate
  await dev(A, { tp: [0, -22], pts: 9000, god: 1, hp: 200 }); await A.waitForFunction(() => Math.hypot(__game.P.x, __game.P.z + 22) < 2.5, null, { timeout: 5000 }).catch(() => {}); const ft = await use(A); await A.waitForTimeout(700);
  ok(ft === 'door' && await A.evaluate(() => __game.world.door.open) && await B.evaluate(() => __game.world.door.open), 'A opens the gate via the server; B sees it open');
  // mystery crate
  const cr = await A.evaluate(() => [__game.world.crate.x, __game.world.crate.z]); await dev(A, { tp: [cr[0], cr[1] + 1.2] }); await A.waitForTimeout(400); await use(A); await A.waitForTimeout(600);
  ok(await B.evaluate(() => __game.world.crate.state === 'roll'), 'B sees the crate rolling');
  await A.waitForTimeout(3800); ok(await A.evaluate(() => __game.world.crate.state === 'ready'), 'crate ready');
  const before2 = await A.evaluate(() => __game.P.slots.filter(Boolean).map((s) => s.id).join()); await use(A); await A.waitForTimeout(600);
  const after2 = await A.evaluate(() => __game.P.slots.filter(Boolean).map((s) => s.id).join()); ok(after2 !== before2 && await A.evaluate(() => __game.MP.S.owned.length >= 2), 'A takes the crate weapon (server owned: ' + (await A.evaluate(() => __game.MP.S.owned.join())) + ')');
  // power-up: drop near B, B walks over it, both clients drop it
  const bp = await B.evaluate(() => [__game.P.x, __game.P.z]); await dev(B, { tp: [0, 4], hp: 200 }); await B.waitForTimeout(300); await dev(A, { drop: 'double', x: 0, z: 9 }); await A.waitForTimeout(600);
  ok(await A.evaluate(() => __game.G.ups.some((u) => u.sid)) && await B.evaluate(() => __game.G.ups.some((u) => u.sid)), 'both clients show the server power-up');
  await dev(B, { tp: [0, 9] }); await B.waitForTimeout(900);
  ok(await A.evaluate(() => !__game.G.ups.some((u) => u.sid)) && await B.evaluate(() => __game.G.double > 0), 'B picks it up; double points active for everyone');
  // planks: compare window state on both clients, then repair one
  const wa = await A.evaluate(() => __game.world.windows.map((w) => w.count).join()), wb = await B.evaluate(() => __game.world.windows.map((w) => w.count).join()); ok(wa === wb, 'plank counts match on both clients (' + wa + ')');
  const wi = await A.evaluate(() => { const ws = __game.world.windows; let i = ws.findIndex((w) => w.count < 6 && w.area === 'A'); if (i < 0) i = 0; return i; });
  const wpos = await A.evaluate((i) => { const w = __game.world.windows[i]; return [w.in.x, w.in.z, w.count]; }, wi); await dev(A, { tp: [wpos[0], wpos[1]] }); await A.waitForTimeout(400);
  for (let i = 0; i < 6; i++) { await A.evaluate(() => { const g = __game, f = g.findFocus(); if (f && f.type === 'win') for (let k = 0; k < 40; k++) g.interact(f, true, 0.016); }); await A.waitForTimeout(550); }
  const wnow = await B.evaluate((i) => __game.world.windows[i].count, wi), reps = await A.evaluate(() => __game.G.mpRepairs || 0); ok(reps > 0, 'A repaired window ' + wi + ' ' + reps + 'x via the server (' + wpos[2] + ' -> ' + wnow + ' on B, zombies keep tearing) ' + (await A.evaluate(() => JSON.stringify([__game.MP.S.lastAct, __game.findFocus()?.type, __game.P.dead, __game.P.x, __game.P.z]))));
  // spectator: B goes down
  await dev(A, { tp: [0, 12], hp: 200 }); await A.waitForTimeout(300); await dev(B, { down: 1 }); await B.waitForFunction(() => /SPECTATING/.test(document.getElementById('specTag').textContent) && !document.getElementById('specTag').classList.contains('hidden'), null, { timeout: 20000 }).catch(() => {}); await B.waitForTimeout(800);
  console.log('   dbg', await B.evaluate(() => JSON.stringify({ dead: __game.P.dead, deadT: __game.P.deadT, st: __game.G.state, me: __game.MP.S.snaps.at(-1)?.p.map((p) => [p[1], p[9], p[2], p[3]]), rem: [...__game.MP.S.remotes.values()].map((g) => [g.position.y, g.visible]), tag: document.getElementById('specTag').className })));
  ok(await B.evaluate(() => __game.P.dead && !document.getElementById('specTag').classList.contains('hidden') && /SPECTATING/.test(document.getElementById('specTag').textContent)), 'downed B spectates A: ' + (await B.evaluate(() => document.getElementById('specTag').textContent)));
  await B.screenshot({ path: OUT + '/zombies-mp-B-spectator.png' }); await A.screenshot({ path: OUT + '/zombies-mp-A-world.png' });
  ok(!A.errs.length && !B.errs.length, 'no page errors ' + JSON.stringify(A.errs.concat(B.errs).slice(0, 3)));
  // single-player still offline-only
  const S = await mk(1280, 720); await S.evaluate(() => __game.startGame()); await S.waitForTimeout(500); ok(await S.evaluate(() => !__game.MP.on), 'single-player does not touch the co-op server');
  await b.close(); console.log(fails ? `\n${fails} FAILED` : '\nALL PASS'); process.exit(fails ? 1 : 0); })();
