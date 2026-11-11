// Build zombie GLBs (geometry + skin, no textures) with 3 LODs, and a clip-only animation GLB.
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { prune, quantize, simplifyPrimitive, weld, dedup, resample } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
await MeshoptSimplifier.ready;
const U = 'itch/ubc/Universal Base Characters[Standard]/Base Characters/Godot - UE';
for (const [sx, file, body] of [['m', 'Superhero_Male_FullBody.gltf', 'Sphere.005_Retopology.004'], ['f', 'Superhero_Female_FullBody.gltf', 'Superhero_Female']]) {
  const doc = await io.read(`${U}/${file}`); const root = doc.getRoot();
  for (const n of root.listNodes()) { const m = n.getMesh(); if (m && m.getName() !== body) { n.setMesh(null); n.dispose(); } }
  for (const t of root.listTextures()) t.dispose(); for (const m of root.listMaterials()) { m.setBaseColorTexture(null); m.setNormalTexture(null); m.setMetallicRoughnessTexture(null); }
  const bodyNode = root.listNodes().find((n) => n.getMesh() && n.getMesh().getName() === body); const mesh = bodyNode.getMesh(); const prim = mesh.listPrimitives()[0];
  for (const s of prim.listSemantics()) if (!['POSITION', 'NORMAL', 'TEXCOORD_0', 'JOINTS_0', 'WEIGHTS_0'].includes(s)) prim.setAttribute(s, null);
  mesh.setName('LOD0'); bodyNode.setName('LOD0');
  for (const [name, ratio, err] of [['LOD1', 0.32, 0.01], ['LOD2', 0.1, 0.04]]) {
    const p = prim.clone(); simplifyPrimitive(p, { simplifier: MeshoptSimplifier, ratio, error: err, lockBorder: false });
    const m = doc.createMesh(name).addPrimitive(p); const n = doc.createNode(name).setMesh(m).setSkin(bodyNode.getSkin());
    bodyNode.getParentNode() ? bodyNode.getParentNode().addChild(n) : root.listScenes()[0].addChild(n);
    console.log(sx, name, (p.getIndices().getCount() / 3) | 0, 'tris');
  }
  console.log(sx, 'LOD0', (prim.getIndices().getCount() / 3) | 0, 'tris');
  root.listAnimations().forEach((a) => a.dispose());
  await doc.transform(prune(), dedup(), quantize({ quantizePosition: 14, quantizeNormal: 8, quantizeTexcoord: 12, quantizeWeight: 8 }));
  await io.write(`out/zombie_${sx}.glb`, doc);
}
// animations: keep only the clips we drive, drop meshes, keep rotation tracks (+ pelvis translation)
const want = { ual2: ['Zombie_Walk_Fwd_Loop', 'Zombie_Scratch', 'Zombie_Idle_Loop', 'Hit_Knockback', 'ClimbUp_1m'], ual1: ['Death01', 'Jog_Fwd_Loop', 'Hit_Chest', 'Hit_Head'] };
const A = { ual2: 'itch/ual2/Universal Animation Library 2[Standard]/Unreal-Godot/UAL2_Standard.glb', ual1: 'itch/ual1/Universal Animation Library[Standard]/Unreal-Godot/UAL1_Standard.glb' };
for (const k of ['ual1', 'ual2']) {
  const doc = await io.read(A[k]); const root = doc.getRoot();
  for (const a of root.listAnimations()) if (!want[k].includes(a.getName())) a.dispose();
  for (const a of root.listAnimations()) for (const ch of a.listChannels()) { const n = ch.getTargetNode(), p = ch.getTargetPath(); const keep = p === 'rotation' || (p === 'translation' && n && n.getName() === 'pelvis'); if (!keep) { const s = ch.getSampler(); ch.dispose(); s.dispose(); } }
  for (const n of root.listNodes()) if (n.getMesh()) { n.setMesh(null); }
  for (const m of root.listMeshes()) m.dispose(); for (const s of root.listSkins()) s.dispose(); for (const t of root.listTextures()) t.dispose(); for (const m of root.listMaterials()) m.dispose();
  const used = new Set(); for (const a of root.listAnimations()) for (const sm of a.listSamplers()) { used.add(sm.getInput()); used.add(sm.getOutput()); }
  for (const acc of root.listAccessors()) if (!used.has(acc)) acc.dispose();
  await doc.transform(resample({ tolerance: 0.0005 }), prune({ keepLeaves: true, keepAttributes: false }), dedup());
  await io.write(`out/zanim_${k}.glb`, doc);
  console.log(k, root.listAnimations().map((a) => a.getName()).join(','));
}
for (const sx of ['m', 'f']) {
  const doc = await io.read(`out/zombie_${sx}.glb`); const root = doc.getRoot();
  for (const n of root.listNodes()) if (n.getMesh() && n.getMesh().getName() === 'LOD0') { const m = n.getMesh(); n.setMesh(null); m.dispose(); }
  await doc.transform(prune());
  await io.write(`out/zombie_${sx}_lo.glb`, doc);
}
