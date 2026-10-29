import * as THREE from 'three';
export const TAU = Math.PI * 2;
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const rnd = (a = 1, b) => (b === undefined ? Math.random() * a : a + Math.random() * (b - a));
export const pick = (arr) => arr[(Math.random() * arr.length) | 0];
export const smooth = (t) => t * t * (3 - 2 * t);

// seeded value noise (used for procedural textures)
function hash(x, y, s) { let h = (x * 374761393 + y * 668265263 + s * 144665) | 0; h = (h ^ (h >>> 13)) * 1274126177; h = h ^ (h >>> 16); return ((h >>> 0) % 100000) / 100000; }
export function vnoise(x, y, s = 0) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = smooth(x - xi), yf = smooth(y - yi);
  const a = hash(xi, yi, s), b = hash(xi + 1, yi, s), c = hash(xi, yi + 1, s), d = hash(xi + 1, yi + 1, s);
  return lerp(lerp(a, b, xf), lerp(c, d, xf), yf);
}
export function fbm(x, y, oct = 4, s = 0) { let v = 0, a = 0.5, f = 1; for (let i = 0; i < oct; i++) { v += a * vnoise(x * f, y * f, s + i * 17); f *= 2; a *= 0.5; } return v; }

function canvasTex(size, fn, opts = {}) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const g = c.getContext('2d'); const img = g.createImageData(size, size); const d = img.data;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const o = (y * size + x) * 4; const r = fn(x / size, y / size, x, y);
    d[o] = r[0]; d[o + 1] = r[1]; d[o + 2] = r[2]; d[o + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  if (opts.after) opts.after(g, size);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = opts.aniso || 4;
  if (opts.srgb !== false) t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true; return t;
}
const mix = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];

export function makeTextures(size = 512) {
  const T = {};
  // desert sand with ripples
  T.sand = canvasTex(size, (u, v) => { const n = fbm(u * 24, v * 24, 5, 1), r = fbm(u * 6 + n * 1.5, v * 60, 3, 9); const t = clamp(n * 0.7 + r * 0.5, 0, 1); return mix([112, 86, 58], [186, 150, 104], t); });
  T.sandBump = canvasTex(size, (u, v) => { const n = fbm(u * 24, v * 24, 5, 1), r = fbm(u * 6 + n * 1.5, v * 60, 3, 9); const t = clamp(n * 0.6 + r * 0.7, 0, 1) * 255; return [t, t, t]; }, { srgb: false });
  // concrete slab
  T.concrete = canvasTex(size, (u, v, x, y) => { const n = fbm(u * 18, v * 18, 5, 3), s = fbm(u * 80, v * 80, 2, 4); let t = 0.35 + n * 0.5 + (s - 0.5) * 0.15; const crack = Math.abs(fbm(u * 7, v * 7, 3, 12) - 0.5) < 0.012 ? 0.5 : 1; t *= crack; return mix([48, 50, 54], [128, 126, 120], clamp(t, 0, 1)); });
  T.concreteBump = canvasTex(size, (u, v) => { const n = fbm(u * 18, v * 18, 5, 3) * 255; return [n, n, n]; }, { srgb: false });
  // rust metal (generic, gets tinted with material.color)
  T.rust = canvasTex(size, (u, v) => { const n = fbm(u * 10, v * 10, 5, 5), st = fbm(u * 3, v * 40, 3, 7), rust = clamp((n - 0.42) * 3.2 + (st - 0.5) * 0.8, 0, 1); const base = 0.62 + (fbm(u * 60, v * 60, 2, 2) - 0.5) * 0.25; return mix([base * 255, base * 255, base * 255], [150, 70, 28], rust * 0.85); });
  T.rustRough = canvasTex(size, (u, v) => { const n = fbm(u * 10, v * 10, 5, 5), st = fbm(u * 3, v * 40, 3, 7), rust = clamp((n - 0.42) * 3.2 + (st - 0.5) * 0.8, 0, 1); const r = (0.45 + rust * 0.5) * 255; return [0, r, 0]; }, { srgb: false });
  // corrugated sheet bump (vertical ribs)
  T.corr = canvasTex(256, (u, v) => { const t = (Math.sin(u * TAU * 16) * 0.5 + 0.5) * 255; return [t, t, t]; }, { srgb: false });
  T.corr.repeat.set(1, 1);
  // wood planks
  T.wood = canvasTex(256, (u, v) => { const g = fbm(u * 4, v * 60, 4, 21), kn = fbm(u * 12, v * 12, 2, 4); return mix([66, 42, 24], [150, 108, 66], clamp(g * 0.9 + kn * 0.2, 0, 1)); });
  // soft glow sprite
  const gc = document.createElement('canvas'); gc.width = gc.height = 64; const gg = gc.getContext('2d');
  const grad = gg.createRadialGradient(32, 32, 0, 32, 32, 32); grad.addColorStop(0, 'rgba(255,255,255,1)'); grad.addColorStop(0.25, 'rgba(255,255,255,.55)'); grad.addColorStop(1, 'rgba(255,255,255,0)');
  gg.fillStyle = grad; gg.fillRect(0, 0, 64, 64); T.glow = new THREE.CanvasTexture(gc); T.glow.colorSpace = THREE.SRGBColorSpace;
  // neon sign
  const sc = document.createElement('canvas'); sc.width = 1024; sc.height = 256; const sg = sc.getContext('2d');
  sg.fillStyle = '#05070b'; sg.fillRect(0, 0, 1024, 256);
  sg.textAlign = 'center'; sg.textBaseline = 'middle'; sg.font = '900 150px system-ui, Arial Black, sans-serif';
  sg.shadowColor = '#18ffb0'; sg.shadowBlur = 40; sg.fillStyle = '#c8fff0'; sg.fillText('VW FEST', 512, 120);
  sg.shadowBlur = 20; sg.font = '700 46px system-ui, Arial, sans-serif'; sg.fillStyle = '#ffb347'; sg.shadowColor = '#ff7a00'; sg.fillText('AIR-COOLED SALVAGE  ·  $VWFEST', 512, 222);
  T.sign = new THREE.CanvasTexture(sc); T.sign.colorSpace = THREE.SRGBColorSpace; T.sign.anisotropy = 4;
  return T;
}
