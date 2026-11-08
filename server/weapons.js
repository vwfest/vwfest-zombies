// Server-side weapon stats (mirror of src/weapons.js damage/rate — the server never trusts client damage).
module.exports = {
  pistol: { dmg: 30, rpm: 380, pellets: 1, head: 3.2, range: 90, price: 0 },
  smg: { dmg: 22, rpm: 820, pellets: 1, head: 2.4, range: 80, price: 600 },
  shotgun: { dmg: 17, rpm: 78, pellets: 9, head: 2.0, range: 30, price: 1200 },
  rifle: { dmg: 42, rpm: 620, pellets: 1, head: 2.6, range: 120, price: 1800 },
  lmg: { dmg: 40, rpm: 700, pellets: 1, head: 2.4, range: 110, price: 0 },
};
