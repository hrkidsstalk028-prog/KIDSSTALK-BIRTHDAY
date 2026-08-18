/* Kidss Talk Birthdays — offline support and app updates.

   When you upload a new index.html, change the number on the next line
   (v9 → v10). Phones that already have the app will then pick up the change.

   The page itself is fetched from the network first, so a new upload appears
   the next time the app is opened online. The cached copy is used only when
   the network fails — that is what keeps the app working offline, and what
   Android requires before it will offer to install it. */
const CACHE = "kidss-talk-birthday-v9";

const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(SHELL.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  /* Fonts and the spreadsheet library sit on other servers — leave them alone. */
  if (url.origin !== self.location.origin) return;

  /* The page: newest version wins, cache is the fallback when offline. */
  if (req.mode === "navigate" || req.destination === "document") {
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put("./index.html", copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then(hit => hit || caches.match("./index.html")))
    );
    return;
  }

  /* Everything else: straight from the cache, refreshed quietly behind it. */
  e.respondWith(
    caches.match(req).then(hit => {
      const live = fetch(req).then(res => {
        if (res && res.status === 200 && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => hit);
      return hit || live;
    })
  );
});
