#!/usr/bin/env python3
"""Side-by-side a milestone render against concept-01."""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

CONCEPTS = [
    Path("/workspace/zz-birds-concept/concept-01-carrion-buzzard.jpg"),
    Path("/workspace/zz-birds/tools/bird-preview/concept/concept-01-carrion-buzzard.jpg"),
]

def font(size):
    for p in (
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ):
        if Path(p).exists():
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

def main():
    out = Path(sys.argv[1]); title = sys.argv[2]; items = sys.argv[3:]
    H = 520
    concept = next(p for p in CONCEPTS if p.exists())
    tiles = [("CONCEPT (target)", Image.open(concept).convert("RGB"))]
    for it in items:
        p, _, crop = it.partition(":")
        path = Path(p)
        if not path.exists():
            print("missing", path)
            continue
        im = Image.open(path).convert("RGB")
        if crop:
            x, y, w, h = map(int, crop.split(","))
            im = im.crop((x, y, x + w, y + h))
        tiles.append((path.name + (" crop" if crop else ""), im))
    rs = [im.resize((max(1, int(im.width * H / im.height)), H), Image.LANCZOS) for _, im in tiles]
    W = sum(r.width for r in rs) + 10 * (len(rs) - 1)
    c = Image.new("RGB", (W, H + 64), (20, 20, 20))
    d = ImageDraw.Draw(c)
    f, fs = font(22), font(14)
    d.text((10, 8), title, fill=(255, 220, 120), font=f)
    x = 0
    for (lab, _), r in zip(tiles, rs):
        c.paste(r, (x, 64))
        d.text((x + 6, 68), lab, fill=(255, 255, 255), font=fs)
        x += r.width + 10
    out.parent.mkdir(parents=True, exist_ok=True)
    c.save(out, quality=95)
    print(out, c.size)

if __name__ == "__main__":
    main()
