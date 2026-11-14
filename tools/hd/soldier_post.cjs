// Quantize the Blender soldier GLBs (KHR_mesh_quantization; no Draco/meshopt/KTX2 — CSP forbids WASM).
// node tools/hd/soldier_post.cjs   (needs @gltf-transform/* from GLTF_TRANSFORM_PATHS, default the art-bible pipeline)
const path = require('path');
const PATHS = [process.env.GLTF_TRANSFORM_PATHS || '/workspace/zz-art-bible/pipeline', __dirname];
const req = (m) => require(require.resolve(m, { paths: PATHS }));
const RAW = '/workspace/zz-soldier-shots/v2/work/raw';
const OUT = path.join(__dirname, '../../assets/hd/soldier');
(async () => {
  const { NodeIO } = await req('@gltf-transform/core');
  const { ALL_EXTENSIONS } = await req('@gltf-transform/extensions');
  const { prune, dedup, quantize, resample, weld } = await req('@gltf-transform/functions');
  const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
  for (const [src, dst] of [['soldier_raw.glb', 'soldier.glb'], ['soldier_lo_raw.glb', 'soldier_lo.glb']]) {
    const doc = await io.read(path.join(RAW, src));
    const root = doc.getRoot();
    for (const m of root.listMaterials()) m.dispose();
    for (const t of root.listTextures()) t.dispose();
    // drop channels that never move off the rest pose (scale everywhere; constant T/R), keeps JSON small
    let dropped = 0;
    for (const anim of root.listAnimations()) {
      for (const ch of anim.listChannels()) {
        const node = ch.getTargetNode(), s = ch.getSampler(), out = s.getOutput().getArray(), path = ch.getTargetPath();
        const n = path === 'rotation' ? 4 : 3;
        const rest = path === 'rotation' ? node.getRotation() : path === 'scale' ? node.getScale() : node.getTranslation();
        let still = true;
        for (let i = 0; i < out.length && still; i++) if (Math.abs(out[i] - rest[i % n]) > 2e-4) still = false;
        if (still && !(path === 'rotation' && ['chest', 'spine', 'hips'].includes(node.getName()))) { ch.dispose(); dropped++; }
      }
      for (const s of anim.listSamplers()) if (!s.listParents().some((p) => p.propertyType === 'AnimationChannel')) s.dispose();
    }
    console.log(src, 'dropped static channels', dropped);
    await doc.transform(
      resample({ tolerance: 1e-4 }),
      prune(), dedup(),
      quantize({ quantizePosition: 14, quantizeNormal: 8, quantizeTexcoord: 12, quantizeWeight: 8, quantizeGeneric: 12 })
    );
    const exts = root.listExtensionsUsed().map((e) => e.extensionName);
    let tris = 0;
    for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) tris += (p.getIndices() ? p.getIndices().getCount() : p.getAttribute('POSITION').getCount()) / 3;
    await io.write(path.join(OUT, dst), doc);
    const sz = require('fs').statSync(path.join(OUT, dst)).size;
    console.log(dst, 'bytes', sz, 'tris', tris, 'meshes', root.listMeshes().map((m) => root.listNodes().find((n) => n.getMesh() === m)?.getName()).join(','),
      'anims', root.listAnimations().map((a) => a.getName()).join(','), 'ext', exts.join(','));
  }
})().catch((e) => { console.error(e); process.exit(1); });
