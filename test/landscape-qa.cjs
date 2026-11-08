const { chromium } = require('playwright');
const args = ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'];
const sim = (p, n) => p.evaluate((n) => { for (let i = 0; i < n; i++) { __game.tick(0.05); __game.input.interactEdge = false; } }, n);
(async () => { const b = await chromium.launch({ args, executablePath: '/usr/bin/google-chrome' }); const errs = [];
  for (const [w, h] of [[844, 390], [915, 412], [390, 844]]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }); const p = await ctx.newPage();
    p.on('pageerror', (e) => errs.push(e.message)); p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
    await p.goto('http://localhost:8099/?quality=low&noadapt=1&test=1'); await p.waitForFunction(() => window.__game && !document.getElementById('loading'), null, { timeout: 90000 }); await p.waitForTimeout(1500);
    await p.screenshot({ path: `/workspace/qa/zombies-${w}x${h}-menu.png` });
    await p.evaluate(() => __game.startGame()); await sim(p, 200);
    const sc = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, sh: document.documentElement.scrollHeight, iw: innerWidth, ih: innerHeight, cv: document.getElementById('c').getBoundingClientRect().toJSON(), rot: getComputedStyle(document.getElementById('rotate')).display }));
    console.log(w, h, JSON.stringify(sc));
    await p.screenshot({ path: `/workspace/qa/zombies-${w}x${h}-play.png` }); await ctx.close(); }
  // close-ups (desktop, high)
  const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } }); const p = await ctx.newPage(); p.on('pageerror', (e) => errs.push(e.message));
  await p.goto('http://localhost:8099/?quality=high&noadapt=1&test=1'); await p.waitForFunction(() => window.__game && !document.getElementById('loading'), null, { timeout: 90000 }); await p.waitForTimeout(1500);
  await p.evaluate(() => __game.startGame()); await sim(p, 220);
  for (let k = 0; k < 4; k++) {
    await p.evaluate((k) => { const g = __game; g.zombies.reset(); g.G.toSpawn = 0; const z = g.zombies.spawn(g.world.windows[0], 3, k === 3); z.state = 'chase'; z.speed = 0; z.style = k % 3; z.ribs = k !== 1; z.skull = true; z.jawOpen = 0.35; g.P.hp = 9999; window.__z = z; }, k);
    for (let f = 0; f < 4; f++) { await p.evaluate(() => { const g = __game, z = window.__z; g.zombies.alive = 1; z.pos.set(g.P.x, 0, g.P.z - 2.3); z.speed = 0; if (g.P.gun) g.P.gun.visible = false; z.cool = 99; z.attackT = 0; g.aimAt(z, true); g.P.pitch -= 0.1; window.__sp = window.__sp || 0; g.G.toSpawn = 0; for (const o of g.zombies.list) if (o !== z) { o.state = 'dead'; o.root.visible = false; } g.tick(0.05); }); }
    await p.evaluate(() => { const g = __game; g.aimAt(window.__z, false); g.P.pitch += 0.1; g.tick(0.016); g.cam.fov = 17; g.cam.updateProjectionMatrix(); g.renderOnce?.(); }); await p.waitForTimeout(300); await p.screenshot({ path: `/workspace/qa/zombies-closeup-${k + 1}.png` }); await p.evaluate(() => { __game.cam.fov = 70; __game.cam.updateProjectionMatrix(); }); }
  console.log('ERRS', JSON.stringify(errs.slice(0, 10))); await b.close(); })();
