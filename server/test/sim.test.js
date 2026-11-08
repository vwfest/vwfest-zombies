const test = require('node:test'), assert = require('node:assert'); const { Room, MAX_SPEED, PLAYER_HP } = require('../sim.js');
const seq = () => { let s = 1; return () => ((s = (s * 16807) % 2147483647) / 2147483647); };
const at = (p, x, z) => { p.x = x; p.z = z; p.lastIn = 0; };
// walk in small validated steps (like a real client at 20 Hz)
const walk = (r, id, x, z, t0 = 1000, steps = 80) => { const p = r.players.get(id); let t = t0; for (let i = 0; i < steps; i++) { t += 50; const dx = x - p.x, dz = z - p.z, d = Math.hypot(dx, dz); if (d < 0.05) break; const k = Math.min(1, 0.4 / d); r.input(id, { x: p.x + dx * k, z: p.z + dz * k, yaw: 0, pitch: 0 }, t); } return t; };
function zAt(r, x, z, hp = 100) { const id = 900 + r.zombies.size; const zz = { id, x, z, yaw: 0, state: 'chase', scale: 1, hp, value: 60, win: r.wins[0], cool: 9, t: 0, speed: 0, dmg: 22 }; r.zombies.set(id, zz); return zz; }
// --- basics
test('max 4 players', () => { const r = new Room('A'); for (let i = 0; i < 4; i++) assert.ok(r.addPlayer('p' + i)); assert.equal(r.addPlayer('p5'), null); });
test('names are sanitised', () => { const r = new Room('A'); assert.equal(r.addPlayer('a', '<img src=x>').name, 'img srcx'); });
test('rounds start and zombies spawn at area-A windows only', () => { const r = new Room('A', 'junkyard', seq()); r.addPlayer('a'); for (let i = 0; i < 200; i++) r.step(0.05); assert.equal(r.round, 1); assert.ok(r.zombies.size > 0); for (const z of r.zombies.values()) assert.equal(z.win.area, 'A'); });
test('speed hack is clamped', () => { const r = new Room('A'); const p = r.addPlayer('a'); const x0 = p.x; r.input('a', { x: x0 + 50, z: p.z, yaw: 0, pitch: 0 }, 1000); r.input('a', { x: x0 + 50, z: p.z, yaw: 0, pitch: 0 }, 1100); assert.ok(p.x - x0 < MAX_SPEED * 0.6 + 1); });
test('bad numbers rejected', () => { const r = new Room('A'); const p = r.addPlayer('a'); assert.equal(r.input('a', { x: NaN, z: 0, yaw: 0, pitch: 0 }, 1), false); assert.equal(r.input('a', { x: '1', z: 0, yaw: 0, pitch: 0 }, 1), false); assert.ok(Number.isFinite(p.x)); });
// --- walls + line of sight
test('players cannot walk through a building', () => { const r = new Room('A'); const p = r.addPlayer('a'); at(p, 13, -17); walk(r, 'a', 25, -17); assert.ok(p.x < 15, 'stopped at the shed wall, x=' + p.x); });
test('players cannot walk through the perimeter fence', () => { const r = new Room('A'); const p = r.addPlayer('a'); at(p, -10, 20); walk(r, 'a', -10, 35, 1000, 200); assert.ok(p.z < 24, 'inside the yard, z=' + p.z); });
test('closed gate blocks movement, opened gate lets you through', () => { const r = new Room('A'); const p = r.addPlayer('a'); at(p, 0, -21); let t = walk(r, 'a', 0, -28); assert.ok(p.z > -24, 'blocked by gate');
  at(p, 0, -22); p.pts = 2000; assert.ok(r.openDoor('a').ok); assert.equal(p.pts, 750); walk(r, 'a', 0, -28, t + 100); assert.ok(p.z < -26, 'walked through, z=' + p.z); });
test('bullets do not pass through walls', () => { const r = new Room('A'); const p = r.addPlayer('a'); at(p, 12, -17); const z = zAt(r, 23, -17); const res = r.shoot('a', { w: 'pistol', dirs: [[1, -0.05, 0]] }, 5000); assert.ok(res.ok); assert.equal(res.hits.length, 0); assert.equal(res.blocked, 1); assert.equal(z.hp, 100); });
test('bullets with clear line of sight hit', () => { const r = new Room('A'); const p = r.addPlayer('a'); at(p, 0, 10); const z = zAt(r, 0, 5); const res = r.shoot('a', { w: 'pistol', dirs: [[0, -0.12, -1]] }, 5000); assert.equal(res.hits.length, 1); assert.equal(z.hp, 70); });
test('zombies cannot hit through a wall', () => { const r = new Room('A'); const p = r.addPlayer('a'); at(p, -12, -51.4); r.phase = 'round'; r.toSpawn = 9; const z = zAt(r, -12, -52.6); z.cool = 0; z.dmg = 50; r.step(0.05); assert.equal(p.hp, PLAYER_HP, 'fence between'); const z2 = zAt(r, -11, -51.0); z2.cool = 0; z2.dmg = 50; r.step(0.05); assert.equal(p.hp, PLAYER_HP - 50, 'same side hits'); });
test('zombies chase around obstacles and stay out of walls', () => { const r = new Room('A', 'junkyard', seq()); const p = r.addPlayer('a'); r.phase = 'round'; r.toSpawn = 0; const z = zAt(r, 22, -14); z.speed = 3; at(p, 22, -21); for (let i = 0; i < 40; i++) r.step(0.05); assert.ok(!(z.x > 15 && z.x < 21 && z.z > -19.5 && z.z < -14.5), 'not inside the shed'); });
// --- damage + score
test('server computes damage, kills and score', () => { const r = new Room('A'); const p = r.addPlayer('a'); at(p, 0, 10); const z = zAt(r, 0, 5); const pts = p.pts;
  r.shoot('a', { w: 'pistol', dirs: [[0, -0.12, -1]] }, 1000); assert.equal(p.pts, pts + 10); const res = r.shoot('a', { w: 'pistol', dirs: [[0, -0.008, -1]] }, 2000); assert.ok(res.hits[0].head && res.hits[0].killed, JSON.stringify(res)); assert.equal(r.zombies.size, 0); assert.equal(p.kills, 1); });
test('fire rate limited', () => { const r = new Room('A'); r.addPlayer('a'); assert.ok(r.shoot('a', { w: 'pistol', dirs: [[0, 0, -1]] }, 1000).ok); assert.equal(r.shoot('a', { w: 'pistol', dirs: [[0, 0, -1]] }, 1010).why, 'rate'); });
test('unowned weapon / too many pellets / bad dirs rejected', () => { const r = new Room('A'); r.addPlayer('a');
  assert.equal(r.shoot('a', { w: 'lmg', dirs: [[0, 0, -1]] }, 1).why, 'weapon'); assert.equal(r.shoot('a', { w: 'pistol', dirs: [[0, 0, -1], [0, 0, -1]] }, 1).why, 'dirs');
  assert.equal(r.shoot('a', { w: 'pistol', dirs: [[0, 0, -9]] }, 5000).why, 'dirs'); assert.equal(r.shoot('a', { w: 'nope', dirs: [[0, 0, -1]] }, 9000).why, 'weapon'); });
test('zombies hurt players and all-down ends the game', () => { const r = new Room('A'); const p = r.addPlayer('a'); at(p, 0, 10); r.phase = 'round'; r.toSpawn = 0; const z = zAt(r, 0, 8.9); z.cool = 0; z.dmg = 300; r.step(0.05); assert.ok(p.dead); assert.ok(r.over); });
// --- buys / door / planks / crate
test('wall buys need you at the station and enough points; refill is half price', () => { const r = new Room('A'); const p = r.addPlayer('a'); const st = r.map.buys.find((b) => b.id === 'smg');
  assert.equal(r.buy('a', 'smg').why, 'far'); at(p, st.x, st.z); assert.equal(r.buy('a', 'smg').why, 'pts'); p.pts = 1000; assert.ok(r.buy('a', 'smg').ok); assert.equal(p.pts, 400); assert.ok(r.buy('a', 'smg').refill); assert.equal(p.pts, 100); assert.equal(r.buy('a', 'lmg').why, 'station'); });
test('gate: far / not enough points rejected, opening activates back-lot windows', () => { const r = new Room('A'); const p = r.addPlayer('a'); assert.equal(r.openDoor('a').why, 'far'); at(p, 0, -22); assert.equal(r.openDoor('a').why, 'pts'); p.pts = 1300; const before = r.activeWins().length; assert.ok(r.openDoor('a').ok); assert.ok(r.activeWins().length > before); assert.equal(r.openDoor('a').ok, false); });
test('zombies tear planks off before climbing in', () => { const r = new Room('A', 'junkyard', seq()); r.addPlayer('a'); for (let i = 0; i < 400; i++) r.step(0.05); assert.ok(r.wins.some((w) => w.count < 6)); for (const z of r.zombies.values()) if (z.state === 'chase' || z.state === 'climb') assert.ok(z.win.count === 0 || z.state === 'chase'); });
test('repairing planks: near window, rate limited, +10 points, capped at 6', () => { const r = new Room('A'); const p = r.addPlayer('a'); const w = r.wins[0]; w.count = 4; assert.equal(r.repair('a', w.id, 1000).why, 'far'); at(p, w.in.x, w.in.z); const pts = p.pts;
  assert.ok(r.repair('a', w.id, 2000).ok); assert.equal(w.count, 5); assert.equal(p.pts, pts + 10); assert.equal(r.repair('a', w.id, 2100).why, 'rate'); assert.ok(r.repair('a', w.id, 3000).ok); assert.equal(r.repair('a', w.id, 4000).why, 'full'); });
test('mystery crate: pay, server rolls, only the buyer takes it, it shuts after 9s', () => { const r = new Room('A', 'junkyard', seq()); const p = r.addPlayer('a'), q = r.addPlayer('b'); at(p, r.crate.x, r.crate.z + 1); at(q, r.crate.x + 1, r.crate.z + 1); p.pts = 1000;
  assert.equal(r.useCrate('a').s, 'roll'); assert.equal(p.pts, 50); assert.equal(r.useCrate('a').why, 'busy'); for (let i = 0; i < 80; i++) r.step(0.05); assert.equal(r.crate.state, 'ready');
  assert.equal(r.useCrate('b').why, 'not-yours'); const t = r.useCrate('a'); assert.ok(t.ok && p.owned.has(t.w)); assert.equal(r.crate.state, 'idle');
  p.pts = 1000; r.useCrate('a'); for (let i = 0; i < 80 + 190; i++) r.step(0.05); assert.equal(r.crate.state, 'idle'); });
// --- power-ups
test('hurt killer gets a med kit drop; walking over it heals', () => { const r = new Room('A'); const p = r.addPlayer('a'); at(p, 0, 10); p.hp = 60; zAt(r, 0, 5, 1); r.shoot('a', { w: 'pistol', dirs: [[0, -0.12, -1]] }, 1000); const u = [...r.ups.values()][0]; assert.equal(u.type, 'health');
  r.phase = 'inter'; r.interT = 99; at(p, u.x, u.z); r.step(0.05); assert.equal(r.ups.size, 0); assert.equal(p.hp, 160); });
test('nuke clears zombies and pays the picker; double doubles points; power-ups expire', () => { const r = new Room('A'); const p = r.addPlayer('a'); at(p, 0, 10); r.phase = 'inter'; r.interT = 99; zAt(r, 5, 5); zAt(r, -5, 5); const pts = p.pts;
  r.drop('nuke', 0, 10.5); r.step(0.05); assert.equal(r.zombies.size, 0); assert.equal(p.pts, pts + 400);
  r.drop('double', 0, 10.2); r.step(0.05); assert.ok(r.double > 0); zAt(r, 0, 5); r.shoot('a', { w: 'pistol', dirs: [[0, -0.12, -1]] }, 5000); assert.equal(p.pts, pts + 420);
  r.drop('ammo', 20, 0); for (let i = 0; i < 600; i++) r.step(0.05); assert.equal(r.ups.size, 0); });
test('snapshot carries planks, gate, crate, power-ups and is compact', () => { const r = new Room('A'); r.addPlayer('a'); r.addPlayer('b'); for (let i = 0; i < 400; i++) r.step(0.05); const s = r.snapshot(); assert.equal(s.win.length, r.wins.length); assert.ok('door' in s && Array.isArray(s.crate) && Array.isArray(s.up)); assert.ok(JSON.stringify(s).length < 8000); });
test('magazine is server-owned: a claimed mag count cannot keep firing', () => { const r = new Room('A'); const p = r.addPlayer('a'); at(p, 0, 10); let t = 1000;
  for (let i = 0; i < 12; i++) { const res = r.shoot('a', { w: 'pistol', mag: 999, dirs: [[0, 0, -1]] }, t); assert.equal(res.ok, true, i); t += 200; }
  assert.equal(p.ammo.pistol.mag, 0); assert.equal(p.ammo.pistol.res, 60);
  const empty = r.shoot('a', { w: 'pistol', mag: 999, dirs: [[0, 0, -1]] }, t + 200); assert.equal(empty.why, 'empty');
  assert.equal(r.reload('a', 'pistol').ok, true); r.step(1.3); assert.equal(p.ammo.pistol.mag, 12); assert.equal(p.ammo.pistol.res, 48);
  p.ammo.shotgun = { mag: 4, res: 2 }; p.owned.add('shotgun'); assert.ok(r.reload('a', 'shotgun').ok); r.step(0.5); assert.equal(p.ammo.shotgun.mag, 5); r.step(0.5); assert.equal(p.ammo.shotgun.mag, 6); assert.equal(p.ammo.shotgun.res, 0); assert.equal(p.reloading, null); });
