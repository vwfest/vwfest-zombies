const test = require('node:test'), assert = require('node:assert');
const { Room } = require('../sim.js');
const { areaOf } = require('../nav.js');

function chase(r, x, z, lane = 0) {
  const zed = { id: r.nextZ++, x, z, yaw: 0, state: 'chase', scale: 1, speed: 4.6, hp: 500, dmg: 0, value: 60, t: 0, cool: 9, v: lane, win: r.wins[0], slot: 0 };
  r.zombies.set(zed.id, zed); return zed;
}
function march(r, seconds) {
  const dt = 0.05, steps = Math.round(seconds / dt);
  let stall = 0, worst = 0;
  const prev = new Map();
  for (let i = 0; i < steps; i++) {
    r.step(dt);
    if (i % 5 === 0) {
      for (const z of r.zombies.values()) {
        const p = prev.get(z.id) || { x: z.x, z: z.z, bad: 0 };
        const mv = Math.hypot(z.x - p.x, z.z - p.z);
        const player = [...r.players.values()][0];
        const arrived = Math.hypot(z.x - player.x, z.z - player.z) < 2.2;
        p.bad = !arrived && mv < 0.12 ? p.bad + 0.25 : 0;
        worst = Math.max(worst, p.bad); if (p.bad > stall) stall = p.bad;
        prev.set(z.id, { x: z.x, z: z.z, bad: p.bad });
      }
    }
  }
  return stall;
}
function cross(map, from, to, gates, n = 4, seconds = 12) {
  const r = new Room('H' + map, map, () => 0.2);
  const p = r.addPlayer('a'); p.god = true; p.x = to[0]; p.z = to[1];
  r.phase = 'round'; r.round = 3; r.toSpawn = 0; r.interT = 99;
  for (const id of gates) r.openGate(id);
  for (let i = 0; i < n; i++) chase(r, from[0] + (i - (n - 1) / 2) * 0.7, from[1], i);
  const stall = march(r, seconds);
  for (const z of r.zombies.values()) {
    const d = Math.hypot(z.x - p.x, z.z - p.z);
    assert.ok(d < 3.2, map + ' zombie stuck at ' + z.x.toFixed(1) + ',' + z.z.toFixed(1) + ' d=' + d.toFixed(1) + ' area ' + areaOf(z.x, z.z, map));
  }
  assert.ok(stall < 1.6, map + ' stall ' + stall.toFixed(2) + 's');
}

test('zombies cross every junkyard gate without a long stall', () => {
  cross('junkyard', [0, -21], [0, -34], ['AB']);
  cross('junkyard', [28, 14], [10, 14], ['AC']);
  cross('junkyard', [-30, -14], [-10, -14], ['AD']);
  cross('junkyard', [-16, -28], [-32, -28], ['SD']);
  cross('junkyard', [12, -46], [14, -60], ['BE']);
  cross('junkyard', [-30, -16], [14, -60], ['AD', 'AB', 'BE'], 3, 22);
});

test('motel and drive-in hordes walk through the yard gate', () => {
  cross('motel', [0, -30], [0, -21], ['AB'], 4);
  cross('drivein', [0, -32], [0, -21], ['AB'], 4);
});

test('a crowded gate still lets the whole pack through', () => {
  cross('junkyard', [0, -21], [0, -34], ['AB'], 6);
});
