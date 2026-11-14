#!/usr/bin/env python3
"""Texture prep/post for the co-op soldier v2 (system python: Pillow + numpy).
  pre : 8K source → 2K base, camo-fabric mask, large-scale shading (AO) map
  post: baked 2K albedo + source normal/roughness → 1024/512 WebP (diff, nrm, orm) + NVG/lens patches
"""
import sys, json
from pathlib import Path
from PIL import Image, ImageFilter
import numpy as np
Image.MAX_IMAGE_PIXELS = None
SRC = Path('/workspace/zz-free-models/src/sand_soldier/textures')
WORK = Path('/workspace/zz-soldier-shots/v2/work')
ASSETS = Path('/workspace/zz-soldier/assets/hd/soldier')

def pre():
    base = Image.open(SRC / 'material_1_baseColor.png').convert('RGB').resize((2048, 2048), Image.BOX)
    base.save(WORK / 'src_base_2k.png')
    a = np.asarray(base).astype(np.float32); H, W = a.shape[:2]
    L = a.mean(2)
    nb = Image.fromarray(((L > 14) * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(11)).filter(ImageFilter.MinFilter(11))
    m = np.asarray(nb) > 0
    rect = np.zeros_like(m); rect[:int(0.455 * H), :int(0.605 * W)] = True   # the two fatigue islands
    m = m & rect
    Image.fromarray((m * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2)).save(WORK / 'camo_mask.png')
    # large-scale shading: keeps painted AO under straps/vest, drops the old fine camo
    Lb = np.asarray(Image.fromarray(L.astype(np.uint8)).filter(ImageFilter.GaussianBlur(14))).astype(np.float32)
    sh = np.clip(Lb / 118.0, 0.12, 1.12)
    Image.fromarray((sh / 1.12 * 255).astype(np.uint8)).save(WORK / 'camo_shade.png')
    print('pre ok', m.mean())

def patch(img, box, rgb):
    # box in Blender UV (v up); image row 0 = v 1
    u0, v0, u1, v1 = box; S = img.shape[0]
    x0, x1 = int(u0 * S), int(u1 * S); y0, y1 = int((1 - v1) * S), int((1 - v0) * S)
    img[y0:y1, x0:x1] = rgb

def post():
    P = json.loads((WORK / 'patches.json').read_text())
    diff = np.asarray(Image.open(WORK / 'baked_diff_2k.png').convert('RGB')).copy()
    patch(diff, P['nvg'], (34, 35, 31)); patch(diff, P['lens'], (8, 9, 10))
    nrm = Image.open(SRC / 'material_1_normal.png').convert('RGB').resize((2048, 2048), Image.BOX)
    nrm = np.asarray(nrm).copy()
    patch(nrm, P['nvg'], (128, 128, 255)); patch(nrm, P['lens'], (128, 128, 255))
    mr = np.asarray(Image.open(SRC / 'material_1_metallicRoughness.png').convert('RGB').resize((2048, 2048), Image.BOX)).copy()
    orm = np.zeros_like(mr); orm[..., 0] = 255; orm[..., 1] = np.clip(mr[..., 1].astype(np.int32), 120, 255); orm[..., 2] = 0
    patch(orm, P['nvg'], (255, 130, 160)); patch(orm, P['lens'], (255, 30, 60))
    ASSETS.mkdir(parents=True, exist_ok=True)
    for sz in (1024, 512):
        for name, arr, q in (('diff', diff, 86), ('nrm', nrm, 88), ('orm', orm, 80)):
            im = Image.fromarray(arr).resize((sz, sz), Image.LANCZOS if name != 'nrm' else Image.BOX)
            out = ASSETS / f'soldier_{name}_{sz}.webp'
            im.save(out, 'WEBP', quality=q, method=6)
            print(out.name, out.stat().st_size)

if __name__ == '__main__':
    {'pre': pre, 'post': post}[sys.argv[1]]()
