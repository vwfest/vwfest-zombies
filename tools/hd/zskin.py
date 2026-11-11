# Zombie-fy the CC0 Quaternius base-character skin: pallid grey-green, bruising, veins, grime, dried blood.
import numpy as np, sys
from PIL import Image, ImageFilter
rng = np.random.default_rng(7)
def noise(n, scale, oct=4, seed=0):
    r = np.random.default_rng(seed); out = np.zeros((n, n), np.float32); a = 1.0; tot = 0
    for o in range(oct):
        s = max(2, int(n / scale * 2 ** o)); g = r.random((s, s)).astype(np.float32)
        im = Image.fromarray((g * 255).astype(np.uint8)).resize((n, n), Image.BICUBIC)
        out += np.asarray(im, np.float32) / 255 * a; tot += a; a *= 0.5
    return out / tot
def run(src, dst, size, seed):
    im = Image.open(src).convert('RGB').resize((size, size), Image.LANCZOS); a = np.asarray(im, np.float32) / 255
    lum = a @ np.array([0.3, 0.59, 0.11], np.float32)
    dark = lum < 0.33  # underwear/dark cloth regions in the base texture
    n1 = noise(size, 64, 5, seed); n2 = noise(size, 48, 4, seed + 1); n3 = noise(size, 220, 3, seed + 2)
    pale = np.array([0.56, 0.60, 0.50], np.float32); bruise = np.array([0.30, 0.22, 0.30], np.float32); rot = np.array([0.30, 0.34, 0.20], np.float32)
    base = (lum[..., None] / max(1e-3, np.median(lum))) ** 1.3 * 0.85
    skin = pale * base
    skin = skin * (0.9 + 0.2 * n1[..., None])
    b = np.clip((n2 - 0.62) * 4, 0, 1)[..., None]; skin = skin * (1 - b * 0.45) + bruise * base * b * 0.45
    r = np.clip((n3 - 0.6) * 3.5, 0, 1)[..., None]; skin = skin * (1 - r * 0.7) + rot * base * r * 0.7
    # veins: thin dark lines from ridged noise
    v = 1 - np.abs(noise(size, 40, 4, seed + 3) - 0.5) * 2; v = np.clip((v - 0.965) * 18, 0, 1)[..., None]
    skin = skin * (1 - v * 0.22) + np.array([0.18, 0.22, 0.28], np.float32) * v * 0.22
    # dried blood blotches
    bl = np.clip((noise(size, 90, 4, seed + 4) - 0.72) * 5, 0, 1)[..., None]; skin = skin * (1 - bl * 0.75) + np.array([0.24, 0.03, 0.03], np.float32) * bl * 0.75
    out = np.where(dark[..., None], a * np.array([0.8, 0.82, 0.78]) * (0.8 + 0.3 * n1[..., None]), skin)
    out = np.clip(out, 0, 1)
    Image.fromarray((out * 255).astype(np.uint8)).save(dst, 'WEBP', quality=82, method=6)
U = sys.argv[1]
for sx, f in [('m', 'T_Superhero_Male_Dark.png'), ('f', 'T_Superhero_Female_Dark_BaseColor.png')]:
    for sz in (1024, 512): run(f'{U}/{f}', f'/workspace/zz-tools/out/zskin_{sx}_{sz}.webp', sz, 11 if sx == 'm' else 23)
for sx, f in [('m', 'T_Superhero_Male_Normal.png'), ('f', 'T_Superhero_Female_Normal.png')]:
    Image.open(f'{U}/{f}').convert('RGB').resize((1024, 1024), Image.LANCZOS).save(f'/workspace/zz-tools/out/znrm_{sx}_1024.webp', 'WEBP', quality=88, method=6)
print('ok')
