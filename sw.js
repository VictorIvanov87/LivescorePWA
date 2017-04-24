let appShellCache = 'livescoreApp-v1';
let freshDataCache = 'apiData';
let filesToCache = [
    './',
    './index.html',
    './css/flexboxgrid.css',
    './manifest.json',
    './icons/LiveScore48.png',
    './icons/LiveScore72.png',
    './icons/LiveScore96.png',
    './icons/LiveScore144.png',
    './icons/LiveScore168.png',
    './icons/LiveScore192.png',
    'app.bundle.js',
    'vendor.bundle.js',
    'app.bundle.js?c077c62319c6c882605d',
    'vendor.bundle.js?c077c62319c6c882605d'
];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(appShellCache)
        .then(cache => {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function(e) {
    // console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== appShellCache && key !== freshDataCache) {
                    // console.log('[ServiceWorker] Removing old cache: ', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    // console.log('[Service Worker] Fetch', e.request.url);
    let dataUrl = 'https://api.football-data.org';
    let newsUrl = 'https://newsapi.org';
    let logosUrl = 'https://upload.wikimedia.org/';

    if (e.request.url.indexOf(dataUrl) > -1) {
        e.respondWith(
            caches.open(freshDataCache).then(cache => {
                return fetch(e.request).then(response => {
                    cache.put(e.request.url, response.clone());
                    return response;
                });
            })
        );
    } else if (e.request.url.indexOf(newsUrl) > -1) {
        e.respondWith(
            caches.open(freshDataCache).then(cache => {
                return fetch(e.request).then(response => {
                    cache.put(e.request.url, response.clone());
                    return response;
                });
            })
        );
    } else if (e.request.url.indexOf(logosUrl) > -1) {
        e.respondWith(
            caches.open(freshDataCache).then(cache => {
                return fetch(e.request).then(response => {
                    cache.put(e.request.url, response.clone());
                    return response;
                });
            }));
    } else {
        e.respondWith(
            caches.match(e.request).then(response => response || fetch(e.request))
        );
    }
});

self.addEventListener('notificationclick', function(event) {
    console.log('[Service Worker] Notification click Received.');

    event.notification.close();

    event.waitUntil(
        clients.openWindow('https://localhost:3000')
    );
});