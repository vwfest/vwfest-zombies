# Co-op Render setup

The free web service already exists: `srv-dbofbebl550s739igp9g` at https://vwfest-zombies-coop.onrender.com (WebSocket `wss://vwfest-zombies-coop.onrender.com`). Do not create a second service or change the plan. Auto-deploy stays off; redeploy that service manually after a tested server commit.

The browser game on GitHub Pages connects to that socket. The shipped page does not allow localhost WebSocket connections. Production also drops localhost entries from `ALLOWED_ORIGINS`.

Create settings, for reference:

- Branch the service tracks: **coop-live** (the browser release is `main`)
- Root directory: repository root
- Runtime: **Node**
- Build command: **cd server && npm ci --omit=dev**
- Start command: **cd server && npm start**
- Instance type: **Free**
- Health check: **/health**
- Auto-deploy: **Off** (manual deployment while preparing)
- Environment:
  - NODE_ENV=production
  - NODE_VERSION=22
  - HOST=0.0.0.0
  - ALLOWED_ORIGINS=https://vwfest.github.io (exact origin, no trailing slash)
  - DEV_HOOKS=0 (test fixtures also forcibly disabled in production)
  - TRUST_PROXY=1 (only behind Render's trusted proxy; uses leftmost forwarded client address)
  - PORT: **Render supplies this automatically**. The server reads process.env.PORT; do not hardcode it.

`render.yaml` describes the same free service. No secrets required.

The free instance may sleep or restart, and every room is in memory: a restart, deploy, or sleep discards sessions. One instance only. No database and no paid resources.
