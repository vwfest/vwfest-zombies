import * as THREE from 'three';
import { unpack, posAttr, nrmAttr, PACKS } from './pack.js';
const GEO = {}, PLATE = {}; export const carTris = {}; let ready = false;
function init() { if (ready) return; ready = true; const { meta, view } = unpack(PACKS.cars);
for (const m of meta) { carTris[m.tag] = m.tris; const g = new THREE.BufferGeometry(); g.setAttribute('position', posAttr(view, m)); g.setAttribute('normal', nrmAttr(view, m)); g.setAttribute('color', new THREE.BufferAttribute(view(Uint8Array, m.col), 3, true)); g.setIndex(new THREE.BufferAttribute(view(Uint16Array, m.idx), 1)); g.computeBoundingBox(); GEO[m.tag] = g;
  if (m.plate) { const p = new THREE.BufferGeometry(); p.setAttribute('position', new THREE.BufferAttribute(view(Float32Array, m.plate.pos), 3)); p.setAttribute('normal', new THREE.BufferAttribute(view(Float32Array, m.plate.nrm), 3)); p.setAttribute('uv', new THREE.BufferAttribute(view(Float32Array, m.plate.uv), 2)); PLATE[m.tag] = p; } } }
let plateMat; function plate() { if (plateMat) return plateMat; const cv = document.createElement('canvas'); cv.width = 256; cv.height = 96; const x = cv.getContext('2d'); x.fillStyle = '#e9e4d4'; x.fillRect(0, 0, 256, 96); x.strokeStyle = '#1d3557'; x.lineWidth = 6; x.strokeRect(5, 5, 246, 86); x.fillStyle = '#1d3557'; x.font = '900 46px Arial Black, Arial'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('VWFEST', 128, 50); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return (plateMat = new THREE.MeshStandardMaterial({ map: t, roughness: 0.6 })); }
// paint colour is applied by recolouring the baked mid-grey (#888) body verts; the cream upper of the two-tone Camper stays cream
const mats = new Map(); const mat = () => mats.get(0) || (mats.set(0, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55, metalness: 0.15 })), mats.get(0));
export function setYardCars(tier) { const m = mats.get(0); if (!m) return; const hi = tier > 0; m.roughness = hi ? 0.34 : 0.55; m.metalness = hi ? 0.4 : 0.15; }
const cacheG = new Map();
function painted(tag, c1, c2) { const k = tag + c1 + '/' + c2; let g = cacheG.get(k); if (g) return g; g = GEO[tag].clone(); const col = g.attributes.color, pos = g.attributes.position, a = new THREE.Color(c1), b = new THREE.Color(c2 ?? 0xe6dcc0), two = tag === 'camper';
  for (let i = 0; i < col.count; i++) { const r = col.getX(i), gg = col.getY(i), bb = col.getZ(i); if (Math.abs(r - 0.247) < 0.01 && Math.abs(gg - 0.247) < 0.01 && Math.abs(bb - 0.247) < 0.01) { const c = two && pos.getY(i) > 1.04 ? b : a; col.setXYZ(i, c.r * 0.85, c.g * 0.85, c.b * 0.85); } else if (r > 0.975 && gg > 0.975 && bb > 0.975) col.setXYZ(i, b.r, b.g, b.b); }
  cacheG.set(k, g); return g; }
const SMALL = ['bug', 'baja', 'ghia'], BIG = ['camper', 'wagon', 'safari']; let si = 0, bi = 0;
export function hdCar(kind, c1, c2, opt = {}) { init(); const tag = kind === 'big' ? BIG[bi++ % 3] : SMALL[si++ % 3];
  const car = new THREE.Group(); car.rotation.y = Math.PI; const body = new THREE.Mesh(painted(tag, c1, c2), mat()); body.userData.noBatch = true; car.add(body);
  if (PLATE[tag]) { const p = new THREE.Mesh(PLATE[tag], plate()); p.userData.noBatch = true; car.add(p); }
  const g = new THREE.Group(); g.add(car); if (opt.tilt) g.rotation.z = opt.tilt; const s = GEO[tag].boundingBox.getSize(new THREE.Vector3()); g.userData.size = [s.x, s.y, s.z]; return g; }
