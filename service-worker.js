self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('password-generator-cache').then(function(cache) {
            return cache.addAll([
                '/',
                'index.html',
                'css/main.css',
                'images/icon-192x192.png',
                'images/icon-512x512.png',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});