# HD asset pipeline (graphics-upgrade)

Re-creates everything in `assets/hd/` from the original CC0 downloads. Needs `@gltf-transform/{core,extensions,functions}`, `meshoptimizer`, `sharp`, Python with Pillow + numpy, and ffmpeg.

| Script | Input | Output |
| --- | --- | --- |
| `zbuild.mjs` | Quaternius Universal Base Characters (Godot-UE glTF) + Universal Animation Library 1/2 | `z/zombie_{m,f}.glb` (LOD0/1/2, quantized, no textures), `z/zombie_{m,f}_lo.glb` (LOD1/2 only), `z/zanim_ual{1,2}.glb` (9 clips, rotation tracks + pelvis translation, resampled) |
| `zskin.py` | base-character skin textures | `z/zskin_{m,f}_{1024,512}.webp`, `z/znrm_{m,f}_1024.webp` (rotting skin, bruising, veins, dried blood) |
| `sky.py` | Poly Haven `rogland_moonlit_night` 2k HDR | `env/sky_{2k,1k}.webp`, `env/env_256.hdr` |
| `propbuild.mjs` | Poly Haven `Barrel_01`, `old_tyre`, `wooden_crate_01`, `metal_jerrycan` (1k glTF) | `props/{drum,tyre,crate,jerry}.glb` (512 px WebP, quantized, ≤4k tris) |
| (inline Pillow) | Poly Haven `sandy_gravel_02`, `dirty_concrete`, `worn_corrugated_iron`, `weathered_planks` 1k | `tex/*_{diff,nor,arm}_1k.webp`, `tex/*_diff_512.webp` |

No Draco/meshopt *compression* is used on purpose: the page CSP (`script-src 'self'`) forbids WebAssembly, so meshes use
`KHR_mesh_quantization` and textures `EXT_texture_webp`, which three.js decodes without WASM.
