const CACHE_NAME = 'ac-service-v10';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/manifest.json'
];

// Install Service Worker dan simpan aset ke Cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Ambil aset dari cache jika offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
