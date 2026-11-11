// Keep in sync with src/nav.js. CommonJS copy so the co-op server does not import the client bundle.
'use strict';
const yard = require('../shared/yard.json');
const DOOR_Z = -24;

function areaOf(x, z, mapId = 'junkyard') {
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

function activeAreas(doors) {
  const open = new Set((doors || []).filter((d) => d && d.open).map((d) => d.id));
  const a = new Set(['A']);
  if (open.has('AB')) a.add('B');
  if (open.has('AC')) a.add('C');
  if (open.has('AD') || open.has('SD')) a.add('D');
  if (open.has('BE')) a.add('E');
  return a;
}

function standOf(g, area) { return (g.stand && g.stand[area]) || { x: g.x, z: g.z }; }

function route(from, to, doors) {
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

// Steer a chaser through the open gate that joins `here` to `destArea`.
// The old stand points sit 1.8m short of the opening and the "through" test was 1.65m,
// so a horde would mill on the near stand and never enter the gap. This aims at the
// mouth, then commits to a point past the plane, with a lane offset that stays inside
// the gap after the body radius.
function portalTarget(x, z, mapId, destArea, doors, lane = 0) {
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
  // One target, past the plane. A nearer "mouth" waypoint is a place they can stop on,
  // and the old 1.8m stand never reached the opening at all.
  const exitAlong = plane + sign * 1.55;
  return {
    x: crossZ ? g.x + lat : exitAlong, z: crossZ ? exitAlong : g.z + lat,
    ex: crossZ ? g.x : exitAlong, ez: crossZ ? exitAlong : g.z,
    gate: g.id, next, progress, crossZ, gx: g.x, gz: g.z,
  };
}

module.exports = { yard, areaOf, activeAreas, standOf, route, portalTarget, DOOR_Z };
