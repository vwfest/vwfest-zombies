// Same-camera yard shots. OUT=dir TAG=before|after BASE=http://localhost:8099/
const fs = require('fs'); const { chromium } = require('playwright');
const OUT = process.env.OUT || '/tmp/yard-shots'; const TAG = process.env.TAG || 'shot';
const BASE = process.env.BASE || 'http://localhost:8099/';
fs.mkdirSync(OUT, { recursive: true });
const exe = process.env.CHROME || undefined;
const pose = () => {
  const g = window.__game; g.startGame();
  g.G.time = 2.5; g.P.x = 0; g.P.z = 12; g.P.yaw = 0; g.P.pitch = -0.16; g.P.shake = 0; g.P.dmg = 0; g.P.vx = g.P.vz = 0;
  g.world.update(0, 2.5, g.P); g.tick(0.016); g.renderOnce();
  const s = g.world.M.sand, f = g.world.M.fence, c = g.world.M.concrete, lamp = g.world.lampPool[0];
  return { tier: g.tier, sand: s.color.getHexString(), bump: s.bumpScale, fenceR: f.roughness, moon: g.world.moon.intensity, dist: lamp.distance, decay: lamp.decay, base: g.world.lampBase, env: g.scene.environmentIntensity, concrete: c.color.getHexString() };
};
(async () => {
  const b = await chromium.launch({ executablePath: exe, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const mk = async (w, h, mob, q) => {
    const c = await b.newContext({ viewport: { width: w, height: h }, ...(mob ? { isMobile: true, hasTouch: true } : {}) });
    await c.route('**/*', async (route) => { if (route.request().url().includes('race.vwfestmemecoin.com')) return route.fulfill({ status: 200, headers: { 'access-control-allow-origin': '*', 'content-type': 'application/json' }, body: '{"ok":true,"top":[]}' }); return route.continue(); });
    const p = await c.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(String(e).split('\n')[0]));
    await p.goto(BASE + '?quality=' + q + '&noadapt=1&test=1', { waitUntil: 'domcontentloaded' });
    await p.waitForFunction(() => window.__game && !document.getElementById('loading'), null, { timeout: 90000 });
    const info = await p.evaluate(pose);
    await p.screenshot({ path: OUT + '/' + TAG + '-' + q + (mob ? '-phone' : '') + '.png' });
    const hi = info.tier > 0;
    const match = TAG !== 'after' || (hi
      ? info.sand === 'a89078' && info.fenceR === 0.42 && info.dist === 18 && info.moon === 1.4 && info.concrete === 'c8baa8' && info.env === 0.3
      : info.sand === 'cfc2b0' && info.bump === 3 && info.fenceR === 1 && info.dist === 30 && info.decay === 1.7 && info.moon === 1.7 && info.concrete === 'ffffff' && info.env === 0.45);
    console.log(TAG, q, mob ? 'phone' : 'desk', JSON.stringify(info), 'errs', errs.length, match ? 'ok' : 'ASSERT FAIL', errs.slice(0, 2).join(' | '));
    if (errs.length || !match) process.exitCode = 1;
    await c.close();
  };
  await mk(1280, 720, false, 'medium');
  await mk(844, 390, true, 'low');
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
