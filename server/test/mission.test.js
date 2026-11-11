const test = require('node:test'), assert = require('node:assert');
const { Room } = require('../sim.js');
const at = (p, x, z) => { p.x = x; p.z = z; p.lastIn = 0; };
const walk = (r, id, x, z, t0 = 1000) => { const p = r.players.get(id); let t = t0; for (let i = 0; i < 80; i++) { t += 50; const dx = x - p.x, dz = z - p.z, d = Math.hypot(dx, dz); if (d < 0.05) break; const k = Math.min(1, 0.4 / d); r.input(id, { x: p.x + dx * k, z: p.z + dz * k, yaw: 0, pitch: 0 }, t); } return t; };

test('junkyard objectives start on fuel and do not open side lots', () => {
  const r = new Room('M'); const p = r.addPlayer('a'); r.step(0.05);
  assert.equal(r.missions.job, null);
  assert.equal(r.missions.onWave(1), true);
  assert.equal(r.missions.job.id, 'fuel');
  assert.equal(r.missions.price(r.door), 1250);
  assert.equal(r.missions.price(r.doors.find((d) => d.id === 'AC')), 750);
  assert.ok(r.activeWins().every((w) => w.area === 'A'));
  assert.equal(r.activeWins().some((w) => w.area === 'C' || w.area === 'D' || w.area === 'E'), false);
  assert.equal(r.snapshot().ms[0], 'fuel');
  assert.equal(p.pts, 500);
});

test('fuel run is shared, distance-checked, and opens lot C for free', () => {
  const r = new Room('M'); const a = r.addPlayer('a'), b = r.addPlayer('b'); r.phase = 'round'; r.missions.onWave(1); r.step(0.05);
  assert.equal(r.missions.use('a', 1000).why, 'empty');
  const cans = r.missions.job.items.map((c) => ({ x: c.x, z: c.z }));
  at(a, cans[0].x, cans[0].z); r.missions.step(0.05); assert.equal(r.missions.job.carry.a, 'f0');
  at(b, cans[0].x, cans[0].z); r.missions.step(0.05); assert.equal(r.missions.job.carry.b, undefined);
  at(a, 0, 12); assert.equal(r.missions.use('a', 2000).why, 'far');
  at(a, 19.2, 12); assert.equal(r.missions.use('a', 2000).ok, true);
  at(b, cans[1].x, cans[1].z); r.missions.step(0.05); at(b, 19.2, 12); assert.equal(r.missions.use('b', 3000).ok, true);
  at(a, cans[2].x, cans[2].z); r.missions.step(0.05); at(a, 19.2, 12); assert.equal(r.missions.use('a', 4000).ok, true);
  assert.equal(r.doors.find((d) => d.id === 'AC').open, true);
  assert.ok(a.pts >= 500);
  assert.equal(r.missions.job, null);
  assert.ok(r.activeWins().some((w) => w.area === 'C'));
  assert.equal(r.activeWins().some((w) => w.area === 'D'), false);
  const snap = r.snapshot(); assert.equal(snap.ms, null); assert.ok(snap.go.includes('AC'));
});

test('buying lot C while fuel is active is half price and still a fallback', () => {
  const r = new Room('M'); const p = r.addPlayer('a'); r.missions.onWave(1); at(p, 22.2, 12); p.pts = 800;
  const res = r.openDoor('a', 'AC'); assert.equal(res.ok, true); assert.equal(res.price, 750); assert.equal(p.pts, 50);
  assert.equal(r.openDoor('a', 'AC').ok, false);
  assert.ok(r.activeWins().some((w) => w.area === 'C'));
});

test('boarding the bus is shared and opens lot D', () => {
  const r = new Room('M'); const a = r.addPlayer('a'), b = r.addPlayer('b'); r.missions.begin(1); r.phase = 'round';
  const spots = r.missions.job.items.map((s) => [s.x, s.z]);
  at(a, spots[0][0], spots[0][1]); assert.equal(r.missions.use('a', 1000).ok, true); assert.equal(r.missions.use('a', 1200).why, 'rate');
  at(b, spots[1][0], spots[1][1]); assert.equal(r.missions.use('b', 1300).ok, true);
  at(a, spots[2][0], spots[2][1]); assert.equal(r.missions.use('a', 2000).ok, true);
  at(b, spots[3][0], spots[3][1]); assert.equal(r.missions.use('b', 2100).ok, true);
  assert.equal(r.doors.find((d) => d.id === 'AD').open, true);
  assert.equal(r.missions.job, null);
  assert.ok(r.activeWins().some((w) => w.area === 'D'));
  assert.equal(r.snapshot().ms, null);
});

test('carb hunt opens the side access and radio hold only counts inside the pad', () => {
  const r = new Room('M'); const p = r.addPlayer('a'); r.phase = 'round'; r.missions.begin(2);
  at(p, -6, 20); r.missions.step(0.05); assert.equal(r.missions.job.carry.a, 'carb');
  at(p, -18.2, -30); assert.equal(r.missions.use('a', 1000).ok, true);
  assert.equal(r.doors.find((d) => d.id === 'SD').open, true);
  assert.equal(r.missions.job, null);
  r.missions.begin(3);
  assert.equal(r.missions.job.id, 'radio');
  at(p, 0, 12); for (let i = 0; i < 20; i++) r.missions.step(0.05); assert.equal(r.missions.job.have, 0);
  at(p, 8, -42); for (let i = 0; i < 40; i++) r.missions.step(0.05); const mid = r.missions.job.have; assert.ok(mid > 1.5 && mid < 2.5);
  at(p, 0, 12); for (let i = 0; i < 40; i++) r.missions.step(0.05); assert.ok(r.missions.job.have < mid);
  at(p, 8, -42); for (let i = 0; i < 500; i++) r.missions.step(0.05);
  assert.equal(r.doors.find((d) => d.id === 'BE').open, true);
  assert.ok(r.activeWins().some((w) => w.area === 'E'));
});

test('part collection does not open a gate and clear lot only counts lot D', () => {
  const r = new Room('M'); const p = r.addPlayer('a'); r.phase = 'round'; r.missions.begin(4);
  assert.equal(r.missions.job.id, 'parts');
  for (const it of [...r.missions.job.items]) { at(p, it.x, it.z); r.missions.step(0.05); at(p, 40, 5.5); assert.equal(r.missions.use('a', 1000).ok, true); }
  assert.equal(r.missions.job, null);
  r.missions.begin(5);
  assert.equal(r.missions.job.id, 'clear');
  assert.equal(r.doors.filter((d) => d.open).length, 0);
  r.missions.onKill({ x: 0, z: 10 }); assert.equal(r.missions.job.have, 0);
  for (let i = 0; i < 8; i++) r.missions.onKill({ x: -37, z: -18 });
  assert.equal(r.missions.job, null);
  assert.ok(p.pts >= 500 + 450 + 500);
});

test('closed lot C gate blocks movement and an open gate lets you through', () => {
  const r = new Room('M'); const p = r.addPlayer('a'); at(p, 22, 12); walk(r, 'a', 30, 12);
  assert.ok(p.x < 24.3, 'blocked, x=' + p.x);
  r.openGate('AC'); walk(r, 'a', 30, 12, 8000); assert.ok(p.x > 26, 'through, x=' + p.x);
});

test('new-lot spawners stay off until that lot is unlocked', () => {
  const r = new Room('M', 'junkyard', () => 0.1); r.addPlayer('a'); r.phase = 'round'; r.round = 1; r.toSpawn = 8; r.brutes = 0; r.interT = 99;
  for (let i = 0; i < 40; i++) r.step(0.05);
  assert.ok(r.zombies.size > 0);
  for (const z of r.zombies.values()) assert.equal(z.win.area, 'A');
  r.openGate('AC'); const areas = new Set(r.activeWins().map((w) => w.area));
  assert.ok(areas.has('A') && areas.has('C') && !areas.has('E'));
});
