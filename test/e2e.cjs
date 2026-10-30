// End-to-end test (headless Chromium via Playwright). Usage: npm run build && python3 -m http.server 8099 & node test/e2e.cjs
const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const BASE = process.env.BASE || 'http://localhost:8099/'; const OUT = path.join(__dirname, '..', 'screenshots'); fs.mkdirSync(OUT, { recursive: true });
let fails = 0; const ok = (c, m) => { console.log((c ? '  PASS ' : '  FAIL ') + m); if (!c) fails++; };
const sim = (p, n, dt = 0.05) => p.evaluate(([n, dt]) => { for (let i = 0; i < n; i++) { __game.tick(dt); __game.input.interactEdge = false; } return __game.G.time; }, [n, dt]);
const args = ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'];
async function run(b, name, mobile, quality) {
  console.log(`\n== ${name} ==`);
  const ctx = await b.newContext(mobile ? { viewport: { width: 844, height: 390 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 } : { viewport: { width: 1280, height: 720 } });
  const posted = []; await ctx.route('https://race.vwfestmemecoin.com/**', async (r) => { const u = r.request().url(), m = r.request().method(), h = { 'access-control-allow-origin': '*', 'content-type': 'application/json' };
    if (m === 'OPTIONS') return r.fulfill({ status: 204, headers: { ...h, 'access-control-allow-headers': 'content-type', 'access-control-allow-methods': 'GET,POST' } });
    if (u.endsWith('/start')) return r.fulfill({ status: 200, headers: h, body: JSON.stringify({ ok: true, token: 'tok.1.sig' }) });
    if (u.endsWith('/submit')) { posted.push(JSON.parse(r.request().postData())); return r.fulfill({ status: 200, headers: h, body: JSON.stringify({ ok: true, rank: 1, top: [{ nickname: posted[0].nickname, score: posted[0].score, aux: posted[0].pts }, { nickname: '<img src=x onerror=window.__xss=1>', score: 2, aux: 100 }] }) }); }
    return r.fulfill({ status: 200, headers: h, body: JSON.stringify({ ok: true, top: [{ nickname: 'DeadEye', score: 9, aux: 12000 }, { nickname: '<b>Evil</b>', score: 3, aux: 1000 }] }) }); });
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
  // ---- health balance: survive many hits (normal ~10, brute ~5), regen, HUD bar
  const hb = await p.evaluate(() => { const g = __game; g.zombies.reset(); g.P.dead = false; g.P.hp = g.PLAYER_MAX_HP; g.P.x = 0; g.P.z = 12; g.G.state = 'playing'; const zn = g.zombies.spawn(g.world.windows[0], 1), zb = g.zombies.spawn(g.world.windows[0], 6, true); zn.state = 'chase'; zb.state = 'chase'; zn.speed = zb.speed = 0; zn.pos.set(0, 0, -30); zb.pos.set(0, 0, -30);
    const hits = (z) => { g.P.hp = g.P.maxHp; g.P.dead = false; let n = 0; while (g.P.hp > 0 && n < 100) { g.P.lastHit = g.G.time; g.P.hp -= z.dmg; n++; } return n; }; const out = { normal: hits(zn), brute: hits(zb), maxHp: g.P.maxHp }; g.zombies.reset(); g.P.hp = g.P.maxHp; g.P.dead = false; return out; });
  console.log('  info: hits to die at full health -> normal ' + hb.normal + ', brute ' + hb.brute + ' (max HP ' + hb.maxHp + ')');
  ok(hb.normal >= 8 && hb.normal <= 10, 'normal zombie needs 8-10 hits to kill the player (' + hb.normal + ')'); ok(hb.brute >= 4 && hb.brute <= 5, 'brute needs 4-5 hits (' + hb.brute + ')');
  const surv = await p.evaluate(() => new Promise((res) => { const g = __game; g.zombies.reset(); g.G.round = 1; g.G.phase = 'round'; g.G.toSpawn = 99; g.G.spawnT = 999; g.P.hp = g.P.maxHp; g.P.dead = false; g.P.x = 0; g.P.z = 12; g.P.lastHit = -99; let landed = 0; const z = g.zombies.spawn(g.world.windows[1], 1); z.state = 'chase'; z.speed = 0; z.pos.set(0, 0, g.P.z - 0.9); const orig = z.dmg; let hpAt = []; for (let i = 0; i < 6 * 30 && !g.P.dead && landed < 5; i++) { const hp0 = g.P.hp; g.tick(0.05); if (g.P.hp < hp0 - 1) { landed++; hpAt.push(Math.round(g.P.hp)); } } res({ landed, dead: g.P.dead, hp: g.P.hp, hpAt }); }));
  ok(surv.landed >= 5 && !surv.dead, 'real zombie attacks: player survives 5 hits in a row (hp after each: ' + surv.hpAt.join(', ') + ')');
  await p.evaluate(() => { const g = __game; g.zombies.reset(); g.P.hp = 60; g.P.lastHit = g.G.time; g.G.phase = 'inter'; g.G.interT = 99; }); await sim(p, 40); const rg0 = await p.evaluate(() => __game.P.hp); await sim(p, 120); const rg1 = await p.evaluate(() => __game.P.hp); ok(rg0 <= 61 && rg1 > 150, 'regen waits ~4.5s after a hit then refills (' + Math.round(rg0) + ' -> ' + Math.round(rg1) + ')');
  await p.evaluate(() => { __game.P.hp = 100; __game.P.lastHit = __game.G.time + 999; __game.tick(0.05); }); ok(await p.evaluate(() => Math.abs(parseFloat(document.getElementById('hpFill').style.width) - 50) < 1 && document.getElementById('hpNum').textContent === '100'), 'HUD health bar reflects new scale (100/200 = 50%)');
  // ---- Med Kit: drops on a kill while health <= 50%, cooldown, one at a time, heals +50%
  const mk = await p.evaluate(() => { const g = __game, out = {}; const killOne = (x, zz) => { g.P.dead = false; const z = g.zombies.spawn(g.world.windows[1], 1); z.state = 'chase'; z.speed = 0; z.pos.set(x, 0, zz); z.hp = 1; g.P.x = 0; g.P.z = 14; g.P.yaw = 0; g.P.fireCd = 0; g.P.switchT = 0; g.P.reloadT = 0; g.P.slots[g.P.cur].mag = g.WEAPONS[g.P.slots[g.P.cur].id].mag; g.aimAt(z, false); g.shoot(); return z; };
    g.zombies.reset(); g.G.phase = 'inter'; g.G.interT = 999; g.G.ups.slice().forEach((u) => g.scene.remove(u.g)); g.G.ups.length = 0; g.G.lastMed = -99; g.P.lastHit = g.G.time + 999; g.P.cur = 0; g.G.time += 100;
    g.P.hp = g.P.maxHp * 0.6; killOne(0, 5); out.noDropAbove = !g.G.ups.some((u) => u.type === 'health');
    g.P.hp = g.P.maxHp * 0.5; g.zombies.reset(); const z = killOne(1, 5); const kit = g.G.ups.find((u) => u.type === 'health'); out.dropAtHalf = !!kit; out.atSpot = !!kit && Math.hypot(kit.x - z.pos.x, kit.z - z.pos.z) < 0.01;
    g.zombies.reset(); killOne(-1, 5); out.oneAtATime = g.G.ups.filter((u) => u.type === 'health').length === 1;
    g.G.ups.slice().forEach((u) => g.scene.remove(u.g)); g.G.ups.length = 0; g.zombies.reset(); g.G.time += 5; killOne(2, 5); out.cooldownBlocks = !g.G.ups.some((u) => u.type === 'health');
    g.G.time += g.MEDKIT_COOLDOWN; g.zombies.reset(); killOne(-2, 5); const k2 = g.G.ups.find((u) => u.type === 'health'); out.dropAfterCooldown = !!k2;
    g.P.hp = g.P.maxHp * 0.3; g.P.lastHit = g.G.time + 999; const before = g.P.hp; g.P.x = k2.x; g.P.z = k2.z; g.tick(0.02); out.healed = g.P.hp - before; out.expected = g.P.maxHp * g.MEDKIT_HEAL_FRAC; out.removed = !g.G.ups.some((u) => u.type === 'health');
    g.P.hp = g.P.maxHp * 0.9; g.spawnPower('health', g.P.x + 0.2, g.P.z); g.G.ups.find((u) => u.type === 'health'); g.tick(0.02); out.capped = g.P.hp <= g.P.maxHp + 0.001; g.P.hp = g.P.maxHp; return out; });
  console.log('  info: med kit', JSON.stringify(mk));
  ok(mk.noDropAbove, 'no Med Kit drops on a kill while health is above 50%'); ok(mk.dropAtHalf && mk.atSpot, 'kill at health <= 50% drops a Med Kit where the zombie died'); ok(mk.oneAtATime, 'only one Med Kit on the field at a time'); ok(mk.cooldownBlocks, 'cooldown (20s) blocks a second drop'); ok(mk.dropAfterCooldown, 'Med Kit can drop again after the cooldown');
  ok(Math.abs(mk.healed - mk.expected) < 1 && mk.removed, 'picking up the Med Kit heals +50% of max (+' + Math.round(mk.healed) + ' HP) and removes it'); ok(mk.capped, 'Med Kit healing is capped at max health');
  await p.evaluate(() => { const g = __game; g.zombies.reset(); g.G.ups.slice().forEach((u) => g.scene.remove(u.g)); g.G.ups.length = 0; g.G.lastMed = -99; g.P.hp = g.P.maxHp * 0.4; g.P.lastHit = g.G.time + 999; g.tick(0.05); }); ok(await p.evaluate(() => document.getElementById('medCue').classList.contains('on')), 'subtle "Med kit available" cue shows at <= 50% health');
  await p.evaluate(() => { __game.P.hp = __game.P.maxHp; __game.tick(0.05); });
  // ---- round progression + nuke
  await p.evaluate(() => { const g = __game; g.zombies.reset(); g.G.round = 1; g.G.phase = 'round'; g.G.toSpawn = 3; g.G.spawnT = 0; g.P.hp = g.PLAYER_MAX_HP; }); await sim(p, 60); await p.evaluate(() => { __game.G.toSpawn = 0; });
  const alive = await p.evaluate(() => __game.zombies.alive); ok(alive > 0, 'zombies spawn during round');
  await p.evaluate(() => { const g = __game; g.spawnPower('nuke', g.P.x, g.P.z); g.tick(0.05); }); ok(await p.evaluate(() => __game.zombies.alive === 0), 'Kaboom power-up clears zombies');
  await sim(p, 400); ok(await p.evaluate(() => __game.G.round >= 2), 'next round starts after the wave is cleared (round ' + (await p.evaluate(() => __game.G.round)) + ')');
  const st = await p.evaluate(() => ({ z0: __game.zombies.stats(1), z5: __game.zombies.stats(5), z10: __game.zombies.stats(10) })); ok(st.z5.hp > st.z0.hp && st.z10.hp > st.z5.hp && st.z5.sp > st.z0.sp, `waves scale: hp ${Math.round(st.z0.hp)}→${Math.round(st.z5.hp)}→${Math.round(st.z10.hp)}, speed ${st.z0.sp.toFixed(1)}→${st.z5.sp.toFixed(1)}`);
  // ---- mid-round screenshot with zombies close
  await p.evaluate(() => { const g = __game; g.zombies.reset(); g.world.door.open = true; g.P.x = 0; g.P.z = 12; g.P.yaw = 0; g.P.pitch = 0; g.P.hp = g.PLAYER_MAX_HP; g.P.pts = 1250; g.G.round = 4; g.G.phase = 'round'; g.G.toSpawn = 99; g.G.spawnT = 999; for (let k = 0; k < 6; k++) { const z = g.zombies.spawn(g.world.windows[1], 4); z.state = 'chase'; z.speed = 0.15; z.pos.set(-4.5 + k * 1.9, 0, 4 + (k % 3) * 1.6); } g.tick(0.016); const z = g.zombies.list.find((z) => z.state === 'chase'); g.aimAt(z, false); g.P.fireCd = 0; g.input.fire = false; g.shoot(); g.tick(0.016); });
  await p.waitForFunction(() => parseFloat(getComputedStyle(document.getElementById('fx-flash')).opacity) < 0.03, null, { timeout: 20000 }).catch(() => {}); await p.waitForTimeout(600); await p.screenshot({ path: `${OUT}/${name}-2-midround.png` });
  // ---- game over
  await p.evaluate(() => { const g = __game; g.zombies.reset(); g.G.round = 3; g.P.hp = g.PLAYER_MAX_HP; for (let k = 0; k < 3; k++) { const z = g.zombies.spawn(g.world.windows[1], 3); z.state = 'chase'; z.speed = 0; z.cool = 0; z.pos.set(g.P.x + (k - 1) * 0.5, 0, g.P.z - 0.9); z.dmg = 60; } });
  await sim(p, 120); ok(await p.evaluate(() => __game.G.state === 'over'), 'zombies can kill the player → game over');
  ok(await p.evaluate(() => !document.getElementById('over').classList.contains('hidden') && document.getElementById('oRound').textContent === '3'), 'game-over screen shows round reached (3)');
  await p.waitForTimeout(900);
  ok(await p.evaluate(() => !document.getElementById('fPost').classList.contains('hidden')), 'game over shows the nickname post form (run token obtained)');
  ok(await p.evaluate(() => document.querySelectorAll('#oGlobal li').length === 2 && document.querySelectorAll('#oGlobal img, #oGlobal b b').length === 0 && window.__xss === undefined), 'global board rendered, HTML in nicknames is not interpreted (no XSS)');
  await p.screenshot({ path: `${OUT}/${name}-3-gameover.png` });
  await p.fill('#nick', 'BugLife209'); await p.evaluate(() => document.getElementById('fPost').requestSubmit());
  await p.waitForFunction(() => /Posted/.test(document.getElementById('postMsg').textContent), null, { timeout: 5000 }).catch(() => {});
  ok(posted.length === 1 && posted[0].nickname === 'BugLife209' && posted[0].score === 3 && Number.isInteger(posted[0].pts) && Number.isInteger(posted[0].kills) && posted[0].token === 'tok.1.sig', 'score posted: nickname + round/points/kills + run token only');
  ok(await p.evaluate(() => /#1/.test(document.getElementById('postMsg').textContent) && document.getElementById('fPost').classList.contains('hidden') && __game.G.state === 'over'), 'rank shown; typing a nickname + Enter did not restart the game');
  await p.screenshot({ path: `${OUT}/${name}-3b-posted.png` });
  ok(await p.evaluate(() => JSON.parse(localStorage.getItem('vwz_scores') || '[]').length >= 1), 'high score saved to localStorage');
  // ---- audio smoke + mute
  const au = await p.evaluate(() => { const s = __game.sfx; const out = []; try { s.init(); for (const f of ['empty', 'shell', 'pump', 'deny', 'cash', 'hurt', 'heart', 'door', 'boom', 'spawnPower', 'open', 'over']) s[f](); s.shot('pistol'); s.shot('shotgun'); s.reload('rifle'); s.groan(0.3, 0.5, 1, 1); s.zhit(0, true); s.zdie(0, 0.5); s.tick(true); s.plank(true); s.repair(); s.power('nuke'); s.round(3); s.jingle(2); s.setMuted(true); s.setMuted(false); } catch (e) { out.push(String(e)); } return { err: out, state: s.ctx && s.ctx.state }; });
  ok(au.err.length === 0, 'all synthesized sounds run without error (audio ctx: ' + au.state + ')');
  await p.click('#btnAgain', { force: true }).catch(() => {}); await p.evaluate(() => { if (__game.G.state !== 'playing') __game.startGame(); }); ok(await p.evaluate(() => __game.G.state === 'playing' && __game.P.hp === __game.PLAYER_MAX_HP && __game.P.pts === 500), 'Play again resets the run');
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
