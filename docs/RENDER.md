# Co-op Render setup — prepared, NOT deployed

Create a **Web Service** from https://github.com/vwfest/vwfest-zombies using:

- Branch: **coop-live** (NOT main)
- Root directory: **server**
- Runtime: **Node**
- Build command: **npm ci --omit=dev**
- Start command: **npm start**
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

`render.yaml` is a blueprint alternative. No service has been created. No secrets required.

After Render gives the https://…onrender.com URL, provide its wss:// equivalent to the coding agent so it can replace the localhost client default and exact CSP connect-src entries. **Do not merge main until then and until user approves the launch.**

The Free instance may sleep/cold-start, and all rooms are in memory: restart, deploy or sleep discards sessions. Not a production availability guarantee. Use one instance; multiple replicas need shared state / sticky routing. No databases or paid resources are required for this prototype.
