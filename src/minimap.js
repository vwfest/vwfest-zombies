// Corner minimap: north-up, static walls pre-rendered once, player arrow + live zombie dots redrawn ~12 Hz.
export function makeMinimap(world, zombies, P) {
  const S = 104, dpr = Math.min(2, window.devicePixelRatio || 1), cv = document.createElement('canvas'); cv.id = 'minimap'; cv.width = cv.height = S * dpr;
  document.getElementById('hud').appendChild(cv); const x = cv.getContext('2d');
  let b = { x0: 1e9, x1: -1e9, z0: 1e9, z1: -1e9 }; for (const c of world.colliders) if (c.y1 >= 2.5 && c.x1 - c.x0 + (c.z1 - c.z0) > 3) { b.x0 = Math.min(b.x0, c.x0); b.x1 = Math.max(b.x1, c.x1); b.z0 = Math.min(b.z0, c.z0); b.z1 = Math.max(b.z1, c.z1); }
  const pad = 3, span = Math.max(b.x1 - b.x0, b.z1 - b.z0) + pad * 2, k = (S * dpr) / span, cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2;
  const mx = (wx) => (wx - cx) * k + (S * dpr) / 2, mz = (wz) => (wz - cz) * k + (S * dpr) / 2;
  const bg = document.createElement('canvas'); bg.width = bg.height = S * dpr; const g = bg.getContext('2d'); g.fillStyle = 'rgba(200,230,240,0.55)';
  for (const c of world.colliders) if (c.y1 >= 1) g.fillRect(mx(c.x0), mz(c.z0), Math.max(1, (c.x1 - c.x0) * k), Math.max(1, (c.z1 - c.z0) * k));
  let acc = 0;
  return function update(dt) { acc += dt; if (acc < 0.08) return; acc = 0; const W = S * dpr;
    x.clearRect(0, 0, W, W); x.drawImage(bg, 0, 0); x.fillStyle = '#ff3b4e';
    const r = 2.4 * dpr; for (const z of zombies.list) if (z.state !== 'dead' && z.root.visible) { x.beginPath(); x.arc(mx(z.pos.x), mz(z.pos.z), r, 0, 6.283); x.fill(); }
    const px = mx(P.x), pz = mz(P.z), fx = -Math.sin(P.yaw), fz = -Math.cos(P.yaw), s = 6 * dpr;
    x.fillStyle = '#3cf0c0'; x.strokeStyle = '#04241c'; x.lineWidth = dpr; x.beginPath(); x.moveTo(px + fx * s, pz + fz * s); x.lineTo(px - fx * s * 0.6 - fz * s * 0.6, pz - fz * s * 0.6 + fx * s * 0.6); x.lineTo(px - fx * s * 0.6 + fz * s * 0.6, pz - fz * s * 0.6 - fx * s * 0.6); x.closePath(); x.fill(); x.stroke(); };
}
