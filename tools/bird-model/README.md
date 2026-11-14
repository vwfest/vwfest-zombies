# Carrion Buzzard — original Blender pipeline

100% original model, authored in `build_buzzard.py` (no third-party bird meshes).

Concept target: `concept-01-carrion-buzzard.jpg`.

```bash
# from repo root, with Blender 4.5+
/workspace/tools/blender-4.5.16-linux-x64/blender --background \
  --python tools/bird-model/build_buzzard.py -- --mode blockout

# modes: blockout | sculpt | retopo | uv | bake | texture | feathers | rig | anim | export | all | ship
# add --quick for lower-res, fewer samples, no 8-frame turntable
```

Outputs:
- `tools/bird-model/renders/` — turntables and hero shots per milestone
- `tools/bird-model/renders/compares/` — side-by-side vs concept-01
- `tools/bird-model/textures/` — layered PBR maps
- `assets/hd/birds/carrion-buzzard-hi.glb` and `-lo.glb` (plain GLB, no Draco/meshopt/KTX2, WebP/JPEG, Y-up, skins + actions)

Actions on the armature: `glide`, `flap`, `bank`, `dive_tuck`, `strike`, `death`.

After export, run the art-bible postprocess (WebP + KHR_mesh_quantization, no Draco/meshopt/KTX2):

```bash
node /workspace/zz-art-bible/pipeline/postprocess.mjs \
  assets/hd/birds/carrion-buzzard-hi.glb /tmp/hi.glb --class swarm_creature --q 58 --qn 52 --nofail
node /workspace/zz-art-bible/pipeline/postprocess.mjs \
  assets/hd/birds/carrion-buzzard-lo.glb /tmp/lo.glb --class swarm_creature --low --q 62 --qn 58
# then strip EXT_texture_webp from extensionsRequired (three.js loads image/webp via TextureLoader)
```

Budget (swarm_creature): 2.5k/900/300 tris, 16 bones, 300 KB per GLB. CSP forbids WASM decoders.
