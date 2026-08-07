const CACHE_NAME = 'romanzo-app-v1';

// Installazione del Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            // Puoi aggiungere qui file da mettere in cache se vuoi che si apra anche offline
            return cache.addAll([
                './',
                './manifest.json'
            ]);
        })
    );
});

// Intercettazione delle richieste di rete
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});