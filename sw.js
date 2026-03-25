const CACHE = 'tqqq-scalper-v2';
self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(['/','/index.html'])));
    self.skipWaiting();
});
self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(c => c || fetch(e.request)));
});