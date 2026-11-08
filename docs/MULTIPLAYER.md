# Co-op (2-4 players): dev notes
The co-op mode is not live. The server only runs locally (it binds to 127.0.0.1).

```bash
cd server && npm i && npm test                         # unit + socket tests
ALLOWED_ORIGINS=http://localhost:8099 npm start        # ws://127.0.0.1:8787
# repo root, second terminal:
npm run build && python3 -m http.server 8099           # open http://localhost:8099 -> CO-OP: Quick match / Create room / Join CODE
node test/coop-smoke.cjs                               # headless 2-client smoke test (CHROME=/usr/bin/google-chrome)
```
Point a client at another server with `?server=wss://host` or `localStorage.vwz_server`.

**Authority:** the server (`server/sim.js`) owns rounds, spawns, zombie movement and attacks, player HP, downs and revives, hit tests and damage, points, kills and weapon ownership (buys). Clients send only movement (speed-capped and clamped to the map), aim, shot directions (normalised, limited to the weapon's pellet count, rate-limited by the weapon's RPM) and buy requests.

**Transport hardening:** origin allowlist (403 otherwise), 1 KB max frame, 45 msgs/s per socket (close 4008), 10 joins/min, 6 sockets per IP, 200 rooms max, JSON only, and sanitised nicknames.

**Netcode:** 20 Hz server tick and snapshots. Clients render other players and zombies 100 ms in the past with interpolation, and predict their own movement with server correction past 2.5 m. On reconnect a token keeps your player for 30 s.

**Not done yet:** server-side walls and line of sight, server-driven doors, planks, power-ups and crate, spectator camera while downed, and a production deployment (needs wss/TLS).
