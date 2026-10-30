// Shared nickname-only leaderboard client (https://race.vwfestmemecoin.com/api/arcade/zombies). Output is built with textContent only.
const API = 'https://race.vwfestmemecoin.com/api/arcade/zombies';
let token = null;
const json = (r) => r.json();
export const lb = {
  start() { token = null; return fetch(API + '/start', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' }).then(json).then((j) => { if (j.ok) token = j.token; }).catch(() => {}); },
  hasToken() { return !!token; },
  top() { return fetch(API + '/top').then(json).then((j) => (j.ok ? j.top : null)).catch(() => null); },
  submit(nickname, round, pts, kills) {
    return fetch(API + '/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token, nickname, score: round, pts, kills }) }).then(json).then((j) => { if (j.ok) token = null; return j; }).catch(() => ({ ok: false, error: 'Network hiccup. Try again.' }));
  },
  render(el, rows, me) {
    el.replaceChildren();
    if (!rows) { const li = document.createElement('li'); li.className = 'muted'; li.textContent = 'Leaderboard unavailable.'; el.append(li); return; }
    if (!rows.length) { const li = document.createElement('li'); li.className = 'muted'; li.textContent = 'No survivors yet. Be first.'; el.append(li); return; }
    for (const r of rows.slice(0, 10)) { const li = document.createElement('li'); if (me && r.nickname === me) li.className = 'me'; const n = document.createElement('b'); n.textContent = String(r.nickname); li.append(n, ' · Round ' + (r.score | 0) + ' · ' + (r.aux | 0).toLocaleString() + ' pts'); el.append(li); }
  },
};
