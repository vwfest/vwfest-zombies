// Decodes the pre-baked model packs (tools/bake) — no runtime sculpting.
import * as THREE from 'three';
export function unpack(u8) { const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength); const jl = dv.getUint32(0, true); const meta = JSON.parse(new TextDecoder().decode(u8.subarray(4, 4 + jl))); const b0 = u8.byteOffset + 4 + jl + ((4 - (jl % 4)) % 4);
  const view = (T, [o, n]) => new T(u8.buffer.slice(b0 + o, b0 + o + n * T.BYTES_PER_ELEMENT)); return { meta, view }; }
export function posAttr(view, m) { const q = view(Uint16Array, m.pos), p = new Float32Array(q.length); for (let i = 0; i < q.length; i++) { const k = i % 3; p[i] = m.min[k] + (q[i] / 65535) * m.size[k]; } return new THREE.BufferAttribute(p, 3); }
export const nrmAttr = (view, m) => new THREE.BufferAttribute(view(Int8Array, m.nrm), 3, true);
export const PACKS = {};
export async function loadPacks() { await Promise.all(['zombies', 'cars'].map(async (n) => { const r = await fetch('assets/' + n + '.bin'); if (!r.ok) throw new Error('missing assets/' + n + '.bin'); PACKS[n] = new Uint8Array(await r.arrayBuffer()); })); }
