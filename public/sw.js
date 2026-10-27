// Offline support. The app screen and knowledge come from the network when there is signal (so updates
// arrive straight away) and from the phone when there isn't. Diagrams, parts views, component drawings, icons and any manual PDF the
// installer has opened are kept on the phone, and the PDF maker (vendor/) and data sheets once used. Questions to the assistant (api/) always need signal.
const SHELL = "hmg-shell-v2", FILES = "hmg-files-v2";
const PRECACHE = ["./", "index.html", "knowledge.json", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "brand/hmg-logo.png", "brand/hmg-logo-light.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== SHELL && k !== FILES).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin || url.pathname.includes("/api/")) return;
  if (/\/(wiring|parts|components|manuals|icons|brand|vendor|datasheets)\//.test(url.pathname)) {
    // cache first: these files don't change between versions
    e.respondWith(caches.open(FILES).then(async c => {
      const hit = await c.match(e.request, { ignoreSearch: true });
      if (hit) return hit;
      const r = await fetch(e.request);
      if (r.ok && r.status === 200) c.put(e.request, r.clone());
      return r;
    }));
    return;
  }
  // network first for the app itself
  e.respondWith(fetch(e.request).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(SHELL).then(c => c.put(e.request, copy)); }
    return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("index.html"))));
});
