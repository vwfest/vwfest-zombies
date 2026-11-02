// Maps + difficulty modes test. Usage: npm run build && python3 -m http.server 8099 & node test/maps.cjs
const { chromium } = require('playwright'); const BASE = process.env.BASE || 'http://localhost:8099/'; const OUT = process.env.SHOTS || require('path').join(__dirname, '..', 'screenshots');
let fails = 0; const ok = (c, m) => { console.log((c ? '  PASS ' : '  FAIL ') + m); if (!c) fails++; };
const args = ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'];
(async () => {
  const b = await chromium.launch({ args });
  for (const map of ['junkyard', 'motel', 'drivein']) {
    console.log('\n== map ' + map + ' ==');
    const ctx = await b.newContext({ viewport: { width: 844, height: 390 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    await ctx.route('https://race.vwfestmemecoin.com/**', (r) => r.fulfill({ status: 200, headers: { 'access-control-allow-origin': '*', 'content-type': 'application/json' }, body: '{"ok":true,"top":[]}' }));
    const p = await ctx.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto(BASE + `?quality=low&noadapt=1&test=1&map=${map}`); await p.waitForFunction(() => window.__game && !document.getElementById('loading'), null, { timeout: 60000 });
    ok(await p.evaluate((m) => __game.MAP.id === m, map), 'map loaded'); ok(await p.evaluate(() => __game.world.windows.length >= 5 && !!__game.world.door && !!__game.world.crate), 'windows/gate/crate present');
    if (map === 'junkyard') await p.screenshot({ path: OUT + '/lobby.png' });
    for (const mode of ['easy', 'medium', 'hard']) {
      await p.evaluate((m) => document.querySelector(`#modeSeg [data-m="${m}"]`).click(), mode);
      await p.evaluate(() => __game.startGame());
      const r = await p.evaluate(() => { const g = __game; for (let i = 0; i < 400; i++) { g.tick(0.05); g.input.interactEdge = false; } const zs = g.zombies.list.filter((z) => z.state !== 'dead'); return { mode: g.MODE.id, round: g.G.round, toSpawn: g.G.toSpawn, alive: g.zombies.alive, hp: zs[0] && zs[0].maxHp, dmg: zs[0] && zs[0].dmg, pts: g.P.pts, max: g.zombies.max, inside: Math.abs(g.P.x) < 40 }; });
      ok(r.mode === mode && r.round >= 1 && r.alive > 0, `${mode}: round ${r.round}, ${r.alive} alive, zHP ${Math.round(r.hp)}, zDmg ${r.dmg}, cap ${r.max}`);
      if (mode === 'medium') await p.screenshot({ path: `${OUT}/map-${map}.png` });
      await p.evaluate(() => __game.toMenu());
    }
    // walls hold: push player far outside, must be stopped
    const esc = await p.evaluate(() => { const g = __game; g.startGame(); g.P.yaw = Math.PI; g.input.f = 1; for (let i = 0; i < 300; i++) g.tick(0.05); g.input.f = 0; return g.P.z; });
    ok(esc < 60, 'perimeter contains player (z=' + esc.toFixed(1) + ')');
    ok(errs.length === 0, 'no page errors ' + errs.join(' | ')); await ctx.close();
  }
  await b.close(); console.log(fails ? `\n${fails} FAIL` : '\nALL PASS'); process.exit(fails ? 1 : 0);
})();
