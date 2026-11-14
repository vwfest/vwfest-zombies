// Instanced / skinned Carrion Buzzard field. Prefers the Blender GLB
// (skinned close, shared-geometry clones or instanced far). Falls back to
// the procedural LOD field if the GLB is missing.
import * as THREE from 'three';
import { clone as skClone } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { createBirdMaterials } from './textures.js';
import { bakeBirdLOD, BIN_KEYS } from './mesh.js';
import { loadBuzzardAssets, lodMeshes, clipMap } from './loader.js';

const MAT_KEY = { flesh: 'flesh', bone: 'bone', feather: 'feather', viscera: 'viscera', eye: 'eye', ruff: 'ruff', beak: 'beak' };

function attachFlightShader(material, uniforms) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = uniforms.uTime;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
        attribute float aPart; attribute float aPhase; attribute float aFlap;
        attribute float aTuck; attribute float aFlare; attribute float aDead;
        uniform float uTime;
        vec3 rz(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(p.x*c - p.y*s, p.x*s + p.y*c, p.z); }
        vec3 ry(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(p.x*c + p.z*s, p.y, -p.x*s + p.z*c); }
        vec3 rx(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(p.x, p.y*c - p.z*s, p.y*s + p.z*c); }
      `)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        {
          float flap = sin(uTime * 8.0 + aPhase) * aFlap * (1.0 - aTuck) * (1.0 - aDead * 0.7);
          float open = 0.16 + aFlare * 0.45 - aTuck * 0.12;
          float back = aTuck * 0.85 - aFlare * 0.08;
          vec3 pivot = vec3(0.0, 0.08, 0.04);
          if (aPart > 0.5 && aPart < 2.5) {
            pivot.x = -0.10;
            float w = aPart < 1.5 ? 0.75 : 1.2;
            vec3 rel = transformed - pivot;
            rel = ry(rel, 0.06 + back * 0.7);
            rel = rz(rel, -open - flap * w);
            rel = rx(rel, aTuck * 0.35);
            transformed = rel + pivot;
          } else if (aPart > 2.5 && aPart < 4.5) {
            pivot.x = 0.10;
            float w = aPart < 3.5 ? 0.75 : 1.2;
            vec3 rel = transformed - pivot;
            rel = ry(rel, -0.06 - back * 0.7);
            rel = rz(rel, open + flap * w);
            rel = rx(rel, aTuck * 0.35);
            transformed = rel + pivot;
          } else if (aPart > 4.5 && aPart < 5.5) {
            vec3 rel = transformed - vec3(0.0, 0.04, -0.36);
            rel = rx(rel, flap * 0.08 - aTuck * 0.25 + aFlare * 0.2);
            transformed = rel + vec3(0.0, 0.04, -0.36);
          } else if (aPart > 5.5) {
            vec3 rel = transformed - vec3(0.0, -0.06, 0.04);
            rel = rx(rel, -(aTuck * 0.7 + aFlare * 1.1));
            transformed = rel + vec3(0.0, -0.06, 0.04);
          }
        }
      `);
  };
  material.customProgramCacheKey = () => 'buzzard-flight-v4';
}

function makeAttrs(max) {
  const phase = new Float32Array(max), flap = new Float32Array(max), tuck = new Float32Array(max);
  const flare = new Float32Array(max), dead = new Float32Array(max);
  return {
    phase, flap, tuck, flare, dead,
    aPhase: new THREE.InstancedBufferAttribute(phase, 1).setUsage(THREE.DynamicDrawUsage),
    aFlap: new THREE.InstancedBufferAttribute(flap, 1).setUsage(THREE.DynamicDrawUsage),
    aTuck: new THREE.InstancedBufferAttribute(tuck, 1).setUsage(THREE.DynamicDrawUsage),
    aFlare: new THREE.InstancedBufferAttribute(flare, 1).setUsage(THREE.DynamicDrawUsage),
    aDead: new THREE.InstancedBufferAttribute(dead, 1).setUsage(THREE.DynamicDrawUsage),
  };
}

function makeProcedural(scene, tier, max, group) {
  const mats = createBirdMaterials(tier);
  const uniforms = { uTime: { value: 0 } };
  const useHi = tier > 0;
  const lods = { lo: bakeBirdLOD(mats, 'lo'), hi: useHi ? bakeBirdLOD(mats, 'hi') : null };
  const shaderMats = {};
  for (const k of BIN_KEYS) {
    const src = mats[MAT_KEY[k]];
    if (!src) continue;
    const m = src.clone();
    attachFlightShader(m, uniforms);
    shaderMats[k] = m;
  }
  const pools = { lo: [], hi: [] };
  function makePool(lodName, baked) {
    if (!baked) return;
    for (const k of BIN_KEYS) {
      if (!baked[k] || !shaderMats[k]) continue;
      const im = new THREE.InstancedMesh(baked[k], shaderMats[k], max);
      im.frustumCulled = false; im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      im.castShadow = tier > 1; im.count = 0;
      group.add(im); pools[lodName].push({ im, key: k });
    }
  }
  makePool('lo', lods.lo);
  if (useHi) makePool('hi', lods.hi);
  const pack = { lo: makeAttrs(max), hi: makeAttrs(max) };
  for (const lodName of ['lo', 'hi']) {
    for (const p of pools[lodName]) {
      const A = pack[lodName];
      p.im.geometry.setAttribute('aPhase', A.aPhase);
      p.im.geometry.setAttribute('aFlap', A.aFlap);
      p.im.geometry.setAttribute('aTuck', A.aTuck);
      p.im.geometry.setAttribute('aFlare', A.aFlare);
      p.im.geometry.setAttribute('aDead', A.aDead);
    }
  }
  const dummy = new THREE.Object3D();
  const hiIdx = [], loIdx = [];
  const matrices = Array.from({ length: max }, () => new THREE.Matrix4());
  return {
    kind: 'procedural',
    mats, lods, uniforms, max,
    get trisLo() { return lods.lo.tris; },
    get trisHi() { return lods.hi ? lods.hi.tris : 0; },
    beginFrame(time) { uniforms.uTime.value = time; hiIdx.length = 0; loIdx.length = 0; },
    setBird(i, x, y, z, pitch, yaw, bank, scale, anim, dist, preferHi) {
      dummy.position.set(x, y, z);
      dummy.rotation.set(pitch, yaw, bank, 'YXZ');
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      matrices[i].copy(dummy.matrix);
      const lod = (useHi && preferHi && dist < 11) ? 'hi' : 'lo';
      const list = lod === 'hi' ? hiIdx : loIdx;
      const slot = list.length; list.push(i);
      const A = pack[lod];
      A.phase[slot] = anim.phase; A.flap[slot] = anim.flap; A.tuck[slot] = anim.tuck;
      A.flare[slot] = anim.flare; A.dead[slot] = anim.dead || 0;
      for (const p of pools[lod]) p.im.setMatrixAt(slot, matrices[i]);
    },
    commit() {
      for (const lodName of ['lo', 'hi']) {
        const n = (lodName === 'hi' ? hiIdx : loIdx).length;
        const A = pack[lodName];
        A.aPhase.needsUpdate = true; A.aFlap.needsUpdate = true; A.aTuck.needsUpdate = true;
        A.aFlare.needsUpdate = true; A.aDead.needsUpdate = true;
        for (const p of pools[lodName]) { p.im.count = n; p.im.instanceMatrix.needsUpdate = true; }
      }
    },
    setTier(t) {
      const shadows = t > 1;
      for (const lodName of ['lo', 'hi']) for (const p of pools[lodName]) p.im.castShadow = shadows;
    },
    dispose() {
      for (const lodName of ['lo', 'hi']) for (const p of pools[lodName]) group.remove(p.im);
    },
  };
}

function pickClip(acts, names) {
  for (const n of names) if (acts[n]) return acts[n];
  return null;
}

function makeOne(sceneTpl, clips, shadows) {
  const root = skClone(sceneTpl);
  root.visible = false;
  root.traverse((o) => {
    if (o.isMesh) { o.frustumCulled = false; o.castShadow = shadows; o.receiveShadow = true; }
  });
  const mixer = new THREE.AnimationMixer(root);
  const acts = {};
  for (const c of clips) {
    const a = mixer.clipAction(c);
    a.enabled = true;
    a.setEffectiveWeight(0);
    a.play();
    acts[c.name] = a;
  }
  const glide = pickClip(acts, ['glide']);
  if (glide) glide.setEffectiveWeight(1);
  return { root, mixer, acts, used: false };
}

function setLodVisible(root, want) {
  // want: 'LOD0' | 'LOD1' | 'LOD2' | null (hide all)
  root.traverse((o) => {
    if (!o.isMesh) return;
    if (!want) { o.visible = true; return; }
    const n = o.name;
    if (n.startsWith('LOD0') || n.startsWith('LOD1') || n.startsWith('LOD2')) {
      o.visible = n.startsWith(want);
    }
  });
}

function blendActs(acts, anim) {
  const dead = anim.dead || 0, flare = anim.flare || 0, tuck = anim.tuck || 0, flap = anim.flap || 0;
  const death = pickClip(acts, ['death']);
  const strike = pickClip(acts, ['strike']);
  const dive = pickClip(acts, ['dive_tuck', 'dive-tuck', 'diveTuck']);
  const flapA = pickClip(acts, ['flap']);
  const glide = pickClip(acts, ['glide']);
  if (death) death.setEffectiveWeight(dead);
  if (strike) strike.setEffectiveWeight(flare * (1 - dead));
  if (dive) dive.setEffectiveWeight(tuck * (1 - flare) * (1 - dead));
  if (flapA) flapA.setEffectiveWeight(flap * (1 - tuck) * (1 - flare) * (1 - dead));
  if (glide) glide.setEffectiveWeight(Math.max(0, (1 - flap) * (1 - tuck) * (1 - flare) * (1 - dead)));
}

function makeSkinned(group, assets, tier, max) {
  const shadows = tier > 1;
  const loTpl = (assets.lo || assets.hi).scene;
  const loClips = (assets.lo || assets.hi).animations || [];
  const hiTpl = assets.hi ? assets.hi.scene : null;
  const hiClips = assets.hi ? assets.hi.animations : loClips;
  // Phone / low (tier 0): never LOD0 — all birds are lo clones (shared geom).
  const heroN = tier > 1 ? 6 : tier > 0 ? 4 : 0;
  const far = [];
  for (let i = 0; i < max; i++) {
    const s = makeOne(loTpl, loClips, shadows);
    group.add(s.root);
    setLodVisible(s.root, 'LOD2');
    far.push(s);
  }
  const hero = [];
  for (let i = 0; i < heroN; i++) {
    const s = makeOne(hiTpl || loTpl, hiClips, shadows);
    group.add(s.root);
    setLodVisible(s.root, 'LOD1');
    hero.push(s);
  }
  const pending = [];
  let lastT = 0, trisLo = 0, trisHi = 0;
  function countTris(root, prefix) {
    let t = 0;
    root.traverse((o) => {
      if (!o.isMesh || !o.geometry) return;
      if (prefix && !String(o.name || '').startsWith(prefix)) return;
      const g = o.geometry;
      t += (g.index ? g.index.count : g.attributes.position.count) / 3;
    });
    return Math.round(t);
  }
  trisLo = countTris((assets.lo || assets.hi).scene, 'LOD2') || countTris((assets.lo || assets.hi).scene, '');
  if (assets.hi) trisHi = countTris(assets.hi.scene, 'LOD0') || countTris(assets.hi.scene, '');

  return {
    kind: 'skinned',
    max,
    get trisLo() { return Math.round(trisLo); },
    get trisHi() { return Math.round(trisHi); },
    beginFrame(time) {
      const dt = lastT ? Math.min(0.05, Math.max(0, time - lastT)) : 0.016;
      lastT = time;
      this._dt = dt;
      pending.length = 0;
      for (const s of far) { s.used = false; s.root.visible = false; }
      for (const s of hero) { s.used = false; s.root.visible = false; }
    },
    setBird(i, x, y, z, pitch, yaw, bank, scale, anim, dist, preferHi) {
      pending.push({ i, x, y, z, pitch, yaw, bank, scale, anim, dist, preferHi });
    },
    commit() {
      pending.sort((a, b) => a.dist - b.dist);
      const dt = this._dt || 0.016;
      let h = 0;
      for (const b of pending) {
        const close = heroN && b.preferHi && b.dist < (tier > 1 ? 11 : 8) && h < hero.length;
        const s = close ? hero[h++] : far[b.i];
        if (!s) continue;
        s.used = true;
        s.root.visible = true;
        s.root.position.set(b.x, b.y, b.z);
        s.root.rotation.set(b.pitch, b.yaw, b.bank, 'YXZ');
        s.root.scale.setScalar(b.scale);
        // hi GLB is budget-packed as LOD0 only; lo is LOD2. Phone never gets a hero slot.
        if (close) setLodVisible(s.root, 'LOD0');
        else setLodVisible(s.root, 'LOD2');
        blendActs(s.acts, b.anim);
        s.mixer.update(dt);
      }
    },
    setTier(t) {
      const shadowsOn = t > 1;
      for (const s of far.concat(hero)) s.root.traverse((o) => { if (o.isMesh) o.castShadow = shadowsOn; });
    },
    dispose() {
      for (const s of far.concat(hero)) group.remove(s.root);
    },
  };
}

export function createBirdField(scene, tier = 2, max = 24) {
  const group = new THREE.Group(); group.name = 'birdField';
  scene.add(group);
  let impl = makeProcedural(scene, tier, max, group);
  const api = {
    group,
    get mats() { return impl.mats; },
    get lods() { return impl.lods; },
    get max() { return impl.max; },
    get trisLo() { return impl.trisLo; },
    get trisHi() { return impl.trisHi; },
    get kind() { return impl.kind; },
    beginFrame(...a) { return impl.beginFrame(...a); },
    setBird(...a) { return impl.setBird(...a); },
    commit(...a) { return impl.commit(...a); },
    setTier(t) { return impl.setTier?.(t); },
    dispose() { impl.dispose?.(); scene.remove(group); },
  };
  loadBuzzardAssets().then((assets) => {
    impl.dispose?.();
    while (group.children.length) group.remove(group.children[0]);
    impl = makeSkinned(group, assets, tier, max);
    console.info('[birds] glb field', impl.kind, 'lo', impl.trisLo, 'hi', impl.trisHi);
  }).catch((e) => {
    console.warn('[birds] staying procedural:', e && e.message ? e.message : e);
  });
  return api;
}
