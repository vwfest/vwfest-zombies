// Carrion Buzzard GLB loader. CSP: connect-src has no blob:, so embedded
// images must decode through <img> (same hack as src/hd/zrig.js).
// Plain GLB only — no Draco / meshopt / KTX2 (page CSP forbids WASM).
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const BASE = 'assets/hd/birds/';
const gl = new GLTFLoader();
gl.register((parser) => {
  parser.textureLoader = new THREE.TextureLoader(parser.options.manager);
  return { name: 'csp_img' };
});

function prep(gltf) {
  gltf.scene.updateMatrixWorld(true);
  gltf.scene.traverse((o) => {
    if (!o.isMesh) return;
    o.frustumCulled = false;
    o.castShadow = true;
    o.receiveShadow = true;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    for (const m of mats) {
      if (!m) continue;
      if (m.map) m.map.colorSpace = THREE.SRGBColorSpace;
      if (m.emissiveMap) m.emissiveMap.colorSpace = THREE.SRGBColorSpace;
      if (m.normalMap) m.normalMap.colorSpace = THREE.NoColorSpace;
      // Alpha cards: clip, no sort, double-sided
      if (m.alphaTest > 0 || (m.map && m.map.format === THREE.RGBAFormat)) {
        if (m.alphaTest === 0) m.alphaTest = 0.4;
        m.transparent = false;
        m.side = THREE.DoubleSide;
        m.depthWrite = true;
      }
      m.side = THREE.DoubleSide;
    }
  });
  return gltf;
}

let _cache = null;
export function loadBuzzardAssets() {
  if (_cache) return _cache;
  _cache = Promise.all([
    gl.loadAsync(BASE + 'carrion-buzzard-hi.glb').catch((e) => { console.warn('[birds] hi glb', e); return null; }),
    gl.loadAsync(BASE + 'carrion-buzzard-lo.glb').catch((e) => { console.warn('[birds] lo glb', e); return null; }),
  ]).then(([hi, lo]) => {
    if (hi) prep(hi);
    if (lo) prep(lo);
    if (!hi && !lo) throw new Error('carrion buzzard GLB missing');
    return { hi, lo: lo || hi };
  });
  return _cache;
}

export function lodMeshes(root, tag) {
  const out = [];
  root.traverse((o) => { if (o.isMesh && o.name.startsWith(tag)) out.push(o); });
  return out;
}

export function clipMap(gltf) {
  const m = {};
  for (const c of gltf.animations || []) m[c.name] = c;
  return m;
}
