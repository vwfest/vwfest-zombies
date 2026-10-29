# DUST & DEAD — an air-cooled VW junkyard zombie shooter

A free, original 3D first-person **zombie wave-survival shooter** that runs entirely in the browser (desktop and phone).
Hold a night-time desert VW salvage yard (the **$VWFEST** crew's junkyard) against ever-growing hordes.

**Play:** https://vwfest.github.io/vwfest-zombies/

No server, no accounts, no CDN — Three.js is bundled into `game.js`; high scores are stored in `localStorage`.

## Gameplay
* Rounds with more, faster, tougher zombies each wave (plus rare Brutes later on).
* Points for hits, kills and headshots. Spend them on:
  * **Wall guns** — Rattler SMG, Sidewinder 12g shotgun, Ridgeback AR rifle (buy again for half-price ammo).
  * **Lucky Toolbox** — a random-weapon crate (can roll the crate-only Hog Hammer LMG).
  * **The back gate** — opens a second lot (new windows, new guns).
* Boarded windows: zombies tear planks off; **hold E** to nail them back (+points).
* Health regenerates when you stay out of trouble. Power-up drops: **Full Mags**, **2× Cash**, **Kaboom**.
* Game-over screen with the round you reached; local best-five list.

## Controls
| | Desktop | Phone |
|---|---|---|
| Move | `W A S D`, `Shift` sprint | left virtual joystick (push fully to sprint) |
| Look | mouse (pointer lock) | drag on the right side |
| Fire | left click | big red button |
| Reload / use / swap | `R` / `E` (hold to repair) / `1` `2` `Q` / wheel | `R` / `E` / ⇄ |
| Flashlight, mute, pause | `F`, `M`, `Esc` / `P` | speaker + pause buttons |

## Graphics
Desktop (High): PBR materials with procedural textures + sky-derived environment map, dynamic shadows (moon + shadowed flashlight), flashlight/muzzle-flash/lamp lights, exponential fog + volumetric-style light cones and drifting mist/dust, GTAO ambient occlusion, bloom, colour grading, vignette, chromatic aberration, film grain, damage vignette; blood-mist/spark/dust particles, shell casings, tracers, hit markers, screen shake. Stylised (cartoon) gore only.
**Medium** drops GTAO + flashlight shadows; **Low** (default on phones) removes post-processing and shadows and lowers resolution. **Auto** mode steps the quality down if FPS stays under ~28.

## Build / test
```
npm install
npm run build          # bundles src/ + three.js -> game.js
npm run serve &        # http://localhost:8099
npm test               # headless Playwright end-to-end test + screenshots
```
All models are low-poly and generated procedurally; all sounds are synthesised with Web Audio. No third-party game assets.
