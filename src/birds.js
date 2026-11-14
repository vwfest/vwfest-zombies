// Solo-only Carrion Buzzard swarm. Authoritative on this client — never spawned in a co-op room.
import * as THREE from 'three';
import { createBirdField } from './hd/birds.js';
import { clamp, lerp, rnd, TAU } from './util.js';

export const BIRD_HP = 34, BIRD_DMG = 15, BIRD_VALUE = 35;
const FIRST_ROUND = 4;

function raySphere(o, d, c, r) {
  const ox = o.x - c.x, oy = o.y - c.y, oz = o.z - c.z;
  const b = ox * d.x + oy * d.y + oz * d.z, cc = ox * ox + oy * oy + oz * oz - r * r, disc = b * b - cc;
  if (disc < 0) return null;
  const t = -b - Math.sqrt(disc);
  return t > 0 ? t : null;
}

export function birdCount(round, modeCount = 1, flock = false) {
  if (round < FIRST_ROUND) return 0;
  const n = flock ? 12 + Math.min(8, (round / 3) | 0) : 4 + Math.min(4, round - FIRST_ROUND);
  return Math.max(flock ? 8 : 4, Math.round(n * modeCount));
}
export function isFlockRound(round) { return round >= 6 && round % 3 === 0; }
export { FIRST_ROUND };

export class Birds {
  constructor(scene, world, tier) {
    this.scene = scene; this.world = world; this.tier = tier;
    this.ABS_MAX = 24;
    this.max = this._capFor(tier);
    this.list = [];
    this.alive = 0;
    this.field = createBirdField(scene, tier, this.ABS_MAX);
    this.center = { x: 0, z: 1.5 };
    this._dummy = 0;
    for (let i = 0; i < this.ABS_MAX; i++) this.list.push(this._fresh(i));
  }
  _capFor(t) { return t > 1 ? 24 : t > 0 ? 16 : 8; } // phone: hard cap 8 on-screen birds

  _fresh(i) {
    return {
      i, kind: 'bird', state: 'dead', visible: false,
      x: 0, y: 8, z: 0, yaw: 0, pitch: 0, bank: 0,
      vx: 0, vy: 0, vz: 0,
      radius: 6, height: 7, angle: 0, turn: 0.55,
      hp: BIRD_HP, maxHp: BIRD_HP, dmg: BIRD_DMG, value: BIRD_VALUE, scale: 1,
      phase: i * 0.67, flap: 0.08, tuck: 0, flare: 0, dead: 0,
      t: 0, cool: 0, flapT: 0, glideT: 2, scream: false,
      wx: 0, wy: 0, wz: 0, // death tumble
      pos: new THREE.Vector3(),
      win: null,
    };
  }

  setTier(t) {
    this.tier = t;
    this.max = this._capFor(t);
    this.field.setTier(t);
  }
  prewarm(renderer, camera, scene) { this.field.prewarm?.(renderer, camera, scene); }

  reset() {
    for (const b of this.list) { b.state = 'dead'; b.visible = false; }
    this.alive = 0;
    this.field.beginFrame(0); this.field.commit();
  }

  spawn(round = 4) {
    if (this.alive >= this.max) return null;
    const b = this.list.find((x) => x.state === 'dead');
    if (!b) return null;
    const ang = rnd(0, TAU);
    b.state = 'soar'; b.visible = true;
    b.radius = 5.4 + rnd(0, 2.4); b.height = 6.2 + rnd(-1.0, 3.2);
    b.angle = ang; b.turn = 0.45 + rnd(0, 0.28);
    b.x = Math.sin(ang) * b.radius + this.center.x;
    b.z = Math.cos(ang) * b.radius + this.center.z;
    b.y = b.height; b.yaw = ang + Math.PI * 0.5; b.pitch = -0.08; b.bank = 0.22;
    b.hp = b.maxHp = BIRD_HP; b.dmg = BIRD_DMG; b.value = BIRD_VALUE;
    b.scale = 1.15 + rnd(0, 0.2);
    b.t = rnd(0, 2); b.cool = rnd(1.2, 6.0); b.flapT = 0; b.glideT = rnd(1.2, 3.2);
    b.flap = 0.08; b.tuck = 0; b.flare = 0; b.dead = 0; b.scream = false;
    b.vx = b.vy = b.vz = 0; b.wx = b.wy = b.wz = 0; b._thud = false;
    b.pos.set(b.x, b.y, b.z);
    this.alive++;
    return b;
  }

  rayHit(o, d, max) {
    let best = null;
    for (const b of this.list) {
      if (b.state === 'dead' || b.state === 'dying') continue;
      const body = raySphere(o, d, { x: b.x, y: b.y, z: b.z }, 0.32 * b.scale);
      const fx = Math.sin(b.yaw) * Math.cos(b.pitch), fy = -Math.sin(b.pitch), fz = Math.cos(b.yaw) * Math.cos(b.pitch);
      const hx = b.x + fx * 0.38 * b.scale, hy = b.y + fy * 0.38 * b.scale + 0.06, hz = b.z + fz * 0.38 * b.scale;
      const head = raySphere(o, d, { x: hx, y: hy, z: hz }, 0.15 * b.scale);
      let wing = null;
      if (b.tuck < 0.55) {
        const rx = Math.cos(b.yaw), rz = -Math.sin(b.yaw);
        const wr = 0.7 * b.scale * (1 - b.tuck * 0.6);
        wing = raySphere(o, d, { x: b.x + rx * wr, y: b.y, z: b.z + rz * wr }, 0.38 * b.scale)
          ?? raySphere(o, d, { x: b.x - rx * wr, y: b.y, z: b.z - rz * wr }, 0.38 * b.scale);
      }
      let t = null, isHead = false;
      if (head != null && (body == null || head <= body + 0.12)) { t = head; isHead = true; }
      else if (body != null) t = body;
      if (wing != null && (t == null || wing < t)) t = wing;
      if (t != null && t < max && (!best || t < best.t)) best = { z: b, t, head: isHead };
    }
    return best;
  }

  damage(b, dmg, head) {
    if (b.state === 'dead' || b.state === 'dying') return null;
    b.hp -= dmg;
    const killed = b.hp <= 0;
    if (killed) {
      b.state = 'dying'; b.t = 0; b.dead = 0.15; b.tuck = 0.2; b.flap = 0.05; b.flare = 0;
      b.vx = rnd(-1.5, 1.5); b.vy = rnd(0.5, 2.2); b.vz = rnd(-1.5, 1.5);
      b.wx = rnd(-4, 4); b.wy = rnd(-5, 5); b.wz = rnd(-3, 3);
      this.alive--;
    }
    return { killed, head: !!head };
  }

  killAll() {
    const out = [];
    for (const b of this.list) if (b.state !== 'dead' && b.state !== 'dying') {
      this.damage(b, 999, false); out.push(b);
    }
    return out;
  }

  update(dt, time, player, cb) {
    if (dt > 0.08) dt = 0.08;
    // slowly drifting thermal
    this.center.x += Math.sin(time * 0.07) * 0.15 * dt;
    this.center.z += Math.cos(time * 0.05) * 0.12 * dt;
    this.center.x = clamp(this.center.x, -4, 4);
    this.center.z = clamp(this.center.z, -2, 6);

    const live = this.list.filter((b) => b.state === 'soar' || b.state === 'telegraph');

    for (const b of this.list) {
      if (b.state === 'dead') continue;
      b.t += dt;

      if (b.state === 'dying') {
        b.vy -= 11 * dt; b.x += b.vx * dt; b.y += b.vy * dt; b.z += b.vz * dt;
        b.yaw += b.wy * dt; b.pitch += b.wx * dt; b.bank += b.wz * dt;
        b.vx *= 0.99; b.vz *= 0.99; b.dead = Math.min(1, b.t * 0.7);
        b.flap = 0.04; b.tuck = lerp(b.tuck, 0.15, dt * 2);
        if (b.y < 0.25) {
          b.y = 0.25; b.vy *= -0.25; b.vx *= 0.5; b.vz *= 0.5; b.wx *= 0.5; b.wy *= 0.5;
          if (b.t > 0.2) cb?.thud?.(b);
        }
        if (b.t > 2.6) { b.state = 'dead'; b.visible = false; }
        b.pos.set(b.x, b.y, b.z);
        continue;
      }

      // decorative menu birds never dive
      const canHunt = !!player && player.hunt !== false && b.dmg > 0;

      if (b.state === 'soar' || b.state === 'telegraph') {
        // flock spacing: ease radius if a neighbour is too close
        for (const o of live) {
          if (o === b) continue;
          const dx = b.x - o.x, dz = b.z - o.z, d2 = dx * dx + dz * dz;
          if (d2 < 1.7 * 1.7 && d2 > 1e-4) {
            b.angle += 0.35 * dt * Math.sign(b.turn);
            b.radius += 0.8 * dt;
          }
        }
        b.angle += b.turn * dt;
        b.radius = lerp(b.radius, 5.6 + (b.i % 7) * 0.35, dt * 0.3);
        const tx = Math.sin(b.angle) * b.radius + this.center.x;
        const tz = Math.cos(b.angle) * b.radius + this.center.z;
        const ty = b.height + Math.sin(time * 0.9 + b.phase) * 0.28;
        b.x = lerp(b.x, tx, Math.min(1, dt * 2.4));
        b.z = lerp(b.z, tz, Math.min(1, dt * 2.4));
        b.y = lerp(b.y, ty, Math.min(1, dt * 1.6));
        const desiredYaw = b.angle + Math.PI * 0.5;
        let dyaw = desiredYaw - b.yaw; while (dyaw > Math.PI) dyaw -= TAU; while (dyaw < -Math.PI) dyaw += TAU;
        b.yaw += dyaw * Math.min(1, dt * 3);
        b.bank = lerp(b.bank, clamp(b.turn * 0.55 + dyaw * 0.8, -0.7, 0.7), dt * 3);
        b.pitch = lerp(b.pitch, -0.1, dt * 2);

        // glide with occasional flap bursts (real vultures soar, then a few strokes)
        if (b.flapT > 0) { b.flapT -= dt; b.flap = lerp(b.flap, 0.55, dt * 6); }
        else {
          b.glideT -= dt; b.flap = lerp(b.flap, 0.07, dt * 4);
          if (b.glideT <= 0) { b.flapT = rnd(0.55, 1.15); b.glideT = rnd(1.8, 4.2); }
        }
        b.tuck = lerp(b.tuck, 0, dt * 3); b.flare = lerp(b.flare, 0, dt * 4);

        if (b.state === 'soar' && canHunt) {
          b.cool -= dt;
          if (b.cool <= 0) {
            b.state = 'telegraph'; b.t = 0; b.scream = false;
          }
        }
        if (b.state === 'telegraph') {
          b.tuck = lerp(b.tuck, 0.35, dt * 4); b.flap = lerp(b.flap, 0.15, dt * 4);
          if (!b.scream) { b.scream = true; cb?.shriek?.(b); }
          if (b.t > 0.45) { b.state = 'dive'; b.t = 0; }
        }
      } else if (b.state === 'dive') {
        const px = player.x, py = 1.32, pz = player.z;
        const dx = px - b.x, dy = py - b.y, dz = pz - b.z;
        const dist = Math.hypot(dx, dy, dz) || 1;
        const sp = 11 + Math.min(10, b.t * 7);
        b.vx = (dx / dist) * sp; b.vy = (dy / dist) * sp; b.vz = (dz / dist) * sp;
        b.x += b.vx * dt; b.y += b.vy * dt; b.z += b.vz * dt;
        b.yaw = Math.atan2(b.vx, b.vz);
        b.pitch = -Math.atan2(b.vy, Math.hypot(b.vx, b.vz));
        b.bank = lerp(b.bank, 0, dt * 4);
        const ttc = dist / Math.max(1, sp);
        if (ttc < 0.28 || dist < 2.3) {
          // flare: wings snap open, talons reach, slight pitch-up
          b.flare = lerp(b.flare, 1, dt * 8); b.tuck = lerp(b.tuck, 0.05, dt * 8);
          b.pitch = lerp(b.pitch, 0.15, dt * 6); b.flap = lerp(b.flap, 0.2, dt * 4);
        } else {
          b.tuck = lerp(b.tuck, 0.9, dt * 5); b.flare = lerp(b.flare, 0, dt * 5); b.flap = 0.04;
        }
        if (dist < 1.6 && canHunt) {
          cb?.hitPlayer?.(b); cb?.strike?.(b);
          b.state = 'climb'; b.t = 0; b.cool = rnd(3.5, 6);
          const push = 2.2 / dist; b.x = px - (dx / dist) * 2.2; b.y = Math.max(b.y, py + 1.4); b.z = pz - (dz / dist) * 2.2;
        } else if (dist < 1.4 || b.t > 2.3 || b.y < 0.9) {
          b.state = 'climb'; b.t = 0; b.cool = rnd(2.8, 5);
        }
      } else if (b.state === 'climb') {
        b.y += 5.8 * dt;
        b.x += Math.sin(b.angle) * 1.8 * dt;
        b.z += Math.cos(b.angle) * 1.8 * dt;
        b.yaw = lerp(b.yaw, b.angle + Math.PI * 0.5, dt * 2);
        b.pitch = lerp(b.pitch, 0.5, dt * 3);
        b.bank = lerp(b.bank, -0.1, dt * 2);
        b.flap = lerp(b.flap, 0.7, dt * 5); // power strokes to regain height
        b.tuck = lerp(b.tuck, 0, dt * 3); b.flare = lerp(b.flare, 0, dt * 4);
        if (b.y >= b.height - 0.2 || b.t > 2.2) {
          b.state = 'soar'; b.t = 0;
          b.angle = Math.atan2(b.x - this.center.x, b.z - this.center.z);
        }
      }
      b.pos.set(b.x, b.y, b.z);
    }

    this._draw(time, player);
  }

  _draw(time, player) {
    this.field.beginFrame(time);
    const px = player?.x ?? 0, py = player?.y ?? 1.6, pz = player?.z ?? 8;
    const live = [];
    for (const b of this.list) {
      if (b.state === 'dead' || !b.visible) continue;
      const dist = Math.hypot(b.x - px, b.y - py, b.z - pz);
      live.push({ b, dist });
    }
    // Phone: never draw more than this.max (8) closest birds, even if something spawned extra.
    live.sort((a, b) => a.dist - b.dist);
    const cap = this.max;
    for (let i = 0; i < live.length && i < cap; i++) {
      const { b, dist } = live[i];
      this.field.setBird(b.i, b.x, b.y, b.z, b.pitch, b.yaw, b.bank, b.scale, {
        flap: b.flap, tuck: b.tuck, flare: b.flare, dead: b.dead, phase: b.phase, bank: b.bank,
      }, dist, true);
    }
    this.field.commit();
  }
}
