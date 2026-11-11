// DUST & DEAD service worker: offline cache for the single-player game. Co-op (WebSocket) and the leaderboard API are never cached.
const V = 'dd-v7', CORE = ['./', 'index.html', 'style.css', 'game.js', 'framebuster.js', 'manifest.webmanifest', 'icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'assets/cars.bin', 'assets/hd/z/zombie_m_lo.glb', 'assets/hd/z/zombie_f_lo.glb', 'assets/hd/z/zanim_ual1.glb', 'assets/hd/z/zanim_ual2.glb', 'assets/hd/z/zskin_m_512.webp', 'assets/hd/z/zskin_f_512.webp', 'assets/fonts/barlow-condensed-800.woff2', 'assets/fonts/black-ops-one.woff2'];
self.addEventListener('install', (e) => e.waitUntil(caches.open(V).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())));
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (e) => { const u = new URL(e.request.url); if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  // network-first so updates land quickly; fall back to cache offline
  e.respondWith(fetch(e.request).then((r) => { if (r.ok && r.type === 'basic') { const cp = r.clone(); caches.open(V).then((c) => c.put(e.request, cp)); } return r; }).catch(() => caches.match(e.request, { ignoreSearch: true }).then((r) => r || caches.match('index.html')))); });
