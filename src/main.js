import * as THREE from 'three';
import { lb } from './lb.js';
import { makeTextures, rnd, pick, clamp, lerp, TAU } from './util.js';
import { World, areaOf, DOOR_Z } from './world.js';
import { Zombies } from './zombie.js';
import { FX, Motes, Post } from './fx.js';
import { Sound } from './audio.js';
import { WEAPONS, CRATE_POOL, buildViewmodel } from './weapons.js';

/* ---- balance (tuned: a normal zombie needs ~10 hits, a Brute ~5) ---- */
const PLAYER_MAX_HP = 200;        // was 100
import { ZOMBIE_DMG, BRUTE_DMG } from './balance.js'; // 200/22 = 10 hits, 200/44 = 5 hits (was 50 / 75)
const REGEN_DELAY = 4.5, REGEN_PER_SEC = 0.38 * PLAYER_MAX_HP; // same feel as before, scaled to the new max
const LOW_HP_FRAC = 0.4;          // heartbeat / red HUD bar threshold
const MEDKIT_HP_FRAC = 0.5;       // a Med Kit drops on a kill while health <= 50%
const MEDKIT_COOLDOWN = 20;       // seconds between Med Kit drops (anti-farm)
const MEDKIT_HEAL_FRAC = 0.5;     // pickup restores +50% of max health
const MEDKIT_LIFETIME = 40;
const $ = (id) => document.getElementById(id);
const qs = new URLSearchParams(location.search);
const isTouch = qs.has('touch') || (matchMedia('(pointer:coarse)').matches && 'ontouchstart' in window) || /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
document.body.classList.toggle('touch', isTouch);
const sfx = new Sound();
try { sfx.muted = localStorage.getItem('vwz_mute') === '1'; } catch (e) {}

/* ---------------- renderer / scene ---------------- */
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !isTouch, powerPreference: 'high-performance', preserveDrawingBuffer: qs.has('test') });
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05; renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.type = THREE.PCFShadowMap;
const scene = new THREE.Scene();
const FOG = 0x3a2c3c; scene.fog = new THREE.FogExp2(FOG, 0.026);
const FOV = isTouch ? 76 : 72;
const cam = new THREE.PerspectiveCamera(FOV, 1, 0.05, 700); cam.rotation.order = 'YXZ'; scene.add(cam);

let pref = qs.get('quality') || (() => { try { return localStorage.getItem('vwz_q') || 'auto'; } catch (e) { return 'auto'; } })();
let tier = pref === 'high' ? 2 : pref === 'medium' ? 1 : pref === 'low' ? 0 : isTouch ? 0 : 2;
const textures = makeTextures(isTouch ? 256 : 512);
const world = new World(scene, textures, tier);
const fx = new FX(scene, textures, tier);
const motes = new Motes(textures, 260, { R: 20, y0: 0.3, y1: 6, size: 0.07, alpha: 0.22 }); scene.add(motes.points);
const mist = new Motes(textures, 46, { R: 55, y0: 0.4, y1: 2.2, size: 5.5, alpha: 0.045, col: [0.55, 0.5, 0.62], additive: false, speed: 0.7 }); scene.add(mist.points);
const zombies = new Zombies(scene, world, tier);
const viewScene = new THREE.Scene(); const post = new Post(renderer, scene, cam, viewScene);

// environment map from the procedural night sky (PBR reflections)
{ const pm = new THREE.PMREMGenerator(renderer); const es = new THREE.Scene(); const m = new THREE.Mesh(world.sky.geometry, world.sky.material.clone()); m.scale.setScalar(0.12); es.add(m); const rt = pm.fromScene(es, 0, 0.1, 100); scene.environment = rt.texture; scene.environmentIntensity = 0.45; viewScene.environment = rt.texture; viewScene.environmentIntensity = 0.9; pm.dispose(); }

/* flashlight + muzzle light + viewmodel rig */
const spot = new THREE.SpotLight(0xdfeaff, 40, 55, 0.46, 0.75, 1.25); spot.position.set(0.16, -0.1, -0.1); spot.target.position.set(0.16, -0.1, -10); cam.add(spot, spot.target);
spot.shadow.mapSize.set(1024, 1024); spot.shadow.camera.near = 0.3; spot.shadow.camera.far = 40; spot.shadow.bias = -0.0006; spot.shadow.normalBias = 0.03;
const muzzleLight = new THREE.PointLight(0xffb866, 0, 20, 2); cam.add(muzzleLight); muzzleLight.position.set(0.15, -0.05, -3.2);
const beam = new THREE.Mesh(new THREE.ConeGeometry(3.4, 14, 28, 1, true), new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: { c: { value: new THREE.Color(0.75, 0.85, 1) }, k: { value: 0.05 } }, vertexShader: 'varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy=uv.y; vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }', fragmentShader: 'uniform vec3 c; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float f=abs(dot(normalize(vN),vV)); gl_FragColor=vec4(c, pow(vy,1.2)*pow(f,2.)*k); }' }));
beam.geometry.translate(0, -7, 0); beam.geometry.rotateX(-Math.PI / 2); beam.position.set(0.16, -0.1, -0.2); beam.userData.noAO = true; beam.renderOrder = 6; cam.add(beam);
const gunRoot = new THREE.Group(); gunRoot.matrixAutoUpdate = false; viewScene.add(gunRoot);
const vHemi = new THREE.HemisphereLight(0xb9c8ff, 0x4a3a2c, 1.5), vSun = new THREE.DirectionalLight(0xfff0dd, 2.2), gunFlash = new THREE.PointLight(0xffb866, 0, 3, 2); vSun.position.set(1.5, 2, 1); gunRoot.add(vHemi, vSun, vSun.target, gunFlash); gunFlash.position.set(0.15, -0.05, -0.9); const gunCache = {};
const flashSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: textures.glow, color: new THREE.Color(6, 4, 1.6), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false })); flashSprite.scale.setScalar(0.3); flashSprite.visible = false; flashSprite.userData.noAO = true;
function gunModel(id) { if (!gunCache[id]) { const g = buildViewmodel(id); g.visible = false; gunRoot.add(g); gunCache[id] = g; } return gunCache[id]; }

/* ---------------- state ---------------- */
const P = { x: 0, z: 12, yaw: 0, pitch: 0, vx: 0, vz: 0, hp: PLAYER_MAX_HP, maxHp: PLAYER_MAX_HP, lastHit: -99, pts: 500, kills: 0, heads: 0, bob: 0, rP: 0, rY: 0, shake: 0, dmg: 0, flashlight: true, slots: [], cur: 0, fireCd: 0, reloadT: 0, reloadTot: 0, switchT: 0, kick: 0, mv: 0, sprint: false, heat: 0, dead: false, deadT: 0, sx: 0, sy: 0 };
const G = { state: 'menu', time: 0, runTime: 0, round: 0, toSpawn: 0, spawnT: 0, interT: 0, phase: 'wait', drops: 0, lastDrop: -99, kills: 0, double: 0, powers: [], ups: [], repairT: 0, healBeat: 0, lastMed: -99, orbit: 0, menuSpawn: 0, flashT: 0, muzzleT: 0 };
const input = { f: 0, s: 0, l: 0, r: 0, fire: false, reload: false, interact: false, interactEdge: false, sprint: false };
const slotOf = (id) => ({ id, mag: WEAPONS[id].mag, reserve: WEAPONS[id].reserve });
const cur = () => P.slots[P.cur];
const nowS = () => G.time;

/* ---------------- quality ---------------- */
function applyTier(t) {
  tier = t; const dpr = window.devicePixelRatio || 1;
  const pr = t === 2 ? Math.min(dpr, 1.75) : t === 1 ? Math.min(dpr, 1.25) : clamp(dpr * 0.7, 0.6, 1.0);
  renderer.setPixelRatio(pr); post.pr = pr;
  renderer.shadowMap.enabled = t > 0; renderer.shadowMap.needsUpdate = true;
  post.build(['direct', 'bloom', 'full'][t]); resize();
  world.setTier(t); zombies.setTier(t); fx.tier = t; motes.points.visible = t > 0; mist.points.visible = t > 0; beam.visible = t > 0 && P.flashlight;
  spot.castShadow = t === 2; for (const z of zombies.list) z.root.traverse((o) => { if (o.isMesh) o.castShadow = t > 0; });
  scene.traverse((o) => { if (o.material && !Array.isArray(o.material)) o.material.needsUpdate = true; });
  document.body.classList.toggle('lowq', t === 0);
  renderer.toneMappingExposure = t === 0 ? 1.15 : 1.05;
  $('fx-damage').style.display = t === 0 ? '' : 'none';
}
function resize() {
  const w = window.innerWidth, h = window.innerHeight; renderer.setSize(w, h, false); canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
  cam.aspect = w / h; cam.fov = w / h < 0.9 ? FOV + 14 : FOV; cam.updateProjectionMatrix(); post.setSize(w, h, renderer.getPixelRatio()); fx.setScale(h * renderer.getPixelRatio(), cam.fov); mist.ps.uniforms.uScale.value = fx.soft.uniforms.uScale.value; motes.ps.uniforms.uScale.value = fx.soft.uniforms.uScale.value;
}
window.addEventListener('resize', resize);
let fpsAcc = 0, fpsN = 0, adaptGrace = 3;
function adapt(raw) {
  if (G.state !== 'playing' || pref !== 'auto' || qs.has('noadapt')) return; if (adaptGrace > 0) { adaptGrace -= raw; return; }
  fpsAcc += raw; fpsN++; if (fpsAcc >= 2.5) { const fps = fpsN / fpsAcc; fpsAcc = 0; fpsN = 0; if (fps < 28 && tier > 0) { applyTier(tier - 1); adaptGrace = 3; toast('Graphics lowered for smoother play'); } }
}

/* ---------------- HUD helpers ---------------- */
const hud = { hp: -1, pts: -1, mag: -1, res: -1, name: '', prompt: '', round: -1, alt: '' };
let toastT = 0;
function toast(t) { const e = $('toast'); e.textContent = t; e.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => e.classList.remove('on'), 2600); }
function banner(t, sub = '') { const e = $('banner'); e.innerHTML = t + (sub ? `<small>${sub}</small>` : ''); e.classList.remove('on'); void e.offsetWidth; e.classList.add('on'); }
function popText(txt, head, big) { const e = document.createElement('span'); e.textContent = txt; if (head === 'heal') e.className = 'g'; else if (head) e.className = 'h'; e.style.setProperty('--x', rnd(-80, 80) + 'px'); e.style.top = rnd(10, 50) + 'px'; $('pop').appendChild(e); setTimeout(() => e.remove(), 950); }
function updateHUD() {
  const hp = Math.max(0, Math.round(P.hp)); if (hp !== hud.hp) { hud.hp = hp; $('hpFill').style.width = (100 * hp / P.maxHp) + '%'; $('hpFill').classList.toggle('low', hp < P.maxHp * LOW_HP_FRAC); $('hpNum').textContent = hp; }
  const mc = medKitReady(); if (mc !== hud.med) { hud.med = mc; $('medCue').classList.toggle('on', mc); }
  if (P.pts !== hud.pts) { if (hud.pts >= 0 && P.pts > hud.pts) { const e = $('pts'); e.classList.remove('bump'); void e.offsetWidth; e.classList.add('bump'); } hud.pts = P.pts; $('pts').textContent = P.pts.toLocaleString(); }
  const s = cur(), W = WEAPONS[s.id]; if (W.name !== hud.name) { hud.name = W.name; $('wName').textContent = W.name; }
  if (s.mag !== hud.mag) { hud.mag = s.mag; $('ammoMag').textContent = s.mag; $('ammoMag').classList.toggle('empty', s.mag === 0); }
  if (s.reserve !== hud.res) { hud.res = s.reserve; $('ammoRes').textContent = '/ ' + s.reserve; }
  const o = P.slots[1 - P.cur]; const alt = o ? WEAPONS[o.id].name + '  ' + o.mag + '/' + o.reserve : ''; if (alt !== hud.alt) { hud.alt = alt; $('wAlt').textContent = alt; }
  if (G.round !== hud.round) { hud.round = G.round; const e = $('roundNum'); e.textContent = G.round || 1; e.classList.remove('pulse'); void e.offsetWidth; e.classList.add('pulse'); }
  const rb = $('reloadBar'); if (P.reloadT > 0) { rb.classList.add('on'); rb.firstElementChild.style.width = (100 * (1 - P.reloadT / P.reloadTot)) + '%'; } else rb.classList.remove('on');
  // damage overlays
  const dm = clamp(P.dmg, 0, 1); $('fx-damage').style.opacity = tier === 0 ? Math.min(1, dm + (P.hp < P.maxHp * LOW_HP_FRAC ? 0.25 : 0)) : 0;
  // power-up chips
  const pw = $('powers'); let html = ''; if (G.double > 0) html += `<div class="pw glass${G.double < 5 ? ' blink' : ''}" style="color:#ffd36b;border-color:#ffd36b88">2× CASH <b>${Math.ceil(G.double)}</b></div>`; if (pw._h !== html) { pw._h = html; pw.innerHTML = html; }
}
function setPrompt(html, ok = true) { const e = $('prompt'); if (html !== hud.prompt) { hud.prompt = html; e.innerHTML = html; e.classList.toggle('on', !!html); } }

/* ---------------- weapons ---------------- */
function showGun() { for (const k in gunCache) gunCache[k].visible = false; const g = gunModel(cur().id); g.visible = G.state === 'playing' || P.dead; g.add(flashSprite); flashSprite.position.copy(g.userData.muzzle.position).add(new THREE.Vector3(0, 0, -0.04)); P.gun = g; }
function switchTo(i) { if (i === P.cur || !P.slots[i] || P.switchT > 0) return; P.cur = i; P.reloadT = 0; P.switchT = 0.32; showGun(); sfx.click(0, 2500, 0.3); }
function giveWeapon(id) { // buy / crate: replace current if both slots used
  const have = P.slots.findIndex((s) => s && s.id === id); if (have >= 0) { const s = P.slots[have]; s.mag = WEAPONS[id].mag; s.reserve = WEAPONS[id].reserve; return; }
  if (!P.slots[1]) { P.slots[1] = slotOf(id); P.cur = 1; } else P.slots[P.cur] = slotOf(id);
  P.reloadT = 0; P.switchT = 0.4; showGun();
}
function startReload() { const s = cur(), W = WEAPONS[s.id]; if (P.reloadT > 0 || P.switchT > 0 || s.mag >= W.mag || s.reserve <= 0) return; P.reloadTot = P.reloadT = W.perShell ? W.reload * (W.mag - s.mag) + 0.4 : W.reload; P.shellT = W.reload; sfx.reload(W.perShell ? 'pistol' : s.id); }
function finishReload() { const s = cur(), W = WEAPONS[s.id]; const n = Math.min(W.mag - s.mag, s.reserve); s.mag += n; s.reserve -= n; P.reloadT = 0; if (W.perShell) sfx.pump(); }
const _o = new THREE.Vector3(), _d = new THREE.Vector3(), _r = new THREE.Vector3(), _u = new THREE.Vector3(), _m = new THREE.Vector3(), _e = new THREE.Vector3(), _n = new THREE.Vector3();
function aimDir(out) { const y = P.yaw + P.rY, p = P.pitch + P.rP; return out.set(-Math.sin(y) * Math.cos(p), Math.sin(p), -Math.cos(y) * Math.cos(p)); }
function eyeY() { return 1.7 - (P.dead ? Math.min(1.1, P.deadT * 1.6) : 0) + Math.sin(P.bob * 2) * 0.035 * P.mv; }
function shoot() {
  const s = cur(), W = WEAPONS[s.id]; if (s.mag <= 0) { sfx.empty(); P.fireCd = 0.25; startReload(); return; }
  s.mag--; P.fireCd = 60 / W.rpm; P.kick = Math.min(1.6, P.kick + 1); P.heat = Math.min(1, P.heat + 0.12); sfx.shot(W.snd);
  aimDir(_d); _o.set(P.x, eyeY(), P.z); _r.set(Math.cos(P.yaw), 0, -Math.sin(P.yaw)); _u.crossVectors(_r, _d).normalize(); _r.crossVectors(_d, _u).normalize(); // _r: right, _u: up
  const spread = W.spread * (1 + P.mv * 0.9 + P.heat * 0.8); const base = _d.clone();
  cam.updateMatrixWorld(true); P.gun.userData.muzzle.getWorldPosition(_m); P.gun.userData.eject.getWorldPosition(_e);
  const hits = new Map(); let wallFx = 0;
  for (let i = 0; i < W.pellets; i++) {
    const a = rnd(TAU), rr = Math.sqrt(Math.random()) * spread; const dir = _d.clone().copy(base).addScaledVector(_r, Math.cos(a) * rr).addScaledVector(_u, Math.sin(a) * rr).normalize();
    const zh = zombies.rayHit(_o, dir, W.range), wh = world.ray(_o, dir, W.range); let tEnd = W.range, endN = null, zhit = null;
    if (zh && (!wh || zh.t < wh.t)) { tEnd = zh.t; zhit = zh; } else if (wh) { tEnd = wh.t; endN = wh.n; }
    const end = new THREE.Vector3().copy(dir).multiplyScalar(tEnd).add(_o);
    if (i < (W.pellets > 1 ? 3 : 1) || fx.tier > 0) fx.tracer(_m, end, W.pellets > 1 ? 0.006 : 0.011);
    if (zhit) { const e = hits.get(zhit.z) || { dmg: 0, head: false, p: end, n: dir.clone().negate() }; const fall = W.pellets > 1 ? clamp(1.25 - zhit.t / 16, 0.25, 1) : 1; e.dmg += W.dmg * (zhit.head ? W.head : 1) * fall; e.head = e.head || zhit.head; e.p = end; hits.set(zhit.z, e); }
    else if (endN && wallFx < 4) { wallFx++; _n.set(endN.x, endN.y, endN.z); fx.sparks(end, _n, 7); fx.dust(end, _n, 2); }
  }
  // muzzle effects
  muzzleLight.intensity = 55; gunFlash.intensity = 6; G.muzzleT = 0.06; flashSprite.visible = true; flashSprite.material.rotation = rnd(TAU); flashSprite.scale.setScalar(rnd(0.25, 0.42) * (W.id === 'shotgun' ? 1.4 : 1)); fx.flash(_m, base); fx.smoke(_m, base, 1);
  if (fx.maxCas) { const v = new THREE.Vector3().copy(_r).multiplyScalar(rnd(1.2, 2.4)).addScaledVector(_u, rnd(1.2, 2.2)).addScaledVector(base, rnd(-0.3, 0.5)); if (s.id !== 'shotgun' || Math.random() < 0.0) fx.casing(_e, v); }
  P.rP += W.kick * rnd(0.85, 1.15); P.rY += rnd(-1, 1) * W.kick * 0.45; P.shake = Math.min(1, P.shake + W.shake * 0.5);
  if (W.perShell === true && s.mag > 0) setTimeout(() => sfx.pump(), 260);
  // apply damage
  for (const [z, e] of hits) {
    const r = zombies.damage(z, e.dmg, e.head, e.p, e.n); if (!r) continue; const dbl = G.double > 0 ? 2 : 1;
    sfx.zhit(pan(z.pos), e.head); fx.blood(e.p, e.n, e.head ? 14 : 8); fx.sparks(e.p, e.n, 2);
    let gain = 10 * dbl; const hm = $('hitm'); hm.classList.remove('on', 'kill'); void hm.offsetWidth; hm.classList.add('on'); sfx.tick(false);
    if (r.killed) { gain = (e.head ? 100 : z.value) * dbl; P.kills++; G.kills++; if (e.head) P.heads++; hm.classList.add('kill'); sfx.tick(true); sfx.zdie(pan(z.pos), 0.5); fx.blood(e.p, e.n, 26, 1.4); fx.dust(new THREE.Vector3(z.pos.x, 0.3, z.pos.z), { x: 0, y: 1, z: 0 }, 5); P.shake = Math.min(1, P.shake + 0.1); maybeDrop(z); medKitOnKill(z); }
    setTimeout(() => hm.classList.remove('on'), 140);
    P.pts += gain; popText('+' + gain, e.head && r.killed);
  }
  if (s.mag === 0 && !P.reloadT) setTimeout(() => G.state === 'playing' && startReload(), 220);
}
const pan = (p) => { const dx = p.x - P.x, dz = p.z - P.z, d = Math.hypot(dx, dz) || 1; return (dx * Math.cos(P.yaw) - dz * Math.sin(P.yaw)) / d; };
function maybeDrop(z) { if (G.round < 2 || G.drops >= 2 || G.time - G.lastDrop < 18) return; if (Math.random() < 0.05) spawnPower(pick(['ammo', 'double', 'nuke']), z.pos.x, z.pos.z); }

/* ---------------- power-ups ---------------- */
const PW = { ammo: { name: 'FULL MAGS', col: [0.3, 0.7, 2.4], sub: 'All ammo refilled', hex: '#6bb8ff' }, double: { name: '2× CASH', col: [3, 2.2, 0.4], sub: 'Double points for 30s', hex: '#ffd36b' }, nuke: { name: 'KABOOM', col: [3, 0.4, 0.4], sub: 'Every zombie goes down', hex: '#ff6b6b' }, health: { name: 'MED KIT', col: [0.25, 2.6, 0.9], sub: '+50% health', hex: '#4dffb0' } };
function spawnPower(type, x, z) {
  const c = PW[type].col; const g = new THREE.Group(); g.position.set(x, 1.0, z); const med = type === 'health';
  let core; if (med) { const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(...c), toneMapped: false }); core = new THREE.Group(); core.add(new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.14, 0.14), mat), new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.46, 0.14), mat), new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.46), mat)); core.traverse((o) => (o.userData.noAO = true)); }
  else core = new THREE.Mesh(new THREE.OctahedronGeometry(0.28, 0), new THREE.MeshBasicMaterial({ color: new THREE.Color(...c), toneMapped: false })); core.userData.noAO = true;
  const cv = document.createElement('canvas'); cv.width = 256; cv.height = 64; const cg = cv.getContext('2d'); cg.font = '900 40px system-ui, sans-serif'; cg.textAlign = 'center'; cg.fillStyle = PW[type].hex; cg.shadowColor = PW[type].hex; cg.shadowBlur = 14; cg.fillText(PW[type].name, 128, 44);
  const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false, fog: false })); label.scale.set(1.5, 0.375, 1); label.position.y = 0.6; label.userData.noAO = true;
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: textures.glow, color: new THREE.Color(c[0] * 0.55, c[1] * 0.55, c[2] * 0.55), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true })); halo.scale.setScalar(1.25); halo.userData.noAO = true;
  const bm = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 12, 8, 1, true), new THREE.MeshBasicMaterial({ color: new THREE.Color(c[0] * 0.3, c[1] * 0.3, c[2] * 0.3), transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false })); bm.position.y = 5; bm.userData.noAO = true;
  g.add(core, label, halo, bm); scene.add(g); G.ups.push({ type, g, core, label, t: med ? MEDKIT_LIFETIME : 28, x, z }); if (med) G.lastMed = G.time; else { G.drops++; G.lastDrop = G.time; } sfx.spawnPower();
}
function medKitReady() { return G.state === 'playing' && !P.dead && P.hp <= P.maxHp * MEDKIT_HP_FRAC && G.time - G.lastMed >= MEDKIT_COOLDOWN && !G.ups.some((u) => u.type === 'health'); }
// while health <= 50%, the next kill drops a Med Kit where the zombie died (20s cooldown, one on the field at a time)
function medKitOnKill(z) { if (medKitReady()) spawnPower('health', z.pos.x, z.pos.z); }
function pickPower(u) {
  if (u.type === 'health') { const add = P.maxHp * MEDKIT_HEAL_FRAC, before = P.hp; P.hp = Math.min(P.maxHp, P.hp + add); P.lastHit = Math.max(P.lastHit, G.time - 1); sfx.medkit(); banner(PW.health.name, '+' + Math.round(P.hp - before) + ' health'); popText('+' + Math.round(P.hp - before) + ' HP', 'heal'); scene.remove(u.g); fx.glowBurst(new THREE.Vector3(u.x, 1, u.z), ...PW.health.col.map((v) => v * 0.7), 24, 4); return; }
  sfx.power(u.type); const dbl = 0; banner(PW[u.type].name, PW[u.type].sub);
  if (u.type === 'ammo') { for (const s of P.slots) if (s) { s.mag = WEAPONS[s.id].mag; s.reserve = WEAPONS[s.id].reserve; } }
  else if (u.type === 'double') G.double = 30;
  else if (u.type === 'nuke') { const ks = zombies.killAll(); for (const z of ks) { fx.blood(new THREE.Vector3(z.pos.x, 1.2, z.pos.z), { x: 0, y: 1, z: 0 }, 22, 1.4); fx.glowBurst(new THREE.Vector3(z.pos.x, 1.2, z.pos.z), 3, 1.5, 0.4, 10, 5); } P.pts += 400 * (G.double > 0 ? 2 : 1); sfx.boom(); P.shake = 1; $('fx-flash').style.transition = 'none'; $('fx-flash').style.opacity = 0.85; requestAnimationFrame(() => { $('fx-flash').style.transition = 'opacity 1.2s'; $('fx-flash').style.opacity = 0; }); G.kills += ks.length; P.kills += ks.length; }
  scene.remove(u.g); fx.glowBurst(new THREE.Vector3(u.x, 1, u.z), ...PW[u.type].col.map((v) => v * 0.7), 24, 4);
}

/* ---------------- crate ---------------- */
const previews = {}; function preview(id) { if (!previews[id]) { const g = buildViewmodel(id, false); g.scale.setScalar(1.6); g.rotation.y = 0; g.visible = false; world.crate.hold.add(g); previews[id] = g; } return previews[id]; }
function crateUse() {
  const c = world.crate;
  if (c.state === 'idle') {
    if (P.pts < c.price) { sfx.deny(); toast('Not enough points'); return; } P.pts -= c.price; sfx.cash(); sfx.open(); sfx.jingle(4); c.state = 'roll'; c.t = 0; c.pick = pick(CRATE_POOL.filter((id) => !P.slots.some((s) => s && s.id === id)).concat(['smg'].filter(() => false)));
    c.pick = c.pick || pick(CRATE_POOL);
  } else if (c.state === 'ready') { giveWeapon(c.weapon); sfx.cash(); sfx.click(0, 2000, 0.5); banner(WEAPONS[c.weapon].name.toUpperCase()); closeCrate(); }
}
function closeCrate() { const c = world.crate; c.state = 'idle'; c.t = 0; for (const k in previews) previews[k].visible = false; c.model = null; }
function updateCrate(dt) {
  const c = world.crate; const target = c.state === 'idle' ? 0 : -1.25; c.lid.rotation.x += (target - c.lid.rotation.x) * Math.min(1, dt * 6);
  if (c.state === 'roll') { c.t += dt; const idx = Math.floor(c.t / 0.14) % CRATE_POOL.length; const id = c.t > 3.6 ? c.pick : CRATE_POOL[idx]; for (const k in previews) previews[k].visible = false; const m = preview(id); m.visible = true; c.model = m; if (c.t > 3.6) { c.state = 'ready'; c.weapon = c.pick; c.t = 0; sfx.power('ammo'); } }
  else if (c.state === 'ready') { c.t += dt; if (c.t > 9) { sfx.open(); closeCrate(); toast('The toolbox slammed shut'); } }
}

/* ---------------- rounds ---------------- */
function roundCount(r) { return Math.round(6 + r * 2.3 + r * r * 0.12); }
function startRound(n) {
  G.round = n; G.toSpawn = roundCount(n); G.brutes = n >= 5 ? (n % 5 === 0 ? Math.min(4, 1 + ((n / 5) | 0)) : n >= 7 ? 1 : 0) : 0; G.phase = 'round'; G.spawnT = 1.5; G.drops = 0;
  sfx.round(n); banner('ROUND ' + n, n === 1 ? 'Board up. Hold the yard.' : 'They are faster this time'); const e = $('roundNum'); e.classList.remove('pulse'); void e.offsetWidth; e.classList.add('pulse');
}
function activeWindows() { return world.windows.filter((w) => w.area === 'A' || world.door.open); }
function trySpawn(dt) {
  if (G.phase !== 'round' || G.toSpawn <= 0) return; G.spawnT -= dt; if (G.spawnT > 0) return;
  if (zombies.alive >= zombies.max) { G.spawnT = 0.3; return; }
  const act = activeWindows(); act.sort((a, b) => (a.c.x - P.x) ** 2 + (a.c.z - P.z) ** 2 - ((b.c.x - P.x) ** 2 + (b.c.z - P.z) ** 2)); const w = Math.random() < 0.6 ? act[Math.min(act.length - 1, (Math.random() * 2) | 0)] : pick(act);
  const brute = G.brutes > 0 && G.toSpawn <= G.brutes; if (zombies.spawn(w, G.round, brute)) { G.toSpawn--; } G.spawnT = Math.max(0.35, 2.0 - G.round * 0.13) * rnd(0.7, 1.2);
}

/* ---------------- interaction ---------------- */
function findFocus() {
  let best = null; const test = (o, d, lim) => { if (d < lim && (!best || d < best.d)) best = { ...o, d }; };
  for (const w of world.windows) { if (w.count < 6) test({ type: 'win', w }, Math.hypot(P.x - w.in.x, P.z - w.in.z), 2.1); }
  for (const b of world.buys) test({ type: 'buy', b }, Math.hypot(P.x - b.pos.x, P.z - b.pos.z), 1.9);
  if (!world.door.open) test({ type: 'door' }, Math.hypot(P.x - world.door.pos.x, P.z - (DOOR_Z + 1)), 3.4);
  const c = world.crate; if (c.state === 'idle' || c.state === 'ready') test({ type: 'crate' }, Math.hypot(P.x - c.x, P.z - c.z), 2.2);
  return best;
}
function interact(f, held, dt) {
  if (f.type === 'win') { if (held) { G.repairT += dt; if (G.repairT > 0.5) { G.repairT = 0; if (world.addPlank(f.w)) { sfx.repair(); P.pts += 10 * (G.double > 0 ? 2 : 1); popText('+10'); } } } return; }
  if (!input.interactEdge) return;
  if (f.type === 'buy') { const owned = P.slots.find((s) => s && s.id === f.b.id); const price = owned ? Math.floor(f.b.price / 2) : f.b.price; if (owned && owned.mag === WEAPONS[owned.id].mag && owned.reserve === WEAPONS[owned.id].reserve) { toast('Ammo already full'); return; } if (P.pts < price) { sfx.deny(); toast('Not enough points'); return; } P.pts -= price; sfx.cash(); giveWeapon(f.b.id); }
  else if (f.type === 'door') { if (P.pts < world.door.price) { sfx.deny(); toast('Not enough points'); return; } P.pts -= world.door.price; sfx.cash(); sfx.door(); world.door.open = true; banner('GATE OPEN', 'The back lot awaits'); }
  else if (f.type === 'crate') crateUse();
}
function updatePrompt(f) {
  if (!f) return setPrompt('');
  const key = isTouch ? '<kbd>E</kbd>' : '<kbd>E</kbd>'; const cost = (n) => `<span class="cost" style="${P.pts < n ? 'color:#ff5a6e' : ''}">${n}</span>`;
  if (f.type === 'win') setPrompt(`${key}${isTouch ? 'Hold' : 'Hold'} to repair barricade<span class="prog"><i style="width:${Math.round((f.w.count / 6) * 100)}%"></i></span>`);
  else if (f.type === 'buy') { const owned = P.slots.find((s) => s && s.id === f.b.id); setPrompt(owned ? `${key}Refill ${f.b.name}${cost(Math.floor(f.b.price / 2))}` : `${key}Buy ${f.b.name}${cost(f.b.price)}`); }
  else if (f.type === 'door') setPrompt(`${key}Open the gate${cost(world.door.price)}`);
  else if (f.type === 'crate') setPrompt(world.crate.state === 'ready' ? `${key}Take ${WEAPONS[world.crate.weapon].name}` : `${key}Lucky Toolbox${cost(world.crate.price)}`);
}

/* ---------------- player update ---------------- */
function movePlayer(dt) {
  const f = input.f, s = input.s; let wx = 0, wz = 0;
  if (f || s) { const sy = Math.sin(P.yaw), cy = Math.cos(P.yaw); wx = -sy * f + cy * s; wz = -cy * f - sy * s; const l = Math.hypot(wx, wz) || 1; wx /= l; wz /= l; }
  const mag = Math.min(1, Math.hypot(f, s)); P.sprint = (input.sprint || mag > 0.92 && isTouch) && f > 0.3 && P.reloadT <= 0; const sp = (P.sprint ? 6.6 : 4.5) * (P.switchT > 0 ? 0.9 : 1) * mag;
  const k = Math.min(1, dt * 10); P.vx += (wx * sp - P.vx) * k; P.vz += (wz * sp - P.vz) * k;
  P.x += P.vx * dt; P.z += P.vz * dt; world.resolve(P, 0.42);
  const v = Math.hypot(P.vx, P.vz); P.mv = clamp(v / 4.5, 0, 1.4); P.bob += v * dt * 1.7;
}
function updateWeapons(dt) {
  if (P.fireCd > 0) P.fireCd -= dt; if (P.switchT > 0) P.switchT -= dt; P.heat = Math.max(0, P.heat - dt * 1.4); P.kick = Math.max(0, P.kick - dt * 8);
  const s = cur(), W = WEAPONS[s.id];
  if (P.reloadT > 0) {
    const was = P.reloadT; P.reloadT -= dt;
    if (W.perShell) { P.shellT -= dt; if (P.shellT <= 0 && s.mag < W.mag && s.reserve > 0) { s.mag++; s.reserve--; P.shellT = W.reload; sfx.shell(); } if (input.fire && s.mag > 0) { P.reloadT = 0; } else if (s.mag >= W.mag || s.reserve <= 0) { P.reloadT = 0; sfx.pump(); } }
    else if (P.reloadT <= 0) finishReload();
  }
  if (input.fire && P.fireCd <= 0 && P.switchT <= 0 && (P.reloadT <= 0 || W.perShell) && !P.sprintBlock) { if (W.auto || !P.fired) { shoot(); } P.fired = true; } if (!input.fire) P.fired = false;
  if (input.reload) { input.reload = false; startReload(); }
}
function updateCamera(dt, t) {
  P.rP *= Math.exp(-dt * 9); P.rY *= Math.exp(-dt * 9); P.shake = Math.max(0, P.shake - dt * 2.2); P.dmg = Math.max(0, P.dmg - dt * 0.8);
  const sh = P.shake * P.shake; const nx = (Math.sin(t * 61) + Math.sin(t * 37.3)) * 0.5, ny = (Math.sin(t * 53.1) + Math.cos(t * 41)) * 0.5;
  const dead = P.dead ? Math.min(1, P.deadT * 1.4) : 0; const strafe = clamp(P.vx * Math.cos(P.yaw) - P.vz * Math.sin(P.yaw), -6, 6);
  cam.position.set(P.x + nx * sh * 0.06, eyeY() + ny * sh * 0.05, P.z);
  cam.rotation.set(clamp(P.pitch + P.rP + ny * sh * 0.035 - dead * 0.4, -1.5, 1.5), P.yaw + P.rY + nx * sh * 0.035, -strafe * 0.0045 + nx * sh * 0.02 + dead * 0.9);
  cam.updateMatrixWorld(true); gunRoot.matrix.copy(cam.matrixWorld);
  // viewmodel
  const g = P.gun; if (!g) return; const b = g.userData.base; const k = P.kick;
  let rx = k * 0.05, ry = 0, rz = 0, ox = 0, oy = 0, oz = k * 0.04;
  ox += Math.cos(P.bob) * 0.006 * P.mv; oy += Math.abs(Math.sin(P.bob)) * 0.008 * P.mv * -1; ox += -clamp(P.sx, -1, 1) * 0.02; oy += clamp(P.sy, -1, 1) * 0.02;
  if (P.sprint) { ry += 0.45; rx -= 0.25; oy -= 0.05; ox -= 0.03; }
  if (P.reloadT > 0 && !WEAPONS[cur().id].perShell) { const q = 1 - P.reloadT / P.reloadTot, e = Math.sin(q * Math.PI); rx -= e * 0.5; oy -= e * 0.12; rz += e * 0.35; ox -= e * 0.04; } else if (P.reloadT > 0) { const e = Math.abs(Math.sin(t * 6)) * 0.5 + 0.3; rx -= 0.25; oy -= 0.05; ry += 0.1 * e; }
  if (P.switchT > 0) { const q = P.switchT / 0.32; oy -= Math.sin(clamp(q, 0, 1) * Math.PI / 2) * 0.35; rx -= q * 0.5; }
  const gs = 1 - Math.exp(-dt * 18); g.userData.rx = lerp(g.userData.rx || 0, rx, gs); g.userData.ry = lerp(g.userData.ry || 0, ry, gs); g.userData.rz = lerp(g.userData.rz || 0, rz, gs);
  g.rotation.set(g.userData.rx, g.userData.ry, g.userData.rz); g.position.set(b.x + ox, b.y + oy, b.z + oz);
  P.sx *= Math.exp(-dt * 8); P.sy *= Math.exp(-dt * 8);
  // muzzle flash decay
  if (G.muzzleT > 0) { G.muzzleT -= dt; if (G.muzzleT <= 0) { flashSprite.visible = false; } } muzzleLight.intensity *= Math.exp(-dt * 40); if (muzzleLight.intensity < 0.5) muzzleLight.intensity = 0; gunFlash.intensity = muzzleLight.intensity > 0 ? muzzleLight.intensity / 9 : 0;
  // crosshair spread
  const cr = $('cross'); const sp = 6 + (WEAPONS[cur().id].spread * 650) * (1 + P.mv * 0.9 + P.heat * 0.8) * 0.5; if (cr._sp !== Math.round(sp)) { cr._sp = Math.round(sp); cr.style.setProperty('--s', cr._sp + 'px'); cr.children[0].style.left = -(cr._sp + 9) + 'px'; cr.children[0].style.top = '-1px'; cr.children[1].style.left = cr._sp + 'px'; cr.children[1].style.top = '-1px'; cr.children[2].style.top = -(cr._sp + 9) + 'px'; cr.children[2].style.left = '-1px'; cr.children[3].style.top = cr._sp + 'px'; cr.children[3].style.left = '-1px'; }
}
function hitPlayer(z) {
  if (P.dead || G.state !== 'playing') return; P.hp -= z.dmg; P.lastHit = G.time; P.dmg = Math.max(P.dmg, 0.65 + 0.35 * (1 - Math.max(0, P.hp) / P.maxHp)); P.shake = 1; sfx.hurt();
  const dx = z.pos.x - P.x, dz = z.pos.z - P.z; const ang = Math.atan2(dx, -dz) - (-P.yaw); const e = $('fx-dir'); e.style.display = 'block'; e.firstElementChild.style.transform = `rotate(${(ang * 180) / Math.PI}deg)`; e.style.opacity = 1; setTimeout(() => (e.style.opacity = 0), 500); setTimeout(() => (e.style.display = 'none'), 900);
  if (P.hp <= 0) die();
}
function die() { P.hp = 0; P.dead = true; P.deadT = 0; sfx.over(); input.fire = false; $('hud').classList.add('hud-dead'); setPrompt(''); if (document.pointerLockElement) document.exitPointerLock?.(); }

/* ---------------- scores ---------------- */
function loadScores() { try { return JSON.parse(localStorage.getItem('vwz_scores') || '[]'); } catch (e) { return []; } }
function saveScore(r) { const a = loadScores(); a.push(r); a.sort((x, y) => y.round - x.round || y.pts - x.pts); try { localStorage.setItem('vwz_scores', JSON.stringify(a.slice(0, 5))); } catch (e) {} return a.slice(0, 5); }
let lastRun = null;
function refreshGlobal() { lb.top().then((rows) => { lb.render($('globalList'), rows, localStorage.getItem('vwfest_nick')); lb.render($('oGlobal'), rows, localStorage.getItem('vwfest_nick')); }); }
function setupPost() {
  lastRun = { round: Math.max(1, G.round), pts: P.pts, kills: P.kills }; $('nick').value = localStorage.getItem('vwfest_nick') || ''; $('postMsg').textContent = ''; $('postMsg').className = 'postMsg';
  $('fPost').classList.toggle('hidden', !lb.hasToken()); $('bPost').disabled = false; if (!lb.hasToken()) { $('postMsg').textContent = 'Leaderboard offline: score saved on this device.'; } refreshGlobal();
}
$('fPost').onsubmit = (e) => {
  e.preventDefault(); if (!lastRun) return; const nick = $('nick').value.trim(); $('bPost').disabled = true; try { localStorage.setItem('vwfest_nick', nick); } catch (err) {}
  lb.submit(nick, lastRun.round, lastRun.pts, lastRun.kills).then((j) => {
    if (j.ok) { $('fPost').classList.add('hidden'); $('postMsg').className = 'postMsg ok'; $('postMsg').textContent = 'Posted! You are #' + j.rank + ' on the survivor board.'; lb.render($('oGlobal'), j.top, nick); lb.render($('globalList'), j.top, nick); }
    else { $('postMsg').textContent = j.error || 'Could not post.'; $('bPost').disabled = false; }
  });
};
function renderScores(el, list) { el.innerHTML = list.length ? list.map((s, i) => `<li>Round <b>${s.round}</b> · ${s.kills} kills · ${s.pts.toLocaleString()} pts</li>`).join('') : '<li class="muted">No runs yet — be the first.</li>'; }

/* ---------------- game flow ---------------- */
function newGame() {
  Object.assign(P, { x: 0, z: 12, yaw: 0, pitch: 0, vx: 0, vz: 0, hp: PLAYER_MAX_HP, lastHit: -99, pts: 500, kills: 0, heads: 0, rP: 0, rY: 0, shake: 0, dmg: 0, cur: 0, fireCd: 0, reloadT: 0, switchT: 0, kick: 0, dead: false, deadT: 0, slots: [slotOf('pistol'), null] });
  Object.assign(G, { time: 0, runTime: 0, round: 0, toSpawn: 0, phase: 'wait', interT: 2.6, drops: 0, double: 0, kills: 0, repairT: 0, lastMed: -99 });
  zombies.reset(); fx.reset(); for (const u of G.ups) scene.remove(u.g); G.ups = []; closeCrate(); world.crate.lid.rotation.x = 0;
  for (const w of world.windows) while (w.count < 6) world.addPlank(w);
  hud.hp = hud.pts = hud.mag = hud.res = -1; hud.name = hud.alt = ''; hud.round = -1; $('hud').classList.remove('hud-dead');
  if (world.door.open) { world.door.open = false; world.door.t = 0; world.door.mesh.position.y = 0; world.door.col.off = false; }
  showGun();
}
function startGame() {
  sfx.init(); newGame(); lb.start(); G.state = 'playing'; showGun(); ['menu', 'over', 'pause'].forEach((i) => $(i).classList.add('hidden')); $('hud').classList.remove('hidden'); $('touch').classList.toggle('hidden', !isTouch);
  beam.visible = tier > 0 && P.flashlight; adaptGrace = 3; fpsAcc = 0; fpsN = 0;
  if (!isTouch && !qs.has('test')) { try { const r = canvas.requestPointerLock?.(); r?.catch?.(() => {}); } catch (e) {} } else if (isTouch) { try { document.documentElement.requestFullscreen?.().catch(() => {}); screen.orientation?.lock?.('landscape').catch(() => {}); } catch (e) {} }
  toast(isTouch ? 'Hold E at windows to repair · Open the gate for new guns' : 'Hold E at windows to repair · Open the gate for new guns');
}
function pause() { if (G.state !== 'playing' || P.dead) return; G.state = 'paused'; $('pause').classList.remove('hidden'); input.fire = false; input.f = input.s = 0; if (document.pointerLockElement) document.exitPointerLock?.(); setPrompt(''); }
function resume() { if (G.state !== 'paused') return; G.state = 'playing'; $('pause').classList.add('hidden'); sfx.init(); if (!isTouch && !qs.has('test')) { try { canvas.requestPointerLock?.()?.catch?.(() => {}); } catch (e) {} } }
function toMenu() { G.state = 'menu'; ['pause', 'over'].forEach((i) => $(i).classList.add('hidden')); $('menu').classList.remove('hidden'); $('hud').classList.add('hidden'); $('touch').classList.add('hidden'); renderScores($('scoreList'), loadScores()); refreshGlobal(); zombies.reset(); if (P.gun) P.gun.visible = false; setPrompt(''); P.dead = false; flashSprite.visible = false; }
function gameOver() {
  G.state = 'over'; const list = saveScore({ round: Math.max(1, G.round), kills: P.kills, pts: P.pts, t: Date.now() });
  $('oRound').textContent = Math.max(1, G.round); $('oKills').textContent = P.kills; $('oHeads').textContent = P.heads; $('oPts').textContent = P.pts.toLocaleString(); const s = Math.floor(G.runTime); $('oTime').textContent = Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  $('oMsg').textContent = G.round >= 10 ? 'Legendary run. The yard remembers.' : G.round >= 5 ? 'Solid stand. They got you in the end.' : 'The dead took the yard. Try again.'; renderScores($('oScores'), list); setupPost();
  $('over').classList.remove('hidden'); $('hud').classList.add('hidden'); $('touch').classList.add('hidden'); if (P.gun) P.gun.visible = false;
}

/* ---------------- main update ---------------- */
const menuPlayer = { x: 0, z: 8 };
const cbs = { groan: (z, d) => sfx.groan(pan(z.pos), clamp(1 - d / 40, 0.1, 0.8) * 0.8, z.brute ? 0.6 : z.runner ? 1.25 : rnd(0.9, 1.1), z.brute ? 1.4 : rnd(0.8, 1.3)), plank: (w, br) => { sfx.plank(true); fx.dust(new THREE.Vector3(w.c.x + w.n.x * 0.3, 1.4, w.c.z + w.n.z * 0.3), w.n, 6, [0.5, 0.4, 0.3]); }, hitPlayer };
const cbsMenu = { groan: () => {}, plank: () => {}, hitPlayer: () => {} };
function tick(dt) {
  G.time += dt; const t = G.time;
  if (G.state === 'menu') {
    G.orbit += dt * 0.12; const a = G.orbit, R = 9.5; cam.position.set(Math.sin(a) * R, 2.6 + Math.sin(a * 0.7) * 0.4, 6 + Math.cos(a) * R * 0.8); cam.lookAt(0, 1.8, 3); cam.rotation.z = 0;
    G.menuSpawn -= dt; if (G.menuSpawn <= 0 && zombies.alive < 5) { G.menuSpawn = 2.2; const z = zombies.spawn(pick(world.windows.filter((w) => w.area === 'A')), 2); if (z) { z.state = 'chase'; z.pos.set(rnd(-14, 14), 0, rnd(-18, -4)); z.speed = rnd(0.9, 1.5); z.dmg = 0; } }
    menuPlayer.x = 0; menuPlayer.z = 6; zombies.update(dt, t, menuPlayer, world.door, cbsMenu); world.update(dt, t, { x: cam.position.x, z: cam.position.z }); fx.update(dt); motes.center = { x: 0, z: 6 }; mist.center = motes.center; motes.ps.update(dt); mist.ps.update(dt); gunRoot.visible = false; beam.visible = false; return;
  }
  gunRoot.visible = true; beam.visible = tier > 0 && P.flashlight && !P.dead;
  if (G.state === 'paused') return;
  if (G.state === 'over') { fx.update(dt); return; }
  G.runTime += dt;
  if (P.dead) {
    P.deadT += dt; zombies.update(dt, t, P, world.door, { ...cbs, hitPlayer: () => {} }); world.update(dt, t, P); fx.update(dt); updateCamera(dt, t); if (P.deadT > 2.4) gameOver(); return;
  }
  movePlayer(dt); updateWeapons(dt);
  // regen
  if (P.hp < P.maxHp && t - P.lastHit > REGEN_DELAY) P.hp = Math.min(P.maxHp, P.hp + REGEN_PER_SEC * dt);
  if (P.hp < P.maxHp * LOW_HP_FRAC && t - G.healBeat > 0.85) { G.healBeat = t; sfx.heart(); }
  // rounds
  if (G.phase === 'wait') { G.interT -= dt; if (G.interT <= 0) startRound(1); }
  else if (G.phase === 'round') { trySpawn(dt); if (G.toSpawn <= 0 && zombies.alive <= 0) { G.phase = 'inter'; G.interT = 7; } }
  else if (G.phase === 'inter') { G.interT -= dt; if (G.interT <= 0) startRound(G.round + 1); }
  zombies.update(dt, t, P, world.door, cbs); world.update(dt, t, P);
  motes.center = { x: P.x, z: P.z }; mist.center = motes.center; motes.ps.update(dt); mist.ps.update(dt); fx.update(dt); updateCrate(dt);
  // power-ups
  if (G.double > 0) G.double -= dt;
  for (let i = G.ups.length - 1; i >= 0; i--) { const u = G.ups[i]; u.t -= dt; u.core.rotation.y += dt * 2.5; if (u.type !== 'health') u.core.rotation.x += dt * 1.1; u.g.position.y = 1.0 + Math.sin(t * 3 + i) * 0.15; u.g.visible = u.t > 5 || Math.sin(t * 16) > -0.2; if (Math.hypot(u.x - P.x, u.z - P.z) < 1.5) { pickPower(u); G.ups.splice(i, 1); } else if (u.t <= 0) { scene.remove(u.g); G.ups.splice(i, 1); } }
  // interaction
  const f = findFocus(); updatePrompt(f); if (f) interact(f, input.interact, dt); else G.repairT = 0; input.interactEdge = false;
  updateCamera(dt, t); updateHUD();
}

/* ---------------- loop ---------------- */
let last = performance.now(), simAcc = 0;
function frame(now) {
  requestAnimationFrame(frame); const raw = Math.min(0.25, (now - last) / 1000); last = now; adapt(raw);
  tick(Math.min(raw, 0.05) * (G.state === 'menu' ? 0.6 : 1));
  const lowHp = G.state === 'playing' && P.hp < P.maxHp * LOW_HP_FRAC ? 1 - P.hp / (P.maxHp * LOW_HP_FRAC) : 0; post.render(raw, G.time, clamp(P.dmg, 0, 1), lowHp);
}
function renderOnce() { post.render(0.016, G.time, clamp(P.dmg, 0, 1), 0); }

/* ---------------- input ---------------- */
const keys = {};
function updateAxes() { input.f = (keys.KeyW || keys.ArrowUp ? 1 : 0) - (keys.KeyS || keys.ArrowDown ? 1 : 0); input.s = (keys.KeyD || keys.ArrowRight ? 1 : 0) - (keys.KeyA || keys.ArrowLeft ? 1 : 0); input.sprint = !!(keys.ShiftLeft || keys.ShiftRight); }
addEventListener('keydown', (e) => { if (e.target && e.target.tagName === 'INPUT') return;
  if (e.repeat) return; keys[e.code] = true; if (G.state === 'playing' && !P.dead) {
    if (e.code === 'KeyR') input.reload = true; if (e.code === 'KeyE') { input.interact = true; input.interactEdge = true; } if (e.code === 'Digit1') switchTo(0); if (e.code === 'Digit2') switchTo(1); if (e.code === 'KeyQ') switchTo(1 - P.cur); if (e.code === 'KeyF') { P.flashlight = !P.flashlight; spot.visible = P.flashlight; beam.visible = tier > 0 && P.flashlight; sfx.click(0, 1200, 0.4); } if (e.code === 'KeyP') pause();
  } else if (G.state === 'paused' && e.code === 'KeyP') resume();
  if (e.code === 'KeyM') toggleMute(); if (e.code === 'Enter' && (G.state === 'menu' || G.state === 'over')) startGame(); updateAxes();
});
addEventListener('keyup', (e) => { keys[e.code] = false; if (e.code === 'KeyE') input.interact = false; updateAxes(); });
addEventListener('blur', () => { for (const k in keys) keys[k] = false; updateAxes(); input.fire = false; input.interact = false; });
let lockFailed = false; document.addEventListener('pointerlockerror', () => { lockFailed = true; });
addEventListener('mousemove', (e) => { if (G.state !== 'playing' || P.dead || (document.pointerLockElement !== canvas && !lockFailed && !qs.has('test'))) return; look(e.movementX, e.movementY, 0.0022); });
function look(dx, dy, s) { P.yaw -= dx * s; P.pitch = clamp(P.pitch - dy * s, -1.45, 1.45); P.sx += dx * 0.01; P.sy += dy * 0.01; }
canvas.addEventListener('mousedown', (e) => { if (e.button === 0 && G.state === 'playing') { if (!isTouch && !document.pointerLockElement && !qs.has('test')) canvas.requestPointerLock?.(); input.fire = true; } });
addEventListener('mouseup', (e) => { if (e.button === 0) input.fire = false; });
addEventListener('wheel', (e) => { if (G.state === 'playing' && Math.abs(e.deltaY) > 4) switchTo(1 - P.cur); }, { passive: true });
addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('pointerlockchange', () => { if (!document.pointerLockElement && G.state === 'playing' && !P.dead && !isTouch && !qs.has('test')) pause(); });
document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
// touch
if (isTouch) {
  let stickId = null, lookId = null, lx = 0, ly = 0; const st = $('stick'), kn = $('knob'); let sc = { x: 0, y: 0 };
  const touchLayer = $('touch');
  touchLayer.addEventListener('touchstart', (e) => {
    for (const t of e.changedTouches) {
      if (e.target.closest('button')) continue; const r = st.getBoundingClientRect();
      if (stickId === null && t.clientX < innerWidth * 0.45) { stickId = t.identifier; sc = { x: r.left + r.width / 2, y: r.top + r.height / 2 }; moveStick(t); }
      else if (lookId === null) { lookId = t.identifier; lx = t.clientX; ly = t.clientY; }
    } e.preventDefault();
  }, { passive: false });
  const moveStick = (t) => { let dx = t.clientX - sc.x, dy = t.clientY - sc.y; const m = Math.hypot(dx, dy), R = 55; if (m > R) { dx = (dx / m) * R; dy = (dy / m) * R; } kn.style.transform = `translate(${dx}px,${dy}px)`; input.s = dx / R; input.f = -dy / R; if (Math.hypot(input.s, input.f) < 0.12) input.s = input.f = 0; };
  touchLayer.addEventListener('touchmove', (e) => { for (const t of e.changedTouches) { if (t.identifier === stickId) moveStick(t); else if (t.identifier === lookId) { if (G.state === 'playing' && !P.dead) look(t.clientX - lx, t.clientY - ly, 0.0048); lx = t.clientX; ly = t.clientY; } } e.preventDefault(); }, { passive: false });
  const end = (e) => { for (const t of e.changedTouches) { if (t.identifier === stickId) { stickId = null; kn.style.transform = ''; input.s = input.f = 0; } else if (t.identifier === lookId) lookId = null; } };
  touchLayer.addEventListener('touchend', end); touchLayer.addEventListener('touchcancel', end);
  const bind = (id, down, up) => { const b = $(id); b.addEventListener('touchstart', (e) => { b.classList.add('down'); down(); e.preventDefault(); e.stopPropagation(); }, { passive: false }); const u = (e) => { b.classList.remove('down'); up?.(); e.preventDefault(); }; b.addEventListener('touchend', u); b.addEventListener('touchcancel', u); };
  bind('bFire', () => (input.fire = true), () => (input.fire = false)); bind('bReload', () => (input.reload = true)); bind('bUse', () => { input.interact = true; input.interactEdge = true; }, () => (input.interact = false)); bind('bSwap', () => switchTo(1 - P.cur));
}
function toggleMute() { sfx.setMuted(!sfx.muted); try { localStorage.setItem('vwz_mute', sfx.muted ? '1' : '0'); } catch (e) {} syncMute(); }
function syncMute() { $('btnMute').textContent = sfx.muted ? '🔇' : '🔊'; $('btnMute2').textContent = sfx.muted ? '🔇 Sound off' : '🔊 Sound on'; }
$('btnMute').onclick = $('btnMute2').onclick = (e) => { e.stopPropagation(); toggleMute(); };
$('btnPause').onclick = (e) => { e.stopPropagation(); pause(); };
$('btnPlay').onclick = startGame; $('btnAgain').onclick = startGame; $('btnMenu').onclick = toMenu; $('btnResume').onclick = resume; $('btnQuit').onclick = toMenu;
$('btnPlay').addEventListener('touchend', (e) => { e.preventDefault(); startGame(); });
$('qSeg').addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; pref = b.dataset.q; try { localStorage.setItem('vwz_q', pref); } catch (er) {} [...$('qSeg').querySelectorAll('button')].forEach((x) => x.classList.toggle('on', x === b)); applyTier(pref === 'high' ? 2 : pref === 'medium' ? 1 : pref === 'low' ? 0 : isTouch ? 0 : 2); });
[...$('qSeg').querySelectorAll('button')].forEach((x) => x.classList.toggle('on', x.dataset.q === pref));

/* ---------------- boot ---------------- */
P.slots = [slotOf('pistol'), null]; showGun(); applyTier(tier); syncMute(); renderScores($('scoreList'), loadScores()); refreshGlobal();
zombies.max = tier > 0 ? 26 : 16;
for (let i = 0; i < 40; i++) tick(0.05);
requestAnimationFrame(() => { post.render(0.016, 0, 0, 0); $('loading').classList.add('done'); setTimeout(() => $('loading').remove(), 800); });
requestAnimationFrame(frame);
// test / debug hooks (harmless in production)
window.__game = { PLAYER_MAX_HP, MEDKIT_HP_FRAC, MEDKIT_COOLDOWN, MEDKIT_HEAL_FRAC, medKitReady, medKitOnKill, G, P, world, zombies, fx, input, tick, startGame, shoot, applyTier, switchTo, startReload, pause, resume, toMenu, giveWeapon, spawnPower, pickPower, interact, findFocus, die, get tier() { return tier; }, cam, renderer, scene, WEAPONS, sfx, renderOnce, aimAt(z, head = false) { const dx = z.pos.x - P.x, dz = z.pos.z - P.z, dy = (head ? 1.66 : 1.0) * z.scale - 1.7; P.yaw = Math.atan2(-dx, -dz); P.pitch = Math.atan2(dy, Math.hypot(dx, dz)); P.rP = P.rY = 0; }, isTouch };
