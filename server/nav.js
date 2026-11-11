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

module.exports = { yard, areaOf, activeAreas, standOf, route, DOOR_Z };
