self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      await self.clients.claim();
      const clients = await self.clients.matchAll({
        includeUncontrolled: true,
        type: "window",
      });
      clients.forEach((client) => {
        client.postMessage({ type: "SW_CLEANED" });
      });
    })()
  );
});

self.addEventListener("fetch", () => {
  // Intentionally empty: this worker only performs cleanup + unregister.
});
