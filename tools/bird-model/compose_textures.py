#!/usr/bin/env python3
"""Layered PBR composer for the Carrion Buzzard (Substance-style, all original)."""
from __future__ import annotations

import argparse
import math
from pathlib import Path

import numpy as np
from PIL import Image

def lerp(a, b, t):
    return a + (b - a) * t

def clamp01(x):
    return np.clip(x, 0.0, 1.0)

def fbm(u, v, octaves=5, seed=0.0):
    t = np.zeros_like(u, dtype=np.float64)
    amp, freq = 1.0, 1.0
    tot = 0.0
    for i in range(octaves):
        x = u * freq * 12.9898 + v * freq * 78.233 + seed * 17.13 + i * 9.1
        n = np.sin(x) * 43758.5453
        n = n - np.floor(n)
        t += n * amp
        tot += amp
        amp *= 0.5
        freq *= 2.0
    return t / tot

def save_rgb(path, arr):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    a = np.clip(arr, 0, 1)
    if a.ndim == 2:
        a = np.stack([a, a, a], axis=-1)
    mode = "RGBA" if a.shape[-1] == 4 else "RGB"
    img = Image.fromarray((a * 255).astype(np.uint8), mode=mode)
    img.save(path)
    print("wrote", path, img.size)

def load_gray(path, size):
    p = Path(path)
    if not p.exists():
        return None
    im = Image.open(p).convert("RGB").resize((size, size), Image.LANCZOS)
    return np.asarray(im, dtype=np.float64) / 255.0

def feather_atlas(size=2048):
    h = np.linspace(0, 1, size, endpoint=False)
    uu, vv = np.meshgrid(h, h)
    cols, rows = 3, 2
    cx = np.floor(uu * cols)
    cy = np.floor(vv * rows)
    lu = (uu * cols) % 1.0
    lv = (vv * rows) % 1.0
    rachis = np.abs(lu - 0.5)
    width = lerp(0.42, 0.08, lv ** 1.15) * (1.0 - 0.15 * fbm(lu, lv, 3, 3))
    width = width - (lv > 0.88) * fbm(lu * 8, lv * 8, 3, 9) * 0.12
    alpha = clamp01((width - rachis) * 18)
    gaps = (fbm(lu * 2, lv * 14, 2, 11) > 0.82) & (lv > 0.35) & (rachis > width * 0.45)
    alpha = np.where(gaps, alpha * 0.15, alpha)
    vanes = np.abs(np.sin((lu - 0.5) * 90 + fbm(lu, lv, 2, 4) * 0.8))
    dark = np.array([0.12, 0.08, 0.06])
    midc = np.array([0.22, 0.16, 0.11])
    pale = np.array([0.68, 0.60, 0.48])
    cream = np.array([0.88, 0.84, 0.72])
    blood = np.array([0.35, 0.06, 0.04])
    is_dark = (cx == 0) & (cy == 0)
    is_mid = (cx == 1) & (cy == 0)
    is_pale = (cx == 2) & (cy == 0)
    is_stain = (cx == 0) & (cy == 1)
    is_worn = (cx == 1) & (cy == 1)
    is_ruff = (cx == 2) & (cy == 1)
    tip = lv ** 1.2
    def mix(c_root, c_tip):
        t = tip[..., None]
        vane = (0.75 + 0.25 * vanes)[..., None]
        return (c_root * (1 - t) + c_tip * t) * vane
    col = np.zeros((size, size, 3))
    col = np.where(is_dark[..., None], mix(dark, midc * 1.2), col)
    col = np.where(is_mid[..., None], mix(midc, pale * 0.85), col)
    col = np.where(is_pale[..., None], mix(midc * 1.1, pale), col)
    col = np.where(is_stain[..., None], mix(dark, midc), col)
    col = np.where(is_worn[..., None], mix(midc * 0.8, pale * 0.7), col)
    col = np.where(is_ruff[..., None], mix(cream * 0.85, cream), col)
    bmask = is_stain & (lv < 0.45) & (fbm(lu, lv, 3, 21) > 0.55)
    col = np.where(bmask[..., None], col * 0.4 + blood, col)
    rach = (rachis < 0.03)[..., None]
    col = np.where(rach, col * 0.7 + np.array([0.2, 0.16, 0.1]) * 0.3, col)
    dust = fbm(uu, vv, 4, 7)
    col = col + (dust * 0.06 - 0.03)[..., None]
    rgba = np.concatenate([clamp01(col), alpha[..., None]], axis=-1)
    height = vanes * 0.4 + (1 - rachis * 2).clip(0, 1) * 0.3
    rough = clamp01(0.82 + 0.12 * vanes - 0.08 * is_ruff.astype(np.float64))
    return rgba, height, rough

def body_procedural(size, ao=None, curv=None, nrm=None):
    h = np.linspace(0, 1, size, endpoint=False)
    u, v = np.meshgrid(h, h)
    n = fbm(u, v, 5, 21)
    sore = fbm(u, v, 3, 7)
    dust = fbm(u * 1.8, v * 1.8, 3, 15)
    # Art-bible zombie/creature flesh: grey-green #6f7a62, dirt-biased, no pale cyan.
    col = np.stack([
        lerp(88, 130, n),
        lerp(96, 138, n),
        lerp(72, 110, n),
    ], axis=-1) / 255.0
    # Sparse dried-blood stains only — do not flood the atlas (head UVs share this map).
    k = clamp01((sore - 0.84) / 0.16) ** 1.5
    blood = np.array([110, 48, 40]) / 255.0
    col = col * (1 - k[..., None] * 0.65) + blood * (k[..., None] * 0.65)
    dk = clamp01((dust - 0.58) * 0.45)
    dustc = np.array([186, 168, 130]) / 255.0
    col = col * (1 - dk[..., None]) + dustc * dk[..., None]
    if ao is not None:
        a = ao[..., 0] if ao.ndim == 3 else ao
        # Darken cavities, but do not turn every crease into wet blood.
        col = col * (0.62 + 0.38 * a[..., None])
        wet = k * clamp01(1.0 - a)
        col = col * (1 - 0.35 * wet[..., None]) + np.array([0.22, 0.04, 0.03]) * (0.35 * wet[..., None])
    if curv is not None:
        c = curv[..., 0] if curv.ndim == 3 else curv
        col = col + ((c - 0.5) * 0.08)[..., None]
    # Skin/feather default is matte. Only the sparse blood mask goes slightly wetter.
    rough = np.full((size, size), 0.82)
    rough = clamp01(rough - k * 0.18 + (n - 0.5) * 0.06)
    if ao is not None:
        a = ao[..., 0] if ao.ndim == 3 else ao
        # Crevices stay rough (0.85), not lacquered.
        rough = clamp01(rough * (0.15 + 0.85 * a) + 0.85 * (1 - a) * 0.15 + 0.70 * (1 - a))
    emit = np.zeros((size, size, 3))
    return clamp01(col), rough, emit

def height_to_normal(height, strength=4.0):
    dx = np.zeros_like(height)
    dy = np.zeros_like(height)
    dx[:, 1:-1] = height[:, 2:] - height[:, :-2]
    dy[1:-1, :] = height[2:, :] - height[:-2, :]
    nx = -dx * strength
    ny = -dy * strength
    nz = np.ones_like(height)
    l = np.sqrt(nx * nx + ny * ny + nz * nz) + 1e-8
    return np.stack([nx / l * 0.5 + 0.5, ny / l * 0.5 + 0.5, nz / l * 0.5 + 0.5], axis=-1)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--bakes", default=str(Path(__file__).parent / "bakes"))
    ap.add_argument("--out", default=str(Path(__file__).parent / "textures"))
    ap.add_argument("--size", type=int, default=512)
    args = ap.parse_args()
    out = Path(args.out); bakes = Path(args.bakes); size = args.size
    out.mkdir(parents=True, exist_ok=True)
    ao = load_gray(bakes / "body_ao.png", size)
    curv = load_gray(bakes / "body_curv.png", size)
    nrm = load_gray(bakes / "body_normal.png", size)
    albedo, rough, emit = body_procedural(size, ao, curv, nrm)
    save_rgb(out / "body_albedo.png", albedo)
    save_rgb(out / "body_roughness.png", rough)
    save_rgb(out / "body_emissive.png", emit)
    if nrm is not None:
        Image.open(bakes / "body_normal.png").convert("RGB").resize((size, size), Image.LANCZOS).save(out / "body_normal.png")
        print("copied body_normal")
    else:
        h = np.linspace(0, 1, size, endpoint=False)
        uu, vv = np.meshgrid(h, h)
        save_rgb(out / "body_normal.png", height_to_normal(fbm(uu, vv, 4, 2) * 0.05, 2.0))
    rgba, height, fr = feather_atlas(size)
    save_rgb(out / "feather_albedo.png", rgba)
    save_rgb(out / "feather_normal.png", height_to_normal(height, 6.0))
    save_rgb(out / "feather_roughness.png", fr)
    save_rgb(out / "ruff_albedo.png", rgba)
    print("compose done", out)

if __name__ == "__main__":
    main()
