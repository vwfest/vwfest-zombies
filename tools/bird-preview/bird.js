// 100% original procedural Carrion Buzzard for DUST & DEAD.
// No third-party meshes. Shared materials. No per-bird lights (emissive eyes only).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const WINGSPAN = 2.15;

const FLESH = 0x859274;
const FLESH_DARK = 0x5c5348;
const FLESH_BELLY = 0x6e6758;
const BONE = 0xcbb99a;
const BONE_DIRTY = 0xa89878;
const BEAK = 0xc49a88;
const BEAK_DARK = 0x8a6558;
const RUFF = 0xcfc6b4;
const FEATHER = 0x2c241c;
const FEATHER_WORN = 0x4a3c30;
const FEATHER_TIP = 0x3a3026;
const MEMBRANE = 0x4a382c;
const VISCERA = 0x5a1812;
const VISCERA_DARK = 0x3a0e0c;
const EYE = 0xc8ff44;
const TALON = 0x2a2420;
const TONGUE = 0x6a3030;

export function createMaterials() {
  const std = (color, extras = {}) => new THREE.MeshStandardMaterial({
    color, roughness: 0.9, metalness: 0.02, ...extras,
  });
  return {
    flesh: std(FLESH, { roughness: 0.92 }),
    fleshDark: std(FLESH_DARK, { roughness: 0.94 }),
    fleshBelly: std(FLESH_BELLY, { roughness: 0.93 }),
    bone: std(BONE, { roughness: 0.72 }),
    boneDirty: std(BONE_DIRTY, { roughness: 0.78 }),
    beak: std(BEAK, { roughness: 0.55 }),
    beakDark: std(BEAK_DARK, { roughness: 0.6 }),
    ruff: std(RUFF, { roughness: 0.96 }),
    feather: std(FEATHER, { roughness: 0.95, side: THREE.DoubleSide }),
    featherWorn: std(FEATHER_WORN, { roughness: 0.95, side: THREE.DoubleSide }),
    featherTip: std(FEATHER_TIP, { roughness: 0.95, side: THREE.DoubleSide }),
    membrane: std(MEMBRANE, { roughness: 0.88, side: THREE.DoubleSide }),
    viscera: std(VISCERA, { roughness: 0.7 }),
    visceraDark: std(VISCERA_DARK, { roughness: 0.75 }),
    tongue: std(TONGUE, { roughness: 0.65 }),
    talon: std(TALON, { roughness: 0.45 }),
    eye: new THREE.MeshStandardMaterial({
      color: EYE, emissive: EYE, emissiveIntensity: 3.2, roughness: 0.35, metalness: 0.0,
    }),
    eyeCore: new THREE.MeshBasicMaterial({ color: 0xf5ffc0 }),
  };
}

function lathe(pts, seg = 8, rot = Math.PI * 2) {
  return new THREE.LatheGeometry(pts.map((p) => new THREE.Vector2(p[0], p[1])), seg, 0, rot);
}
function cyl(rTop, rBot, h, seg = 6, open = false) {
  return new THREE.CylinderGeometry(rTop, rBot, h, seg, 1, open);
}
function sph(r, det = 1) { return new THREE.SphereGeometry(r, 6 + det * 2, 5 + det); }
function box(x, y, z) { return new THREE.BoxGeometry(x, y, z); }

function mesh(geo, mat, name, pos, rot, scale) {
  const m = new THREE.Mesh(geo, mat);
  m.name = name || '';
  m.castShadow = false;
  m.receiveShadow = false;
  if (pos) m.position.set(pos[0], pos[1], pos[2]);
  if (rot) m.rotation.set(rot[0], rot[1], rot[2]);
  if (scale) m.scale.set(scale[0], scale[1], scale[2]);
  return m;
}

function wingMembrane() {
  // Right-wing sheet in local XZ. Caller mirrors the left with scale.x = -1.
  const s = new THREE.Shape();
  s.moveTo(0.02, 0.04);
  s.bezierCurveTo(0.18, 0.16, 0.42, 0.20, 0.72, 0.12);
  s.bezierCurveTo(0.92, 0.06, 1.08, -0.02, 1.14, -0.12);
  s.lineTo(1.05, -0.20);
  s.bezierCurveTo(0.86, -0.16, 0.58, -0.18, 0.34, -0.14);
  s.bezierCurveTo(0.16, -0.10, 0.04, -0.04, 0.00, 0.00);
  s.closePath();
  const holeA = new THREE.Path();
  holeA.absellipse(0.42, 0.00, 0.10, 0.055, 0, Math.PI * 2, true);
  const holeB = new THREE.Path();
  holeB.absellipse(0.70, -0.02, 0.08, 0.04, 0, Math.PI * 2, true);
  s.holes.push(holeA, holeB);
  const g = new THREE.ShapeGeometry(s, 5);
  g.rotateX(-Math.PI / 2);
  g.rotateY(-0.12); // slight rearward sweep
  g.computeVertexNormals();
  return g;
}

function featherQuill(len, wid, thick = 0.012) {
  const g = box(len, thick, wid);
  g.translate(len * 0.5, 0, 0);
  return g;
}

/**
 * Articulated buzzard. +Z forward, +Y up, +X right.
 * userData.animate(t, pose) drives flap / dive tuck / jaw / viscera sway.
 */
export function createBirdGroup(mats, rng = Math.random) {
  const root = new THREE.Group();
  root.name = 'buzzard';
  const size = 0.92 + rng() * 0.16;
  root.scale.setScalar(size);

  const body = new THREE.Group();
  body.name = 'body';
  root.add(body);

  // Torso — fatter at the chest, tapered to the tail. Open belly is a dark inset.
  const torsoPts = [
    [0.01, 0.28], [0.07, 0.24], [0.13, 0.16], [0.16, 0.04],
    [0.15, -0.08], [0.11, -0.20], [0.07, -0.32], [0.03, -0.42], [0.0, -0.46],
  ];
  const torsoGeo = lathe(torsoPts, 10);
  torsoGeo.rotateX(Math.PI / 2);
  body.add(mesh(torsoGeo, mats.fleshDark, 'flesh-torso', [0, 0, 0], [0.12, 0, 0]));

  const chest = mesh(sph(0.15, 1), mats.flesh, 'flesh-chest', [0, 0.04, 0.12], [0, 0, 0], [1.05, 0.85, 1.15]);
  body.add(chest);

  // Chest cavity (dark hole the ribs sit over).
  body.add(mesh(box(0.18, 0.16, 0.20), mats.visceraDark, 'flesh-cavity', [0, -0.04, 0.11]));

  // Ribs — 6 pairs of thin bone arcs.
  const ribs = new THREE.Group();
  ribs.name = 'ribs';
  body.add(ribs);
  for (let i = 0; i < 6; i++) {
    const z = 0.16 - i * 0.055;
    const y = -0.01 - i * 0.008;
    const w = 0.15 + (i < 3 ? i * 0.01 : (5 - i) * 0.012);
    const arc = new THREE.TorusGeometry(w, 0.009, 4, 8, Math.PI * 0.72);
    arc.rotateZ(Math.PI);
    arc.rotateX(0.35);
    ribs.add(mesh(arc, mats.bone, 'bone-rib', [0, y, z], [0.05, 0, 0]));
  }
  // Sternum / spine suggestion.
  body.add(mesh(cyl(0.012, 0.01, 0.32, 5), mats.boneDirty, 'bone-sternum', [0, -0.01, 0.06], [Math.PI / 2, 0, 0]));
  body.add(mesh(cyl(0.018, 0.012, 0.42, 5), mats.boneDirty, 'bone-spine', [0, 0.07, -0.04], [Math.PI / 2 + 0.15, 0, 0]));

  // Hanging viscera (sways in animate).
  const guts = new THREE.Group();
  guts.name = 'guts';
  guts.position.set(0, -0.07, 0.10);
  body.add(guts);
  guts.add(mesh(sph(0.035, 0), mats.viscera, 'viscera-1', [0.01, -0.04, 0.01]));
  guts.add(mesh(sph(0.028, 0), mats.visceraDark, 'viscera-2', [-0.02, -0.08, 0.00]));
  guts.add(mesh(cyl(0.008, 0.006, 0.10, 4), mats.viscera, 'viscera-strand', [0.015, -0.10, 0.02]));
  guts.add(mesh(cyl(0.007, 0.004, 0.12, 4), mats.visceraDark, 'viscera-strand2', [-0.01, -0.12, -0.01], [0.2, 0, 0.15]));

  // Neck (S-curve of 3 segments) + dirty white vulture ruff.
  const neck = new THREE.Group();
  neck.name = 'neck';
  neck.position.set(0, 0.05, 0.20);
  body.add(neck);
  neck.add(mesh(cyl(0.048, 0.06, 0.08, 7), mats.flesh, 'flesh-neck1', [0, 0.02, 0.03], [0.95, 0, 0]));
  neck.add(mesh(cyl(0.038, 0.048, 0.07, 7), mats.flesh, 'flesh-neck2', [0, 0.05, 0.08], [0.7, 0, 0]));
  neck.add(mesh(cyl(0.034, 0.038, 0.06, 7), mats.fleshDark, 'flesh-neck3', [0, 0.08, 0.12], [0.4, 0, 0]));

  const ruff = new THREE.Group();
  ruff.name = 'ruff';
  ruff.position.set(0, 0.01, 0.02);
  neck.add(ruff);
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const q = featherQuill(0.09 + (i % 3) * 0.015, 0.035, 0.01);
    const m = mesh(q, mats.ruff, 'ruff-quill');
    m.position.set(Math.cos(a) * 0.04, Math.sin(a) * 0.03, -0.01);
    m.rotation.z = a;
    m.rotation.y = 0.4;
    ruff.add(m);
  }

  const head = new THREE.Group();
  head.name = 'head';
  head.position.set(0, 0.10, 0.16);
  neck.add(head);
  head.add(mesh(sph(0.085, 2), mats.flesh, 'flesh-head', [0, 0.01, 0.02], [0, 0, 0], [0.95, 0.85, 1.15]));
  // Skull patch / peeling skin.
  head.add(mesh(sph(0.04, 0), mats.bone, 'bone-skullcap', [0.025, 0.04, 0.01], [0.3, 0.4, 0], [1.1, 0.5, 0.9]));
  // Wattles / wrinkles.
  head.add(mesh(box(0.03, 0.05, 0.02), mats.fleshDark, 'flesh-wattle', [0.03, -0.04, 0.04], [0.3, 0, 0.2]));
  head.add(mesh(box(0.03, 0.05, 0.02), mats.fleshDark, 'flesh-wattle2', [-0.03, -0.04, 0.04], [0.3, 0, -0.2]));

  // Hooked beak (upper + hinged lower jaw).
  const beakUpper = new THREE.ConeGeometry(0.036, 0.16, 8);
  beakUpper.translate(0, 0.08, 0);
  beakUpper.rotateX(Math.PI / 2); // tip toward +Z (forward)
  const bu = mesh(beakUpper, mats.beak, 'beak-upper', [0, -0.015, 0.10], [0.55, 0, 0]);
  head.add(bu);
  const hook = new THREE.ConeGeometry(0.016, 0.07, 6);
  hook.translate(0, 0.035, 0);
  hook.rotateX(Math.PI / 2);
  head.add(mesh(hook, mats.beakDark, 'beak-hook', [0, -0.055, 0.23], [1.25, 0, 0]));

  const jaw = new THREE.Group();
  jaw.name = 'jaw';
  jaw.position.set(0, -0.02, 0.08);
  head.add(jaw);
  const beakLower = lathe([
    [0.0, 0.0], [0.028, 0.01], [0.026, 0.05], [0.016, 0.09], [0.006, 0.12], [0.0, 0.13],
  ], 7);
  beakLower.rotateX(-Math.PI / 2);
  jaw.add(mesh(beakLower, mats.beakDark, 'beak-lower', [0, -0.02, 0.02], [0.25, 0, 0], [1.2, 0.7, 1.25]));
  jaw.add(mesh(box(0.02, 0.008, 0.05), mats.tongue, 'tongue', [0, 0.0, 0.04]));

  // Glowing eyes — emissive only, no PointLight.
  const eyes = new THREE.Group();
  eyes.name = 'eyes';
  head.add(eyes);
  for (const sx of [-1, 1]) {
    eyes.add(mesh(sph(0.016, 1), mats.eye, 'eye', [sx * 0.042, 0.025, 0.09]));
    eyes.add(mesh(sph(0.007, 0), mats.eyeCore, 'eye-core', [sx * 0.042, 0.025, 0.102]));
  }

  // Tail fan.
  const tail = new THREE.Group();
  tail.name = 'tail';
  tail.position.set(0, 0.02, -0.40);
  body.add(tail);
  for (let i = 0; i < 7; i++) {
    const a = (i - 3) * 0.16;
    const len = 0.28 + (i === 3 ? 0.06 : 0);
    const q = box(0.045, 0.01, len);
    q.translate(0, 0, -len * 0.5);
    const m = mesh(q, i % 2 ? mats.featherWorn : mats.feather, 'feather-tail');
    m.rotation.y = a;
    m.rotation.x = 0.12;
    tail.add(m);
  }

  function makeWing(side) {
    // side: +1 right, -1 left
    const sh = new THREE.Group();
    sh.name = side > 0 ? 'wingR' : 'wingL';
    sh.position.set(side * 0.10, 0.08, 0.04);
    body.add(sh);

    // Humerus
    const hum = mesh(cyl(0.012, 0.010, 0.34, 5), mats.bone, 'bone-humerus', [side * 0.16, 0.02, 0], [0, 0, side * Math.PI / 2]);
    sh.add(hum);

    const elbow = new THREE.Group();
    elbow.name = side > 0 ? 'elbowR' : 'elbowL';
    elbow.position.set(side * 0.34, 0.0, -0.02);
    sh.add(elbow);
    elbow.add(mesh(cyl(0.014, 0.010, 0.38, 5), mats.bone, 'bone-ulna', [side * 0.18, 0, -0.02], [0.15, 0, side * Math.PI / 2]));
    elbow.add(mesh(sph(0.02, 0), mats.boneDirty, 'bone-joint', [0, 0, 0]));

    const tip = new THREE.Group();
    tip.name = side > 0 ? 'tipR' : 'tipL';
    tip.position.set(side * 0.38, 0, -0.08);
    elbow.add(tip);
    tip.add(mesh(cyl(0.01, 0.006, 0.28, 4), mats.boneDirty, 'bone-manus', [side * 0.12, 0, -0.04], [0.25, 0, side * Math.PI / 2]));

    // Membrane / ragged feather sheet with torn holes.
    const mem = wingMembrane();
    const mm = mesh(mem, mats.membrane, 'membrane');
    mm.position.set(0, -0.01, -0.04);
    mm.scale.set(side, 1, 1);
    sh.add(mm);

    // A second feather sheet, same torn shape, slightly above the membrane.
    const coverGeo = wingMembrane();
    const cover = mesh(coverGeo, mats.feather, 'feather-cover');
    cover.position.set(0, 0.012, -0.04);
    cover.scale.set(side * 1.02, 1, 1.02);
    sh.add(cover);
    // Short primary fingers at the tip, kept in the wing plane.
    for (let i = 0; i < 5; i++) {
      const t = i / 4;
      const len = 0.22 + (1 - t) * 0.07;
      const q = box(len, 0.01, 0.04);
      q.translate(len * 0.5, 0, 0);
      const m = mesh(q, mats.featherTip, 'feather-prim');
      m.position.set(side * 0.04, 0.0, -0.01 - i * 0.028);
      m.rotation.set(0, side > 0 ? -0.12 : Math.PI + 0.12, 0);
      tip.add(m);
    }
    return { sh, elbow, tip };
  }

  const wingL = makeWing(-1);
  const wingR = makeWing(1);

  // Legs + hooked talons (reach forward on a dive).
  function makeLeg(side) {
    const hip = new THREE.Group();
    hip.name = side > 0 ? 'legR' : 'legL';
    hip.position.set(side * 0.06, -0.08, 0.02);
    body.add(hip);
    hip.add(mesh(cyl(0.018, 0.012, 0.16, 5), mats.fleshDark, 'flesh-thigh', [0, -0.08, 0], [0.25, 0, 0]));
    const foot = new THREE.Group();
    foot.name = side > 0 ? 'footR' : 'footL';
    foot.position.set(0, -0.16, 0.02);
    hip.add(foot);
    foot.add(mesh(cyl(0.01, 0.008, 0.12, 5), mats.fleshDark, 'flesh-shin', [0, -0.04, 0.01], [0.4, 0, 0]));
    const toes = [
      [0.05, 0.0, 0.07, 0.15],
      [-0.05, 0.0, 0.07, -0.15],
      [0.0, 0.0, 0.08, 0],
      [0.0, 0.0, -0.06, Math.PI],
    ];
    for (const [x, y, z, yaw] of toes) {
      const toe = mesh(cyl(0.007, 0.004, 0.07, 4), mats.talon, 'talon', [x, y - 0.02, z], [1.15, yaw, 0]);
      foot.add(toe);
      const claw = mesh(box(0.008, 0.006, 0.03), mats.talon, 'claw');
      claw.position.set(x * 1.15, y - 0.035, z + (z > 0 ? 0.05 : -0.05));
      claw.rotation.set(0.9, yaw, 0);
      foot.add(claw);
    }
    return { hip, foot };
  }
  const legL = makeLeg(-1);
  const legR = makeLeg(1);

  const pose = { flap: 0, tuck: 0, jaw: 0.35, bank: 0, pitch: 0 };

  root.userData.pose = pose;
  root.userData.wings = { L: wingL, R: wingR };
  root.userData.animate = (t, p = {}) => {
    const flapAmp = p.flapAmp ?? (0.7 * (1 - (p.tuck ?? pose.tuck)));
    const freq = p.freq ?? 7.2;
    const phase = p.phase ?? 0;
    const flap = Math.sin(t * freq + phase) * flapAmp;
    const tuck = p.tuck ?? pose.tuck;
    const jawOpen = p.jaw ?? pose.jaw;
    const bank = p.bank ?? pose.bank;

    // Wings spread on X. Positive flap lifts both wings (Rz sign flips per side).
    // Tuck folds them back along the body for a dive.
    wingL.sh.rotation.set(0.08 + tuck * 0.7, 0.08 + tuck * 0.45, -0.18 - flap);
    wingR.sh.rotation.set(0.08 + tuck * 0.7, -0.08 - tuck * 0.45, 0.18 + flap);
    const elbowFold = 0.08 + Math.max(0, -flap) * 0.2 + tuck * 0.55;
    wingL.elbow.rotation.set(0.05, 0.06, elbowFold);
    wingR.elbow.rotation.set(0.05, -0.06, -elbowFold);
    wingL.tip.rotation.set(0.04, 0.04, -0.08 - flap * 0.15);
    wingR.tip.rotation.set(0.04, -0.04, 0.08 + flap * 0.15);

    tail.rotation.x = 0.1 + flap * 0.08 - tuck * 0.2;
    tail.rotation.y = bank * 0.15;
    jaw.rotation.x = jawOpen;
    guts.rotation.z = Math.sin(t * 3.2 + phase) * 0.12;
    guts.rotation.x = Math.sin(t * 2.4 + phase) * 0.08;
    guts.position.y = -0.07 + Math.sin(t * 3.2 + phase) * 0.01;
    // Legs reach forward when diving.
    const reach = tuck;
    legL.hip.rotation.set(-0.2 + reach * 1.1, 0, 0.1);
    legR.hip.rotation.set(-0.2 + reach * 1.1, 0, -0.1);
    legL.foot.rotation.x = 0.3 - reach * 0.5;
    legR.foot.rotation.x = 0.3 - reach * 0.5;
    body.rotation.z = bank;
    body.position.y = Math.sin(t * freq + phase) * 0.012 * (1 - tuck);
    Object.assign(pose, { flap, tuck, jaw: jawOpen, bank });
  };

  // Rest pose.
  root.userData.animate(0, { flapAmp: 0.55, jaw: 0.4, tuck: 0 });
  return root;
}

export function countTris(root) {
  let tris = 0, meshes = 0;
  root.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    meshes++;
    const g = o.geometry;
    tris += g.index ? g.index.count / 3 : g.attributes.position.count / 3;
  });
  return { tris: Math.round(tris), meshes };
}

// Bake an articulated bird (rest / mid-flap pose) into a few merged
// geometries tagged with aPart, for a cheap instanced swarm.
const PART = { body: 0, wingL: 1, wingLTip: 2, wingR: 3, wingRTip: 4, tail: 5 };

function partOf(name, ancestors) {
  const n = (name + ' ' + ancestors).toLowerCase();
  if (n.includes('tipl') || n.includes('coverl') && n.includes('prim')) return PART.wingLTip;
  if (n.includes('tipr')) return PART.wingRTip;
  if (n.includes('wingl') || n.includes('elbowl') || n.includes('coverl') || n.includes('membrane') && n.includes('wingl')) return PART.wingL;
  if (n.includes('wingr') || n.includes('elbowr') || n.includes('coverr')) return PART.wingR;
  if (n.includes('tail')) return PART.tail;
  return PART.body;
}

function collectWorld(root) {
  const bins = { flesh: [], bone: [], feather: [], eye: [] };
  const classify = (name, mat) => {
    const n = name.toLowerCase();
    if (n.startsWith('eye')) return 'eye';
    if (n.startsWith('bone') || n.startsWith('talon') || n.startsWith('claw') || n.startsWith('beak') || n.startsWith('ruff')) return 'bone';
    if (n.startsWith('feather') || n.startsWith('membrane') || n.startsWith('ruff')) return 'feather';
    if (mat && (mat.emissiveIntensity || 0) > 0) return 'eye';
    return 'flesh';
  };
  root.updateMatrixWorld(true);
  const walk = (o, anc) => {
    const next = anc + ' ' + (o.name || '');
    if (o.isMesh && o.geometry) {
      const g = o.geometry.clone();
      g.applyMatrix4(o.matrixWorld);
      const part = partOf(o.name || '', anc);
      const n = g.attributes.position.count;
      const a = new Float32Array(n);
      a.fill(part);
      g.setAttribute('aPart', new THREE.BufferAttribute(a, 1));
      if (g.index) g = g.toNonIndexed(); // already cloned; toNonIndexed returns new
      const bin = classify(o.name || '', o.material);
      bins[bin].push(g);
    }
    for (const c of o.children) walk(c, next);
  };
  // Fix: toNonIndexed after setAttribute — redo more carefully below.
  return bins;
}

function bakeBin(geos) {
  if (!geos.length) return null;
  const prepared = geos.map((g) => {
    const h = g.index ? g.toNonIndexed() : g;
    // Rebuild aPart if toNonIndexed dropped it? It should keep attributes.
    return h;
  });
  const merged = mergeGeometries(prepared, false);
  merged.computeVertexNormals();
  return merged;
}

export function bakeBirdGeometry(mats) {
  const g = createBirdGroup(mats, () => 0.5);
  // Mid-flap rest so the baked mesh already has a natural wing spread;
  // the shader then flaps around the shoulders.
  // Bind pose: wings spread flat. The instance shader applies flap/tuck on top.
  g.userData.animate(0, { flapAmp: 0, jaw: 0.45, tuck: 0, freq: 1 });
  const W = g.userData.wings;
  W.L.sh.rotation.set(0, 0, 0);
  W.R.sh.rotation.set(0, 0, 0);
  W.L.elbow.rotation.set(0, 0, 0);
  W.R.elbow.rotation.set(0, 0, 0);
  W.L.tip.rotation.set(0, 0, 0);
  W.R.tip.rotation.set(0, 0, 0);
  g.updateMatrixWorld(true);

  const bins = { flesh: [], bone: [], feather: [], eye: [] };
  const classify = (name) => {
    const n = name.toLowerCase();
    if (n.startsWith('eye')) return 'eye';
    if (n.startsWith('bone') || n.startsWith('talon') || n.startsWith('claw') || n.startsWith('beak')) return 'bone';
    if (n.startsWith('feather') || n.startsWith('membrane') || n.startsWith('ruff')) return 'feather';
    return 'flesh';
  };

  const walk = (o, anc) => {
    const next = anc + ' ' + (o.name || '');
    if (o.isMesh && o.geometry) {
      let geo = o.geometry.clone();
      if (geo.index) geo = geo.toNonIndexed();
      geo.applyMatrix4(o.matrixWorld);
      const n = geo.attributes.position.count;
      const a = new Float32Array(n);
      a.fill(partOf(o.name || '', anc));
      geo.setAttribute('aPart', new THREE.BufferAttribute(a, 1));
      bins[classify(o.name || '')].push(geo);
    }
    for (const c of o.children) walk(c, next);
  };
  walk(g, '');

  // Dispose the template group.
  g.traverse((o) => { if (o.isMesh) o.geometry = o.geometry; });

  return {
    flesh: bakeBin(bins.flesh),
    bone: bakeBin(bins.bone),
    feather: bakeBin(bins.feather),
    eye: bakeBin(bins.eye),
    template: g,
  };
}

function attachFlapShader(material, uniforms) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = uniforms.uTime;
    shader.uniforms.uFlap = uniforms.uFlap;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
        attribute float aPart;
        attribute float aPhase;
        attribute float aTuck;
        uniform float uTime;
        uniform float uFlap;
        vec3 rz(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(p.x*c - p.y*s, p.x*s + p.y*c, p.z); }
        vec3 ry(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(p.x*c + p.z*s, p.y, -p.x*s + p.z*c); }
      `)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        {
          float flap = sin(uTime * 7.4 + aPhase) * uFlap * (1.0 - aTuck);
          float tuck = aTuck;
          vec3 pivot = vec3(0.0, 0.08, 0.04);
          if (aPart > 0.5 && aPart < 2.5) { // left wing, -X; negative Rz lifts
            pivot.x = -0.10;
            float w = aPart < 1.5 ? 0.75 : 1.15;
            vec3 rel = transformed - pivot;
            rel = ry(rel, 0.08 + tuck * 0.45);
            rel = rz(rel, -0.18 - flap * w);
            rel = ry(rel, tuck * 0.2);
            transformed = rel + pivot;
          } else if (aPart > 2.5 && aPart < 4.5) { // right wing, +X; positive Rz lifts
            pivot.x = 0.10;
            float w = aPart < 3.5 ? 0.75 : 1.15;
            vec3 rel = transformed - pivot;
            rel = ry(rel, -0.08 - tuck * 0.45);
            rel = rz(rel, 0.18 + flap * w);
            rel = ry(rel, -tuck * 0.2);
            transformed = rel + pivot;
          } else if (aPart > 4.5) { // tail
            vec3 rel = transformed - vec3(0.0, 0.02, -0.40);
            rel = rz(rel, flap * 0.08);
            transformed = rel + vec3(0.0, 0.02, -0.40);
          }
        }
      `);
    material.userData.shader = shader;
  };
  material.customProgramCacheKey = () => 'buzzard-flap-v1';
}

export function createSwarm(count, mats) {
  const baked = bakeBirdGeometry(mats);
  const uniforms = { uTime: { value: 0 }, uFlap: { value: 0.55 } };

  const fleshMat = mats.flesh.clone(); fleshMat.vertexColors = false;
  const boneMat = mats.bone.clone();
  const featherMat = mats.feather.clone();
  const eyeMat = mats.eye.clone();
  [fleshMat, boneMat, featherMat, eyeMat].forEach((m) => attachFlapShader(m, uniforms));

  const meshes = [];
  const add = (geo, mat) => {
    if (!geo) return;
    const im = new THREE.InstancedMesh(geo, mat, count);
    im.frustumCulled = false;
    im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    meshes.push(im);
  };
  add(baked.flesh, fleshMat);
  add(baked.bone, boneMat);
  add(baked.feather, featherMat);
  add(baked.eye, eyeMat);

  // Per-instance attributes (phase, tuck) on every baked geo.
  const phaseArr = new Float32Array(count);
  const tuckArr = new Float32Array(count);
  for (let i = 0; i < count; i++) phaseArr[i] = i * 0.73;

  const instPhase = new THREE.InstancedBufferAttribute(phaseArr, 1);
  const instTuck = new THREE.InstancedBufferAttribute(tuckArr, 1);
  instTuck.setUsage(THREE.DynamicDrawUsage);
  for (const im of meshes) {
    im.geometry.setAttribute('aPhase', instPhase);
    im.geometry.setAttribute('aTuck', instTuck);
  }

  const dummy = new THREE.Object3D();
  const birds = [];
  for (let i = 0; i < count; i++) {
    birds.push({
      i,
      phase: phaseArr[i],
      // Circle then dive state.
      state: 'circle',
      t: i * -0.35,
      radius: 5.2 + (i % 7) * 0.45,
      height: 5.4 + (i % 5) * 0.4,
      angle: (i / count) * Math.PI * 2,
      speed: 0.7 + (i % 5) * 0.06,
      wave: i % 3,
      x: 0, y: 8, z: 0,
      yaw: 0, pitch: 0, bank: 0, tuck: 0,
      vx: 0, vy: 0, vz: 0,
      scale: 0.92 + (i % 6) * 0.03,
    });
  }

  const group = new THREE.Group();
  group.name = 'swarm';
  for (const im of meshes) group.add(im);

  const target = new THREE.Vector3(0, 1.3, 8);

  function writeInstance(b) {
    dummy.position.set(b.x, b.y, b.z);
    dummy.rotation.set(b.pitch, b.yaw, b.bank, 'YXZ');
    dummy.scale.setScalar(b.scale);
    dummy.updateMatrix();
    for (const im of meshes) im.setMatrixAt(b.i, dummy.matrix);
    tuckArr[b.i] = b.tuck;
  }

  function step(dt, time, aim) {
    if (aim) target.copy(aim);
    uniforms.uTime.value = time;
    for (const b of birds) {
      b.t += dt;
      if (b.state === 'circle') {
        b.angle += b.speed * dt;
        b.x = Math.sin(b.angle) * b.radius;
        b.z = Math.cos(b.angle) * b.radius + 1.5;
        b.y = b.height + Math.sin(time * 1.4 + b.phase) * 0.25;
        b.yaw = b.angle + Math.PI * 0.5;
        b.pitch = -0.12;
        b.bank = 0.28;
        b.tuck += (0 - b.tuck) * Math.min(1, dt * 3);
        // Coordinated waves of ~8 dive at the player, slight stagger inside the wave.
        const waveT = 2.2 + b.wave * 3.4 + (b.i % 4) * 0.12;
        if (b.t > waveT) { b.state = 'dive'; b.t = 0; }
      } else if (b.state === 'dive') {
        const dx = target.x - b.x, dy = target.y - b.y, dz = target.z - b.z;
        const d = Math.hypot(dx, dy, dz) || 1;
        const sp = 10 + Math.min(8, b.t * 6);
        b.vx = (dx / d) * sp; b.vy = (dy / d) * sp; b.vz = (dz / d) * sp;
        b.x += b.vx * dt; b.y += b.vy * dt; b.z += b.vz * dt;
        b.yaw = Math.atan2(b.vx, b.vz);
        b.pitch = -Math.atan2(b.vy, Math.hypot(b.vx, b.vz));
        b.bank = 0;
        b.tuck += (0.85 - b.tuck) * Math.min(1, dt * 4);
        if (d < 1.4 || b.t > 2.2) { b.state = 'climb'; b.t = 0; }
      } else { // climb
        b.y += 5.5 * dt;
        b.x += Math.sin(b.angle) * 1.5 * dt;
        b.z += Math.cos(b.angle) * 1.5 * dt;
        b.yaw = b.angle + Math.PI * 0.5;
        b.pitch = 0.45;
        b.bank = -0.15;
        b.tuck += (0.15 - b.tuck) * Math.min(1, dt * 2);
        if (b.y >= b.height || b.t > 2.0) {
          b.state = 'circle';
          b.t = 0;
          b.angle = Math.atan2(b.x, b.z - 1.5);
        }
      }
      writeInstance(b);
    }
    for (const im of meshes) im.instanceMatrix.needsUpdate = true;
    instTuck.needsUpdate = true;
  }

  // Seed positions.
  step(0, 0, null);

  const trisEach = ['flesh', 'bone', 'feather', 'eye'].reduce((n, k) => {
    const g = baked[k];
    return n + (g ? (g.index ? g.index.count : g.attributes.position.count) / 3 : 0);
  }, 0);

  return {
    group, birds, meshes, uniforms, step, baked,
    count, drawCalls: meshes.length, trisEach: Math.round(trisEach),
  };
}
