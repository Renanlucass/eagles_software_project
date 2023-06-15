// service-worker.js

// Define a versão do cache
const cacheVersion = 'v1';

// Lista de arquivos a serem armazenados no cache
const cacheFiles = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    // Adicione aqui todos os arquivos que deseja armazenar em cache
];

// Instalação do Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheVersion)
            .then(cache => cache.addAll(cacheFiles))
    );
});

// Ativação do Service Worker
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== cacheVersion) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Intercepta as requisições e busca os recursos em cache
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
