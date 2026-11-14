// In-game teammate shots from a low camera looking up (desktop = hi LOD, phone = lo LOD) + draw-call/program cost.
//   BASE=http://127.0.0.1:8613/ OUT=/workspace/zz-soldier-shots/v2 node test/soldier-shot.cjs
// Local scene only (spawnDummy); never connects to the co-op server.
const fs = require('fs'), path = require('path');
const { chromium } = require(path.join(__dirname, '..', 'node_modules', 'playwright'));
const BASE = process.env.BASE || 'http://127.0.0.1:8613/';
const OUT = process.env.OUT || '/workspace/zz-soldier-shots/v2'; fs.mkdirSync(OUT, { recursive: true });
let fails = 0; const ok = (c, m) => { console.log((c ? '  PASS ' : '  FAIL ') + m); if (!c) fails++; };
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const run = async (tag, w, h, mob, q) => {
    const c = await b.newContext({ viewport: { width: w, height: h }, ...(mob ? { isMobile: true, hasTouch: true } : {}) });
    await c.route('**/*', (r) => r.request().url().includes('race.vwfestmemecoin.com') ? r.fulfill({ status: 200, headers: { 'access-control-allow-origin': '*', 'content-type': 'application/json' }, body: '{"ok":true,"top":[]}' }) : r.continue());
    const p = await c.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(String(e).split('\n')[0]));
    p.on('console', (m) => { if (m.type() === 'error' && !/race\.vwfest|ERR_FAILED|CORS/.test(m.text())) errs.push(m.text()); });
    await p.goto(BASE + '?quality=' + q + '&noadapt=1&test=1', { waitUntil: 'domcontentloaded' });
    await p.waitForFunction(() => window.__game && !document.getElementById('loading'), null, { timeout: 120000 });
    await p.evaluate(() => __game.startGame());
    await p.waitForTimeout(2500); // round fade-in
    const cost = await p.evaluate(() => {
      const g = __game;
      Object.assign(g.P, { x: 0, z: 6.0, yaw: Math.PI, pitch: 0.05, shake: 0, dmg: 0, vx: 0, vz: 0, flashlight: true });
      const R = g.renderer; R.info.autoReset = false;
      const frame = () => { g.tick(0.016); R.info.reset(); g.renderOnce(); return { calls: R.info.render.calls, tris: R.info.render.triangles, programs: R.info.programs.length }; };
      for (let i = 0; i < 3; i++) frame();
      for (const z of g.zombies.list || []) { if (z.mesh) z.mesh.visible = false; }
      const before = frame();
      const d = g.MP.spawnDummy('Alpha', 0, 0, 8.2); window.__dummy = d;
      frame(); frame(); const after = frame();
      let kit = !!d.userData.kit, meshes = 0, tris = 0; d.traverse((o) => { if (o.isMesh) { meshes++; tris += (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3; } });
      const d2 = g.MP.spawnDummy('Bravo', 1, 1.6, 9.0); frame(); frame(); const after2 = frame(); g.scene.remove(d2); g.MP.S.remotes.delete('dummy-1');
      R.info.autoReset = true;
      return { tier: g.tier, kit, meshes, tris: Math.round(tris), before, after, after2 };
    });
    console.log(tag, JSON.stringify(cost));
    ok(cost.kit, `${tag}: teammate uses the GLB soldier`);
    // Hook the renderer so the running game loop keeps our camera / pose (the loop re-aims the camera every tick).
    await p.evaluate(() => {
      const g = __game, R = g.renderer, orig = R.render.bind(R);
      R.render = (scene, camera) => {
        const S = window.__shot;
        if (S && scene.isScene && scene !== g.scene && camera.isPerspectiveCamera) return; // skip the first-person viewmodel pass
        if (S && scene === g.scene) window.__shotFrames = (window.__shotFrames || 0) + 1;
        if (S) {
          for (const z of g.zombies.list || []) { if (z.mesh) z.mesh.visible = false; }
          window.__dummy.position.set(S.at[0], 0, S.at[1]);
          const U = window.__dummy.userData, A = U.acts;
          if (S.pose && A[S.pose]) { for (const k in A) { const on = k === S.pose; if (on && !A[k].isRunning()) A[k].play(); A[k].setEffectiveWeight(on ? 1 : 0); } U.mixer.update(0); window.__dummy.updateMatrixWorld(true); }
          g.cam.position.set(S.camPos[0], S.camPos[1], S.camPos[2]); g.cam.lookAt(S.look[0], S.look[1], S.look[2]); g.cam.updateMatrixWorld();
        }
        try { return orig(scene, camera); } catch (e) { window.__hookErr = String(e && e.stack || e).slice(0, 300); throw e; }
      };
    });
    const shot = async (name, camPos, look, pose, light = false) => { // camPos/look are relative to a dummy at (0, 8.2)
      const AT = [11.4, 7.4]; // beside the yard lamp at (13.4, 5.9) so the teammate is front-lit at night
      camPos = [camPos[0] + AT[0], camPos[1], camPos[2] + AT[1] - 8.2]; look = [look[0] + AT[0], look[1], look[2] + AT[1] - 8.2];
      await p.evaluate((S) => { window.__shot = S; const g = __game; g.P.flashlight = S.light; for (const ch of g.cam.children) if (ch.isSpotLight || ch.isMesh) ch.visible = !!S.light && (ch.isSpotLight || g.tier > 0); }, { camPos, look, pose, light, at: AT });
      await p.evaluate(() => { window.__shotFrames = 0; });
      await p.waitForFunction(() => window.__shotFrames >= 4, null, { timeout: 90000, polling: 100 });
      await p.screenshot({ path: `${OUT}/${tag}-${name}.png` });
      const dbg = await p.evaluate(() => ({ err: window.__hookErr || '', cam: __game.cam.position.toArray().map((v) => +v.toFixed(2)), frames: window.__shotFrames }));
      if (dbg.err || process.env.DEBUG) console.log('   shot', name, JSON.stringify(dbg));
    };
    await shot('lowup-front', [0.25, 0.32, 6.1], [0, 1.45, 8.2]);
    await shot('lowup-front-flashlight', [0.2, 0.6, 3.8], [0, 1.4, 8.2], null, true);
    await shot('lowup-tq', [1.7, 0.30, 6.6], [0, 1.4, 8.2]);
    await shot('lowup-close', [0.55, 0.45, 7.0], [0, 1.55, 8.2]);
    await shot('eye-mid', [0.4, 1.7, 3.6], [0, 1.1, 8.2]);
    await shot('lowup-walk', [1.6, 0.35, 6.4], [0, 1.35, 8.2], 'walk');
    await shot('lowup-run', [-1.6, 0.35, 6.6], [0, 1.3, 8.2], 'run');
    ok(errs.length === 0, `${tag}: page errors: ` + errs.slice(0, 3).join(' | '));
    await c.close();
    return cost;
  };
  const desk = await run('desktop', 1280, 720, false, 'high');
  const phone = await run('phone', 844, 390, true, 'auto');
  ok(desk.tris > 15000 && desk.tris < 26000, 'desktop hi LOD tris ' + desk.tris);
  ok(phone.tris < 9000, 'phone lo LOD tris ' + phone.tris);
  fs.writeFileSync(`${OUT}/cost.json`, JSON.stringify({ desk, phone }, null, 1));
  console.log(fails ? `${fails} FAIL` : 'ALL PASS');
  await b.close(); process.exit(fails ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
