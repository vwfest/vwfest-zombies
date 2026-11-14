# Carrion Buzzard — implementation plan

Lead design: **Carrion Buzzard**, a rotting desert turkey vulture. Concept 01 is the target look (bald green-gray head, hooked beak, yellow-green eyes, exposed ribs, torn dark wings). Concepts 02 (Bone-Wing Condor) and 03 (Plague Crow) are alternates if we want something more skeletal or a denser smaller flock later.

This plan is for a future game change. Nothing here is live. The prototype lives on `feat/zombie-birds-concept` only. The co-op server is **not** changed.

## Behavior

- **Role:** an extra aerial swarm, not a replacement for walkers. They attack from above so the player has to look up and can't just hold the ground lane.
- **First appearance:** round 4 on Medium (round 5 Easy, round 3 Hard). Early rounds stay walker-only so the new enemy is a mid-run surprise.
- **Idle:** circle 5–8 m above the lot, slightly banked, flap cycle ~7 Hz, staggered phases so the flock doesn't flash in sync.
- **Telegraph:** 0.4 s wing-tuck and a shriek (new short SFX) before a dive, so a phone player can track the stoop.
- **Dive:** pitch in, accelerate toward the player's chest (~10–16 m/s), legs reaching forward. Contact damage **14–16** (walkers deal 22). Miss or hit, then climb back to the circle with a 3–5 s cooldown.
- **Hits to kill:** **1 Dustdevil .45 body shot** (HP 30–40). SMG 2 shots, shotgun a one-shot inside its range. HP can scale slowly after round 10 (not walker-steep). Headshots are nice-to-have on a small fast hitbox; treat the body as the whole bird for v1.
- **Score:** 25–40 points (walkers are 60).
- **Blood Bait:** the blast already uses a radius — use **3D distance** so a mid-air or landed bait can clip birds. Do **not** lure birds onto a landed grenade (they're aerial).
- **Wave mix:**
  - From the first bird round, mix in **4–8** buzzards alongside walkers.
  - Every 3rd round, a **flock wave**: more birds (12–20), fewer walkers, so the sky is the threat.
  - Hard cap **16–24** live birds. Do not stack a full bird cap on top of a full walker cap (junkyard already allows 16–26 walkers). Prefer a shared "threat cap" or subtracting 1 walker slot per 2 birds.
- **Nav:** ignore doors, planks, and windows. They fly over the fence. Keep them inside the map AABB plus a little height so they don't vanish into the hills.

## Performance (phone / tablet)

The prototype (26 instanced buzzards):

- **~2,470 triangles** per bird, **4 draw calls** for the whole swarm (flesh, bone, feather, eye).
- **~64k tris** for 26 birds. Comfortable on mobile by itself.
- **No per-bird lights.** Eyes are emissive only. This is the same rule that fixed the Blood Bait press hitch (a PointLight per throw was rebuilding shaders).
- Shared materials, instanced matrices, wing flap in the vertex shader (`aPart` + `aTuck` + phase).

When a full walker horde is also on screen, 64k extra tris plus HD zombie rigs is the real budget. For production:

1. Keep instancing + shader flap (4 draw calls, not 26 groups).
2. Optional simplify pass: drop ruff quills / extra talon joints and land around **800–1,200 tris** if frame time is tight next to `MAP.cap`.
3. Do not cast shadows from birds on Low/Auto. Medium can allow a few.
4. Far LOD is optional at this count; 20–30 instanced meshes should be enough.
5. Prewarm the 4 materials at boot so the first flock doesn't hitch (same lesson as the grenade shader rebuild).

## Co-op sync (do not change the server yet)

The live co-op server (`srv-dbofbebl550s739igp9g`, branch `coop-live`) is authoritative over spawns, positions, health, and damage. The current zombie snapshot is 2D:

```
z: [id, x, z, yaw, state, climb, brute, runner, atk, v]
```

Birds need height, pitch, and a flight state. A later server change (separate approval, not this branch) would add something like:

```
b: [id, x, y, z, yaw, pitch, state, tuck]
```

with `state` in {circle, dive, climb, dead}.

Client notes, when that ships:

- Reuse the **100 ms interpolation buffer** already used for zombies, teammates, and grenades (`mp.js`).
- The client only poses and renders; the server runs circle / dive / damage.
- Hits are a 3D ray vs a small capsule (not the walker's ground cylinder).
- Until the server knows about birds, **gate them to solo**. Do not spawn client-only birds in a co-op room — they would desync and could not be authoritative.

Solo can ship first. Co-op birds wait on a `coop-live` deploy the user approves.

## Suggested file split (when we actually hook it up)

- `src/hd/bird.js` — procedural mesh + instanced swarm (start from `tools/bird-preview/bird.js`).
- `src/bird.js` — pool, spawn, AI, ray hit, damage.
- `src/main.js` / `src/modes.js` — wave mix and caps.
- `src/mp.js` — interpolate `snap.b` once the server sends it.
- `server/sim.js` — only later, on `coop-live`, with approval.

Prototype (this branch only): `tools/bird-preview/` — standalone page, does not touch `game.js` or main.

## Open calls for the user

1. Lock **Carrion Buzzard** as the lead, or switch to the Bone-Wing Condor / Plague Crow.
2. First-round and hits-to-kill feel (default: round 4, one pistol shot).
3. Solo-only first, or wait and ship birds with a co-op server change.
