// Original procedural Carrion Buzzard mesh. Silhouette is keyed to concept-01:
// bald mint head, hooked open beak, cream ruff, exposed ribcage, two-tone wings, reaching talons.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const PART = { body: 0, wingL: 1, wingLTip: 2, wingR: 3, wingRTip: 4, tail: 5, legs: 6 };

function mesh(geo, mat, name, pos, rot, scale) {
  const m = new THREE.Mesh(geo, mat); m.name = name || '';
  if (pos) m.position.set(pos[0], pos[1], pos[2]);
  if (rot) m.rotation.set(rot[0], rot[1], rot[2]);
  if (scale) m.scale.set(scale[0], scale[1], scale[2]);
  return m;
}
function cyl(a, b, h, s = 6) { return new THREE.CylinderGeometry(a, b, h, s, 1); }
function sph(r, det = 1) { return new THREE.SphereGeometry(r, 6 + det * 2, 5 + det); }
function box(x, y, z) { return new THREE.BoxGeometry(x, y, z); }

/** Wing planform in XZ, cambered, with torn holes. UVs run along +X so the feather map goes dark→pale toward the tip. */
function wingSheet() {
  const s = new THREE.Shape();
  s.moveTo(0.02, 0.06);
  s.bezierCurveTo(0.24, 0.2, 0.52, 0.24, 0.86, 0.14);
  s.bezierCurveTo(1.08, 0.07, 1.22, -0.04, 1.28, -0.16);
  s.lineTo(1.16, -0.26);
  s.bezierCurveTo(0.92, -0.2, 0.58, -0.22, 0.3, -0.15);
  s.bezierCurveTo(0.12, -0.1, 0.03, -0.03, 0.0, 0.0);
  s.closePath();
  const h1 = new THREE.Path(); h1.absellipse(0.5, 0.0, 0.1, 0.05, 0, Math.PI * 2, true);
  const h2 = new THREE.Path(); h2.absellipse(0.82, -0.04, 0.08, 0.04, 0, Math.PI * 2, true);
  s.holes.push(h1, h2);
  const g = new THREE.ShapeGeometry(s, 8);
  g.rotateX(-Math.PI / 2);
  g.rotateY(-0.08);
  const pos = g.attributes.position, uv = g.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    pos.setY(i, pos.getY(i) + Math.sin(Math.min(1, Math.max(0, x / 1.28)) * Math.PI) * 0.04);
    if (uv) uv.setX(i, Math.min(1, Math.max(0, x / 1.28)));
  }
  g.computeVertexNormals();
  return g;
}

function addRuff(parent, mats, hi) {
  const n = hi ? 16 : 8;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const len = 0.11 + (i % 3) * 0.02;
    const q = box(len, 0.016, 0.046); q.translate(len * 0.5, 0, 0);
    const m = mesh(q, mats.ruff, 'ruff-quill');
    m.position.set(Math.cos(a) * 0.045, Math.sin(a) * 0.032, 0.0);
    m.rotation.z = a;
    m.rotation.y = 0.85; // collar points back over the shoulders
    parent.add(m);
  }
}

function addRibcage(body, mats, hi) {
  const n = hi ? 9 : 5;
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const z = 0.18 - t * 0.34;
    const rad = 0.16 + Math.sin(t * Math.PI) * 0.055;
    const arc = new THREE.TorusGeometry(rad, hi ? 0.009 : 0.012, 4, hi ? 12 : 7, Math.PI * 0.95);
    // hang the cage under the back, opening toward the camera / ground
    arc.rotateZ(Math.PI);
    arc.rotateX(0.55);
    body.add(mesh(arc, mats.bone, 'bone-rib', [0, -0.02, z], [0.12, 0, 0]));
  }
  body.add(mesh(cyl(0.011, 0.009, 0.36, 5), mats.bone, 'bone-sternum', [0, -0.055, 0.04], [Math.PI / 2 + 0.15, 0, 0]));
  body.add(mesh(cyl(0.016, 0.012, 0.42, 5), mats.bone, 'bone-spine', [0, 0.05, -0.04], [Math.PI / 2 + 0.18, 0, 0]));
}

function addWings(body, mats, hi) {
  function make(side) {
    const sh = new THREE.Group(); sh.name = side > 0 ? 'wingR' : 'wingL';
    sh.position.set(side * 0.1, 0.07, 0.02); body.add(sh);
    sh.add(mesh(cyl(0.012, 0.01, 0.36, 5), mats.bone, 'bone-humerus', [side * 0.17, 0.02, 0], [0, 0, side * Math.PI / 2]));
    const elbow = new THREE.Group(); elbow.name = side > 0 ? 'elbowR' : 'elbowL';
    elbow.position.set(side * 0.36, 0, -0.02); sh.add(elbow);
    elbow.add(mesh(cyl(0.01, 0.008, 0.42, 5), mats.bone, 'bone-ulna', [side * 0.2, 0.012, -0.02], [0.1, 0, side * Math.PI / 2]));
    const tip = new THREE.Group(); tip.name = side > 0 ? 'tipR' : 'tipL';
    tip.position.set(side * 0.42, 0, -0.08); elbow.add(tip);
    tip.add(mesh(cyl(0.008, 0.005, 0.26, 4), mats.bone, 'bone-manus', [side * 0.1, 0, -0.03], [0.2, 0, side * Math.PI / 2]));

    const sheet = wingSheet();
    const mem = mesh(sheet, mats.feather, 'feather-membrane');
    mem.position.set(0, -0.01, -0.04); mem.scale.set(side, 1, 1); sh.add(mem);
    if (hi) {
      const cover = mesh(sheet.clone(), mats.feather, 'feather-cover');
      cover.position.set(0, 0.016, -0.03); cover.scale.set(side * 0.92, 1, 0.88); sh.add(cover);
    }
    // Splayed primaries — sample the pale end of the feather map via UV offset
    const primN = hi ? 8 : 4;
    for (let i = 0; i < primN; i++) {
      const t = i / Math.max(1, primN - 1);
      const len = 0.28 + (1 - t) * 0.1;
      const q = box(len, 0.01, 0.048); q.translate(len * 0.5, 0, 0);
      const uv = q.attributes.uv;
      if (uv) for (let v = 0; v < uv.count; v++) uv.setX(v, 0.55 + uv.getX(v) * 0.45);
      const m = mesh(q, mats.feather, 'feather-prim');
      m.position.set(side * 0.05, 0.0, 0.02 - i * 0.03);
      m.rotation.set(0, side > 0 ? -0.08 - t * 0.12 : Math.PI + 0.08 + t * 0.12, 0);
      tip.add(m);
    }
    return sh;
  }
  make(-1); make(1);
}

function addLegs(body, mats, hi) {
  function make(side) {
    const hip = new THREE.Group(); hip.name = side > 0 ? 'legR' : 'legL';
    hip.position.set(side * 0.055, -0.06, 0.04); body.add(hip);
    hip.add(mesh(cyl(0.02, 0.014, 0.16, 6), mats.flesh, 'flesh-thigh', [0, -0.09, 0.01], [0.35, 0, 0]));
    const foot = new THREE.Group(); foot.name = side > 0 ? 'footR' : 'footL';
    foot.position.set(0, -0.18, 0.05); hip.add(foot);
    foot.add(mesh(cyl(0.012, 0.009, 0.12, 5), mats.flesh, 'flesh-shin', [0, -0.04, 0.02], [0.5, 0, 0]));
    const toes = hi
      ? [[0.055, 0.09, 0.22], [-0.055, 0.09, -0.22], [0.0, 0.11, 0], [0.0, -0.07, Math.PI]]
      : [[0.04, 0.09, 0.2], [-0.04, 0.09, -0.2], [0, 0.1, 0]];
    for (const [x, z, yaw] of toes) {
      foot.add(mesh(cyl(0.007, 0.003, 0.085, 5), mats.bone, 'talon', [x, -0.02, z], [1.2, yaw, 0]));
      const claw = new THREE.ConeGeometry(0.007, 0.045, 5);
      claw.translate(0, 0.022, 0); claw.rotateX(Math.PI / 2);
      foot.add(mesh(claw, mats.bone, 'claw', [x * 1.15, -0.04, z + (z >= 0 ? 0.055 : -0.055)], [0.95, yaw, 0]));
    }
  }
  make(-1); make(1);
}

export function buildBirdGroup(mats, lod = 'hi') {
  const hi = lod === 'hi';
  const root = new THREE.Group(); root.name = 'buzzard';
  const body = new THREE.Group(); body.name = 'body'; root.add(body);

  // Dorsal cape only — the chest is an open ribcage, as in the concept.
  const back = new THREE.SphereGeometry(0.16, hi ? 12 : 8, 8, 0, Math.PI * 2, 0, Math.PI * 0.55);
  body.add(mesh(back, mats.flesh, 'flesh-back', [0, 0.06, -0.02], [0.9, 0, 0], [1.05, 0.7, 1.35]));
  // Dark feather mantle over the back
  const mantleN = hi ? 7 : 3;
  for (let i = 0; i < mantleN; i++) {
    const z = 0.06 - i * 0.07, w = 0.16 + i * 0.01, len = 0.12;
    const q = box(w, 0.012, len); q.translate(0, 0, -len * 0.3);
    body.add(mesh(q, mats.feather, 'feather-mantle', [0, 0.1 - i * 0.01, z], [0.25, 0, 0]));
  }

  body.add(mesh(box(0.12, 0.1, 0.16), mats.viscera, 'viscera-cavity', [0, -0.04, 0.06]));
  addRibcage(body, mats, hi);

  const guts = new THREE.Group(); guts.name = 'guts'; guts.position.set(0, -0.1, 0.1); body.add(guts);
  guts.add(mesh(sph(0.045, 1), mats.viscera, 'viscera-1', [0.015, -0.03, 0.02]));
  guts.add(mesh(sph(0.032, 1), mats.viscera, 'viscera-2', [-0.025, -0.08, 0.0]));
  if (hi) {
    guts.add(mesh(cyl(0.009, 0.004, 0.14, 5), mats.viscera, 'viscera-strand', [0.02, -0.12, 0.03], [0.25, 0, 0.1]));
    guts.add(mesh(cyl(0.007, 0.003, 0.16, 5), mats.viscera, 'viscera-strand2', [-0.015, -0.15, 0.0], [0.35, 0, -0.1]));
    guts.add(mesh(cyl(0.005, 0.003, 0.1, 4), mats.viscera, 'viscera-drip', [0.0, -0.18, 0.04]));
  }

  const neck = new THREE.Group(); neck.name = 'neck'; neck.position.set(0, 0.06, 0.2); body.add(neck);
  neck.add(mesh(cyl(0.042, 0.055, 0.08, 8), mats.flesh, 'flesh-neck1', [0, 0.02, 0.03], [0.95, 0, 0]));
  neck.add(mesh(cyl(0.034, 0.042, 0.07, 8), mats.flesh, 'flesh-neck2', [0, 0.05, 0.085], [0.7, 0, 0]));
  neck.add(mesh(cyl(0.03, 0.034, 0.06, 8), mats.flesh, 'flesh-neck3', [0, 0.08, 0.13], [0.45, 0, 0]));
  const ruff = new THREE.Group(); ruff.name = 'ruff'; ruff.position.set(0, 0.0, 0.0); neck.add(ruff);
  addRuff(ruff, mats, hi);

  const head = new THREE.Group(); head.name = 'head'; head.position.set(0, 0.1, 0.17); neck.add(head);
  head.add(mesh(sph(0.078, hi ? 2 : 1), mats.flesh, 'flesh-head', [0, 0.012, 0.02], [0, 0, 0], [0.9, 0.8, 1.15]));
  // Recessed eye sockets
  for (const sx of [-1, 1]) {
    head.add(mesh(sph(0.022, 1), mats.flesh, 'flesh-socket', [sx * 0.04, 0.028, 0.075], [0, 0, 0], [0.9, 0.7, 0.5]));
  }
  if (hi) {
    head.add(mesh(box(0.03, 0.055, 0.022), mats.flesh, 'flesh-wattle', [0.032, -0.04, 0.045], [0.35, 0, 0.2]));
    head.add(mesh(box(0.03, 0.055, 0.022), mats.flesh, 'flesh-wattle2', [-0.032, -0.04, 0.045], [0.35, 0, -0.2]));
    // dried blood at the eye
    head.add(mesh(box(0.02, 0.03, 0.01), mats.viscera, 'viscera-tear', [0.045, 0.01, 0.08], [0.4, 0, 0]));
  }
  // Hooked upper beak, baked slightly open
  const beakUpper = new THREE.ConeGeometry(0.038, 0.19, hi ? 10 : 7);
  beakUpper.translate(0, 0.095, 0); beakUpper.rotateX(Math.PI / 2);
  head.add(mesh(beakUpper, mats.beak, 'beak-upper', [0, -0.01, 0.1], [0.65, 0, 0]));
  const hook = new THREE.ConeGeometry(0.016, 0.08, 6);
  hook.translate(0, 0.04, 0); hook.rotateX(Math.PI / 2);
  head.add(mesh(hook, mats.beak, 'beak-hook', [0, -0.06, 0.255], [1.35, 0, 0]));
  // Jaw hangs open (signature scream from the concept)
  const jaw = new THREE.Group(); jaw.name = 'jaw'; jaw.position.set(0, -0.03, 0.08); jaw.rotation.x = 0.7; head.add(jaw);
  const beakLower = new THREE.ConeGeometry(0.026, 0.13, 7);
  beakLower.translate(0, 0.065, 0); beakLower.rotateX(Math.PI / 2);
  jaw.add(mesh(beakLower, mats.beak, 'beak-lower', [0, -0.01, 0.02], [0.15, 0, 0]));
  jaw.add(mesh(box(0.02, 0.01, 0.06), mats.viscera, 'viscera-tongue', [0, 0.005, 0.05]));
  if (hi) jaw.add(mesh(cyl(0.004, 0.002, 0.07, 4), mats.viscera, 'viscera-drool', [0.01, -0.04, 0.1], [0.8, 0, 0]));

  const eyes = new THREE.Group(); eyes.name = 'eyes'; head.add(eyes);
  for (const sx of [-1, 1]) {
    eyes.add(mesh(sph(0.018, 1), mats.eye, 'eye', [sx * 0.04, 0.03, 0.092]));
    eyes.add(mesh(sph(0.008, 0), mats.eyeCore, 'eye-core', [sx * 0.04, 0.03, 0.106]));
  }

  const tail = new THREE.Group(); tail.name = 'tail'; tail.position.set(0, 0.04, -0.36); body.add(tail);
  const tailN = hi ? 9 : 5;
  for (let i = 0; i < tailN; i++) {
    const a = (i - (tailN - 1) / 2) * 0.13;
    const len = 0.32 + (i === ((tailN - 1) / 2 | 0) ? 0.08 : 0);
    const q = box(0.05, 0.01, len); q.translate(0, 0, -len * 0.5);
    const m = mesh(q, mats.feather, 'feather-tail');
    m.rotation.y = a; m.rotation.x = 0.08; tail.add(m);
  }

  addWings(body, mats, hi);
  addLegs(body, mats, hi);
  root.updateMatrixWorld(true);
  return root;
}

function partOf(name, anc) {
  const n = (name + ' ' + anc).toLowerCase();
  if (n.includes('tipl') || (n.includes('prim') && n.includes('wingl'))) return PART.wingLTip;
  if (n.includes('tipr') || (n.includes('prim') && n.includes('wingr'))) return PART.wingRTip;
  if (n.includes('wingl') || n.includes('elbowl')) return PART.wingL;
  if (n.includes('wingr') || n.includes('elbowr')) return PART.wingR;
  if (n.includes('tail')) return PART.tail;
  if (n.includes('leg') || n.includes('foot') || n.includes('talon') || n.includes('claw') || n.includes('thigh') || n.includes('shin')) return PART.legs;
  return PART.body;
}
function classify(name) {
  const n = name.toLowerCase();
  if (n.startsWith('eye')) return 'eye';
  if (n.startsWith('beak')) return 'beak';
  if (n.startsWith('ruff')) return 'ruff';
  if (n.startsWith('bone') || n.startsWith('talon') || n.startsWith('claw')) return 'bone';
  if (n.startsWith('feather') || n.startsWith('membrane')) return 'feather';
  if (n.startsWith('viscera')) return 'viscera';
  return 'flesh';
}

export const BIN_KEYS = ['flesh', 'bone', 'feather', 'viscera', 'eye', 'ruff', 'beak'];

export function bakeBirdLOD(mats, lod = 'hi') {
  const g = buildBirdGroup(mats, lod);
  g.updateMatrixWorld(true);
  const bins = Object.fromEntries(BIN_KEYS.map((k) => [k, []]));
  const walk = (o, anc) => {
    const next = anc + ' ' + (o.name || '');
    if (o.isMesh && o.geometry) {
      let geo = o.geometry.clone();
      if (geo.index) geo = geo.toNonIndexed();
      geo.applyMatrix4(o.matrixWorld);
      const n = geo.attributes.position.count;
      const a = new Float32Array(n); a.fill(partOf(o.name || '', anc));
      geo.setAttribute('aPart', new THREE.BufferAttribute(a, 1));
      bins[classify(o.name || '')].push(geo);
    }
    for (const c of o.children) walk(c, next);
  };
  walk(g, '');
  const baked = {};
  let tris = 0;
  for (const k of BIN_KEYS) {
    if (!bins[k].length) { baked[k] = null; continue; }
    const m = mergeGeometries(bins[k], false);
    m.computeVertexNormals();
    baked[k] = m;
    tris += (m.index ? m.index.count : m.attributes.position.count) / 3;
  }
  g.traverse((o) => { if (o.isMesh) o.geometry.dispose?.(); });
  return { ...baked, tris: Math.round(tris), lod };
}
