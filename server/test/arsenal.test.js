const test = require('node:test'), assert = require('node:assert');
const { Room } = require('../sim.js');
const WEAPONS = require('../weapons.js');

test('new wall guns grant server ammo and shots spend it', () => {
  const r = new Room('G'); const p = r.addPlayer('a'); p.pts = 5000; r.phase = 'round';
  for (const [id, x, z, mag] of [['akimbo', 22.85, 8, 24], ['lever', -22.85, -32, 7], ['nailer', 10, 22.75, 36]]) {
    p.x = x; p.z = z;
    const res = r.buy('a', id);
    assert.equal(res.ok, true, id);
    assert.equal(p.ammo[id].mag, mag);
    assert.equal(p.ammo[id].res, WEAPONS[id].reserve);
    const shot = r.shoot('a', { w: id, dirs: [[0, 0, -1]] }, 1000 + mag);
    assert.equal(shot.ok, true);
    assert.equal(p.ammo[id].mag, mag - 1);
  }
  assert.equal(r.shoot('a', { w: 'sawed', dirs: [[0, 0, -1]] }, 9000).why, 'weapon');
});

test('the sawed-off is crate-only and spends two shells', () => {
  const r = new Room('G'); const p = r.addPlayer('a'); p.owned.add('sawed'); p.ammo.sawed = { mag: 2, res: 20 }; p.held = 'sawed';
  assert.equal(r.shoot('a', { w: 'sawed', dirs: Array.from({ length: 8 }, () => [0, 0, -1]) }, 1000).ok, true);
  assert.equal(p.ammo.sawed.mag, 1);
  assert.equal(r.snapshot().p[0][14], 'sawed');
});

test('blood bait lures a zombie, then the blast kills only the pack on it', () => {
  const r = new Room('G'); const p = r.addPlayer('a'); p.god = true; p.x = 0; p.z = 12; p.nades = 1;
  r.phase = 'round'; r.round = 2; r.toSpawn = 0; r.interT = 99;
  const near = { id: 1, x: 0, z: 0, yaw: 0, state: 'chase', scale: 1, speed: 4, hp: 80, dmg: 0, value: 60, t: 0, cool: 9, v: 0, win: r.wins[0], slot: 0 };
  const far = { ...near, id: 2, x: 40, z: 12, hp: 400 };
  r.zombies.set(1, near); r.zombies.set(2, far); r.nextZ = 3;
  assert.equal(r.throwNade('a', { yaw: 0, pitch: 0.35 }).ok, true);
  assert.equal(p.nades, 0);
  assert.equal(r.throwNade('a', { yaw: 0, pitch: 0 }).why, 'empty');
  for (let i = 0; i < 30; i++) r.step(0.05);
  const bait = [...r.nades.values()][0];
  assert.ok(bait && bait.landed, 'grenade should have landed');
  const z0 = near.z;
  for (let i = 0; i < 20; i++) r.step(0.05);
  assert.ok(near.z < z0 + 0.2, 'lured zombie drifted toward the player, z=' + near.z);
  assert.ok(Math.hypot(near.x - bait.x, near.z - bait.z) < Math.hypot(near.x - p.x, near.z - p.z));
  for (let i = 0; i < 120; i++) r.step(0.05);
  assert.equal(r.nades.size, 0);
  assert.equal(r.zombies.has(1), false);
  assert.equal(r.zombies.has(2), true);
});

test('a completed wave unlocks the next mission and never back to back', () => {
  const r = new Room('S'); r.addPlayer('a'); r.phase = 'round'; r.round = 1;
  assert.equal(r.missions.onWave(1), true);
  assert.equal(r.missions.job.id, 'fuel');
  r.missions.finish('a');
  assert.equal(r.missions.job, null);
  r.missions.step(2);
  assert.equal(r.missions.job, null);
  r.round = 2; r.missions.onWave(2);
  assert.equal(r.missions.job.id, 'carb');
  r.missions.finish('a');
  r.missions.lastArea = 'A';
  r.round = 3; r.missions.onWave(3);
  assert.equal(r.missions.job && r.missions.job.id, 'bus');
  for (let n = 1; n <= 5; n++) r.missions.onWave(n);
  for (const id of ['fuel', 'carb', 'bus', 'parts', 'radio', 'clear']) assert.ok(r.missions.unlocked.includes(id), id);
});

test('same-lot follow-up waits an extra wave', () => {
  const r = new Room('S'); r.addPlayer('a'); r.round = 2; r.missions.onWave(1); r.missions.onWave(2);
  assert.equal(r.missions.job.id, 'fuel');
  r.missions.finish('a');
  r.missions.lastArea = 'B';
  r.missions.onWave(2);
  assert.equal(r.missions.job, null);
  r.missions.onWave(3);
  assert.equal(r.missions.job.id, 'carb');
});
