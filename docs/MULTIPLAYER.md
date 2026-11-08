# Co-op (2-4 players): dev notes
The co-op mode is not live. The server only runs locally (it binds to 127.0.0.1).

```bash
cd server && npm i && npm test                         # unit + socket tests
DEV_HOOKS=1 ALLOWED_ORIGINS=http://localhost:8099 npm start        # ws://127.0.0.1:8787
# repo root, second terminal:
npm run build && python3 -m http.server 8099           # open http://localhost:8099 -> CO-OP: Quick match / Create room / Join CODE
node test/coop-smoke.cjs                               # headless 2-client smoke test (CHROME=/usr/bin/google-chrome)
```
Point a client at another server with `?server=wss://host` or `localStorage.vwz_server`.

**Authority:** the server (`server/sim.js`) owns rounds, spawns, zombie movement and attacks, player HP, downs and revives, hit tests and damage, points, kills and weapon ownership (buys). Clients send only movement (speed-capped and clamped to the map), aim, shot directions (normalised, limited to the weapon's pellet count, rate-limited by the weapon's RPM) and buy requests.

**Transport hardening:** origin allowlist (403 otherwise), 1 KB max frame, 45 msgs/s per socket (close 4008), 10 joins/min, 6 sockets per IP, 200 rooms max, JSON only, and sanitised nicknames.

**Netcode:** 20 Hz server tick and snapshots. Clients render other players and zombies 100 ms in the past with interpolation, and predict their own movement with server correction past 2.5 m. On reconnect a token keeps your player for 30 s.

## Shared world (implemented)
Server map AABBs from all three client maps are in `server/maps.json`. Movement is swept against walls/fences and resolved with player radius; bullet rays stop at bullet colliders. Zombies respect solid colliders and the closed gate; once open, the gate routes them between lots.

Gate purchases, distance-checked weapon stations/refills, shared window planks (zombies tear them, players repair), timed mystery crate rolls (buyer-only take), med kits, ammo, double points and nukes are server-decided and replicated. Ammo counts remain cosmetic client-side; shot fire rate and ownership are server enforced. Downed players spectate a living teammate, cycling every 6 seconds; clearing the round revives them.

`DEV_HOOKS=1` enables explicit localhost smoke-test fixtures (teleports, health, points and drops). They are disabled by default and forcibly disabled with NODE_ENV=production. NEVER enable on a public server. The smoke test uses these to exercise interactions without relying on random spawns.

Remaining: full navigation/pathfinding around clutter (zombies can get stuck), authoritative magazine/reload counts, latency/loss and real-device soak tests. Collision data is an exported snapshot; regenerate it if map geometry changes. No persistent rooms. A server restart discards matches.

## Deployment preparation
See `docs/RENDER.md` and the root `render.yaml`. `coop-live` intentionally excludes the Android/TWA project; that work remains on `app-multiplayer`. Client still points at localhost until the real wss:// URL is supplied. Main is untouched.
