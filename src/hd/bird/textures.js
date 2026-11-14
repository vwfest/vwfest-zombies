// Procedural PBR maps for the Carrion Buzzard. Tuned to concept-01:
// mint-green bald skin, cream ruff, pale bone ribs, two-tone dark/dirty-white wings, wet gore.
import * as THREE from 'three';
import { fbm, clamp, lerp } from '../../util.js';

function canvasTex(size, fn, srgb = true) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const g = c.getContext('2d'), img = g.createImageData(size, size), d = img.data;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const o = (y * size + x) * 4, r = fn(x / size, y / size, x, y);
    d[o] = r[0]; d[o + 1] = r[1]; d[o + 2] = r[2]; d[o + 3] = r[3] != null ? r[3] : 255;
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; t.needsUpdate = true;
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  return t;
}

function heightToNormal(size, heightFn, str = 4) {
  return canvasTex(size, (u, v) => {
    const s = 1 / size;
    const dx = heightFn(u + s, v) - heightFn(u - s, v);
    const dy = heightFn(u, v + s) - heightFn(u, v - s);
    const n = new THREE.Vector3(-dx * str, -dy * str, 1).normalize();
    return [(n.x * 0.5 + 0.5) * 255, (n.y * 0.5 + 0.5) * 255, (n.z * 0.5 + 0.5) * 255];
  }, false);
}

export function createBirdTextures(size = 512) {
  const skinH = (u, v) => fbm(u * 16, v * 12, 5, 21) * 0.65 + fbm(u * 64, v * 64, 2, 4) * 0.35;
  const featherH = (u, v) => {
    const vane = Math.abs(Math.sin(u * Math.PI * 32 + fbm(u * 6, v * 8, 2, 8) * 1.1));
    return vane * 0.7 + fbm(u * 36, v * 10, 3, 11) * 0.3;
  };
  const boneH = (u, v) => fbm(u * 10, v * 10, 4, 31) * 0.55 + fbm(u * 80, v * 80, 2, 2) * 0.45;
  const goreH = (u, v) => fbm(u * 9, v * 9, 4, 41);
  const ruffH = (u, v) => Math.abs(Math.sin(v * Math.PI * 18)) * 0.6 + fbm(u * 20, v * 8, 3, 6) * 0.4;

  // Pale mint / sage rotting skin (concept head)
  const skin = canvasTex(size, (u, v) => {
    const n = skinH(u, v), sore = fbm(u * 8, v * 8, 3, 7), dust = fbm(u * 28, v * 28, 2, 15);
    let col = [lerp(118, 168, n), lerp(132, 168, n), lerp(108, 132, n)]; // mint-gray
    if (sore > 0.66) {
      const k = (sore - 0.66) / 0.34;
      col = [lerp(col[0], 110, k), lerp(col[1], 48, k), lerp(col[2], 40, k)]; // dried blood sores
    }
    if (dust > 0.58) {
      const k = (dust - 0.58) * 0.45;
      col = [lerp(col[0], 186, k), lerp(col[1], 168, k), lerp(col[2], 130, k)];
    }
    return col;
  });
  const skinArm = canvasTex(size, (u, v) => {
    const n = skinH(u, v), wet = fbm(u * 6, v * 6, 3, 19);
    const rough = clamp(0.62 + n * 0.3 - (wet > 0.72 ? 0.28 : 0), 0.22, 1) * 255;
    return [(0.62 + n * 0.38) * 255, rough, 10];
  }, false);

  // Two-tone vulture wing: dark near the root (u~0), dirty white primaries toward the tip (u~1)
  const feather = canvasTex(size, (u, v) => {
    const vane = Math.abs(Math.sin((u * 30 + fbm(v * 5, u * 2, 2, 3) * 0.35) * Math.PI));
    const wear = fbm(u * 7, v * 7, 3, 5);
    const pale = clamp((u - 0.42) / 0.5, 0, 1);
    const dark = lerp(22, 52, vane * 0.45 + wear * 0.25);
    const light = lerp(168, 214, vane * 0.25 + wear * 0.2);
    const r = lerp(dark, light, pale * pale);
    const g = lerp(dark * 0.82, light * 0.94, pale * pale);
    const b = lerp(dark * 0.62, light * 0.82, pale * pale);
    // blood stains near the root
    const blood = fbm(u * 5, v * 9, 3, 77);
    if (u < 0.45 && blood > 0.72) {
      const k = (blood - 0.72) * 2;
      return [lerp(r, 90, k), lerp(g, 22, k), lerp(b, 16, k)];
    }
    return [r, g, b];
  });
  const featherArm = canvasTex(size, (u, v) => {
    const vane = Math.abs(Math.sin(u * Math.PI * 30));
    const pale = clamp((u - 0.42) / 0.5, 0, 1);
    const rough = clamp(0.72 + vane * 0.2 - pale * 0.08, 0.45, 1) * 255;
    return [210, rough, 4];
  }, false);

  const bone = canvasTex(size, (u, v) => {
    const n = boneH(u, v), stain = fbm(u * 5, v * 5, 3, 27);
    const b = lerp(198, 232, n);
    const s = stain > 0.68 ? (stain - 0.68) * 70 : 0;
    return [b - s * 0.2, b * 0.95 - s * 0.4, b * 0.82 - s * 0.45];
  });
  const boneArm = canvasTex(size, (u, v) => {
    const n = boneH(u, v);
    return [230, clamp(0.4 + n * 0.35, 0.28, 0.9) * 255, 16];
  }, false);

  const gore = canvasTex(size, (u, v) => {
    const n = goreH(u, v), clot = fbm(u * 18, v * 18, 3, 9);
    return [lerp(86, 150, n), lerp(8, 24, n), lerp(8, 18, clot)];
  });
  const goreArm = canvasTex(size, (u, v) => {
    const n = goreH(u, v), gloss = fbm(u * 14, v * 14, 2, 44);
    const rough = clamp(0.1 + n * 0.18 - gloss * 0.08, 0.05, 0.35) * 255;
    return [70, rough, 28];
  }, false);

  // Dirty cream / off-white vulture ruff
  const ruff = canvasTex(size, (u, v) => {
    const n = ruffH(u, v), dust = fbm(u * 9, v * 9, 3, 13);
    const c = lerp(210, 236, n);
    const d = dust > 0.6 ? (dust - 0.6) * 50 : 0;
    return [c - d * 0.2, c * 0.96 - d * 0.35, c * 0.86 - d * 0.45];
  });
  const ruffArm = canvasTex(size, (u, v) => {
    const n = ruffH(u, v);
    return [220, clamp(0.82 + n * 0.15, 0.7, 1) * 255, 2];
  }, false);

  // Dusty rose hooked beak
  const beak = canvasTex(size, (u, v) => {
    const n = fbm(u * 10, v * 8, 4, 61), crack = fbm(u * 20, v * 4, 2, 2);
    let col = [lerp(168, 210, n), lerp(118, 154, n), lerp(104, 132, n)];
    if (crack > 0.7) col = [col[0] * 0.75, col[1] * 0.7, col[2] * 0.7];
    return col;
  });

  return {
    skin, skinNor: heightToNormal(size, skinH, 3.2), skinArm,
    feather, featherNor: heightToNormal(size, featherH, 6), featherArm,
    bone, boneNor: heightToNormal(size, boneH, 2.6), boneArm,
    gore, goreNor: heightToNormal(size, goreH, 3.0), goreArm,
    ruff, ruffNor: heightToNormal(size, ruffH, 5), ruffArm,
    beak, beakNor: heightToNormal(size, (u, v) => fbm(u * 10, v * 8, 4, 61), 2.4),
  };
}

function std(map, nor, arm, extras = {}) {
  return new THREE.MeshStandardMaterial({
    map, normalMap: nor, roughnessMap: arm, metalnessMap: arm, aoMap: arm,
    aoMapIntensity: 0.65, roughness: 0.8, metalness: 0.03, envMapIntensity: 0.9,
    ...extras,
  });
}

export function createBirdMaterials(tier = 2) {
  const size = tier >= 2 ? 512 : tier === 1 ? 256 : 128;
  const T = createBirdTextures(size);
  const flesh = std(T.skin, T.skinNor, T.skinArm, { roughness: 0.84, color: 0xe8eee0 });
  const feather = std(T.feather, T.featherNor, T.featherArm, { roughness: 0.9, side: THREE.DoubleSide, color: 0xffffff });
  const bone = std(T.bone, T.boneNor, T.boneArm, { roughness: 0.48, color: 0xffffff });
  const ruff = std(T.ruff, T.ruffNor, T.ruffArm, { roughness: 0.95, side: THREE.DoubleSide, color: 0xffffff });
  const beak = std(T.beak, T.beakNor, T.skinArm, { roughness: 0.42, color: 0xffffff });
  const viscera = new THREE.MeshPhysicalMaterial({
    map: T.gore, normalMap: T.goreNor, roughnessMap: T.goreArm, roughness: 0.16,
    metalness: 0.04, clearcoat: 0.62, clearcoatRoughness: 0.22,
    envMapIntensity: 1.2, color: 0xffffff,
  });
  const eye = new THREE.MeshStandardMaterial({
    color: 0xb6ff33, emissive: 0xb6ff33, emissiveIntensity: 2.6, roughness: 0.25, metalness: 0, envMapIntensity: 0.15,
  });
  const eyeCore = new THREE.MeshBasicMaterial({ color: 0xf7ffc8 });
  return { flesh, feather, bone, ruff, beak, viscera, eye, eyeCore, T };
}
