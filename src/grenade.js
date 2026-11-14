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
  // Shared geometry + pooled meshes. No PointLight: adding/removing a light changes the scene's light count,
  // which makes three.js recompile the shader of EVERY lit material on that frame (the press/explode hitch).
  // The blinking red glow is an additive sprite instead.
  const bodyGeo = new THREE.SphereGeometry(0.16, 10, 8), capGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.08, 6);
  const glowTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 32; const x = c.getContext('2d'); const gr = x.createRadialGradient(16, 16, 0, 16, 16, 16); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, 32, 32); return new THREE.CanvasTexture(c); })();
  const glowMat = new THREE.SpriteMaterial({ map: glowTex, color: 0xff2244, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
  const pool = [];
  function make() {
    const g = new THREE.Group();
    const body = new THREE.Mesh(bodyGeo, mat), cap = new THREE.Mesh(capGeo, drip); cap.position.y = 0.16;
    const glow = new THREE.Sprite(glowMat); glow.position.y = 0.2; glow.scale.setScalar(0.9);
    g.add(body, cap, glow); g.userData.glow = glow; g.visible = false; scene.add(g); return g;
  }
  // One parked copy stays "rendered" below the ground forever so its shaders are compiled at load and kept
  // current when the HD sky/IBL swaps in (otherwise the first throw after a lighting change compiles them).
  const parked = make(); parked.visible = true; parked.position.set(0, -60, 0); parked.traverse((o) => { o.frustumCulled = false; });
  for (let i = 0; i < 3; i++) pool.push(make());

  function meshFor(id) {
    let g = meshes.get(id);
    if (g) return g;
    g = pool.pop() || make(); g.visible = true; meshes.set(id, g); return g;
  }
  function dropMesh(id) { const g = meshes.get(id); if (!g) return; g.visible = false; meshes.delete(id); pool.push(g); }
  // Stains: reuse the HD blood-decal ring buffer (instanced, capped at 40, always compiled) when it exists;
  // otherwise a fixed pool of 14 stain meshes with one shared geometry. Nothing is allocated per explosion.
  const stainGeo = new THREE.CircleGeometry(1, 6);
  const stainPool = Array.from({ length: 14 }, () => { const s = new THREE.Mesh(stainGeo, new THREE.MeshBasicMaterial({ color: 0x6a0810, transparent: true, opacity: 0, depthWrite: false })); s.rotation.x = -Math.PI / 2; s.visible = false; scene.add(s); return s; });
  let si = 0;
  function splatter(x, z) {
    const decal = ctx.blood;
    for (let i = 0; i < 7; i++) {
      const px = x + (Math.random() - 0.5) * 3.2, pz = z + (Math.random() - 0.5) * 3.2, r = 0.18 + Math.random() * 0.45;
      if (decal) { decal(px, pz, r * 2.2); continue; }
      const s = stainPool[si]; si = (si + 1) % stainPool.length;
      const old = stains.indexOf(s); if (old >= 0) stains.splice(old, 1);
      s.scale.setScalar(r); s.position.set(px, 0.04, pz); s.rotation.z = Math.random() * 6; s.visible = true; s.material.opacity = 0.85;
      stains.push({ s, t: 6 + Math.random() * 4 });
    }
    fx.dust?.(new THREE.Vector3(x, 0.4, z), { x: 0, y: 1, z: 0 }, 10, [0.6, 0.05, 0.08]);
  }
  function throwLocal(x, y, z, yaw, pitch) {
    const py = Math.max(-1.1, Math.min(0.9, pitch || 0)), h = Math.cos(py);
    const g = { id: seq++, x, y, z, vx: -Math.sin(yaw) * h * SPEED, vy: Math.sin(py) * SPEED + 2.2, vz: -Math.cos(yaw) * h * SPEED, fuse: FUSE, landed: false };
    items.set(g.id, g); return g;
  }
  // Co-op: the server sends grenade positions 20x a second. sync() keeps the authoritative set from the newest
  // snapshot; interp() places each grenade between the two snapshots around (now - 100 ms), the same buffer
  // zombies and teammates use (mp.js frameAt), so flight is smooth and the bait sits where the zombies see it.
  function sync(list) {
    const live = new Set();
    for (const row of list || []) {
      const [id, x, y, z, landed, fuse] = row; live.add(id);
      const had = items.get(id);
      items.set(id, { id, x, y, z, landed: !!landed, fuse, net: true, rx: had?.rx, ry: had?.ry, rz: had?.rz });
    }
    for (const id of [...items.keys()]) if (!live.has(id)) { items.delete(id); dropMesh(id); }
  }
  const rowOf = (snap, id) => { const ng = snap?.ng; if (ng) for (const r of ng) if (r[0] === id) return r; return null; };
  function interp(f) {
    for (const g of items.values()) {
      if (!f) { g.rx = g.x; g.ry = g.y; g.rz = g.z; continue; }
      const a = rowOf(f.s0, g.id), b = rowOf(f.s1, g.id);
      if (a && b) { const k = f.k; g.rx = a[1] + (b[1] - a[1]) * k; g.ry = a[2] + (b[2] - a[2]) * k; g.rz = a[3] + (b[3] - a[3]) * k; }
      else if (b || a) { const r = b || a; g.rx = r[1]; g.ry = r[2]; g.rz = r[3]; }
      else g.rx = g.ry = g.rz = undefined; // thrown after the render time: appears on the next frames
    }
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
    for (let i = stains.length - 1; i >= 0; i--) { stains[i].t -= dt; stains[i].s.material.opacity = Math.max(0, stains[i].t / 8); if (stains[i].t <= 0) { stains[i].s.visible = false; stains.splice(i, 1); } }
  }
  function frame() {
    for (const g of items.values()) {
      const net = g.net && g.rx !== undefined;
      if (g.net && !net) { const m0 = meshes.get(g.id); if (m0) m0.visible = false; continue; }
      const m = meshFor(g.id); m.visible = true; const x = net ? g.rx : g.x, y = net ? g.ry : g.y || 0.16, z = net ? g.rz : g.z;
      m.position.set(x, Math.max(0.16, y), z); m.rotation.y += 0.02;
      const left = g.fuse ?? 5, k = g.landed ? (left < 1.2 ? 1 : 0.45) * (0.5 + 0.5 * Math.sin(left * 18)) : 0.15; m.userData.glow.scale.setScalar(0.25 + 1.1 * k); m.userData.glow.material.opacity = 1;
    }
  }
  function reset() { for (const id of [...meshes.keys()]) dropMesh(id); items.clear(); world.bait = null; }
  return { throwLocal, sync, interp, step, frame, reset, splatter, items, BLAST, LURE };
}
