self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('svt-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/game.html',
        '/manifest.json',
        '/svt_memory_game.png',
        '/svt_memory_game.png'
        // Add any other files (e.g., JS, images, audio)
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
