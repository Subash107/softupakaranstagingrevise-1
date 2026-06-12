const CACHE = "su-shell-v11";
const SHELL = [
  "/offline.html",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const { request } = e;
  const url = new URL(request.url);

  // Never intercept: service worker itself, cross-origin, non-GET
  if (url.pathname === "/sw.js") return;
  if (url.origin !== location.origin || request.method !== "GET") return;

  // API calls: network-first, no caching
  if (url.pathname.startsWith("/api/")) {
    e.respondWith(fetch(request).catch(() => caches.match(request)));
    return;
  }

  // HTML navigation pages: network-first so updates are always picked up
  if (request.mode === "navigate") {
    e.respondWith(
      fetch(request).catch(() =>
        caches.match(request) || caches.match("/offline.html")
      )
    );
    return;
  }

  // JS/CSS with versioned query strings: network-first (version busting handles freshness)
  if (url.search && (url.pathname.endsWith(".js") || url.pathname.endsWith(".css"))) {
    e.respondWith(
      fetch(request).catch(() => caches.match(request))
    );
    return;
  }

  // Everything else (images, fonts, etc.): cache-first
  e.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((res) => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(request, clone));
        }
        return res;
      }).catch(() => caches.match("/offline.html"));
    })
  );
});
