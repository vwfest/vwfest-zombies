// Skinned, animated zombies from CC0 assets (Quaternius Universal Base Characters + Universal Animation Library 1/2).
// Gameplay, hitboxes and the procedural rig in zombie.js are untouched: this only swaps what is drawn.
// Clothes, tears, blood and hair are painted in the shader from bind-pose (object) space, so one rotting skin
// texture per body gives every zombie a different outfit with no extra downloads.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as skClone } from 'three/examples/jsm/utils/SkeletonUtils.js';

const BASE = 'assets/hd/z/';
const gl = new GLTFLoader(), tl = new THREE.TextureLoader();
// CSP: connect-src has no blob:, so embedded GLB images must decode through <img> (img-src allows blob:) not fetch()
gl.register((parser) => { parser.textureLoader = new THREE.TextureLoader(parser.options.manager); return { name: 'csp_img' }; });
const tex = (u, srgb) => tl.loadAsync(u).then((t) => { t.flipY = false; t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace; t.anisotropy = 4; return t; });
export const ZFILES = (hi) => ['zombie_m', 'zombie_f'].map((n) => n + (hi ? '' : '_lo') + '.glb').concat(['zanim_ual1.glb', 'zanim_ual2.glb', `zskin_m_${hi ? 1024 : 512}.webp`, `zskin_f_${hi ? 1024 : 512}.webp`], hi ? ['znrm_m_1024.webp', 'znrm_f_1024.webp'] : []);

const CLIPS = { walk: 'Zombie_Walk_Fwd_Loop', run: 'Jog_Fwd_Loop', idle: 'Zombie_Idle_Loop', attack: 'Zombie_Scratch', climb: 'ClimbUp_1m', death: 'Death01', hit: 'Hit_Chest', hitHead: 'Hit_Head', knock: 'Hit_Knockback' };

function prepBody(gltf, map, nrm) {
  const scene = gltf.scene; scene.updateMatrixWorld(true);
  const lods = ['LOD0', 'LOD1', 'LOD2'].map((n) => scene.getObjectByName(n)).map((o) => o && (o.isSkinnedMesh ? o : o.children.find((c) => c.isSkinnedMesh))).filter(Boolean);
  const ref = lods[0]; const box = new THREE.Box3(); ref.geometry.computeBoundingBox(); box.copy(ref.geometry.boundingBox).applyMatrix4(ref.bindMatrix);
  const H = box.max.y - box.min.y;
  // eyes, in head-bone space: nose tip = front-most head vertex; eyes sit above and behind it
  const sk = ref.skeleton, hi = sk.bones.findIndex((b) => /^head$/i.test(b.name)); const pos = ref.geometry.attributes.position, si = ref.geometry.attributes.skinIndex, sw = ref.geometry.attributes.skinWeight;
  const v = new THREE.Vector3(); let nose = null, front = -1e9; let zc = 0, nz = 0;
  for (let i = 0; i < pos.count; i++) { let w = 0; for (let k = 0; k < 4; k++) if (si.getComponent(i, k) === hi) w = Math.max(w, sw.getComponent(i, k)); if (w < 0.5) continue; v.fromBufferAttribute(pos, i).applyMatrix4(ref.bindMatrix); zc += v.z; nz++; }
  // Face = the side the head's vertex cloud leans toward (nose and lips add volume).
  // Maximizing |z-zc| at crown height can pick the occiput, which flipped these
  // Quaternius bodies 180° so they walked backwards relative to their yaw.
  zc /= Math.max(1, nz); let sgn = Math.sign(zc) || 1;
  for (let i = 0; i < pos.count; i++) { let w = 0; for (let k = 0; k < 4; k++) if (si.getComponent(i, k) === hi) w = Math.max(w, sw.getComponent(i, k)); if (w < 0.5) continue; v.fromBufferAttribute(pos, i).applyMatrix4(ref.bindMatrix); const y01 = (v.y - box.min.y) / H; if (y01 < 0.86 || y01 > 0.93) continue; const d = sgn * (v.z - zc) - Math.abs(v.x) * 3; if (d > front) { front = d; nose = v.clone(); } }
  if (!nose) nose = new THREE.Vector3(0, box.min.y + 0.9 * H, zc + sgn * 0.08);
  const k = H / 1.8, inv = sk.boneInverses[hi];
  const eye = (x) => new THREE.Vector3(x * k, nose.y + 0.035 * k, nose.z - sgn * 0.028 * k).applyMatrix4(inv);
  return { scene, H, box, front: sgn, eyes: nose ? { L: eye(-0.033), R: eye(0.033) } : null, map, nrm, nLods: lods.length };
}

export async function loadZombieKit(hi) {
  const g = (f) => gl.loadAsync(BASE + f);
  const [m, f, a1, a2, sm, sf, nm, nf] = await Promise.all([g(hi ? 'zombie_m.glb' : 'zombie_m_lo.glb'), g(hi ? 'zombie_f.glb' : 'zombie_f_lo.glb'), g('zanim_ual1.glb'), g('zanim_ual2.glb'),
    tex(BASE + `zskin_m_${hi ? 1024 : 512}.webp`, true), tex(BASE + `zskin_f_${hi ? 1024 : 512}.webp`, true), hi ? tex(BASE + 'znrm_m_1024.webp') : null, hi ? tex(BASE + 'znrm_f_1024.webp') : null]);
  const all = {}; for (const c of [...a1.animations, ...a2.animations]) all[c.name.replace(/^.*\|/, '')] = c;
  const clips = {}; for (const [k, n] of Object.entries(CLIPS)) { clips[k] = all[n]; if (!clips[k]) throw new Error('missing clip ' + n); }
  // the climb clip is authored with root motion up onto a 1 m ledge; the game moves the root itself
  stripTranslation(clips.climb);
  return { hi, m: prepBody(m, sm, nm), f: prepBody(f, sf, nf), clips };
}
function stripTranslation(clip) { for (const t of clip.tracks) if (/pelvis\.position$/.test(t.name)) { const v = t.values, x0 = v[0], y0 = v[1], z0 = v[2]; for (let i = 0; i < v.length; i += 3) { v[i] = x0; v[i + 1] = y0; v[i + 2] = z0; } } }

const NOISE = 'float zh(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);} float zn(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(zh(i),zh(i+vec3(1,0,0)),f.x),mix(zh(i+vec3(0,1,0)),zh(i+vec3(1,1,0)),f.x),f.y),mix(mix(zh(i+vec3(0,0,1)),zh(i+vec3(1,0,1)),f.x),mix(zh(i+vec3(0,1,1)),zh(i+vec3(1,1,1)),f.x),f.y),f.z);}';
function skinMat(body, u) {
  const m = new THREE.MeshStandardMaterial({ map: body.map, normalMap: body.nrm || null, roughness: 0.62, metalness: 0, emissive: 0x000000 });
  if (body.nrm) m.normalScale.set(0.8, 0.8);
  m.userData.u = u;
  m.onBeforeCompile = (s) => {
    Object.assign(s.uniforms, u);
    s.vertexShader = s.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vB; uniform vec4 uBox;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\n{ vec3 b = (bindMatrix * vec4(position, 1.)).xyz; vB = vec3((b.x - uBox.x) / uBox.w, (b.y - uBox.y) / uBox.w, (b.z - uBox.z) / uBox.w); }');
    s.fragmentShader = s.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vB; uniform vec3 uShirt, uPants, uHair; uniform vec4 uCloth; uniform vec4 uMisc; float zCloth = 0., zBlood = 0.;\n' + NOISE)
      .replace('#include <map_fragment>', `#include <map_fragment>
      { float y = vB.y, ax = abs(vB.x), fz = vB.z * uMisc.y; vec3 q = vB * 22. + uCloth.w;
        float neck = 0.805 - 0.035 * (1. - smoothstep(0.0, 0.05, ax)) * step(0., fz);
        float shirt = (1. - uCloth.z) * max(step(0.515, y) * step(y, neck) * step(ax, 0.15), step(0.72, y) * step(y, 0.87) * step(0.1, ax) * step(ax, 0.12 + uCloth.x));
        float pants = step(uCloth.y, y) * step(y, 0.545) * step(ax, 0.17);
        float shoes = step(y, 0.045) * uMisc.x;
        float tear = smoothstep(0.66, 0.7, zn(q * 0.9) * 0.7 + zn(q * 2.7) * 0.3);
        float edge = smoothstep(0.58, 0.66, zn(q * 0.9) * 0.7 + zn(q * 2.7) * 0.3) - tear;
        float cl = max(shirt, pants) * (1. - tear);
        vec3 cc = shirt > 0.5 ? uShirt : uPants; cc *= 0.72 + 0.4 * zn(vB * 140.) ; cc *= mix(0.45, 1., smoothstep(0.04, 0.32, y)); cc *= 1. - edge * 0.5;
        float stain = smoothstep(0.55, 0.72, zn(vB * 9. + uCloth.w * 1.7)) * (0.55 + 0.45 * step(0.55, y));
        cc = mix(cc, vec3(0.075, 0.012, 0.01), stain * 0.8);
        diffuseColor.rgb = mix(diffuseColor.rgb, cc, cl);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.04, 0.035), shoes * (1. - cl));
        // patchy, balding hair; never on the face
        float hair = step(0.925, y) * max(step(fz, 0.015), step(0.962, y)) * smoothstep(1. - uMisc.z, 1.06 - uMisc.z, zn(vB * 55. + uCloth.w));
        diffuseColor.rgb = mix(diffuseColor.rgb, uHair * (0.7 + 0.5 * zn(vB * 400.)), hair * (1. - cl));
        // fresh blood around the mouth and down the chest
        float mouth = (1. - smoothstep(0.0, 0.06, abs(y - 0.905))) * step(0.01, fz) * (1. - smoothstep(0.02, 0.05, ax)) * smoothstep(0.35, 0.6, zn(vB * 70.));
        zBlood = max(mouth, stain * cl);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.12, 0.008, 0.006), mouth * 0.85);
        zCloth = max(cl, shoes); }`)
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.95, zCloth); roughnessFactor = mix(roughnessFactor, 0.3, zBlood * 0.8);');
  };
  m.customProgramCacheKey = () => 'zrig' + (body.nrm ? 'n' : '');
  return m;
}

const SHIRTS = [0x5a3030, 0x34405a, 0x4c4c34, 0x3a3a40, 0x6a5838, 0x335a50, 0x6e4a34, 0x8a867c, 0x463c4c, 0x2e2e2e, 0x7a7466], PANTS = [0x262c38, 0x3a2f24, 0x1d2428, 0x2c3a2a, 0x4a4136, 0x23324a], HAIR = [0x1a1512, 0x3a2a1c, 0x5a4a38, 0x6e6a62, 0x2a2420];
const pick = (a) => a[(Math.random() * a.length) | 0];
const _c = new THREE.Color(), _e = new THREE.Vector3(), _o = new THREE.Object3D(), _hot = new THREE.Color(1, 0.92, 0.75);

function glowMap() {
  const c = document.createElement('canvas'); c.width = c.height = 32; const g = c.getContext('2d');
  const gr = g.createRadialGradient(16, 16, 1, 16, 16, 16); gr.addColorStop(0, '#fff'); gr.addColorStop(0.28, 'rgba(255,255,255,.7)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 32, 32); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function dress(z) { // per-spawn outfit
  const u = z.zu; if (!u) return; const brute = z.brute;
  u.uShirt.value.set(pick(SHIRTS)).multiplyScalar(0.7 + Math.random() * 0.3); u.uPants.value.set(pick(PANTS)); u.uHair.value.set(pick(HAIR));
  u.uCloth.value.set(brute ? 0.0 : Math.random() * 0.2, Math.random() < 0.2 ? 0.3 : 0.05 + Math.random() * 0.06, brute || Math.random() < 0.12 ? 1 : 0, Math.random() * 50);
  u.uMisc.value.x = Math.random() < 0.25 ? 0 : 1; u.uMisc.value.z = z.female ? 0.75 : Math.random() * 0.6;
  z.sk.color.setRGB(1, 1, 1).offsetHSL(0, 0, -Math.random() * 0.15); if (brute) z.sk.color.setRGB(0.95, 0.8, 0.75);
}

function rigOne(z, i, kit) {
  if (z.model) { z.root.remove(z.model); z.mixer?.stopAllAction(); }
  const female = !z.brute && i % 3 === 2; const body = female ? kit.f : kit.m; z.female = female;
  const model = skClone(body.scene); const s = (female ? 1.72 : 1.8) / body.H; model.scale.setScalar(s); if (body.front < 0) model.rotation.y = Math.PI;
  const u = z.zu || { uShirt: { value: new THREE.Color() }, uPants: { value: new THREE.Color() }, uHair: { value: new THREE.Color() }, uCloth: { value: new THREE.Vector4() }, uMisc: { value: new THREE.Vector4(1, 1, 0.3, 0) } };
  u.uBox = { value: new THREE.Vector4(body.box.min.x + (body.box.max.x - body.box.min.x) / 2, body.box.min.y, body.box.min.z + (body.box.max.z - body.box.min.z) / 2, body.H) };
  u.uMisc.value.y = body.front; z.zu = u;
  const mat = skinMat(body, u); const old = z.sk; z.sk = mat; if (old && old !== mat) mat.color.copy(old.color);
  const lods = []; model.traverse((o) => { if (o.isSkinnedMesh) { o.material = mat; o.frustumCulled = false; o.castShadow = true; o.receiveShadow = true; lods.push(o); } });
  lods.sort((a, b) => a.name.localeCompare(b.name)); z.lods = kit.hi ? lods : [null, ...lods]; // index 0 = full detail
  z.model = model; z.root.add(model); z.pelvis.traverse((o) => { if (o.isMesh) o.visible = false; });
  z.bones = { head: model.getObjectByName(lods[0].skeleton.bones.find((b) => /^head$/i.test(b.name)).name) };
  z.eyeL = body.eyes?.L || new THREE.Vector3(); z.eyeR = body.eyes?.R || new THREE.Vector3();
  const mx = (z.mixer = new THREE.AnimationMixer(model)); z.acts = {};
  for (const [k, c] of Object.entries(kit.clips)) { const a = mx.clipAction(c); z.acts[k] = a; }
  for (const k of ['death', 'hit', 'hitHead', 'knock']) { z.acts[k].setLoop(THREE.LoopOnce, 1); z.acts[k].clampWhenFinished = k === 'death'; }
  z.cur = null; z.lastHit = 0; z.vel = 0; z.px = z.pos.x; z.pz = z.pos.z; z.rate = 0.9 + Math.random() * 0.2; z.macc = 0;
  if (z.state !== 'dead') dress(z);
}

function play(z, k, fade = 0.25, ts = 1) {
  const a = z.acts[k]; a.timeScale = ts * z.rate; if (z.cur === k) return; const prev = z.cur && z.acts[z.cur];
  a.reset(); a.enabled = true; a.setEffectiveWeight(1); if (k !== 'death' && k !== 'climb') a.time = Math.random() * a.getClip().duration; a.play();
  if (prev) prev.crossFadeTo(a, fade, false); // first pose snaps in: a fade from nothing blends with the T-pose
  z.cur = k;
}

let zombies_ = null;
function animate(z, dt) {
  if (z.state === 'dying' && z.cur !== 'death') zombies_?.onBlood?.(z.pos.x, z.pos.z, 1.1 * z.scale);
  const dx = z.pos.x - z.px, dz = z.pos.z - z.pz; z.px = z.pos.x; z.pz = z.pos.z;
  const v = dt > 0 ? Math.min(8, Math.hypot(dx, dz) / dt) : 0; z.vel += (v - z.vel) * Math.min(1, dt * 6);
  if (z.state === 'dying') play(z, 'death', 0.12, 1.25);
  else if (z.state === 'climb') play(z, 'climb', 0.2, 0.62);
  else if (z.state === 'attack') play(z, 'attack', 0.3, 1);
  else if (z.attackT > 0) play(z, 'attack', 0.12, 1.9);
  else if (z.vel > (z.runner ? 1.6 : 2.6)) play(z, 'run', 0.3, Math.min(1.6, Math.max(0.7, z.vel / 3.6)));
  else if (z.vel > 0.12) play(z, 'walk', 0.3, Math.min(2.4, Math.max(0.55, z.vel / 0.95)));
  else if (z.cur !== 'attack' || z.attackT <= 0) play(z, 'idle', 0.4, 1);
  if (z.cur === 'run' || z.cur === 'walk') z.acts[z.cur].timeScale = z.rate * (z.cur === 'run' ? Math.min(1.6, Math.max(0.7, z.vel / 3.6)) : Math.min(2.4, Math.max(0.55, z.vel / 0.95)));
  // flinch on hit: a short one-shot layered over the locomotion
  if (z.hitT > 0.15 && z.lastHit <= 0 && Math.random() < 0.45) zombies_?.onBlood?.(z.pos.x + (Math.random() - 0.5) * 0.6, z.pos.z + (Math.random() - 0.5) * 0.6, 0.45 + Math.random() * 0.4);
  if (z.hitT > 0.15 && z.lastHit <= 0 && z.state !== 'dying') { const h = z.acts[Math.random() < 0.5 ? 'hit' : 'hitHead']; h.reset(); h.setEffectiveWeight(0.65); h.fadeIn(0.04); h.play(); z.hitAct = h; z.hitClock = 0.3; }
  z.lastHit = z.hitT;
  if (z.hitAct) { z.hitClock -= dt; if (z.hitClock <= 0) { z.hitAct.fadeOut(0.2); z.hitAct = null; } }
}

export function rigZombies(zombies, kit) {
  zombies_ = zombies;
  zombies.kit = kit; zombies.list.forEach((z, i) => rigOne(z, i, kit));
  if (zombies._zrig) return;
  zombies._zrig = true; const n = zombies.list.length;
  const eye = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: glowMap(), color: 0xffffff, transparent: true, depthWrite: false, toneMapped: true, fog: true, side: THREE.DoubleSide }), n * 2);
  eye.frustumCulled = false; eye.userData.noAO = true; eye.renderOrder = 6; eye.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 6), 3);
  const blobMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false });
  const blob = new THREE.InstancedMesh(new THREE.CircleGeometry(0.7, 14), blobMat, n); blob.frustumCulled = false; blob.userData.noAO = true; blob.renderOrder = 1;
  zombies.scene.add(eye, blob); zombies.eyeMesh = eye; zombies.blob = blob;
  const hide = (i) => { _o.position.set(0, -20, 0); _o.scale.set(0, 0, 0); _o.updateMatrix(); eye.setMatrixAt(i * 2, _o.matrix); eye.setMatrixAt(i * 2 + 1, _o.matrix); blob.setMatrixAt(i, _o.matrix); };
  const prevTier = zombies.setTier.bind(zombies);
  zombies.setTier = (t) => { zombies.tier = t; blobMat.opacity = t === 0 ? 0.5 : 0.26; for (const z of zombies.list) z.lods.forEach((m) => m && (m.castShadow = t > 0)); prevTier(t); };
  const os = zombies.spawn.bind(zombies);
  zombies.spawn = (...a) => { const z = os(...a); if (z) { dress(z); z.cur = null; z.mixer?.stopAllAction(); z.px = z.pos.x; z.pz = z.pos.z; z.vel = 0; } return z; };
  const ou = zombies.update.bind(zombies); const vis = []; let frame = 0;
  zombies.tick = (dt, time, player) => { // also driven by co-op clients, which skip zombies.update
    frame++; vis.length = 0;
    for (const z of zombies.list) if (z.root.visible && z.state !== 'dead') { z.d = Math.hypot(z.pos.x - player.x, z.pos.z - player.z); vis.push(z); }
    vis.sort((a, b) => a.d - b.d); const hiK = !!zombies.kit.hi;
    vis.forEach((z, k) => {
      let L = k < 2 && z.d < 7 ? 0 : k < 6 && z.d < 16 ? 1 : 2; if (!hiK && L === 0) L = 1;
      z.lods.forEach((m, j) => m && (m.visible = j === L));
      animate(z, dt); z.macc += dt; const every = L === 2 ? (z.d > 40 ? 3 : 2) : 1;
      if (frame % every === 0 || z.state === 'dying') { z.mixer.update(z.macc); z.macc = 0; }
    });
    const q = zombies.cam && zombies.cam.quaternion; let dirty = false;
    for (let i = 0; i < zombies.list.length; i++) {
      const z = zombies.list[i], on = z.root.visible && z.state !== 'dead';
      if (!on) { if (z._eyeOn) { z._eyeOn = false; dirty = true; hide(i); } continue; }
      z._eyeOn = true; dirty = true; z.bones.head.updateWorldMatrix(true, false); const head = z.bones.head.matrixWorld;
      const pulse = 1 + 0.12 * Math.sin(time * (z.runner ? 9 : 3.1) + z.phase), sc = 0.04 * pulse * (z.flash > 0 ? 1.35 : 1) * (z.brute ? 1.2 : 1) * (z.state === 'dying' ? Math.max(0, 1 - z.dieT) : 1);
      _c.setRGB(z.brute ? 0.85 : z.runner ? 1 : 0.95, z.brute ? 0.08 : z.runner ? 0.42 : 0.16, 0.04); if (z.flash > 0) _c.lerp(_hot, Math.min(0.65, z.flash * 2.5));
      if (q) _o.quaternion.copy(q);
      _e.copy(z.eyeL).applyMatrix4(head); _o.position.copy(_e); _o.scale.setScalar(sc); _o.updateMatrix(); eye.setMatrixAt(i * 2, _o.matrix); eye.setColorAt(i * 2, _c);
      _e.copy(z.eyeR).applyMatrix4(head); _o.position.copy(_e); _o.updateMatrix(); eye.setMatrixAt(i * 2 + 1, _o.matrix); eye.setColorAt(i * 2 + 1, _c);
      const sink = z.state === 'dying' ? Math.min(0.85, z.dieT * 0.45) : 0;
      _o.quaternion.identity(); _o.position.set(z.pos.x, 0.04, z.pos.z); _o.rotation.set(-Math.PI / 2, 0, 0); _o.scale.setScalar(Math.max(0.01, z.scale * (z.brute ? 1.15 : 0.92) * (1 - sink))); _o.updateMatrix(); blob.setMatrixAt(i, _o.matrix);
    }
    if (dirty) { eye.instanceMatrix.needsUpdate = true; eye.instanceColor.needsUpdate = true; blob.instanceMatrix.needsUpdate = true; }
  };
  zombies.update = (dt, time, player, ...r) => { ou(dt, time, player, ...r); zombies.tick(dt, time, player); zombies._ticked = true; };
  zombies.lodCounts = () => { const c = [0, 0, 0]; for (const z of zombies.list) if (z.root.visible) z.lods.forEach((m, j) => { if (m && m.visible) c[j]++; }); return c; };
}
