// Server copy of the map collision (AABBs exported from the client World): movement push-out, segment blocking, bullet rays.
'use strict';
const { areaOf, DOOR_Z } = require('./nav.js');
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
class World {
  constructor(def) { this.cols = def.cols.map((c) => ({ ...c })); this.doorCol = this.cols.find((c) => c.door && (!c.gate || c.gate === 'AB')) || this.cols.find((c) => c.door); }
  setGate(id, open) { for (const c of this.cols) if (c.door && (c.gate === id || (!c.gate && id === 'AB'))) c.off = !!open; }
  setDoorOpen(open) { this.setGate('AB', open); }
  // push a circle (x,z,r) out of every movement collider
  resolve(p, r) { let hit = false;
    for (let pass = 0; pass < 2; pass++) for (const c of this.cols) { if (c.bo || c.off) continue;
      const cx = clamp(p.x, c.x0, c.x1), cz = clamp(p.z, c.z0, c.z1); let dx = p.x - cx, dz = p.z - cz; const d2 = dx * dx + dz * dz; if (d2 >= r * r) continue; hit = true;
      if (d2 > 1e-8) { const d = Math.sqrt(d2), k = (r - d) / d; p.x += dx * k; p.z += dz * k; }
      else { const l = p.x - c.x0, rr = c.x1 - p.x, t = p.z - c.z0, b = c.z1 - p.z, m = Math.min(l, rr, t, b); if (m === l) p.x = c.x0 - r; else if (m === rr) p.x = c.x1 + r; else if (m === t) p.z = c.z0 - r; else p.z = c.z1 + r; } }
    return hit; }
  // does the ground segment a->b pass through a movement collider? returns fraction t (0..1) of first hit or null
  segBlock(a, b) { const dx = b.x - a.x, dz = b.z - a.z; let best = null;
    for (const c of this.cols) { if (c.bo || c.off) continue; let t0 = 0, t1 = 1, ok = true;
      for (const [o, d, lo, hi] of [[a.x, dx, c.x0, c.x1], [a.z, dz, c.z0, c.z1]]) { if (Math.abs(d) < 1e-9) { if (o < lo || o > hi) { ok = false; break; } continue; } let ta = (lo - o) / d, tb = (hi - o) / d; if (ta > tb) [ta, tb] = [tb, ta]; t0 = Math.max(t0, ta); t1 = Math.min(t1, tb); if (t0 > t1) { ok = false; break; } }
      if (ok && t0 > 1e-6 && (best === null || t0 < best)) best = t0; }
    return best; }
  // nearest bullet-blocking hit distance along a 3D ray (walls, fences, cars, window boards) or Infinity
  ray(o, d, max) { let best = max;
    for (const c of this.cols) { if (c.nb || c.off) continue; let t0 = 0, t1 = best, ok = true;
      for (const [oo, dd, lo, hi] of [[o.x, d.x, c.x0, c.x1], [o.y, d.y, c.y0, c.y1], [o.z, d.z, c.z0, c.z1]]) { if (Math.abs(dd) < 1e-9) { if (oo < lo || oo > hi) { ok = false; break; } continue; } let ta = (lo - oo) / dd, tb = (hi - oo) / dd; if (ta > tb) [ta, tb] = [tb, ta]; if (ta > t0) t0 = ta; if (tb < t1) t1 = tb; if (t0 > t1) { ok = false; break; } }
      if (ok && t0 > 0 && t0 < best) best = t0; }
    return best < max ? best : Infinity; }
}
module.exports = { World, areaOf, DOOR_Z };
