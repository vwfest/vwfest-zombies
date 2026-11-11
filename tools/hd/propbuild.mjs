import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { textureCompress, quantize, prune, dedup, weld, simplify, flatten, join } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import sharp from 'sharp';
import fs from 'fs';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const M = '/workspace/zombies-preview/assets/models';
const list = { drum: 'Barrel_01', tyre: 'old_tyre', crate: 'wooden_crate_01', jerry: 'metal_jerrycan' };
fs.mkdirSync('out/props', { recursive: true });
for (const [k, n] of Object.entries(list)) {
  const doc = await io.read(`${M}/${n}/${n}_1k.gltf`);
  const tris = () => doc.getRoot().listMeshes().reduce((s, m) => s + m.listPrimitives().reduce((a, p) => a + (p.getIndices()?.getCount() || 0) / 3, 0), 0);
  const t0 = tris();
  await doc.transform(dedup(), flatten(), join(), weld(), simplify({ simplifier: MeshoptSimplifier, ratio: t0 > 6000 ? 4000 / t0 : 1, error: 0.002 }),
    textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [512, 512], quality: 72 }), quantize(), prune());
  await io.write(`out/props/${k}.glb`, doc);
  console.log(k, n, t0, '->', tris(), fs.statSync(`out/props/${k}.glb`).size);
}
