# Carrion Buzzard preview

Standalone three.js prototype of the lead DUST & DEAD bird design. **100% original procedural geometry** — no third-party meshes. This page is not hooked into the live game and is not on `main`.

```
# from the repo root (needs node_modules/three, e.g. npm ci)
python3 -m http.server 8765
# http://127.0.0.1:8765/tools/bird-preview/index.html?mode=close
# http://127.0.0.1:8765/tools/bird-preview/index.html?mode=swarm&n=26
# add &clean=1 to hide the stats overlay
```

- `mode=close` — one articulated buzzard with a flap / jaw / viscera cycle.
- `mode=swarm` — instanced flock (default 24) with a vertex-shader flap and coordinated dive waves. **4 draw calls** for the whole swarm.
- Phone viewport used for the shots: **844×390**, deviceScaleFactor 2 (landscape, same as the live game).

Concept paintings (the visual target) are in `concept/`. Phone screenshots and a short flap+dive clip are in `shots/`.
