const CACHE_NAME = 'figure-v1';
const urlsToCache = [
    '/25ps61/',
    '/25ps61/index.html',
    '/25ps61/manifest.json',
    'https://i.ibb.co/Y7X039jt/maskable-icon-x192.png',
    'https://i.ibb.co/qMD8K9Xv/maskable-icon-x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return new Response('오프라인 상태입니다.');
            })
    );
});
