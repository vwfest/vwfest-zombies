// Instanced / skinned Carrion Buzzard field. Prefers the Blender GLB
// (skinned close, shared-geometry clones or instanced far). Falls back to
// the procedural LOD field if the GLB is missing.
import * as THREE from 'three';
import { clone as skClone } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { createBirdMaterials } from './textures.js';
import { bakeBirdLOD, BIN_KEYS } from './mesh.js';
import { loadBuzzardAssets } from './loader.js';
import { mergeBuzzard } from './merge.js';

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


function attachInstancedSkin(material, uniforms) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uBoneTex = uniforms.uBoneTex;
    shader.uniforms.uBoneTexW = uniforms.uBoneTexW;
    shader.uniforms.uBoneTexH = uniforms.uBoneTexH;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
        attribute vec4 skinIndex; attribute vec4 skinWeight; attribute float aBoneRow;
        uniform sampler2D uBoneTex; uniform float uBoneTexW; uniform float uBoneTexH;
        mat4 getBoneMatrix(const in float row, const in float bone){
          float y = (row + 0.5) / uBoneTexH;
          float x0 = bone * 4.0;
          vec4 c0 = texture2D(uBoneTex, vec2((x0 + 0.5) / uBoneTexW, y));
          vec4 c1 = texture2D(uBoneTex, vec2((x0 + 1.5) / uBoneTexW, y));
          vec4 c2 = texture2D(uBoneTex, vec2((x0 + 2.5) / uBoneTexW, y));
          vec4 c3 = texture2D(uBoneTex, vec2((x0 + 3.5) / uBoneTexW, y));
          return mat4(c0, c1, c2, c3);
        }
        mat4 buzzardSkin(){
          // Compact instance slot == bone-texture row. gl_InstanceID is reliable
          // on WebGL2; aBoneRow is kept as a fallback if InstanceID is unavailable.
          float row = aBoneRow;
          #ifdef USE_INSTANCING
            row = float(gl_InstanceID);
          #endif
          return skinWeight.x * getBoneMatrix(row, skinIndex.x)
               + skinWeight.y * getBoneMatrix(row, skinIndex.y)
               + skinWeight.z * getBoneMatrix(row, skinIndex.z)
               + skinWeight.w * getBoneMatrix(row, skinIndex.w);
        }
      `)
      .replace('#include <skinnormal_vertex>', `
        {
          mat3 bs = mat3(buzzardSkin());
          objectNormal = bs * objectNormal;
          #ifdef USE_TANGENT
            objectTangent = bs * objectTangent;
          #endif
        }
      `)
      .replace('#include <skinning_vertex>', `
        transformed = (buzzardSkin() * vec4(transformed, 1.0)).xyz;
      `);
  };
  material.customProgramCacheKey = () => 'buzzard-instanced-skin-v2';
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

function blendActs(acts, anim) {
  const dead = anim.dead || 0, flare = anim.flare || 0, tuck = anim.tuck || 0, flap = anim.flap || 0;
  const bank = Math.min(1, Math.abs(anim.bank || 0) / 0.7);
  const death = pickClip(acts, ['death']);
  const strike = pickClip(acts, ['strike']);
  const dive = pickClip(acts, ['dive_tuck', 'dive-tuck', 'diveTuck']);
  const flapA = pickClip(acts, ['flap']);
  const bankA = pickClip(acts, ['bank']);
  const glide = pickClip(acts, ['glide']);
  if (death) death.setEffectiveWeight(dead);
  if (strike) strike.setEffectiveWeight(flare * (1 - dead));
  if (dive) dive.setEffectiveWeight(tuck * (1 - flare) * (1 - dead));
  if (flapA) flapA.setEffectiveWeight(flap * (1 - tuck) * (1 - flare) * (1 - dead));
  if (bankA) bankA.setEffectiveWeight(bank * (1 - flap) * (1 - tuck) * (1 - flare) * (1 - dead));
  const rest = Math.max(0, (1 - flap) * (1 - tuck) * (1 - flare) * (1 - dead) * (1 - bank * 0.6));
  if (glide) glide.setEffectiveWeight(rest);
}

function makeRig(sceneTpl, clips) {
  const root = skClone(sceneTpl);
  let skeleton = null;
  const meshes = [];
  root.traverse((o) => {
    if (!skeleton && o.skeleton) skeleton = o.skeleton;
    if (o.isMesh) meshes.push(o);
  });
  for (const m of meshes) { m.parent && m.parent.remove(m); }
  if (!skeleton) throw new Error('buzzard rig: no skeleton');
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
  return { root, mixer, acts, skeleton };
}

function writeBoneRow(data, row, skeleton, texW) {
  skeleton.update();
  const bm = skeleton.boneMatrices;
  const rowOff = row * texW * 4;
  const n = skeleton.bones.length;
  for (let b = 0; b < n; b++) {
    const s = b * 16, d = rowOff + b * 16;
    for (let k = 0; k < 16; k++) data[d + k] = bm[s + k];
  }
}

function makeBoneTex(max, boneCount) {
  const texW = boneCount * 4, texH = max;
  const boneData = new Float32Array(texW * texH * 4);
  const boneTex = new THREE.DataTexture(boneData, texW, texH, THREE.RGBAFormat, THREE.FloatType);
  boneTex.magFilter = boneTex.minFilter = THREE.NearestFilter;
  boneTex.wrapS = boneTex.wrapT = THREE.ClampToEdgeWrapping;
  boneTex.generateMipmaps = false;
  boneTex.colorSpace = THREE.NoColorSpace;
  boneTex.internalFormat = 'RGBA32F';
  boneTex.needsUpdate = true;
  return {
    boneData, boneTex, texW, texH,
    uniforms: {
      uBoneTex: { value: boneTex },
      uBoneTexW: { value: texW },
      uBoneTexH: { value: texH },
    },
  };
}

function makeSkinned(group, assets, tier, max) {
  const loSrc = assets.lo || assets.hi;
  const hiSrc = assets.hi || null;
  const lo = mergeBuzzard(loSrc, { atlasSize: 512, simplifyEyes: true });
  const hi = (hiSrc && tier > 0) ? mergeBuzzard(hiSrc, { atlasSize: 1024, simplifyEyes: false }) : null;
  const loTpl = loSrc.scene;
  const loClips = loSrc.animations || [];
  const hiTpl = hiSrc ? hiSrc.scene : null;
  const hiClips = (hiSrc && hiSrc.animations && hiSrc.animations.length) ? hiSrc.animations : loClips;

  // Each LOD keeps its own inverse-bind matrices and clips — LO and HI
  // rest poses differ (IBM scale ~0.43 vs ~0.91), so they cannot share a rig.
  const loPack = makeBoneTex(max, lo.boneCount);
  const hiPack = hi ? makeBoneTex(max, hi.boneCount) : null;

  const matLo = lo.material.clone();
  attachInstancedSkin(matLo, loPack.uniforms);
  const matHi = hi ? hi.material.clone() : matLo;
  if (hi) attachInstancedSkin(matHi, hiPack.uniforms);

  function makeIM(merged, mat, shadows) {
    const im = new THREE.InstancedMesh(merged.geometry, mat, max);
    im.frustumCulled = false;
    im.castShadow = shadows;
    im.receiveShadow = false;
    im.count = 0;
    im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    const rows = new Float32Array(max);
    const aRow = new THREE.InstancedBufferAttribute(rows, 1);
    aRow.setUsage(THREE.DynamicDrawUsage);
    im.geometry.setAttribute('aBoneRow', aRow);
    group.add(im);
    return { im, rows, aRow };
  }

  const shadows = tier > 1;
  const poolLo = makeIM(lo, matLo, shadows);
  const poolHi = hi ? makeIM(hi, matHi, shadows) : null;

  const rigsLo = [];
  const rigsHi = [];
  for (let i = 0; i < max; i++) {
    // Hidden armatures + mixers; never added to the scene, so no extra draws.
    rigsLo.push(makeRig(loTpl, loClips));
    if (hiTpl) rigsHi.push(makeRig(hiTpl, hiClips));
  }

  const dummy = new THREE.Object3D();
  const pending = [];
  let lastT = 0;
  const heroN = tier > 1 ? 6 : tier > 0 ? 4 : 0;
  const hiDist = tier > 1 ? 11 : 8;

  function poseAndWrite(rig, pack, row, anim, dt) {
    blendActs(rig.acts, anim);
    rig.mixer.update(dt);
    rig.root.updateMatrixWorld(true);
    writeBoneRow(pack.boneData, row, rig.skeleton, pack.texW);
  }

  return {
    kind: 'skinned',
    max,
    mats: { atlas: matLo },
    get trisLo() { return lo.tris; },
    get trisHi() { return hi ? hi.tris : 0; },
    beginFrame(time) {
      const dt = lastT ? Math.min(0.05, Math.max(0, time - lastT)) : 0.016;
      lastT = time;
      this._dt = dt;
      pending.length = 0;
    },
    setBird(i, x, y, z, pitch, yaw, bank, scale, anim, dist, preferHi) {
      pending.push({ i, x, y, z, pitch, yaw, bank, scale, anim, dist, preferHi });
    },
    commit() {
      pending.sort((a, b) => a.dist - b.dist);
      const dt = this._dt || 0.016;
      let nLo = 0, nHi = 0;
      for (const b of pending) {
        dummy.position.set(b.x, b.y, b.z);
        dummy.rotation.set(b.pitch, b.yaw, b.bank, 'YXZ');
        dummy.scale.setScalar(b.scale);
        dummy.updateMatrix();

        const useHi = !!(poolHi && heroN && b.preferHi && b.dist < hiDist && nHi < heroN);
        if (useHi) {
          // Bone texture row must match the compact instance index (gl_InstanceID).
          poseAndWrite(rigsHi[b.i], hiPack, nHi, b.anim, dt);
          poolHi.im.setMatrixAt(nHi, dummy.matrix);
          poolHi.rows[nHi] = nHi;
          nHi++;
        } else {
          const rig = rigsLo[b.i];
          if (!rig) continue;
          poseAndWrite(rig, loPack, nLo, b.anim, dt);
          poolLo.im.setMatrixAt(nLo, dummy.matrix);
          poolLo.rows[nLo] = nLo;
          nLo++;
        }
      }
      loPack.boneTex.needsUpdate = true;
      if (hiPack) hiPack.boneTex.needsUpdate = true;
      poolLo.im.count = nLo;
      poolLo.im.instanceMatrix.needsUpdate = true;
      poolLo.aRow.needsUpdate = true;
      if (poolHi) {
        poolHi.im.count = nHi;
        poolHi.im.instanceMatrix.needsUpdate = true;
        poolHi.aRow.needsUpdate = true;
      }
    },
    setTier(t) {
      const on = t > 1;
      poolLo.im.castShadow = on;
      if (poolHi) poolHi.im.castShadow = on;
    },
    prewarm(renderer, camera, worldScene) {
      const ident = new THREE.Matrix4();
      if (rigsLo[0]) {
        rigsLo[0].root.updateMatrixWorld(true);
        writeBoneRow(loPack.boneData, 0, rigsLo[0].skeleton, loPack.texW);
        loPack.boneTex.needsUpdate = true;
      }
      poolLo.im.count = 1; poolLo.im.setMatrixAt(0, ident); poolLo.rows[0] = 0;
      poolLo.im.instanceMatrix.needsUpdate = true; poolLo.aRow.needsUpdate = true;
      if (poolHi && rigsHi[0]) {
        rigsHi[0].root.updateMatrixWorld(true);
        writeBoneRow(hiPack.boneData, 0, rigsHi[0].skeleton, hiPack.texW);
        hiPack.boneTex.needsUpdate = true;
        poolHi.im.count = 1; poolHi.im.setMatrixAt(0, ident); poolHi.rows[0] = 0;
        poolHi.im.instanceMatrix.needsUpdate = true; poolHi.aRow.needsUpdate = true;
      }
      try { renderer.compile(group, camera, worldScene || group); } catch (e) { console.warn('[birds] prewarm', e); }
      poolLo.im.count = 0;
      if (poolHi) poolHi.im.count = 0;
    },
    dispose() {
      group.remove(poolLo.im);
      if (poolHi) group.remove(poolHi.im);
      loPack.boneTex.dispose();
      if (hiPack) hiPack.boneTex.dispose();
      lo.geometry.dispose();
      if (hi) hi.geometry.dispose();
    },
  };
}

export function createBirdField(scene, tier = 2, max = 24) {
  const group = new THREE.Group(); group.name = 'birdField';
  scene.add(group);
  // Do not mount the procedural field first — that compiled a unique shader per
  // material bin and blew the program budget even after the GLB swapped in.
  let impl = {
    kind: 'pending', max, trisLo: 0, trisHi: 0,
    beginFrame() {}, setBird() {}, commit() {}, setTier() {}, dispose() {},
  };
  let resolveReady;
  const ready = new Promise((r) => { resolveReady = r; });
  const api = {
    group, ready,
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
    prewarm(renderer, camera, worldScene) { return impl.prewarm?.(renderer, camera, worldScene); },
    dispose() { impl.dispose?.(); scene.remove(group); },
  };
  loadBuzzardAssets().then((assets) => {
    impl.dispose?.();
    while (group.children.length) group.remove(group.children[0]);
    impl = makeSkinned(group, assets, tier, max);
    console.info('[birds] glb field', impl.kind, 'lo', impl.trisLo, 'hi', impl.trisHi);
    resolveReady(api);
  }).catch((e) => {
    console.warn('[birds] staying procedural:', e && e.message ? e.message : e);
    impl = makeProcedural(scene, tier, max, group);
    resolveReady(api);
  });
  return api;
}
