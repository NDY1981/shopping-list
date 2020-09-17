var cacheName = 'ShoppingList';

var appShellFiles = [
    '/shopping_list/',
    '/shopping_list/index.html',
    '/shopping_list/favicon.png',
    '/shopping_list/icons/icon.png',
    '/shopping_list/app.js',
    '/shopping_list/styles/style.css',
    '/shopping_list/scripts/main.js',
    '/shopping_list/images/check.svg',
    '/shopping_list/images/trash.svg',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',
    
];

var contentToCache = appShellFiles;

self.addEventListener('install', function(e) {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[Service Worker] Caching all: app shell and content');
            return cache.addAll(contentToCache);
        })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(r) {
            console.log('[Service Worker] Fetching resource: '+e.request.url);
            return r || fetch(e.request).then(function(response) {
                return caches.open(cacheName).then(function(cache) {
                    console.log('[Service Worker] Caching new resource: '+e.request.url);
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});