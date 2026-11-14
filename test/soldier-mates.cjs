// Preview-only ?mates= flag. Local dummy teammates in solo play; never talks to the co-op server.
//   BASE=http://127.0.0.1:PORT/ node test/soldier-mates.cjs
const { chromium } = require(require('path').join(__dirname, '..', 'node_modules', 'playwright'));
const BASE = process.env.BASE || 'http://127.0.0.1:8493/';
let fails = 0; const ok = (c, m) => { console.log((c ? '  PASS ' : '  FAIL ') + m); if (!c) fails++; };
(async () => {
  const b = await chromium.launch({
    executablePath: process.env.CHROME || '/usr/bin/google-chrome',
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']
  });
  const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } });
  const wsUrls = [];
  ctx.on('websocket', (ws) => wsUrls.push(ws.url()));
  await ctx.route('**/*', (r) => {
    const u = r.request().url();
    if (u.includes('race.vwfestmemecoin.com')) {
      return r.fulfill({ status: 200, headers: { 'access-control-allow-origin': '*', 'content-type': 'application/json' }, body: '{"ok":true,"top":[]}' });
    }
    if (/vwfest-zombies-coop\.onrender\.com|wss:/.test(u)) {
      wsUrls.push('blocked:' + u);
      return r.abort();
    }
    return r.continue();
  });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', (e) => errs.push(String(e).split('\n')[0]));
  await p.goto(BASE + 'preview.html?mates=2&nosw=1&test=1&quality=high&noadapt=1', { waitUntil: 'domcontentloaded' });
  await p.waitForFunction(() => window.__game && !document.getElementById('loading'), null, { timeout: 120000 });
  ok(await p.evaluate(() => __game.wantMates === 2), 'wantMates is 2 from ?mates=2');
  ok(await p.evaluate(() => !__game.MP.on), 'co-op client is off before play');
  await p.evaluate(() => __game.startGame());
  await p.waitForFunction(() => __game.G.state === 'playing', null, { timeout: 15000 });
  const before = await p.evaluate(() => {
    const rem = [...__game.MP.S.remotes.entries()];
    return {
      on: __game.MP.on,
      n: rem.length,
      names: rem.map(([, g]) => g.userData.name),
      kits: rem.map(([, g]) => !!g.userData.kit),
      tags: rem.map(([, g]) => !!(g.userData.tag && g.userData.tag.visible !== false)),
      pos: rem.map(([, g]) => [+g.position.x.toFixed(2), +g.position.z.toFixed(2)]),
      tag: (document.getElementById('mpTag') || {}).textContent || '',
      tagHidden: document.getElementById('mpTag')?.classList.contains('hidden')
    };
  });
  console.log('  spawn', JSON.stringify(before));
  ok(!before.on, 'co-op client stays off after play');
  ok(before.n === 2, 'two dummy teammates spawned: ' + before.n);
  ok(before.names.includes('Alpha') && before.names.includes('Bravo'), 'name tags Alpha and Bravo: ' + before.names.join(','));
  ok(before.kits.every(Boolean), 'both use the Sand Soldier kit');
  ok(before.tags.every(Boolean), 'both have name tags');
  ok(/LOCAL TEAMMATES/.test(before.tag) && !before.tagHidden, 'preview HUD tag visible');

  // Walk forward; teammates should follow and start walking.
  const moved = await p.evaluate(() => {
    const g = __game;
    const start = [...g.MP.S.remotes.values()].map((m) => ({ x: m.position.x, z: m.position.z }));
    g.input.f = 1; g.input.sprint = true;
    for (let i = 0; i < 90; i++) g.tick(0.05);
    g.input.f = 0; g.input.sprint = false;
    const end = [...g.MP.S.remotes.values()].map((m) => ({ x: m.position.x, z: m.position.z, spd: m.userData.spd || 0, kit: !!m.userData.kit }));
    const travel = start.map((s, i) => Math.hypot(end[i].x - s.x, end[i].z - s.z));
    return { player: { x: +g.P.x.toFixed(2), z: +g.P.z.toFixed(2) }, travel, end, on: g.MP.on };
  });
  console.log('  follow', JSON.stringify(moved));
  ok(moved.travel.every((d) => d > 1), 'teammates followed the player: ' + moved.travel.map((d) => d.toFixed(2)).join(','));
  ok(!moved.on, 'still not connected to co-op after follow');

  // Quit to menu clears them.
  await p.evaluate(() => __game.toMenu());
  ok(await p.evaluate(() => __game.MP.S.remotes.size === 0 && !__game.MP.on), 'menu clears dummy teammates');

  ok(wsUrls.length === 0, 'no co-op websocket attempts: ' + wsUrls.join(','));
  ok(errs.length === 0, 'page errors: ' + errs.slice(0, 3).join(' | '));
  console.log(fails ? `${fails} FAIL` : 'ALL PASS');
  await b.close();
  process.exit(fails ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
