// v6-derived zombies from pre-baked packs: 4 bodies (2 male, 2 female; slim/regular/heavy; tee, hawaiian, overalls, vest) x near/mid/far LOD.
import * as THREE from 'three';
import data from '../../assets/zombies.bin';
import { unpack, posAttr, nrmAttr } from './pack.js';
const { meta, view } = unpack(data); const T = {};
for (const m of meta) { const g = new THREE.BufferGeometry(); g.setAttribute('position', posAttr(view, m)); g.setAttribute('normal', nrmAttr(view, m)); g.setAttribute('skinIndex', new THREE.BufferAttribute(view(Uint8Array, m.si), 4)); g.setAttribute('skinWeight', new THREE.BufferAttribute(view(Uint8Array, m.sw), 4, true)); g.setIndex(new THREE.BufferAttribute(view(Uint16Array, m.idx), 1));
  m.groups.forEach((gr) => g.addGroup(gr.start, gr.count, gr.slot >= 0 ? gr.slot : 3)); g.computeBoundingSphere(); T[m.tag] = { g, m }; }
export const VARIANTS = 4, LODS = ['near', 'mid', 'far'];
const shared = new Map(); const colMat = (hex) => { let m = shared.get(hex); if (!m) { const c = new THREE.Color('#' + hex).multiplyScalar(0.6); m = new THREE.MeshStandardMaterial({ color: c, roughness: 0.85 }); shared.set(hex, m); } return m; };
// procedural rot + tears in object space (no UVs, no alpha holes: tears show rotten skin underneath)
const NOISE = `float zh(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);} float zn(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(zh(i),zh(i+vec3(1,0,0)),f.x),mix(zh(i+vec3(0,1,0)),zh(i+vec3(1,1,0)),f.x),f.y),mix(mix(zh(i+vec3(0,0,1)),zh(i+vec3(1,0,1)),f.x),mix(zh(i+vec3(0,1,1)),zh(i+vec3(1,1,1)),f.x),f.y),f.z);}`;
function zmat(kind, seed) { const m = new THREE.MeshStandardMaterial({ roughness: kind === 0 ? 0.7 : 0.95 }); m.userData.seed = { value: seed };
  m.onBeforeCompile = (s) => { s.uniforms.zSeed = m.userData.seed; s.vertexShader = s.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vZ;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvZ = position;');
    s.fragmentShader = s.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vZ; uniform float zSeed;\n' + NOISE).replace('#include <color_fragment>', `#include <color_fragment>
      vec3 q = vZ*vec3(18.)+zSeed; float n = zn(q)*0.6+zn(q*2.3)*0.4;
      ${kind === 0 ? 'diffuseColor.rgb *= mix(vec3(0.55,0.62,0.5), vec3(1.0), smoothstep(0.25,0.75,n)); float b = smoothstep(0.78,0.86,zn(q*0.7+3.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.25,0.03,0.04), b*0.8);'
        : 'float t = smoothstep(0.71,0.74,n); float e = smoothstep(0.66,0.71,n)-t; diffuseColor.rgb *= 0.75+0.35*zn(q*4.); diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb*0.35, e); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.075,0.095,0.06)*mix(1.,0.6,zn(q*3.)), t); float bl = smoothstep(0.8,0.9,zn(q*0.5+7.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.22,0.03,0.03), bl*0.7);'}`); };
  m.customProgramCacheKey = () => 'zmat' + kind; return m; }
const AVS = 1.1;
export function upgradeZombies(zombies) {
  zombies.list.forEach((z, i) => { const v = i % VARIANTS; const bones = T[v + ':near'].m.bones; const B = bones.map((b) => { const o = new THREE.Bone(); o.name = b.n; o.position.fromArray(b.t); return o; });
    bones.forEach((b, k) => { if (b.p >= 0) B[b.p].add(B[k]); }); const root = new THREE.Group(); root.add(B[0]); root.scale.setScalar(T[v + ':near'].m.scale * AVS); root.updateMatrixWorld(true); const sk = new THREE.Skeleton(B);
    z.sk = zmat(0, i * 7.3); z.sh = zmat(1, i * 3.1); z.pa = zmat(1, i * 5.7 + 2);
    z.lods = LODS.map((l) => { const t = T[v + ':' + l]; const mats = [z.sk, z.sh, z.pa, ...[]]; const gm = t.m.groups.map((gr) => (gr.slot >= 0 ? [z.sk, z.sh, z.pa][gr.slot] : colMat(gr.col)));
      const g = t.g.clone(); g.clearGroups(); t.m.groups.forEach((gr, k) => g.addGroup(gr.start, gr.count, k)); const mesh = new THREE.SkinnedMesh(g, gm); mesh.frustumCulled = false; mesh.castShadow = true; mesh.bind(sk); mesh.visible = false; root.add(mesh); return mesh; });
    z.bones = Object.fromEntries(B.map((b) => [b.name, b])); z.hipY = z.bones.hips.position.y; z.root.add(root); z.pelvis.traverse((o) => { if (o.isMesh) o.visible = false; }); z.variant = v; });
  const ou = zombies.update.bind(zombies); const vis = [];
  zombies.update = (dt, time, player, ...r) => { ou(dt, time, player, ...r); vis.length = 0;
    for (const z of zombies.list) if (z.root.visible) { z.d = Math.hypot(z.pos.x - player.x, z.pos.z - player.z); vis.push(z); }
    vis.sort((a, b) => a.d - b.d); vis.forEach((z, k) => { const L = k < 2 && z.d < 7 ? 0 : k < 6 && z.d < 16 ? 1 : 2; z.lods.forEach((m, j) => (m.visible = j === L)); sync(z); }); };
  zombies.lodCounts = () => { const c = [0, 0, 0]; for (const z of zombies.list) if (z.root.visible) z.lods.forEach((m, j) => { if (m.visible) c[j]++; }); return c; };
  return Object.fromEntries(meta.map((m) => [m.tag, m.tris]));
}
function sync(z) { const b = z.bones;
  b.hips.position.y = z.hipY + (z.pelvis.position.y - 0.95) / AVS; b.hips.rotation.set(z.pelvis.rotation.x, 0, z.pelvis.rotation.z);
  b.chest.rotation.set(z.upper.rotation.x + 0.18, z.upper.rotation.y, z.upper.rotation.z); b.spine.rotation.x = 0.1; b.head.rotation.set(z.head.rotation.x + 0.15, 0.1, z.head.rotation.z + 0.22);
  b.thighL.rotation.set(z.legL.rotation.x, 0, 0.03); b.thighR.rotation.set(z.legR.rotation.x, 0, -0.03); b.shinL.rotation.x = Math.max(0, -z.legL.rotation.x) * 0.9 + 0.08; b.shinR.rotation.x = Math.max(0, -z.legR.rotation.x) * 0.9 + 0.08;
  b.upperArmL.rotation.set(z.armL.rotation.x, 0, z.armL.rotation.z); b.upperArmR.rotation.set(z.armR.rotation.x, 0, z.armR.rotation.z); b.foreArmL.rotation.x = -0.35; b.foreArmR.rotation.x = -0.25; b.handL.rotation.x = 0.4; b.handR.rotation.x = 0.5; }
