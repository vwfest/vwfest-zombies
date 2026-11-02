// Difficulty modes (single-player, offline). Multipliers applied in main.js / zombie.js hooks.
export const MODES = {
  easy:   { id: 'easy',   name: 'Easy',   count: 0.7, hp: 0.75, speed: 0.85, dmg: 0.6, drop: 2.0, maxDrops: 3, inter: 10, spawnGap: 1.3, brute: 0.5, startPts: 750 },
  medium: { id: 'medium', name: 'Medium', count: 1.0, hp: 1.0,  speed: 1.0,  dmg: 1.0, drop: 1.0, maxDrops: 2, inter: 7,  spawnGap: 1.0, brute: 1.0, startPts: 500 },
  hard:   { id: 'hard',   name: 'Hard',   count: 1.35, hp: 1.3, speed: 1.15, dmg: 1.4, drop: 0.6, maxDrops: 1, inter: 5,  spawnGap: 0.75, brute: 1.6, startPts: 400 },
};
// Player-count scaling, ready for co-op (1..4); single-player uses n=1.
export function scaled(mode, n = 1) { n = Math.max(1, Math.min(4, n | 0)); const k = [1, 1.6, 2.2, 2.8][n - 1]; return { ...mode, count: mode.count * k, hp: mode.hp * (1 + 0.1 * (n - 1)) }; }
export function getMode(id) { return MODES[id] || MODES.medium; }
