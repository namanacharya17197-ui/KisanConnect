// Kisan Setu Offline-First Service Worker (Low-Bandwidth 2G/3G Resilience)
const CACHE_NAME = 'kisan-setu-v2.5';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './manifest.json',
  './src/App.jsx',
  './src/main.jsx',
  './src/components/Sidebar.jsx',
  './src/components/Header.jsx',
  './src/components/FarmerPortalTab.jsx',
  './src/components/BuyerStoreTab.jsx',
  './src/components/BulkBuyerTab.jsx',
  './src/components/RateAnnouncementBar.jsx'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch background update
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
          }
        }).catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // Return offline fallback if available
        return caches.match('./index.html');
      });
    })
  );
});
