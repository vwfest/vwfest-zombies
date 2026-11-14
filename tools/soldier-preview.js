import * as THREE from 'three';
import { createSoldier, poseSoldier, dressWeapon } from '../src/hd/soldier.js';

const W = 1280, H = 720;
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setSize(W, H); renderer.setPixelRatio(1);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.15;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.style.margin = '0'; document.body.style.background = '#0b0d10';
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene(); scene.background = new THREE.Color(0x1a1d24); scene.fog = new THREE.Fog(0x1a1d24, 10, 28);
const cam = new THREE.PerspectiveCamera(35, W / H, 0.05, 50);

const ground = new THREE.Mesh(new THREE.CircleGeometry(10, 48), new THREE.MeshStandardMaterial({ color: 0x4a4338, roughness: 0.95 }));
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);

const qs = new URLSearchParams(location.search);
const lightMode = qs.get('light') || 'game';
if (lightMode === 'albedo') {
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8070, 1.35));
  const d = new THREE.DirectionalLight(0xffffff, 0.45); d.position.set(-2, 6, -3); d.castShadow = true; d.shadow.mapSize.set(1024, 1024); scene.add(d);
} else {
  scene.add(new THREE.HemisphereLight(0x6a7280, 0x3a3228, 0.95));
  const key = new THREE.DirectionalLight(0xffb46b, 2.0); key.position.set(-3.2, 5.8, -3.4); key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024); key.shadow.camera.left = key.shadow.camera.bottom = -3; key.shadow.camera.right = key.shadow.camera.top = 3; key.shadow.camera.near = 1; key.shadow.camera.far = 16; scene.add(key, key.target);
  const rim = new THREE.DirectionalLight(0x5fe0d0, 0.28); rim.position.set(3.2, 2.4, 3.0); scene.add(rim);
  const fill = new THREE.DirectionalLight(0x8890a8, 0.35); fill.position.set(1.5, 3, -4); scene.add(fill);
}

const soldier = createSoldier('Alpha', 0);
dressWeapon(soldier, qs.get('w') || 'rifle');
scene.add(soldier);
const stats = soldier.userData.stats;
const label = document.createElement('div'); label.style.cssText = 'position:fixed;left:10px;top:10px;color:#ddd;font:12px/1.4 ui-monospace,monospace;background:#0008;padding:6px 8px';
label.id = 'stats'; document.body.appendChild(label);

// Character faces -Z. Front camera is on -Z looking toward origin.
const VIEWS = {
  front: { pos: [0, 1.15, -3.55], look: [0, 0.95, 0], pose: { speed: 0, pitch: 0 } },
  threequarter: { pos: [2.3, 1.25, -2.7], look: [0, 0.95, 0], pose: { speed: 0, pitch: 0 } },
  side: { pos: [3.5, 1.2, 0.05], look: [0, 0.95, 0], pose: { speed: 0, pitch: 0 } },
  back: { pos: [0, 1.2, 3.55], look: [0, 0.95, 0], pose: { speed: 0, pitch: 0 } },
  close: { pos: [0.45, 1.62, -1.15], look: [0, 1.52, 0], pose: { speed: 0, pitch: 0 } },
  mid: { pos: [0, 1.4, -8.0], look: [0, 1.0, 0], pose: { speed: 0, pitch: 0 } },
  walk: { pos: [2.5, 1.3, -3.2], look: [0, 0.95, 0], pose: { speed: 2.8, fwd: 2.8, pitch: 0 }, move: true },
  run: { pos: [2.8, 1.35, -3.4], look: [0, 0.95, 0], pose: { speed: 5.6, fwd: 5.6, pitch: 0 }, move: true },
  strafe: { pos: [0.2, 1.3, -3.6], look: [0, 0.95, 0], pose: { speed: 2.2, fwd: 0.2, strafe: 2.1, pitch: 0 }, move: true },
  aim: { pos: [2.1, 1.35, -2.5], look: [0, 1.05, 0], pose: { speed: 0, pitch: 0.35 } },
  recoil: { pos: [2.1, 1.35, -2.5], look: [0, 1.05, 0], pose: { speed: 0, pitch: 0.2, recoil: 1 } },
  reload: { pos: [2.1, 1.35, -2.5], look: [0, 1.05, 0], pose: { speed: 0, pitch: 0.1, reload: 1 } }
};

let view = qs.get('view') || 'threequarter';
let animT = 0, recPulse = 0;
function applyView(name) {
  view = name; const v = VIEWS[name] || VIEWS.threequarter;
  cam.position.set(...v.pos); cam.lookAt(...v.look);
  soldier.position.set(0, 0, 0);
  if (name === 'reload') soldier.userData.reloadT = 0;
  if (name === 'recoil') recPulse = 0;
}
applyView(view);

function frame() {
  const dt = 0.016; animT += dt;
  const v = VIEWS[view] || VIEWS.threequarter;
  let recoil = 0, reload = 0;
  if (view === 'recoil') { recPulse += dt; if (recPulse > 0.45) { recoil = 1; recPulse = 0; } }
  if (view === 'reload' && soldier.userData.reloadT <= 0) reload = 1;
  if (v.move) {
    // Move the soldier forward (-Z) or along strafe so planted feet can be judged.
    const spd = v.pose.speed, str = v.pose.strafe || 0, fwd = v.pose.fwd || spd;
    soldier.position.z -= fwd * dt;
    soldier.position.x += str * dt;
    cam.position.z -= fwd * dt; cam.position.x += str * dt;
    cam.lookAt(soldier.position.x, v.look[1], soldier.position.z);
  }
  const dist = cam.position.distanceTo(soldier.position);
  poseSoldier(soldier, { dt, t: animT, speed: v.pose.speed, fwd: v.pose.fwd || 0, strafe: v.pose.strafe || 0, pitch: v.pose.pitch, down: !!v.pose.down, dist, recoil, reload, flinch: 0 });
  renderer.render(scene, cam);
  label.textContent = `view=${view} light=${lightMode} meshes=${stats.meshes} tris=${stats.tris}`;
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
window.__prev = { renderer, soldier, applyView, VIEWS, stats, setView: (n) => applyView(n) };
