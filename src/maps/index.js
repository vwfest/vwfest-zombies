// Map registry. Every map keeps the shared two-area topology (front lot A, gate at x=0 z=-24, back lot B)
// so zombie pathing / gate logic in zombie.js stays unchanged. Bounds + horde cap scale per map size.
import { World, DOOR_Z } from '../world.js';
import { makeBeetle, makeBus, makeTireStack, makeDrum, makeCrate, makePole, makeRock } from '../props.js';
import { rnd } from '../util.js';

export const MAPS = {
  junkyard: { id: 'junkyard', name: 'Junkyard', blurb: 'The original yard', cap: [16, 26], spawn: { x: 0, z: 12 } },
  motel:    { id: 'motel', name: 'Salt Motel', blurb: 'Tight courtyard, close quarters', cap: [12, 20], spawn: { x: 0, z: 0 } },
  drivein:  { id: 'drivein', name: 'Drive-In', blurb: 'Wide open lot, big hordes', cap: [18, 30], spawn: { x: 0, z: 18 } },
};
export const getMap = (id) => MAPS[id] || MAPS.junkyard;

class Variant extends World {
  constructor(scene, T, tier, def) { Variant.prototype._def = def; super(scene, T, tier); }
  lamps_(list) { for (const [x, z, t, r] of list) { const p = makePole(this.M, !!t); p.position.set(x, 0, z); p.rotation.y = r; p.traverse((m) => { if (m.isMesh) m.castShadow = !m.userData.bulb; }); p.updateMatrixWorld(true); this.addCol(x - 0.2, x + 0.2, z - 0.2, z + 0.2, 5); const bp = p.userData.bulbPos.clone().applyMatrix4(p.matrixWorld); this.lamps.push({ pos: bp, teal: !!t, ph: rnd(100) }); this.staticGroup.add(p); } }
  floor(w, d, x, z) { this.box(w, 0.03, d, x, 0.0, z, this.M.concrete, { cast: false }); }
  build() {
    const L = this._def.L, M = this.M, H = 3.2, th = 0.4;
    this.buildSky(); this.buildGround();
    const X = (z, a, b, o = [], m = M.fence) => this.wall('x', z, a, b, o, H, th, m), Z = (x, a, b, o = [], m = M.fence) => this.wall('z', x, a, b, o, H, th, m);
    const { w, s, n, wb } = L; // half-width A, south z, north z, half-width B
    X(s, -w, w, L.south); Z(w, DOOR_Z, s, L.eastA); Z(-w, DOOR_Z, s, L.westA);
    X(DOOR_Z, -w, w, [{ c: 0, id: 'DOOR', door: true, w: 6 }]);
    if (wb !== w) { X(DOOR_Z, w, wb); X(DOOR_Z, -wb, -w); }
    Z(wb, n, DOOR_Z, L.eastB); Z(-wb, n, DOOR_Z, L.westB); X(n, -wb, wb, L.north);
    this.floor(2 * w, s - DOOR_Z, 0, (s + DOOR_Z) / 2); this.floor(2 * wb, DOOR_Z - n, 0, (DOOR_Z + n) / 2);
    this.buildGate();
    const P = this.place.bind(this);
    for (const [k, c, x, z, r, o] of L.props) P(k === 'bus' ? makeBus(M, c, 0xe6dcc0, o || {}) : k === 'beetle' ? makeBeetle(M, c, o || {}) : k === 'tires' ? makeTireStack(M, c) : k === 'drum' ? makeDrum(M, c) : makeCrate(M, c), x, z, r || 0);
    for (const sh of L.shacks || []) this.shack(...sh);
    this.lamps_(L.lamps);
    for (const b of L.buys) this.wallBuy(...b);
    this.buildCrate(...L.crate);
    this.scenery(); this.buildLights();
  }
}

const LAYOUTS = {
  // Small: A is 32x30, B is 36x20 → fewer, closer windows. Good for phones (fewer zombies on screen).
  motel: { w: 16, s: 6, n: -44, wb: 18,
    south: [{ c: -7, id: 'S1' }, { c: 7, id: 'S2' }], eastA: [{ c: -10, id: 'E1' }], westA: [{ c: -14, id: 'W1' }],
    eastB: [{ c: -36, id: 'E2' }], westB: [{ c: -32, id: 'W2' }], north: [{ c: 6, id: 'N1' }],
    props: [['beetle', 0x5bb5a0, -9, -4, 0], ['bus', 0xd9792a, 10, -12, Math.PI / 2], ['tires', 4, -12, -16], ['drum', 0x3a6ea5, 12, 2], ['drum', 0xb23a2e, 13, 3], ['crate', 1.1, -13, 2],
      ['beetle', 0xcfcfc4, -10, -34, Math.PI / 2, { missing: true }], ['bus', 0x8aa84a, 8, -38, 0], ['tires', 5, 14, -28], ['crate', 1.0, -15, -41]],
    shacks: [[0, -10, 8, 3]],
    lamps: [[-14, -20, 0, 0.2], [14, -20, 1, 2.9], [-8, 2, 0, 0.5], [9, -6, 1, 2.6], [-6, -18, 0, 0], [0, -34, 1, 1.2], [12, -42, 0, 3]],
    buys: [['smg', -10, DOOR_Z + 0.25, 0], ['shotgun', 15.75, -4, -Math.PI / 2], ['rifle', -17.75, -36, Math.PI / 2]], crate: [-12, -8] },
  // Large: A is 64x46, B is 64x26 → long sightlines, more windows, bigger hordes.
  drivein: { w: 32, s: 22, n: -50, wb: 32,
    south: [{ c: -18, id: 'S1' }, { c: 0, id: 'S2' }, { c: 18, id: 'S3' }], eastA: [{ c: 6, id: 'E1' }, { c: -14, id: 'E1b' }], westA: [{ c: 8, id: 'W1' }, { c: -12, id: 'W1b' }],
    eastB: [{ c: -38, id: 'E2' }], westB: [{ c: -40, id: 'W2' }], north: [{ c: -14, id: 'N1' }, { c: 14, id: 'N2' }],
    props: [['bus', 0x5e8fc0, -18, 4, 0], ['bus', 0xb23a2e, 18, 4, 0], ['beetle', 0xe0d19a, -8, -6, 0], ['beetle', 0x5bb5a0, 8, -6, 0, { door: true }], ['beetle', 0xd9792a, 0, 8, Math.PI / 2],
      ['tires', 5, -26, 14], ['tires', 3, 26, -16], ['drum', 0xd9792a, 24, 16], ['crate', 1.2, -26, -16],
      ['bus', 0x8aa84a, -14, -38, Math.PI / 2], ['beetle', 0xcfcfc4, 14, -36, 0, { missing: true }], ['tires', 4, 0, -44], ['crate', 1.0, 26, -46]],
    shacks: [[0, -16, 10, 4]],
    lamps: [[-24, 18, 0, 0.6], [24, 18, 0, 2.6], [-20, -8, 1, 0], [20, -8, 1, 3], [0, 0, 0, 1], [-20, -36, 0, 0.3], [20, -44, 1, 3]],
    buys: [['smg', -14, DOOR_Z + 0.25, 0], ['shotgun', 31.75, -4, -Math.PI / 2], ['rifle', -31.75, -30, Math.PI / 2]], crate: [-24, 4] },
};

export function buildWorld(scene, T, tier, id) {
  const m = getMap(id); if (m.id === 'junkyard') return new World(scene, T, tier);
  return new Variant(scene, T, tier, { L: LAYOUTS[m.id] });
}
