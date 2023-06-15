self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('Eagles Software').then((cache) => {
            return cache.addAll([
                '/index.html',
                '/login.html',
                '/cadastro.html',
                '/telaInicio.html',
                '/css/style.css',
                '/js/cadItem.js',
                '/js/itemRecente.js',
                '/js/menu.js',
                '/js/uploadFile.js'
            ]);
        })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                }).map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
