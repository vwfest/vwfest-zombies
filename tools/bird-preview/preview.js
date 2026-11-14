// Standalone Carrion Buzzard preview. Does not hook into the live game.
import * as THREE from 'three';
import { createMaterials, createBirdGroup, createSwarm, countTris } from './bird.js';

const params = new URLSearchParams(location.search);
const mode = params.get('mode') || 'close'; // close | swarm | both
const COUNT = Math.max(1, Math.min(40, parseInt(params.get('n') || '24', 10)));

const canvas = document.getElementById('c');
const hud = document.getElementById('hud');
const statsEl = document.getElementById('stats');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight, false);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.22;
renderer.setClearColor(0x0b1220, 1);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x151c2c, 0.016);

const cam = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.08, 200);
const clock = new THREE.Clock();
let time = 0;
let paused = false;
let auto = params.get('auto') !== '0';
const clean = params.get('clean') === '1';

const mats = createMaterials();

// ---- dusty night lot (game-like, simple, original) ----
function buildLot() {
  const lot = new THREE.Group();
  lot.name = 'lot';

  const sand = new THREE.MeshStandardMaterial({ color: 0x6a5a48, roughness: 0.98, metalness: 0 });
  const sandDark = new THREE.MeshStandardMaterial({ color: 0x5a4c3c, roughness: 0.98 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x2a3344, roughness: 0.7, metalness: 0.15 });
  const metal2 = new THREE.MeshStandardMaterial({ color: 0x243040, roughness: 0.75 });
  const amber = new THREE.MeshBasicMaterial({ color: 0xffe6a8 });
  const cyan = new THREE.MeshBasicMaterial({ color: 0xb8fff0 });

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(80, 80, 8, 8), sand);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  lot.add(ground);
  // Patchy dirt.
  for (let i = 0; i < 10; i++) {
    const p = new THREE.Mesh(new THREE.CircleGeometry(1.8 + (i % 3) * 0.7, 8), sandDark);
    p.rotation.x = -Math.PI / 2;
    p.position.set((i * 3.7) % 17 - 8, 0.01, (i * 5.1) % 19 - 9);
    lot.add(p);
  }

  // Perimeter fence / walls.
  const wall = (x, z, w, h, d, rotY = 0) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), i % 2 ? metal : metal2);
    m.position.set(x, h * 0.5, z);
    m.rotation.y = rotY;
    lot.add(m);
  };
  let i = 0;
  for (let x = -16; x <= 16; x += 4) { i++; wall(x, -14, 4.05, 3.2, 0.18); }
  for (let z = -14; z <= 10; z += 4) { i++; wall(-16, z, 0.18, 3.2, 4.05); wall(16, z, 0.18, 3.2, 4.05); }

  // Lamp posts: amber + cyan, like the VW FEST lot. Shared scene lights, not per-bird.
  const lamps = [
    { x: -6.5, z: -6, mat: amber, col: 0xffd089, int: 9.0 },
    { x: 6.5, z: -6, mat: amber, col: 0xffd089, int: 8.0 },
    { x: 0, z: -10, mat: cyan, col: 0x9ef0e0, int: 7.0 },
  ];
  for (const L of lamps) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 4.6, 6), metal);
    pole.position.set(L.x, 2.3, L.z);
    lot.add(pole);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 8), L.mat);
    bulb.position.set(L.x, 4.55, L.z);
    lot.add(bulb);
    const light = new THREE.PointLight(L.col, L.int, 22, 1.2);
    light.position.set(L.x, 4.4, L.z);
    lot.add(light);
  }

  // Simple junked-car silhouettes (boxes only — not the game's HD cars).
  const car = (x, z, yaw, col) => {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.55, 3.4), new THREE.MeshStandardMaterial({ color: col, roughness: 0.7 }));
    body.position.y = 0.55;
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.5, 1.4), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.5 }));
    cabin.position.set(0, 1.05, -0.3);
    g.add(body, cabin);
    g.position.set(x, 0, z);
    g.rotation.y = yaw;
    lot.add(g);
  };
  car(-11.5, -3.5, 0.3, 0xc45a1a);
  car(11.2, -2.0, -0.5, 0x2a6a7a);
  car(10.5, 1.5, 1.2, 0x8a3a18);

  // Distant hills.
  const hillMat = new THREE.MeshStandardMaterial({ color: 0x1a2230, roughness: 1, flatShading: true });
  for (const [x, z, s] of [[-18, -28, 12], [8, -30, 16], [22, -26, 10]]) {
    const h = new THREE.Mesh(new THREE.ConeGeometry(s, s * 0.55, 6), hillMat);
    h.position.set(x, s * 0.15, z);
    lot.add(h);
  }

  // Stars.
  const starN = 500;
  const spos = new Float32Array(starN * 3);
  for (let s = 0; s < starN; s++) {
    const a = Math.random() * Math.PI * 2;
    const y = 0.15 + Math.random() * 0.7;
    const r = 60;
    spos[s * 3] = Math.cos(a) * r * (0.4 + Math.random() * 0.6);
    spos[s * 3 + 1] = 8 + y * 40;
    spos[s * 3 + 2] = Math.sin(a) * r * (0.4 + Math.random() * 0.6) - 10;
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(spos, 3));
  lot.add(new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xe8f0ff, size: 0.12, sizeAttenuation: true })));

  return lot;
}

scene.add(buildLot());

// Hemisphere + weak moonlight. Lamps are the local lights.
scene.add(new THREE.HemisphereLight(0x8a9bb8, 0x4a3c28, 1.05));
scene.add(new THREE.AmbientLight(0x3a4558, 0.35));
const moon = new THREE.DirectionalLight(0xc0d0e8, 0.7);
moon.position.set(-8, 16, 6);
scene.add(moon);
// Key + rim so the buzzard reads on a phone (matches the lot lamps, not per-bird lights).
const key = new THREE.SpotLight(0xffe2b0, 10, 16, 0.85, 0.45, 1.2);
key.position.set(2.8, 3.6, 3.4);
key.target.position.set(0, 1.4, 0);
scene.add(key); scene.add(key.target);
const fill = new THREE.DirectionalLight(0x9ab0d0, 0.7);
fill.position.set(-4, 3, 5);
scene.add(fill);
const rim = new THREE.DirectionalLight(0x7affe8, 0.45);
rim.position.set(-3, 2.8, -4);
scene.add(rim);

// Dust motes.
{
  const n = 180, p = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    p[i * 3] = (Math.random() - 0.5) * 24;
    p[i * 3 + 1] = Math.random() * 8;
    p[i * 3 + 2] = (Math.random() - 0.5) * 24;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(p, 3));
  scene.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xc8b89a, size: 0.05, transparent: true, opacity: 0.45 })));
}

// First-person arms + pistol (swarm view only), olive sleeves like the game.
function buildArms() {
  const g = new THREE.Group();
  const sleeve = new THREE.MeshStandardMaterial({ color: 0x3a4a28, roughness: 0.85 });
  const gun = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.4, metalness: 0.3 });
  const armR = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.09, 0.32), sleeve);
  armR.position.set(0.22, -0.28, -0.50);
  armR.rotation.set(-0.15, -0.05, -0.08);
  const pistol = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.10, 0.22), gun);
  pistol.position.set(0.22, -0.22, -0.70);
  const slide = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.045, 0.16), gun);
  slide.position.set(0.22, -0.16, -0.74);
  g.add(armR, pistol, slide);
  g.visible = false;
  cam.add(g);
  scene.add(cam);
  return g;
}
const arms = buildArms();

let hero = null;
let swarm = null;
let heroStats = { tris: 0, meshes: 0 };

if (mode === 'close' || mode === 'both') {
  hero = createBirdGroup(mats, () => 0.5);
  hero.position.set(0, 1.55, 0);
  scene.add(hero);
  heroStats = countTris(hero);
}

if (mode === 'swarm' || mode === 'both') {
  swarm = createSwarm(COUNT, mats);
  scene.add(swarm.group);
  if (hero) hero.visible = mode === 'both' ? false : true;
}

function placeCloseCam(t = 0) {
  const r = 1.85;
  const a = 0.55 + Math.sin(t * 0.25) * 0.12;
  cam.position.set(Math.sin(a) * r + 0.15, 1.48, Math.cos(a) * r + 0.35);
  cam.lookAt(0.0, 1.48, 0.12);
  arms.visible = false;
  if (hero) hero.visible = true;
  if (swarm) swarm.group.visible = false;
  hud.classList.add('hidden');
}

function placeSwarmCam() {
  cam.position.set(0, 1.45, 9.0);
  cam.rotation.set(0, 0, 0);
  cam.lookAt(0, 3.1, 1.5);
  arms.visible = true;
  if (hero) hero.visible = false;
  if (swarm) swarm.group.visible = true;
  hud.classList.remove('hidden');
}

if (mode === 'close') placeCloseCam(0);
else placeSwarmCam();

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false);
  cam.aspect = w / Math.max(1, h);
  cam.updateProjectionMatrix();
}
addEventListener('resize', resize);

let frames = 0, fpsT = 0, fps = 0;
function tick(dt) {
  if (dt > 0.08) dt = 0.08;
  time += dt;
  if (hero && hero.visible) {
    const tuck = 0;
    hero.userData.animate(time, { flapAmp: 0.62, freq: 6.8, jaw: 0.42 + Math.sin(time * 1.6) * 0.08, tuck, phase: 0 });
    hero.position.y = 1.55 + Math.sin(time * 1.8) * 0.04;
    hero.rotation.y = Math.sin(time * 0.3) * 0.08;
    if (mode === 'close') placeCloseCam(time);
  }
  if (swarm && swarm.group.visible) {
    swarm.step(dt, time, new THREE.Vector3(0, 1.35, 8.4));
  }
}

function render() { renderer.render(scene, cam); }

function frame() {
  const dt = paused ? 0 : clock.getDelta();
  tick(dt);
  render();
  frames++;
  fpsT += dt || clock.getDelta();
  if (fpsT >= 0.4) { fps = frames / fpsT; frames = 0; fpsT = 0; }
  const bits = [];
  bits.push(mode === 'close' ? 'CLOSE-UP  Carrion Buzzard' : 'SWARM  ' + COUNT + ' instanced buzzards');
  if (hero) bits.push(heroStats.tris + ' tris / ' + heroStats.meshes + ' meshes (hero)');
  if (swarm) bits.push(swarm.trisEach + ' tris × ' + swarm.count + '  ·  ' + swarm.drawCalls + ' draw calls');
  if (fps) bits.push(fps.toFixed(0) + ' fps');
  statsEl.textContent = bits.join('   ·   ');
  if (clean) { statsEl.style.display = 'none'; const t = document.getElementById('title'); if (t) t.style.display = 'none'; }
if (auto) requestAnimationFrame(frame);
}
frame();

// Capture hooks (deterministic).
window.__preview = {
  mode, cam, scene, renderer, hero, swarm, mats,
  seek(t) { time = t; clock.elapsedTime = t; tick(0); render(); },
  tick, render, renderOnce() { render(); },
  setMode(m) {
    if (m === 'close') { placeCloseCam(time); }
    else placeSwarmCam();
  },
  stats() {
    return {
      mode, heroTris: heroStats.tris, heroMeshes: heroStats.meshes,
      swarmCount: swarm ? swarm.count : 0,
      swarmTrisEach: swarm ? swarm.trisEach : 0,
      drawCalls: swarm ? swarm.drawCalls : heroStats.meshes,
    };
  },
  pause() { paused = true; },
  play() { paused = false; },
};
