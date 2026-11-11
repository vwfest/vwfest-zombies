// Server-side weapon stats (mirror of src/weapons.js). Damage, rate, and ammunition are enforced here.
module.exports = {
  pistol: { dmg: 30, rpm: 380, pellets: 1, head: 3.2, range: 90, price: 0, mag: 12, reserve: 60, reload: 1.25 },
  smg: { dmg: 22, rpm: 820, pellets: 1, head: 2.4, range: 80, price: 600, mag: 32, reserve: 160, reload: 1.6 },
  shotgun: { dmg: 17, rpm: 78, pellets: 9, head: 2.0, range: 30, price: 1200, mag: 6, reserve: 42, reload: 0.5, perShell: true },
  rifle: { dmg: 42, rpm: 620, pellets: 1, head: 2.6, range: 120, price: 1800, mag: 30, reserve: 150, reload: 1.9 },
  lmg: { dmg: 40, rpm: 700, pellets: 1, head: 2.4, range: 110, price: 0, mag: 100, reserve: 300, reload: 3.8 },
  akimbo: { dmg: 26, rpm: 500, pellets: 1, head: 2.6, range: 70, price: 750, mag: 24, reserve: 96, reload: 1.7 },
  lever: { dmg: 70, rpm: 55, pellets: 1, head: 3, range: 110, price: 1500, mag: 7, reserve: 35, reload: 0.48, perShell: true },
  nailer: { dmg: 14, rpm: 900, pellets: 1, head: 1.4, range: 22, price: 800, mag: 36, reserve: 144, reload: 1.5 },
  sawed: { dmg: 24, rpm: 200, pellets: 8, head: 1.5, range: 14, price: 0, mag: 2, reserve: 20, reload: 1.7 },
};
