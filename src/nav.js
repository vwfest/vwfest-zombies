// Shared lot graph for the junkyard. Motel and Drive-In stay two areas split at z = -24.
import yard from '../shared/yard.json';

export const YARD = yard;
const DOOR_Z = -24;

export function areaOf(x, z, mapId = 'junkyard') {
  if (typeof z !== 'number') return x > DOOR_Z ? 'A' : 'B';
  if (mapId !== 'junkyard') return z > DOOR_Z ? 'A' : 'B';
  const L = yard.lots;
  for (const id of ['C', 'D', 'E']) {
    const r = L[id];
    if (x > r.x0 && x < r.x1 && z > r.z0 && z < r.z1) return id;
  }
  if (z > DOOR_Z) return 'A';
  if (z >= -52) return 'B';
  return 'B';
}

export function activeAreas(doors) {
  const open = new Set((doors || []).filter((d) => d && d.open).map((d) => d.id));
  const a = new Set(['A']);
  if (open.has('AB')) a.add('B');
  if (open.has('AC')) a.add('C');
  if (open.has('AD') || open.has('SD')) a.add('D');
  if (open.has('BE')) a.add('E');
  return a;
}

export function standOf(g, area) {
  return (g.stand && g.stand[area]) || { x: g.x, z: g.z };
}

// Next open gates from `from` to `to`. [] when already there, null when no open path.
export function route(from, to, doors) {
  if (!from || !to || from === to) return from === to ? [] : null;
  const adj = new Map();
  for (const g of doors || []) {
    if (!g || !g.open || !g.areas || g.areas.length < 2) continue;
    const [a, b] = g.areas;
    if (!adj.has(a)) adj.set(a, []);
    if (!adj.has(b)) adj.set(b, []);
    adj.get(a).push(g);
    adj.get(b).push(g);
  }
  const q = [from];
  const prev = new Map([[from, null]]);
  while (q.length) {
    const cur = q.shift();
    if (cur === to) break;
    for (const g of adj.get(cur) || []) {
      const nxt = g.areas[0] === cur ? g.areas[1] : g.areas[0];
      if (prev.has(nxt)) continue;
      prev.set(nxt, { via: g, from: cur });
      q.push(nxt);
    }
  }
  if (!prev.has(to)) return null;
  const gates = [];
  let c = to;
  while (prev.get(c)) { gates.push(prev.get(c).via); c = prev.get(c).from; }
  gates.reverse();
  return gates;
}

// Keep in sync with server/nav.js. Mouth, then a point past the gate plane, lane kept inside the gap.
export function portalTarget(x, z, mapId, destArea, doors, lane = 0) {
  const here = areaOf(x, z, mapId);
  if (!destArea || here === destArea) return null;
  const path = route(here, destArea, doors);
  if (!path || !path.length) return null;
  const g = path[0];
  const next = g.areas[0] === here ? g.areas[1] : g.areas[0];
  const crossZ = g.axis !== 'z';
  const a = standOf(g, here), b = standOf(g, next);
  const sign = crossZ ? (Math.sign(b.z - a.z) || -1) : (Math.sign(b.x - a.x) || 1);
  const pos = crossZ ? z : x, plane = crossZ ? g.z : g.x;
  const progress = (pos - plane) * sign;
  const half = Math.max(0.25, (g.w || 6) / 2 - 1.05);
  const lat = Math.max(-half, Math.min(half, lane || 0));
  // One target, past the plane, so the pack cannot camp on a waypoint short of the gap.
  const exitAlong = plane + sign * 1.55;
  return {
    x: crossZ ? g.x + lat : exitAlong, z: crossZ ? exitAlong : g.z + lat,
    ex: crossZ ? g.x : exitAlong, ez: crossZ ? exitAlong : g.z,
    gate: g.id, next, progress, crossZ, gx: g.x, gz: g.z,
  };
}

export function gatePrice(door, job) {
  if (!door) return 0;
  if (job && job.gate && job.gate === door.id) return Math.floor(door.price * yard.discount);
  return door.price;
}

export function jobById(id) { return yard.jobs.find((j) => j.id === id) || null; }
