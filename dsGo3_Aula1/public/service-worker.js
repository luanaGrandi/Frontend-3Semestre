const CACHE_NAME = "luanaPoney-cache-v2";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/fallback.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        return response;
      })
      .catch(() =>
        caches.match(event.request).then((cached) => {
          return cached || caches.match("/fallback.html");
        })
      )
  );
});
