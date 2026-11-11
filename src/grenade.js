// Bloody bait grenade. Single-player simulates the toss here. Co-op only renders the server copies.
import * as THREE from 'three';

const FUSE = 5, LURE = 16, BLAST = 4.6, SPEED = 14;

export function createGrenades(ctx) {
  const { scene, world, fx } = ctx;
  const items = new Map();
  const meshes = new Map();
  const stains = [];
  let beep = 0, seq = 1;
  const mat = new THREE.MeshStandardMaterial({ color: 0x8a1018, roughness: 0.45, metalness: 0.2 });
  const drip = new THREE.MeshStandardMaterial({ color: 0xff2a3a, roughness: 0.3, emissive: 0x4a0008, emissiveIntensity: 0.6 });

  function meshFor(id) {
    let g = meshes.get(id);
    if (g) return g;
    g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), mat);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.08, 6), drip); cap.position.y = 0.16;
    const light = new THREE.PointLight(0xff2244, 0, 3.5); light.position.y = 0.2;
    g.add(body, cap, light); g.userData.light = light; scene.add(g); meshes.set(id, g); return g;
  }
  function dropMesh(id) { const g = meshes.get(id); if (!g) return; scene.remove(g); meshes.delete(id); }
  function splatter(x, z) {
    for (let i = 0; i < 7; i++) {
      const s = new THREE.Mesh(new THREE.CircleGeometry(0.18 + Math.random() * 0.45, 6), new THREE.MeshBasicMaterial({ color: 0x6a0810, transparent: true, opacity: 0.85, depthWrite: false }));
      s.rotation.x = -Math.PI / 2; s.position.set(x + (Math.random() - 0.5) * 3.2, 0.04, z + (Math.random() - 0.5) * 3.2); s.rotation.z = Math.random() * 6; scene.add(s);
      stains.push({ s, t: 6 + Math.random() * 4 });
    }
    fx.dust?.(new THREE.Vector3(x, 0.4, z), { x: 0, y: 1, z: 0 }, 10, [0.6, 0.05, 0.08]);
  }
  function throwLocal(x, y, z, yaw, pitch) {
    const py = Math.max(-1.1, Math.min(0.9, pitch || 0)), h = Math.cos(py);
    const g = { id: seq++, x, y, z, vx: -Math.sin(yaw) * h * SPEED, vy: Math.sin(py) * SPEED + 2.2, vz: -Math.cos(yaw) * h * SPEED, fuse: FUSE, landed: false };
    items.set(g.id, g); return g;
  }
  function sync(list) {
    const live = new Set();
    for (const row of list || []) {
      const [id, x, y, z, landed, fuse] = row; live.add(id);
      const had = items.get(id);
      items.set(id, { id, x, y, z, landed: !!landed, fuse, vx: 0, vy: 0, vz: 0 });
      if (had && !landed) { /* keep */ }
    }
    for (const id of [...items.keys()]) if (!live.has(id)) { if (items.get(id)?.fuse <= 0.2) splatter(items.get(id).x, items.get(id).z); items.delete(id); dropMesh(id); }
  }
  function boom(g, local) {
    items.delete(g.id); dropMesh(g.id); splatter(g.x, g.z); world.bait = null;
    ctx.sfx?.boom?.();
    if (!local) return;
    const zombies = ctx.zombies;
    if (zombies) for (const z of zombies.list) {
      if (z.state === 'dead' || z.state === 'dying') continue;
      const d = Math.hypot(z.pos.x - g.x, z.pos.z - g.z); if (d > BLAST) continue;
      const dmg = 200 * (1 - d / BLAST) + 50;
      const r = zombies.damage(z, dmg, false); if (r?.killed) ctx.onKill?.(z);
    }
    const P = ctx.P; if (P) { const d = Math.hypot(P.x - g.x, P.z - g.z); if (d < 3.2) ctx.onSelf?.(55 * (1 - d / 3.2)); }
  }
  function step(dt) {
    beep -= dt;
    let hot = null;
    for (const g of [...items.values()]) {
      if (g.fuse == null) continue;
      g.fuse -= dt;
      if (!g.landed && g.vx != null) {
        const ox = g.x, oz = g.z; g.vy -= 18 * dt; g.x += g.vx * dt; g.y += g.vy * dt; g.z += g.vz * dt;
        if (world.ray) { const hit = world.segBlock ? null : null; void hit; }
        if (typeof world.resolve === 'function') {
          const p = { x: g.x, z: g.z }; const before = Math.hypot(g.x - ox, g.z - oz);
          if (world.resolve(p, 0.16) && before > 0.01) { g.x = ox; g.z = oz; g.vx *= -0.25; g.vz *= -0.25; }
        }
        if (g.y <= 0.16) { g.y = 0.16; g.landed = true; g.vx = g.vz = g.vy = 0; }
      }
      if (g.fuse <= 0) boom(g, true);
      else if (g.landed && (!hot || g.fuse < hot.fuse)) hot = g;
    }
    world.bait = hot ? { x: hot.x, z: hot.z } : null;
    const soon = [...items.values()].reduce((m, g) => Math.min(m, g.fuse ?? 9), 9);
    if (soon < 5 && beep <= 0 && items.size) { ctx.sfx?.beep?.(soon); beep = soon < 1.2 ? 0.14 : soon < 2.5 ? 0.28 : 0.55; }
    for (let i = stains.length - 1; i >= 0; i--) { stains[i].t -= dt; stains[i].s.material.opacity = Math.max(0, stains[i].t / 8); if (stains[i].t <= 0) { scene.remove(stains[i].s); stains.splice(i, 1); } }
  }
  function frame() {
    for (const g of items.values()) {
      const m = meshFor(g.id); m.position.set(g.x, Math.max(0.16, g.y || 0.16), g.z); m.rotation.y += 0.02;
      const left = g.fuse ?? 5; m.userData.light.intensity = g.landed ? (left < 1.2 ? 6 : 1.5) * (0.5 + 0.5 * Math.sin(left * 18)) : 0.4;
    }
  }
  function reset() { for (const id of [...meshes.keys()]) dropMesh(id); items.clear(); world.bait = null; }
  return { throwLocal, sync, step, frame, reset, splatter, items, BLAST, LURE };
}
