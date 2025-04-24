const cacheName = 'star-popper-cache-v1';
const staticAssets = [
  
  'index.html',
  'manifest.json',
  'icon.png', // Add your icon paths here
  'icon-512.png'  // Add your icon paths here
];

self.addEventListener('install', async () => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    return response || fetch(event.request);
  }));
});
