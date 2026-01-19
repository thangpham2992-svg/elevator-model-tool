const CACHE_NAME = 'elevator-tool-2026-01-12';
const PRECACHE_URLS = [
  "README_RUN_EDGE.txt",
  "RUN_EDGE_1CLICK.bat",
  "RUN_EDGE_FALLBACK.bat",
  "assets/bg_left.jpg",
  "assets/bg_right.jpg",
  "assets/logo_me.png",
  "assets/logo_smec.png",
  "catalogue/MELINA/GFM-T.png",
  "catalogue/MELINA/NEXIEZ-MRL.png",
  "catalogue/MELINA/NEXIEZMRL_EN81-1.png",
  "catalogue/MELINA/NEXIEZMRL_EN81-20_50.png",
  "catalogue/MELINA/NEXIEZMRL_MELCO.png",
  "catalogue/TMEC/GFC-L2.png",
  "catalogue/TMEC/GFC-L3.png",
  "icons/apple-touch-icon.png",
  "icons/icon-192.png",
  "icons/icon-512-maskable.png",
  "icons/icon-512.png",
  "index.html",
  "manifest.json",
  "service-worker.js"
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  // Network-first for HTML to always get latest when online; cache-first for others
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then((r)=>r || caches.match('./index.html')))
    );
    return;
  }
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
      return res;
    }))
  );
});
