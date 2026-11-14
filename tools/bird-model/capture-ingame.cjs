// Phone-viewport in-game shots + a short clip of the Carrion Buzzard.
const { chromium } = require('/workspace/zz-lb5/node_modules/playwright');
const fs = require('fs');
const path = require('path');

const OUT = process.env.OUT || '/workspace/zz-birds-concept/game-shots';
const BASE = process.env.BASE || 'http://127.0.0.1:8099/';
const W = 844, H = 390;
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--ignore-gpu-blocklist'],
  });
  const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  page.on('console', (m) => { const t = m.text(); if (/birds|glb|error|warn|Error/i.test(t)) console.log('CONSOLE', m.type(), t); });
  page.on('pageerror', (e) => console.log('PAGEERROR', e.message));
  page.setDefaultTimeout(180000);
  await page.goto(BASE + '?noadapt=1', { waitUntil: 'domcontentloaded' });
  // Force high tier when possible so we see LOD0
  await page.waitForFunction(() => window.__game && window.__game.birds, { timeout: 150000 });
  // Wait for the GLB field swap (procedural first, then skinned)
  for (let i = 0; i < 40; i++) {
    const k = await page.evaluate(() => (window.__game.birds.field && window.__game.birds.field.kind) || 'unknown');
    if (k === 'skinned') break;
    await page.waitForTimeout(500);
  }
  const kind = await page.evaluate(() => (window.__game.birds.field && window.__game.birds.field.kind) || 'unknown');
  console.log('field kind', kind, 'tris', await page.evaluate(() => ({
    lo: window.__game.birds.field.trisLo, hi: window.__game.birds.field.trisHi, alive: window.__game.birds.alive,
  })));

  async function shot(name) {
    const p = path.join(OUT, name);
    await page.screenshot({ path: p, type: 'png' });
    console.log('shot', p);
    return p;
  }
  function hideHud(hide) {
    return page.evaluate((h) => {
      const ids = ['hud', 'menu', 'touch', 'joy', 'aim', 'fire', 'reload', 'pause'];
      document.querySelectorAll('#hud, #menu, .hud, .menu, canvas + *').forEach(() => {});
      const el = document.getElementById('ui') || document.body;
      if (h) el.classList.add('capture-hide');
      // hide obvious overlays
      for (const n of ['menu', 'hud', 'joysticks', 'touchUI', 'title']) {
        const e = document.getElementById(n);
        if (e) e.style.display = h ? 'none' : '';
      }
    }, hide);
  }

  await shot('phone-menu-birds.png');

  // Start a solo game at high-ish quality and jump to a flock-ish state
  await page.evaluate(() => {
    const G = window.__game;
    try { G.applyTier?.(2); } catch (e) {}
    try { G.startGame?.('normal'); } catch (e) { G.startGame?.(); }
  });
  await page.waitForTimeout(2000);

  // Spawn a visible flock in front of the player and pose a hero bird
  await page.evaluate(() => {
    const G = window.__game;
    const birds = G.birds;
    const P = G.P || G.player;
    // clear and spawn
    birds.reset?.();
    for (let i = 0; i < 14; i++) birds.spawn?.(6);
    const list = birds.list.filter((b) => b.state !== 'dead');
    // arrange a ring slightly in front
    list.forEach((b, i) => {
      const a = (i / list.length) * Math.PI * 2;
      b.x = Math.sin(a) * 6;
      b.z = -4 + Math.cos(a) * 5;
      b.y = 5.5 + (i % 5) * 0.45;
      b.yaw = a + Math.PI * 0.5;
      b.pitch = -0.08;
      b.bank = 0.2;
      b.state = 'soar';
      b.flap = 0.1; b.tuck = 0; b.flare = 0;
      b.pos.set(b.x, b.y, b.z);
      b.cool = 8;
    });
    // one hero in front, mid-close
    const h = list[0];
    if (h) {
      h.x = 0.4; h.y = 2.1; h.z = -3.2;
      h.yaw = 0; h.pitch = -0.15; h.flare = 0.15; h.tuck = 0;
      h.pos.set(h.x, h.y, h.z);
    }
    if (P) { P.x = 0; P.z = 0; P.y = 0; P.yaw = 0; P.pitch = 0.18; }
    G.cam && (G.cam.position.y = 1.6);
  });
  // step the sim a few frames so the field commits
  await page.evaluate(async () => {
    const G = window.__game;
    for (let i = 0; i < 8; i++) {
      G.tick?.(1 / 30);
      G.renderOnce?.();
    }
  });
  await hideHud(true);
  await shot('phone-hero.png');
  await shot('phone-flock-15m.png');

  // Player looking up (gameplay view)
  await page.evaluate(() => {
    const G = window.__game, P = G.P;
    if (P) { P.pitch = 0.55; P.yaw = 0; }
    const list = G.birds.list.filter((b) => b.state !== 'dead');
    list.forEach((b, i) => {
      const a = (i / Math.max(1, list.length)) * Math.PI * 2;
      b.x = Math.sin(a) * 3.5;
      b.z = -2.5 + Math.cos(a) * 2.5;
      b.y = 3.2 + (i % 4) * 0.4;
      b.yaw = Math.atan2(-b.x, -b.z);
      b.pitch = 0.3;
      b.pos.set(b.x, b.y, b.z);
    });
    const h = list[0];
    if (h) { h.x = 0.2; h.y = 2.4; h.z = -1.8; h.flare = 0.8; h.tuck = 0; h.yaw = 0; h.pitch = 0.2; h.pos.set(h.x, h.y, h.z); }
    for (let i = 0; i < 6; i++) { G.tick?.(1 / 30); G.renderOnce?.(); }
  });
  await shot('phone-player-up.png');

  // Tight close-up
  await page.evaluate(() => {
    const G = window.__game, P = G.P;
    const h = G.birds.list.find((b) => b.state !== 'dead');
    if (h) {
      h.x = 0.15; h.y = 1.85; h.z = -1.35;
      h.yaw = 0.15; h.pitch = -0.1; h.flare = 0.4;
      h.pos.set(h.x, h.y, h.z);
    }
    if (P) { P.pitch = 0.12; P.yaw = 0; }
    G.tick?.(1 / 30); G.renderOnce?.();
  });
  await shot('phone-close.png');

  // Flare / strike
  await page.evaluate(() => {
    const G = window.__game;
    const h = G.birds.list.find((b) => b.state !== 'dead');
    if (h) { h.state = 'dive'; h.flare = 1; h.tuck = 0.05; h.y = 2.0; h.z = -2.0; h.x = 0.2; h.pos.set(h.x, h.y, h.z); }
    G.tick?.(1 / 30); G.renderOnce?.();
  });
  await shot('phone-flare.png');

  // Death + feathers
  await page.evaluate(() => {
    const G = window.__game;
    const h = G.birds.list.find((b) => b.state !== 'dead');
    if (h) {
      G.birds.damage(h, 999, true);
      if (G.fx?.feathers) G.fx.feathers(h.x, h.y, h.z);
    }
    for (let i = 0; i < 40; i++) { G.tick?.(1 / 30); G.renderOnce?.(); }
  });
  await shot('phone-death.png');
  await hideHud(false);

  // Short clip: 4 seconds of a circling flock
  await page.evaluate(() => {
    const G = window.__game;
    G.birds.reset?.();
    for (let i = 0; i < 12; i++) G.birds.spawn?.(6);
    const P = G.P;
    if (P) { P.x = 0; P.z = 0; P.pitch = 0.35; P.yaw = 0; }
  });
  const framesDir = path.join(OUT, '_clip_frames');
  fs.mkdirSync(framesDir, { recursive: true });
  const nFrames = 48;
  for (let i = 0; i < nFrames; i++) {
    await page.evaluate(() => {
      const G = window.__game;
      G.tick?.(1 / 24);
      G.renderOnce?.();
    });
    await page.screenshot({ path: path.join(framesDir, `f${String(i).padStart(3, '0')}.png`), type: 'png' });
  }
  console.log('frames', nFrames);
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
