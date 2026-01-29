self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("ledetectorist-v1").then(cache => {
      return cache.addAll([
        "/LeDetectorist/",
        "/LeDetectorist/index.html",
        "/LeDetectorist/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
