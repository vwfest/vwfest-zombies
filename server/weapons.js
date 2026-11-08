// Server-side weapon stats (mirror of src/weapons.js). Damage, rate, and ammunition are enforced here.
module.exports = {
  pistol: { dmg: 30, rpm: 380, pellets: 1, head: 3.2, range: 90, price: 0, mag: 12, reserve: 60, reload: 1.25 },
  smg: { dmg: 22, rpm: 820, pellets: 1, head: 2.4, range: 80, price: 600, mag: 32, reserve: 160, reload: 1.6 },
  shotgun: { dmg: 17, rpm: 78, pellets: 9, head: 2.0, range: 30, price: 1200, mag: 6, reserve: 42, reload: 0.5, perShell: true },
  rifle: { dmg: 42, rpm: 620, pellets: 1, head: 2.6, range: 120, price: 1800, mag: 30, reserve: 150, reload: 1.9 },
  lmg: { dmg: 40, rpm: 700, pellets: 1, head: 2.4, range: 110, price: 0, mag: 100, reserve: 300, reload: 3.8 },
};
