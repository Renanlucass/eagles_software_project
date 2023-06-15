self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(version).then((cache) => {
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

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((cacheName) => {
                        return cacheName !== version;
                    })
                    .map((cacheName) => {
                        return caches.delete(cacheName);
                    })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
