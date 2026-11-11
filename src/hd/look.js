// Stage-2 "realistic look": HDRI night sky + image-based lighting, PBR ground/metal/wood (CC0 Poly Haven),
// scanned props, blood decals and smoke. Everything here streams in after the menu is up and is purely visual:
// colliders, hitboxes and gameplay never read from it.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';

const B = 'assets/hd/';
const gl = new GLTFLoader(), tl = new THREE.TextureLoader();
// CSP: connect-src has no blob:, so embedded GLB images must decode through <img> (img-src allows blob:) not fetch()
gl.register((parser) => { parser.textureLoader = new THREE.TextureLoader(parser.options.manager); return { name: 'csp_img' }; });
const SKY_ROT = -0.271; // turns the HDRI so its moon sits where the shadow-casting moon light is
const FOG_HD = 0x1a1f2b;
const TILE = { sand: 4, concrete: 3.2, corr: 2.6, wood: 1.6, rust: 2 };

export const HD_FILES = {
  low: ['env/sky_1k.webp', 'tex/sand_diff_512.webp', 'tex/concrete_diff_512.webp', 'tex/corr_diff_512.webp', 'tex/wood_diff_512.webp', 'props/drum.glb', 'props/tyre.glb', 'props/crate.glb', 'props/jerry.glb'],
  medium: ['env/sky_2k.webp', 'env/env_256.hdr', ...['sand', 'concrete', 'corr', 'wood'].flatMap((k) => [`tex/${k}_diff_1k.webp`, `tex/${k}_nor_1k.webp`]), 'props/drum.glb', 'props/tyre.glb', 'props/crate.glb', 'props/jerry.glb'],
};
HD_FILES.high = [...HD_FILES.medium, ...['sand', 'concrete', 'corr', 'wood'].map((k) => `tex/${k}_arm_1k.webp`)];

const loadTex = (u, srgb, repeat = true) => tl.loadAsync(B + u).then((t) => { t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace; if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; return t; });

// World-space UVs (dominant-axis planar). The batched yard geometry has 0..1 UVs per box face, which would
// stretch a photo texture across a 20 m wall; this keeps texel density constant. Derivative-based normal
// mapping in three.js follows the replaced UVs automatically.
function worldUV(mat, tile, macro = false) {
  mat.onBeforeCompile = (s) => {
    s.uniforms.uTile = { value: 1 / tile };
    s.vertexShader = s.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTile; varying vec2 vWuv;')
      .replace('#include <fog_vertex>', `#include <fog_vertex>
      { vec3 wp = (modelMatrix * vec4(transformed, 1.)).xyz; vec3 wn = abs(normalize(mat3(modelMatrix) * objectNormal));
        vec2 w = wn.y > 0.6 ? wp.xz : (wn.x > wn.z ? wp.zy : wp.xy); w *= uTile; vWuv = w;
        #ifdef USE_MAP
        vMapUv = w;
        #endif
        #ifdef USE_NORMALMAP
        vNormalMapUv = w;
        #endif
        #ifdef USE_ROUGHNESSMAP
        vRoughnessMapUv = w;
        #endif
        #ifdef USE_METALNESSMAP
        vMetalnessMapUv = w;
        #endif
        #ifdef USE_AOMAP
        vAoMapUv = w;
        #endif
      }`);
    if (macro) s.fragmentShader = s.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec2 vWuv;').replace('#include <map_fragment>', `
      #ifdef USE_MAP
      { vec4 tA = texture2D(map, vMapUv); vec4 tB = texture2D(map, vMapUv * mat2(0.31, -0.27, 0.27, 0.31) + 0.37);
        float m = texture2D(map, vWuv * 0.021).g; float k = smoothstep(0.35, 0.65, texture2D(map, vWuv * 0.047 + 0.5).r);
        diffuseColor *= mix(tA, tB, k) * (0.78 + 0.45 * m); }
      #endif`);
  };
  mat.customProgramCacheKey = () => 'wuv' + (macro ? 'm' : '');
  mat.needsUpdate = true;
}

function bloodTex() {
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
  for (let i = 0; i < 26; i++) { const a = Math.random() * 6.28, r = Math.random() < 0.3 ? 20 + Math.random() * 40 : Math.random() * 18, s = 4 + Math.random() * (i < 6 ? 22 : 9);
    g.fillStyle = `rgba(${70 + Math.random() * 40 | 0},${4 + Math.random() * 8 | 0},${4 + Math.random() * 6 | 0},${0.55 + Math.random() * 0.4})`; g.beginPath(); g.ellipse(64 + Math.cos(a) * r, 64 + Math.sin(a) * r, s, s * (0.5 + Math.random() * 0.5), a, 0, 6.28); g.fill(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function smokeTex() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 2, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,0.55)'); gr.addColorStop(0.5, 'rgba(255,255,255,0.22)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(c); return t;
}

export function createHD({ renderer, scene, world, viewScene }) {
  const M = world.M; const st = { tier: -1, sky: null, env: null, props: false, texTier: -1, bytes: 0 };
  // ---- sky (procedural sky stays until the HDRI arrives) ----
  function setSky(tex) {
    tex.colorSpace = THREE.SRGBColorSpace; tex.wrapS = THREE.RepeatWrapping; tex.generateMipmaps = true; tex.minFilter = THREE.LinearMipmapLinearFilter;
    const mat = new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { map: { value: tex }, fogC: { value: scene.fog.color }, rot: { value: SKY_ROT }, gain: { value: 1 } },
      vertexShader: 'varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: `varying vec3 vP; uniform sampler2D map; uniform vec3 fogC; uniform float rot, gain;
        void main(){ vec3 d = normalize(vP); vec2 uv = vec2(atan(d.z, d.x) * 0.15915494 + 0.5 + rot, asin(clamp(d.y, -1., 1.)) * 0.31830989 + 0.5);
          vec3 c = texture2D(map, uv).rgb * gain; c = mix(fogC, c, smoothstep(-0.015, 0.05, d.y));
          gl_FragColor = vec4(c, 1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }` });
    const old = world.sky.material; world.sky.material = mat; old.dispose?.(); st.sky = tex;
    // the photo sky has real hills on the horizon: tint the old procedural mesas into dark silhouettes and match the fog to it
    scene.fog.color.set(FOG_HD); const mesa = M.cache['f' + 0x2a2634 + '10']; if (mesa) mesa.visible = false;
  }
  // ---- image-based lighting from the HDRI ----
  function setEnv(hdr) {
    hdr.mapping = THREE.EquirectangularReflectionMapping; const pm = new THREE.PMREMGenerator(renderer); const rt = pm.fromEquirectangular(hdr); pm.dispose(); hdr.dispose();
    scene.environment = rt.texture; viewScene.environment = rt.texture; scene.environmentRotation.y = viewScene.environmentRotation.y = -SKY_ROT * Math.PI * 2; st.env = rt.texture;
  }
  function envFromSky(tex) { // Low tier: no HDR download, derive reflections from the LDR sky
    const pm = new THREE.PMREMGenerator(renderer); const t2 = tex.clone(); t2.mapping = THREE.EquirectangularReflectionMapping; const rt = pm.fromEquirectangular(t2); pm.dispose();
    scene.environment = rt.texture; viewScene.environment = rt.texture; scene.environmentRotation.y = viewScene.environmentRotation.y = -SKY_ROT * Math.PI * 2; st.env = rt.texture;
  }
  // ---- PBR surfaces ----
  const SURF = { sand: [M.sand, M.dune], concrete: [M.concrete], corr: [M.fence, M.fenceDark], wood: [M.wood] };
  async function setSurfaces(tier) {
    const hi = tier > 0, arm = tier > 1;
    const keys = Object.keys(SURF);
    const sets = await Promise.all(keys.map((k) => Promise.all([loadTex(`tex/${k}_diff_${hi ? '1k' : '512'}.webp`, true), hi ? loadTex(`tex/${k}_nor_1k.webp`) : null, arm ? loadTex(`tex/${k}_arm_1k.webp`) : null])));
    keys.forEach((k, i) => { const [d, n, a] = sets[i];
      for (const m of SURF[k]) { if (!m) continue;
        m.map = d; m.bumpMap = null; m.normalMap = n || null; m.roughnessMap = a || null; m.aoMap = a || null; m.aoMapIntensity = 0.8;
        if (k === 'corr') { m.metalnessMap = a || null; m.metalness = m === M.fence ? 0.55 : 0.45; m.roughness = a ? 1 : 0.62; m.color.set(m === M.fence ? 0xb8c0c4 : 0x5a5c5e); if (n) m.normalScale.set(1.2, 1.2); }
        else if (k === 'sand') { m.color.set(m === M.dune ? 0xb9a58c : 0xc9bba6); m.roughness = 1; m.metalness = 0; if (n) m.normalScale.set(1.1, 1.1); }
        else if (k === 'concrete') { m.color.set(0xb4b0aa); m.roughness = a ? 1 : 0.9; m.metalness = 0; }
        else { m.color.set(0xd8cbb8); m.roughness = a ? 1 : 0.85; }
        worldUV(m, TILE[k], k === 'sand'); }
    });
    st.texTier = tier;
  }
  // ---- scanned props replace the box/cylinder stand-ins (same spots, same colliders) ----
  const FIT = { drum: [0.62, 0.9, 0.62], tyre: [0.98, 0.3, 0.98], crate: null, jerry: [0.36, 0.48, 0.17] };
  function normalize(scene, kind) {
    scene.updateMatrixWorld(true); const box = new THREE.Box3().setFromObject(scene), size = box.getSize(new THREE.Vector3());
    const g = new THREE.Group(); const inner = new THREE.Group(); inner.add(scene); g.add(inner);
    if (kind === 'tyre' && size.y > Math.min(size.x, size.z)) { inner.rotation.x = size.z < size.x ? Math.PI / 2 : 0; if (size.x < size.z) inner.rotation.z = Math.PI / 2; }
    g.updateMatrixWorld(true); const b2 = new THREE.Box3().setFromObject(inner), s2 = b2.getSize(new THREE.Vector3()), c2 = b2.getCenter(new THREE.Vector3());
    const f = FIT[kind] || [1, 1, 1]; inner.scale.set(f[0] / s2.x, f[1] / s2.y, f[2] / s2.z); if (kind === 'jerry' || kind === 'drum') { const u = f[1] / s2.y; inner.scale.set(u, u, u); }
    g.updateMatrixWorld(true); const b3 = new THREE.Box3().setFromObject(inner), c3 = b3.getCenter(new THREE.Vector3()); inner.position.set(-c3.x, -b3.min.y, -c3.z); g.updateMatrixWorld(true);
    return g;
  }
  async function setProps(tier) {
    const kinds = ['drum', 'tyre', 'crate', 'jerry'];
    const gs = await Promise.all(kinds.map((k) => gl.loadAsync(B + `props/${k}.glb`)));
    const proto = {}; kinds.forEach((k, i) => (proto[k] = normalize(gs[i].scene, k)));
    // instanced copies for the yard props
    const byKind = {}; for (const p of world.hdProps || []) (byKind[p.kind] || (byKind[p.kind] = [])).push(p);
    const tmp = new THREE.Matrix4(), col = new THREE.Color();
    st.inst = [];
    for (const [kind, list] of Object.entries(byKind)) {
      const pr = proto[kind]; pr.updateMatrixWorld(true);
      pr.traverse((o) => { if (!o.isMesh) return; const im = new THREE.InstancedMesh(o.geometry, o.material, list.length); im.castShadow = tier > 0; im.receiveShadow = true;
        list.forEach((p, i) => { tmp.copy(p.m); if (kind === 'crate') tmp.multiply(new THREE.Matrix4().makeScale(p.s, p.s, p.s)); tmp.multiply(o.matrixWorld); im.setMatrixAt(i, tmp);
          if (kind === 'drum') { col.set(p.color).lerp(new THREE.Color(1, 1, 1), 0.45); im.setColorAt(i, col); } });
        im.computeBoundingSphere(); world.root.add(im); st.inst.push(im); });
    }
    for (const m of world.propLo || []) m.visible = false;
    // fuel cans for the first mission (these move/hide with the mission meshes)
    for (const [id, g] of world.missionMeshes || []) if (g.userData.hdKind === 'jerry') { const c = proto.jerry.clone(); c.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } }); g.children.forEach((ch) => (ch.visible = false)); c.rotation.y = Math.random() * 6; g.add(c); }
    st.props = true;
  }
  // ---- blood decals (ring buffer on the ground) ----
  const N = 40, decal = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: bloodTex(), transparent: true, depthWrite: false, roughness: 0.25, metalness: 0, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 }), N);
  decal.frustumCulled = false; decal.renderOrder = 2; decal.userData.noAO = true; decal.receiveShadow = true; const _o = new THREE.Object3D(); let di = 0;
  _o.scale.set(0, 0, 0); _o.updateMatrix(); for (let i = 0; i < N; i++) decal.setMatrixAt(i, _o.matrix); scene.add(decal);
  function blood(x, z, size = 1) { _o.position.set(x, 0.02 + (di % 7) * 0.0015, z); _o.rotation.set(0, Math.random() * 6.28, 0); _o.scale.set(size * (0.8 + Math.random() * 0.5), 1, size * (0.8 + Math.random() * 0.5)); _o.updateMatrix(); decal.setMatrixAt(di, _o.matrix); decal.instanceMatrix.needsUpdate = true; di = (di + 1) % N; }
  // ---- smoke columns from burning wrecks outside the fence (Medium/High) ----
  const SM = 54, sg = new THREE.BufferGeometry(), sp = new Float32Array(SM * 3), sa = new Float32Array(SM), sd = [];
  const srcs = [[-38, -70], [44, -40], [-50, 30]];
  for (let i = 0; i < SM; i++) sd.push({ s: srcs[i % srcs.length], t: Math.random() * 9, life: 7 + Math.random() * 4, dx: (Math.random() - 0.5) * 0.4 });
  sg.setAttribute('position', new THREE.BufferAttribute(sp, 3)); sg.setAttribute('a', new THREE.BufferAttribute(sa, 1));
  const smat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, fog: true, uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { map: { value: smokeTex() }, uScale: { value: 600 } }]),
    vertexShader: 'attribute float a; varying float vA; uniform float uScale;\n#include <fog_pars_vertex>\nvoid main(){ vA=a; vec4 mvPosition=modelViewMatrix*vec4(position,1.); gl_PointSize = uScale * (2.5 + (1.-a) * 7.) / -mvPosition.z; gl_Position=projectionMatrix*mvPosition;\n#include <fog_vertex>\n}',
    fragmentShader: 'uniform sampler2D map; varying float vA;\n#include <fog_pars_fragment>\nvoid main(){ vec4 t=texture2D(map, gl_PointCoord); gl_FragColor=vec4(vec3(0.16,0.15,0.16), t.a*vA*0.55);\n#include <fog_fragment>\n}' });
  const smoke = new THREE.Points(sg, smat); smoke.frustumCulled = false; smoke.userData.noAO = true; smoke.visible = false; scene.add(smoke);
  function update(dt) {
    if (!smoke.visible) return;
    for (let i = 0; i < SM; i++) { const d = sd[i]; d.t += dt; if (d.t > d.life) d.t = 0; const k = d.t / d.life; sp[i * 3] = d.s[0] + d.dx * d.t + k * k * 6; sp[i * 3 + 1] = 1 + d.t * 1.6; sp[i * 3 + 2] = d.s[1] + k * 2; sa[i] = Math.sin(Math.min(1, k * 4) * 1.57) * (1 - k); }
    sg.attributes.position.needsUpdate = true; sg.attributes.a.needsUpdate = true;
  }
  // ---- staged loading per tier ----
  let busy = Promise.resolve();
  function load(tier) {
    busy = busy.then(async () => {
      const t0 = performance.now(); const jobs = [];
      if (!st.sky || (tier > 0 && st.skyHi !== true)) jobs.push(loadTex(tier > 0 ? 'env/sky_2k.webp' : 'env/sky_1k.webp', true, false).then((t) => { setSky(t); st.skyHi = tier > 0; if (tier === 0 && !st.envHi) envFromSky(t); }));
      if (tier > 0 && !st.envHi) jobs.push(new HDRLoader().loadAsync(B + 'env/env_256.hdr').then((h) => { setEnv(h); st.envHi = true; }));
      if (st.texTier < 0 || (tier > st.texTier && !(st.texTier === 1 && tier === 1))) jobs.push(setSurfaces(tier));
      if (!st.props) jobs.push(setProps(tier));
      const r = await Promise.allSettled(jobs); for (const x of r) if (x.status === 'rejected') console.warn('hd stage 2', x.reason);
      st.ms = Math.round(performance.now() - t0);
    });
    return busy;
  }
  function setTier(t) { st.tier = t; smoke.visible = t > 0; for (const im of st.inst || []) im.castShadow = t > 0; }
  return { load, setTier, update, blood, st };
}
