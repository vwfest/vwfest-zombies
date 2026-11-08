const test = require('node:test'), assert = require('node:assert'); const { Room, MAX_SPEED } = require('../sim.js');
const seq = () => { let s = 1; return () => ((s = (s * 16807) % 2147483647) / 2147483647); };
test('max 4 players', () => { const r = new Room('A'); for (let i = 0; i < 4; i++) assert.ok(r.addPlayer('p' + i)); assert.equal(r.addPlayer('p5'), null); });
test('names are sanitised', () => { const r = new Room('A'); assert.equal(r.addPlayer('a', '<img src=x>').name, 'img srcx'); });
test('rounds start and zombies spawn at area-A windows', () => { const r = new Room('A', 'junkyard', seq()); r.addPlayer('a'); for (let i = 0; i < 200; i++) r.step(0.05); assert.equal(r.round, 1); assert.ok(r.zombies.size > 0); for (const z of r.zombies.values()) assert.equal(z.win.area, 'A'); });
test('speed hack is clamped', () => { const r = new Room('A'); const p = r.addPlayer('a'); const x0 = p.x; r.input('a', { x: x0 + 50, z: p.z, yaw: 0, pitch: 0 }, 1000); r.input('a', { x: x0 + 50, z: p.z, yaw: 0, pitch: 0 }, 1100); assert.ok(p.x - x0 < MAX_SPEED * 0.6 + 1); });
test('bad numbers rejected', () => { const r = new Room('A'); const p = r.addPlayer('a'); assert.equal(r.input('a', { x: NaN, z: 0, yaw: 0, pitch: 0 }, 1), false); assert.equal(r.input('a', { x: '1', z: 0, yaw: 0, pitch: 0 }, 1), false); assert.ok(Number.isFinite(p.x)); });
test('position stays inside map bounds', () => { const r = new Room('A'); const p = r.addPlayer('a'); for (let t = 1; t < 200; t++) r.input('a', { x: p.x + 2, z: p.z, yaw: 0, pitch: 0 }, t * 300); assert.ok(p.x <= r.b.x1); });
function withZombie(r, p, dist = 5) { const z = { id: 99, x: p.x, z: p.z - dist, yaw: 0, state: 'chase', scale: 1, hp: 100, value: 60, win: r.wins[0], cool: 9, t: 0 }; r.zombies.set(99, z); return z; }
test('server computes damage, kills and score', () => { const r = new Room('A'); const p = r.addPlayer('a'); const z = withZombie(r, p); const pts = p.pts;
  let res = r.shoot('a', { w: 'pistol', dirs: [[0, -0.12, -1]] }, 1000); assert.ok(res.ok); assert.equal(res.hits.length, 1); assert.equal(z.hp, 70); assert.equal(p.pts, pts + 10);
  res = r.shoot('a', { w: 'pistol', dirs: [[0, 0, -1]] }, 2000); assert.ok(res.hits[0].head && res.hits[0].killed); assert.equal(r.zombies.size, 0); assert.equal(p.kills, 1); });
test('fire rate limited', () => { const r = new Room('A'); const p = r.addPlayer('a'); withZombie(r, p); assert.ok(r.shoot('a', { w: 'pistol', dirs: [[0, 0, -1]] }, 1000).ok); assert.equal(r.shoot('a', { w: 'pistol', dirs: [[0, 0, -1]] }, 1010).why, 'rate'); });
test('unowned weapon / too many pellets / bad dirs rejected', () => { const r = new Room('A'); r.addPlayer('a');
  assert.equal(r.shoot('a', { w: 'lmg', dirs: [[0, 0, -1]] }, 1).why, 'weapon'); assert.equal(r.shoot('a', { w: 'pistol', dirs: [[0, 0, -1], [0, 0, -1]] }, 1).why, 'dirs');
  assert.equal(r.shoot('a', { w: 'pistol', dirs: [[0, 0, -9]] }, 5000).why, 'dirs'); assert.equal(r.shoot('a', { w: 'nope', dirs: [[0, 0, -1]] }, 9000).why, 'weapon'); });
test('buying needs points', () => { const r = new Room('A'); const p = r.addPlayer('a'); assert.equal(r.buy('a', 'rifle'), false); p.pts = 2000; assert.equal(r.buy('a', 'rifle'), true); assert.equal(p.pts, 200); assert.ok(r.shoot('a', { w: 'rifle', dirs: [[0, 0, -1]] }, 1).ok); });
test('zombies hurt players and all-down ends the game', () => { const r = new Room('A'); const p = r.addPlayer('a'); r.phase = 'round'; r.toSpawn = 0; const z = withZombie(r, p, 1.2); z.cool = 0; z.dmg = 300; r.step(0.05); assert.ok(p.dead); assert.ok(r.over); });
test('snapshot is compact', () => { const r = new Room('A'); r.addPlayer('a'); r.addPlayer('b'); for (let i = 0; i < 400; i++) r.step(0.05); assert.ok(JSON.stringify(r.snapshot()).length < 4000); });
