const CACHE_VERSION = "v1";
const ASSET_CACHE = `spk-assets-${CACHE_VERSION}`;
const PAGE_CACHE = `spk-pages-${CACHE_VERSION}`;

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key !== ASSET_CACHE && key !== PAGE_CACHE)
          .map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

function isAssetRequest(request) {
  if (request.destination === "image") return true;
  if (request.destination === "script") return true;
  if (request.destination === "style") return true;
  if (request.destination === "font") return true;
  const path = new URL(request.url).pathname;
  return /\.(?:js|css|png|jpe?g|svg|webp|avif|woff2?)$/i.test(path);
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(ASSET_CACHE);
  const cached = await cache.match(request);
  const networkPromise = fetch(request)
    .then((response) => {
      if (response && response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);

  if (cached) {
    return cached;
  }
  const network = await networkPromise;
  return (
    network ||
    new Response("Offline", { status: 503, statusText: "Service Unavailable" })
  );
}

async function networkFirstPage(request) {
  const cache = await caches.open(PAGE_CACHE);
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (_) {
    const cached = await cache.match(request);
    if (cached) return cached;
    const indexFallback = await cache.match("./index.html");
    if (indexFallback) return indexFallback;
    return new Response("Offline", {
      status: 503,
      statusText: "Service Unavailable",
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirstPage(request));
    return;
  }

  if (isAssetRequest(request)) {
    event.respondWith(staleWhileRevalidate(request));
  }
});
