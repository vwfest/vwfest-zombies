#!/usr/bin/env python3
"""Compose albedo from the ID atlas (not luma clustering), plus AO, camo, WebP."""
from pathlib import Path
from PIL import Image, ImageChops, ImageEnhance, ImageFilter
import numpy as np

WORK = Path('/workspace/zz-soldier-shots/blender/work')
ASSETS = Path('/workspace/zz-soldier/assets/hd/soldier')
SHOTS = Path('/workspace/zz-soldier-shots/blender')
ASSETS.mkdir(parents=True, exist_ok=True)

# Spec palette
CAMO_A = np.array([0x9C, 0x8A, 0x6B], dtype=np.float32)
CAMO_B = np.array([0x7A, 0x6A, 0x4F], dtype=np.float32)
CAMO_C = np.array([0x5E, 0x5A, 0x3E], dtype=np.float32)
CAMO_D = np.array([0xB8, 0xA8, 0x87], dtype=np.float32)
GEAR = np.array([0x6E, 0x5B, 0x40], dtype=np.float32)
HELM = np.array([0x8A, 0x76, 0x56], dtype=np.float32)
GAITER = np.array([0x4F, 0x50, 0x38], dtype=np.float32)
SKIN = np.array([0xB9, 0x8B, 0x6A], dtype=np.float32)
GLOVE = np.array([0x5C, 0x5A, 0x3C], dtype=np.float32)
BOOT = np.array([0xA5, 0x8C, 0x66], dtype=np.float32)
SOLE = np.array([0x3A, 0x31, 0x28], dtype=np.float32)
DARK = np.array([0x2B, 0x2A, 0x27], dtype=np.float32)
GLASS = np.array([0x1E, 0x1F, 0x22], dtype=np.float32)
PATCH = np.array([0xC8, 0xC0, 0x90], dtype=np.float32)  # neutral IR patch (JS tints team color)

# ID bake targets (linear 0-255 matches the emit colours)
IDS = {
    'body':  (255, 0, 0),
    'gear':  (0, 255, 0),
    'helm':  (0, 0, 255),
    'dark':  (255, 255, 0),
    'gaiter':(255, 0, 255),
    'skin':  (0, 255, 255),
    'glove': (255, 128, 0),
    'boot':  (128, 64, 255),
    'glass': (38, 38, 38),
}


def mask_for(arr, rgb, tol=48):
    d = np.sqrt(((arr - np.array(rgb, dtype=np.float32)) ** 2).sum(axis=2))
    return d <= tol


def main():
    id_path = WORK / 'id.png'
    raw_path = id_path if id_path.exists() else (WORK / 'albedo.png')
    raw = np.array(Image.open(raw_path).convert('RGB'), dtype=np.float32)
    ao_img = Image.open(WORK / 'ao.png').convert('L')
    normal = Image.open(WORK / 'normal.png')
    h, w, _ = raw.shape
    ao = np.array(ao_img, dtype=np.float32)

    masks = {k: mask_for(raw, rgb) for k, rgb in IDS.items()}
    # leftover (unbaked / seam) → uniform
    claimed = np.zeros((h, w), dtype=bool)
    for m in masks.values():
        claimed |= m
    living = (raw.sum(axis=2) > 8) | (ao > 8)
    masks['body'] = masks['body'] | (living & ~claimed)

    def fill(mask, color):
        out = np.zeros_like(raw)
        if np.any(mask):
            out[mask] = color
        return out

    out = (fill(masks['body'], CAMO_A) + fill(masks['gear'], GEAR)
           + fill(masks['helm'], HELM) + fill(masks['dark'], DARK)
           + fill(masks['gaiter'], GAITER) + fill(masks['skin'], SKIN)
           + fill(masks['glove'], GLOVE) + fill(masks['boot'], BOOT)
           + fill(masks['glass'], GLASS))

    # Low-contrast arid camo, uniform only (phone will blur high-contrast patterns)
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    n1 = np.sin(xx * 0.073 + yy * 0.041) * np.cos(xx * 0.031 - yy * 0.057)
    n2 = np.sin(xx * 0.19 + yy * 0.15) * 0.6 + np.sin(xx * 0.07 - yy * 0.22) * 0.4
    # blotch field
    blotch = (n1 * 0.55 + n2 * 0.45)
    body = masks['body']
    mix_b = np.clip(0.5 + 0.55 * n1, 0, 1) * body
    mix_c = np.clip(0.5 + 0.55 * blotch, 0, 1) * body * (blotch > 0.15)
    mix_d = np.clip(0.35 + 0.4 * (-blotch), 0, 1) * body * (blotch < -0.25)
    out = out * (1.0 - 0.28 * mix_b[..., None]) + CAMO_B[None, None, :] * (0.28 * mix_b[..., None])
    out = out * (1.0 - 0.22 * mix_c[..., None]) + CAMO_C[None, None, :] * (0.22 * mix_c[..., None])
    out = out * (1.0 - 0.16 * mix_d[..., None]) + CAMO_D[None, None, :] * (0.16 * mix_d[..., None])

    # Slightly darker sole: darker lower-luma boot pixels stay brown, not black
    if np.any(masks['boot']):
        luma = out[masks['boot']].mean(axis=1)
        dark = masks['boot'].copy()
        # darken the lower quartile of boot UVs via a second noise (sole-ish)
        sole_m = masks['boot'] & (n2 < -0.25)
        out[sole_m] = SOLE

    # Gentle AO (don't crush midtones)
    ao_mask = ao > 3
    ao_lift = np.where(ao <= 3, 0, np.clip(ao, 0.55 * 255, 255)) / 255.0
    out = out * (0.15 + 0.85 * ao_lift)[..., None]

    rng = np.random.RandomState(11)
    out = np.clip(out + rng.randn(h, w).astype(np.float32)[..., None] * 2.5, 0, 255)

    out_im = Image.fromarray(out.astype(np.uint8), 'RGB')
    mask = Image.fromarray((ao_mask | living).astype(np.uint8) * 255, 'L')
    out_im = Image.composite(out_im, Image.new('RGB', (w, h), (0, 0, 0)), mask)

    # ORM: R=AO, G=rough, B=metal
    ao_ch = Image.fromarray(np.where(ao <= 3, 0, np.clip(ao, 0.50 * 255, 255)).astype(np.uint8), 'L')
    rough = np.full((h, w), 225, dtype=np.int16)
    rough -= (np.array(Image.effect_noise((w, h), 8).convert('L')) // 14).astype(np.int16)
    # glasses / dark polymer slightly shinier
    rough[masks['glass']] = 70
    rough[masks['dark']] = 130
    rough[masks['boot']] = 210
    rough[masks['skin']] = 180
    rough = np.clip(rough, 0, 255).astype(np.uint8)
    rough = Image.composite(Image.fromarray(rough), Image.new('L', (w, h), 0), mask)
    metal = np.zeros((h, w), dtype=np.uint8)
    metal[masks['glass']] = 40
    metal[masks['dark']] = 55
    metal = Image.composite(Image.fromarray(metal), Image.new('L', (w, h), 0), mask)
    orm = Image.merge('RGB', (ao_ch, rough, metal))

    out_im.save(WORK / 'albedo-composed.png')
    orm.save(WORK / 'orm.png')
    out_im.resize((512, 512), Image.Resampling.LANCZOS).save(SHOTS / 'map-albedo-composed.png')

    def webp(im, name, size, q):
        pix = im.convert('RGB')
        if pix.size[0] != size:
            pix = pix.resize((size, size), Image.Resampling.LANCZOS)
        path = ASSETS / f'{name}_{size}.webp'
        pix.save(path, 'WEBP', quality=q, method=6)
        print('webp', path, path.stat().st_size)

    nrm = normal.convert('RGB')
    webp(out_im, 'soldier_diff', 1024, 72)
    webp(out_im, 'soldier_diff', 512, 84)
    webp(nrm, 'soldier_nrm', 1024, 86)
    webp(nrm, 'soldier_nrm', 512, 82)
    webp(orm, 'soldier_orm', 1024, 48)
    webp(orm, 'soldier_orm', 512, 72)

    lo = (ASSETS / 'soldier_lo.glb').stat().st_size + sum(p.stat().st_size for p in ASSETS.glob('*_512.webp')) if (ASSETS / 'soldier_lo.glb').exists() else 0
    hi = (ASSETS / 'soldier.glb').stat().st_size + sum(p.stat().st_size for p in ASSETS.glob('*_1024.webp')) if (ASSETS / 'soldier.glb').exists() else 0
    if lo:
        print(f'PHONE {lo} {lo/1024:.1f}KB  cap 900 {"PASS" if lo<=900*1024 else "FAIL"}')
    if hi:
        print(f'HIGH  {hi} {hi/1024:.1f}KB  cap 900 {"PASS" if hi<=900*1024 else "FAIL"}')
    arr = np.array(out_im)
    m = arr.sum(axis=2) > 20
    print('composed mean', arr[m].mean(0) if m.any() else arr.mean(0))
    for k, mk in masks.items():
        print(f'  id {k:7} px {int(mk.sum())}')
    print('composed + packed')


if __name__ == '__main__':
    main()
