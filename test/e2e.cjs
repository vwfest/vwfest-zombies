// End-to-end test (headless Chromium via Playwright). Usage: npm run build && python3 -m http.server 8099 & node test/e2e.cjs
const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const BASE = process.env.BASE || 'http://localhost:8099/'; const OUT = path.join(__dirname, '..', 'screenshots'); fs.mkdirSync(OUT, { recursive: true });
let fails = 0; const ok = (c, m) => { console.log((c ? '  PASS ' : '  FAIL ') + m); if (!c) fails++; };
const sim = (p, n, dt = 0.05) => p.evaluate(([n, dt]) => { for (let i = 0; i < n; i++) { __game.tick(dt); __game.input.interactEdge = false; } return __game.G.time; }, [n, dt]);
const args = ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'];
async function run(b, name, mobile, quality) {
  console.log(`\n== ${name} ==`);
  const ctx = await b.newContext(mobile ? { viewport: { width: 844, height: 390 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 } : { viewport: { width: 1280, height: 720 } });
  const p = await ctx.newPage(); const errs = [];
  p.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(m.type() + ': ' + m.text()); }); p.on('pageerror', (e) => errs.push('PAGEERROR: ' + e.message));
  const resp = await p.goto(BASE + `?quality=${quality}&noadapt=1`); ok(resp.status() === 200, 'page returns 200');
  await p.waitForFunction(() => window.__game && document.getElementById('loading') === null, null, { timeout: 60000 }).catch(() => {});
  await p.waitForTimeout(2500);
  ok(await p.evaluate(() => !document.getElementById('menu').classList.contains('hidden')), 'title screen visible');
  ok(await p.evaluate(() => /DUST/.test(document.querySelector('h1').textContent)), 'title text present');
  const tier = await p.evaluate(() => __game.tier); ok(tier === (quality === 'high' ? 2 : 0), 'quality tier = ' + tier);
  await p.screenshot({ path: `${OUT}/${name}-1-title.png` });
  // ---- start game (real click / tap)
  if (mobile) await p.tap('#btnPlay'); else await p.click('#btnPlay');
  await p.waitForFunction(() => __game.G.state === 'playing', null, { timeout: 15000 }).catch(() => {});
  ok(await p.evaluate(() => __game.G.state === 'playing'), 'Play starts the game');
  ok(await p.evaluate(() => !document.getElementById('hud').classList.contains('hidden')), 'HUD visible');
  if (mobile) ok(await p.evaluate(() => !document.getElementById('touch').classList.contains('hidden') && getComputedStyle(document.getElementById('bFire')).display !== 'none'), 'touch controls visible');
  await sim(p, 120); // intermission -> round 1
  const r1 = await p.evaluate(() => ({ round: __game.G.round, alive: __game.zombies.alive }));
  ok(r1.round === 1, 'round 1 started'); await sim(p, 80); ok(await p.evaluate(() => __game.zombies.alive > 0), 'zombies spawn');
  ok(await p.evaluate(() => __game.world.windows.some((w) => __game.zombies.list.some((z) => z.win === w && z.state !== 'dead'))), 'zombies target windows');
  // ---- movement
  const p0 = await p.evaluate(() => ({ x: __game.P.x, z: __game.P.z }));
  if (mobile) {
    const cdp = await ctx.newCDPSession(p); const r = await p.evaluate(() => { const b = document.getElementById('stick').getBoundingClientRect(); return { x: b.left + b.width / 2, y: b.top + b.height / 2 }; });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: r.x, y: r.y, id: 1 }] }); await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: r.x, y: r.y - 50, id: 1 }] });
    await sim(p, 20); await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); p.cdp = cdp;
  } else { await p.keyboard.down('KeyW'); await sim(p, 20); await p.keyboard.up('KeyW'); }
  const p1 = await p.evaluate(() => ({ x: __game.P.x, z: __game.P.z })); ok(Math.hypot(p1.x - p0.x, p1.z - p0.z) > 2, `player moves (${mobile ? 'virtual joystick' : 'WASD'}) ${Math.hypot(p1.x - p0.x, p1.z - p0.z).toFixed(1)}m`);
  // ---- look
  const yaw0 = await p.evaluate(() => __game.P.yaw);
  if (mobile) { await p.cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: 600, y: 150, id: 2 }] }); await p.cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: 660, y: 150, id: 2 }] }); await p.cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); }
  else { await p.mouse.move(640, 360); await p.mouse.move(700, 360); await p.evaluate(() => document.getElementById('c').dispatchEvent(new MouseEvent('mousemove', { movementX: 80, movementY: -20, bubbles: true }))); }
  const yaw1 = await p.evaluate(() => __game.P.yaw); console.log('  info: yaw delta', (yaw1 - yaw0).toFixed(3), mobile ? '(touch drag look)' : '(mouse; pointer lock may be unavailable headless)');
  ok(Math.abs(yaw1 - yaw0) > 0.05, mobile ? 'touch-drag look rotates camera' : 'mouse look rotates camera (pointer lock ' + (await p.evaluate(() => !!document.pointerLockElement)) + ')');
  // ---- shooting / killing a zombie
  await p.evaluate(() => { const g = __game; g.zombies.reset(); g.P.x = 0; g.P.z = 14; g.P.pts = 500; const w = g.world.windows[0]; const z = g.zombies.spawn(w, 1); z.state = 'chase'; z.speed = 0; z.pos.set(0, 0, 6); g.G.toSpawn = 99; g.G.spawnT = 99; g.aimAt(z, true); g.tick(0.016); });
  const before = await p.evaluate(() => ({ hp: __game.zombies.list.find((z) => z.state === 'chase').hp, mag: __game.P.slots[0].mag, pts: __game.P.pts }));
  if (mobile) { await p.cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: 780, y: 330, id: 3 }] }); }
  else await p.mouse.down();
  await sim(p, 1, 0.02); if (mobile) await p.cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); else await p.mouse.up();
  const after = await p.evaluate(() => ({ mag: __game.P.slots[0].mag, pts: __game.P.pts, kills: __game.P.kills, heads: __game.P.heads }));
  ok(after.mag === before.mag - 1, 'firing uses ammo (recoil/muzzle flash fire)'); ok(after.pts > before.pts, 'hit awards points (+' + (after.pts - before.pts) + ')');
  // kill with headshot
  await p.evaluate(() => { const g = __game; const z = g.zombies.list.find((z) => z.state === 'chase'); for (let i = 0; i < 6 && z.state === 'chase'; i++) { g.aimAt(z, true); g.P.fireCd = 0; g.input.fire = false; g.tick(0.016); g.input.fire = true; g.tick(0.016); g.input.fire = false; g.tick(0.05); } });
  const k = await p.evaluate(() => ({ kills: __game.P.kills, heads: __game.P.heads, pts: __game.P.pts })); ok(k.kills >= 1, 'zombie can be killed'); ok(k.heads >= 1, 'headshot registers (' + k.heads + ')');
  // ---- reload
  await p.evaluate(() => { __game.input.fire = false; __game.P.fireCd = 0; __game.P.switchT = 0; }); await (mobile ? p.evaluate(() => { __game.input.reload = true; }) : p.keyboard.press('KeyR')); await sim(p, 40);
  ok(await p.evaluate(() => __game.P.slots[0].mag === 12), 'reload refills the magazine');
  // ---- wall weapon buy
  await p.evaluate(() => { const g = __game; const b = g.world.buys[0]; g.P.x = b.pos.x; g.P.z = b.pos.z; g.P.yaw = 0; g.P.pts = 2000; g.tick(0.02); });
  if (mobile) await p.evaluate(() => { __game.input.interactEdge = true; __game.input.interact = true; }); else await p.keyboard.press('KeyE');
  await sim(p, 3); await p.evaluate(() => (__game.input.interact = false)); const buy = await p.evaluate(() => ({ slots: __game.P.slots.map((s) => s && s.id), pts: __game.P.pts }));
  ok(buy.slots.includes('smg') && buy.pts === 1400, 'buy SMG from wall for 600 → ' + buy.slots.join('/'));
  // ---- window repair
  await p.evaluate(() => { const g = __game; g.zombies.reset(); const w = g.world.windows[0]; while (w.count > 1) g.world.removePlank(w); g.P.x = w.in.x; g.P.z = w.in.z; g.P.yaw = 0; g.tick(0.02); });
  if (mobile) await p.evaluate(() => { __game.input.interact = true; }); else await p.keyboard.down('KeyE');
  await sim(p, 90); if (mobile) await p.evaluate(() => { __game.input.interact = false; }); else await p.keyboard.up('KeyE');
  ok(await p.evaluate(() => __game.world.windows[0].count === 6), 'hold E repairs boarded window (planks 1→6)');
  // ---- gate
  await p.evaluate(() => { const g = __game; g.P.x = 0; g.P.z = -21.5; g.P.pts = 3000; g.tick(0.02); });
  ok(await p.evaluate(() => !!__game.findFocus() && __game.findFocus().type === 'door'), 'gate prompt appears'); await p.evaluate(() => { __game.input.interactEdge = true; __game.input.interact = true; }); await sim(p, 2); await p.evaluate(() => (__game.input.interact = false)); await sim(p, 60);
  ok(await p.evaluate(() => __game.world.door.open && __game.world.door.col.off), 'buy gate opens second area');
  // ---- crate
  await p.evaluate(() => { const g = __game, c = g.world.crate; g.P.x = c.x + 1.4; g.P.z = c.z + 0.6; g.P.pts = 3000; g.tick(0.02); }); await p.evaluate(() => { __game.input.interactEdge = true; __game.input.interact = true; }); await sim(p, 2); await p.evaluate(() => (__game.input.interact = false)); await sim(p, 90);
  ok(await p.evaluate(() => __game.world.crate.state === 'ready'), 'mystery crate rolls a weapon'); await p.evaluate(() => { __game.input.interactEdge = true; __game.input.interact = true; }); await sim(p, 2); await p.evaluate(() => (__game.input.interact = false));
  const cr = await p.evaluate(() => __game.P.slots.map((s) => s && s.id)); ok(cr.length === 2 && cr.every(Boolean) && cr.some((i) => ['smg', 'shotgun', 'rifle', 'lmg'].includes(i)), 'crate weapon taken → ' + cr.join('/'));
  // ---- power-ups
  await p.evaluate(() => { const g = __game; g.P.x = 0; g.P.z = 10; g.G.double = 0; g.spawnPower('double', 0, 10); g.tick(0.05); }); ok(await p.evaluate(() => __game.G.double > 20), '2× Cash power-up works');
  await p.evaluate(() => { const g = __game; g.spawnPower('ammo', 0, 10); g.P.slots[0].reserve = 3; g.tick(0.05); }); ok(await p.evaluate(() => __game.P.slots[0].reserve === __game.WEAPONS[__game.P.slots[0].id].reserve), 'Full Mags power-up refills ammo');
  // ---- round progression + nuke
  await p.evaluate(() => { const g = __game; g.zombies.reset(); g.G.round = 1; g.G.phase = 'round'; g.G.toSpawn = 3; g.G.spawnT = 0; g.P.hp = 100; }); await sim(p, 60); await p.evaluate(() => { __game.G.toSpawn = 0; });
  const alive = await p.evaluate(() => __game.zombies.alive); ok(alive > 0, 'zombies spawn during round');
  await p.evaluate(() => { const g = __game; g.spawnPower('nuke', g.P.x, g.P.z); g.tick(0.05); }); ok(await p.evaluate(() => __game.zombies.alive === 0), 'Kaboom power-up clears zombies');
  await sim(p, 400); ok(await p.evaluate(() => __game.G.round >= 2), 'next round starts after the wave is cleared (round ' + (await p.evaluate(() => __game.G.round)) + ')');
  const st = await p.evaluate(() => ({ z0: __game.zombies.stats(1), z5: __game.zombies.stats(5), z10: __game.zombies.stats(10) })); ok(st.z5.hp > st.z0.hp && st.z10.hp > st.z5.hp && st.z5.sp > st.z0.sp, `waves scale: hp ${Math.round(st.z0.hp)}→${Math.round(st.z5.hp)}→${Math.round(st.z10.hp)}, speed ${st.z0.sp.toFixed(1)}→${st.z5.sp.toFixed(1)}`);
  // ---- mid-round screenshot with zombies close
  await p.evaluate(() => { const g = __game; g.zombies.reset(); g.world.door.open = true; g.P.x = 0; g.P.z = 12; g.P.yaw = 0; g.P.pitch = 0; g.P.hp = 100; g.P.pts = 1250; g.G.round = 4; g.G.phase = 'round'; g.G.toSpawn = 99; g.G.spawnT = 999; for (let k = 0; k < 6; k++) { const z = g.zombies.spawn(g.world.windows[1], 4); z.state = 'chase'; z.speed = 0.15; z.pos.set(-4.5 + k * 1.9, 0, 4 + (k % 3) * 1.6); } g.tick(0.016); const z = g.zombies.list.find((z) => z.state === 'chase'); g.aimAt(z, false); g.P.fireCd = 0; g.input.fire = false; g.shoot(); g.tick(0.016); });
  await p.waitForFunction(() => parseFloat(getComputedStyle(document.getElementById('fx-flash')).opacity) < 0.03, null, { timeout: 20000 }).catch(() => {}); await p.waitForTimeout(600); await p.screenshot({ path: `${OUT}/${name}-2-midround.png` });
  // ---- game over
  await p.evaluate(() => { const g = __game; g.zombies.reset(); g.G.round = 3; g.P.hp = 100; for (let k = 0; k < 3; k++) { const z = g.zombies.spawn(g.world.windows[1], 3); z.state = 'chase'; z.speed = 0; z.cool = 0; z.pos.set(g.P.x + (k - 1) * 0.5, 0, g.P.z - 0.9); z.dmg = 60; } });
  await sim(p, 120); ok(await p.evaluate(() => __game.G.state === 'over'), 'zombies can kill the player → game over');
  ok(await p.evaluate(() => !document.getElementById('over').classList.contains('hidden') && document.getElementById('oRound').textContent === '3'), 'game-over screen shows round reached (3)');
  await p.waitForTimeout(900); await p.screenshot({ path: `${OUT}/${name}-3-gameover.png` });
  ok(await p.evaluate(() => JSON.parse(localStorage.getItem('vwz_scores') || '[]').length >= 1), 'high score saved to localStorage');
  // ---- audio smoke + mute
  const au = await p.evaluate(() => { const s = __game.sfx; const out = []; try { s.init(); for (const f of ['empty', 'shell', 'pump', 'deny', 'cash', 'hurt', 'heart', 'door', 'boom', 'spawnPower', 'open', 'over']) s[f](); s.shot('pistol'); s.shot('shotgun'); s.reload('rifle'); s.groan(0.3, 0.5, 1, 1); s.zhit(0, true); s.zdie(0, 0.5); s.tick(true); s.plank(true); s.repair(); s.power('nuke'); s.round(3); s.jingle(2); s.setMuted(true); s.setMuted(false); } catch (e) { out.push(String(e)); } return { err: out, state: s.ctx && s.ctx.state }; });
  ok(au.err.length === 0, 'all synthesized sounds run without error (audio ctx: ' + au.state + ')');
  await p.click('#btnAgain', { force: true }).catch(() => {}); await p.evaluate(() => { if (__game.G.state !== 'playing') __game.startGame(); }); ok(await p.evaluate(() => __game.G.state === 'playing' && __game.P.hp === 100 && __game.P.pts === 500), 'Play again resets the run');
  // ---- quality switching
  for (const t of [0, 1, 2]) { await p.evaluate((t) => __game.applyTier(t), t); await sim(p, 4); }
  const tiers = await p.evaluate(() => __game.tier); ok(tiers === 2, 'quality tiers low/medium/high all switch cleanly');
  const real = errs.filter((e) => !/GPU stall|ReadPixels|Automatic fallback to software WebGL/.test(e)); ok(real.length === 0, 'no console errors/warnings' + (real.length ? ': ' + real.slice(0, 4).join(' | ') : ''));
  await ctx.close();
}
(async () => {
  const b = await chromium.launch({ args });
  await run(b, 'desktop', false, 'high'); await run(b, 'mobile', true, 'low');
  // auto-downgrade: unthrottled real-time frames on a slow software GPU must step the tier down
  console.log('\n== auto-downgrade ==');
  const ctx = await b.newContext({ viewport: { width: 960, height: 540 } }); const p = await ctx.newPage(); await p.goto(BASE + '?quality=auto'); await p.waitForTimeout(2500);
  const t0 = await p.evaluate(() => __game.tier); await p.click('#btnPlay'); await p.waitForFunction(() => __game.tier < 2, null, { timeout: 120000 }).catch(() => {});
  const t1 = await p.evaluate(() => __game.tier); ok(t0 === 2 && t1 < 2, `auto-downgrade lowered quality ${t0} → ${t1} under low fps`); await ctx.close();
  await b.close(); console.log(fails ? `\n${fails} FAILED` : '\nALL TESTS PASSED'); process.exit(fails ? 1 : 0);
})();
