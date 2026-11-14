// Soldier GLB kit e2e. Usage:
//   BASE=http://127.0.0.1:8492/ node test/soldier-kit.cjs
// Does not touch the Render co-op server. Uses spawnDummy in the local scene.
const { chromium } = require('/workspace/zz-lb5/node_modules/playwright');
const BASE = process.env.BASE || 'http://127.0.0.1:8492/';
const OUT = process.env.OUT || '/workspace/zz-soldier-shots';
const Q = process.env.QUALITY || 'high';
let fails = 0;
const ok = (c, m) => { console.log((c ? '  PASS ' : '  FAIL ') + m); if (!c) fails++; };

(async () => {
  const b = await chromium.launch({
    executablePath: process.env.CHROME || '/usr/bin/google-chrome',
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']
  });
  const ctx = await b.newContext({ viewport: { width: 844, height: 390 }, isMobile: true, hasTouch: true });
  await ctx.route('**/*', async (route) => {
    const req = route.request();
    if (req.url().includes('race.vwfestmemecoin.com')) {
      return route.fulfill({ status: 200, headers: { 'access-control-allow-origin': '*', 'content-type': 'application/json' }, body: '{"ok":true,"top":[]}' });
    }
    return route.continue();
  });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', (e) => errs.push(e.message));
  p.on('console', (m) => {
    if (m.type() === 'error' && !/race\.vwfestmemecoin|ERR_FAILED|CORS/.test(m.text())) errs.push(m.text());
  });
  await p.goto(BASE + '?quality=' + Q + '&noadapt=1&t=' + Date.now());
  await p.waitForFunction(() => window.__game && !document.getElementById('loading'), null, { timeout: 120000 });

  const kit = await p.evaluate(() => {
    const s = window.__game;
    // loadSoldierKit is already awaited in main.js; detect via a dummy
    return { hasMP: !!(s.MP && s.MP.spawnDummy), state: s.G && s.G.state };
  });
  ok(kit.hasMP, 'MP.spawnDummy is available');

  const info = await p.evaluate(() => {
    const g = __game;
    // Start a local session so the world is lit, then plant a dummy in front of the camera.
    if (g.G.state !== 'playing') {
      try { document.getElementById('btnPlay')?.click(); } catch (e) {}
    }
    return { state: g.G.state, tier: g.tier };
  });
  await p.waitForFunction(() => __game.G.state === 'playing', null, { timeout: 15000 }).catch(() => {});
  ok(await p.evaluate(() => __game.G.state === 'playing'), 'game playing for in-world lighting');

  const stats = await p.evaluate(() => {
    const g = __game;
    g.P.x = 0; g.P.z = 6.5; g.P.yaw = Math.PI; g.P.pitch = 0.08; g.P.flashlight = false;
    const dummy = g.MP.spawnDummy('Alpha', 0, 0, 8);
    let meshes = 0, tris = 0, skinned = 0, hasMap = 0, names = [];
    dummy.traverse((o) => {
      if (o.isMesh || o.isSkinnedMesh) {
        meshes++;
        if (o.isSkinnedMesh) skinned++;
        const geo = o.geometry;
        tris += (geo.index ? geo.index.count : geo.attributes.position.count) / 3;
        names.push(o.name);
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        for (const m of mats) if (m && m.map) hasMap++;
      }
    });
    const U = dummy.userData;
    return {
      meshes, tris: Math.round(tris), skinned, hasMap, names,
      kit: !!U.kit, clips: U.acts ? Object.keys(U.acts) : [],
      height: +dummy.position.y.toFixed(3),
      body: !!(U.body), gun: !!(U.gun), tag: !!(U.tag),
    };
  });
  console.log('  info dummy', JSON.stringify(stats));
  ok(stats.kit, 'spawned avatar used the GLB kit (not procedural fallback)');
  ok(stats.skinned >= 1, 'has skinned mesh(es): ' + stats.skinned);
  ok(stats.tris > 1000 && stats.tris <= 13000, 'tri count in budget: ' + stats.tris);
  ok(stats.hasMap >= 1, 'body material has albedo map');
  ok(stats.clips.includes('idle') && stats.clips.includes('walk') && stats.clips.includes('run'), 'clips: ' + stats.clips.join(','));
  ok(!!stats.body && !!stats.tag, 'body group + nametag present');

  const hide = () => p.evaluate(() => {
    ['hud', 'touch', 'pause', 'banner', 'toast', 'menu'].forEach((id) => {
      const el = document.getElementById(id); if (el) el.classList.add('hidden');
    });
    const t = document.getElementById('touch'); if (t) t.style.display = 'none';
  });
  await hide();
  await p.waitForTimeout(400);
  await p.screenshot({ path: `${OUT}/after-phone-close.png` });

  await p.evaluate(() => { __game.P.z = 3.6; __game.P.yaw = Math.PI; __game.P.pitch = 0.12; });
  await p.waitForTimeout(300);
  await p.screenshot({ path: `${OUT}/after-phone-mid.png` });

  await p.evaluate(() => { __game.P.x = 1.35; __game.P.z = 6.7; __game.P.yaw = Math.PI + 0.55; __game.P.pitch = 0.05; });
  await p.waitForTimeout(300);
  await p.screenshot({ path: `${OUT}/after-phone-threequarter.png` });

  // walk pose
  await p.evaluate(() => {
    const dummy = [...__game.MP.S.remotes.values()][0];
    __game.P.x = 1.6; __game.P.z = 6.2; __game.P.yaw = Math.PI + 0.85; __game.P.pitch = 0.05;
    for (let i = 0; i < 20; i++) __game.MP.S && null;
    // drive the mixer at walk speed
    if (window.poseSoldier) {}
    const { poseSoldier } = { poseSoldier: null };
    dummy.userData.mixer && dummy.userData.acts.walk && (dummy.userData.acts.walk.play(), dummy.userData.acts.walk.setEffectiveWeight(1), dummy.userData.acts.idle.setEffectiveWeight(0), dummy.userData.mixer.update(0.4));
  });
  await p.waitForTimeout(200);
  await p.screenshot({ path: `${OUT}/after-phone-walk.png` });

  // downed tilt (same contract as mp.js)
  await p.evaluate(() => {
    const dummy = [...__game.MP.S.remotes.values()][0];
    dummy.userData.body.rotation.x = -1.4;
    dummy.position.y = 0.3;
    __game.P.x = 0.4; __game.P.z = 6.2; __game.P.yaw = Math.PI + 0.2; __game.P.pitch = 0.15;
  });
  await p.waitForTimeout(200);
  await p.screenshot({ path: `${OUT}/after-phone-downed.png` });

  // dead ghost
  await p.evaluate(() => {
    const dummy = [...__game.MP.S.remotes.values()][0];
    dummy.userData.body.rotation.x = 0;
    dummy.position.y = 0;
    const mats = dummy.userData.mats || [];
    for (const m of mats) { m.transparent = true; m.opacity = 0.4; m.depthWrite = false; m.needsUpdate = true; }
    if (dummy.userData.tag && dummy.userData.tag.material) dummy.userData.tag.material.opacity = 0.4;
    __game.P.x = 0; __game.P.z = 6.4; __game.P.yaw = Math.PI; __game.P.pitch = 0.1;
  });
  await p.waitForTimeout(200);
  await p.screenshot({ path: `${OUT}/after-phone-dead.png` });

  ok(errs.length === 0, 'page errors: ' + errs.slice(0, 4).join(' | '));
  console.log(fails ? `${fails} FAIL` : 'ALL PASS');
  await b.close();
  process.exit(fails ? 1 : 0);
})();
