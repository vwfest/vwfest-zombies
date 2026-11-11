# HDRI -> tier assets. Input: Poly Haven rogland_moonlit_night_2k.hdr converted to PFM by ffmpeg:
#   ffmpeg -i rogland_moonlit_night_2k.hdr -pix_fmt gbrpf32le rog.pfm
# Output: sky_2k.webp / sky_1k.webp (linear*0.1, sRGB, tone-mapped at runtime like the rest of the scene)
#         env_256.hdr (8x box-filtered, *0.1, moon clamped) for PMREM image-based lighting.
import numpy as np, sys
from PIL import Image
f = open(sys.argv[1] if len(sys.argv) > 1 else 'rog.pfm', 'rb'); f.readline(); w, h = map(int, f.readline().split()); sc = float(f.readline())
a = np.frombuffer(f.read(), dtype='<f4' if sc < 0 else '>f4').reshape(h, w, 3)[::-1].astype(np.float32)
srgb = lambda y: np.where(np.clip(y, 0, 1) <= 0.0031308, 12.92 * np.clip(y, 0, 1), 1.055 * np.power(np.clip(y, 0, 1), 1 / 2.4) - 0.055)
img = Image.fromarray((srgb(a * 0.1) * 255 + 0.5).astype(np.uint8))
img.save('sky_2k.webp', quality=84, method=6); img.resize((1024, 512), Image.LANCZOS).save('sky_1k.webp', quality=82, method=6)
e = np.minimum(a.reshape(h // 8, 8, w // 8, 8, 3).mean((1, 3)) * 0.1, 30.0)
m = e.max(2); ex = np.zeros_like(m, dtype=np.int32); mant = np.zeros_like(m); nz = m > 1e-32; mant[nz], ex[nz] = np.frexp(m[nz])
k = np.zeros_like(m); k[nz] = mant[nz] * 256.0 / m[nz]; rgbe = np.zeros(e.shape[:2] + (4,), np.uint8)
rgbe[..., :3] = np.clip(e * k[..., None], 0, 255).astype(np.uint8); rgbe[..., 3] = np.where(nz, ex + 128, 0).astype(np.uint8)
with open('env_256.hdr', 'wb') as o: o.write(b'#?RADIANCE\nFORMAT=32-bit_rle_rgbe\n\n-Y %d +X %d\n' % e.shape[:2]); o.write(rgbe.tobytes())
