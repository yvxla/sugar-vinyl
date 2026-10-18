const CACHE='sugar-vinyl-shell-v1';
const SHELL=['./','./index.html','./manifest.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.origin!==location.origin)return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(res=>{if(res.ok&&e.request.mode==='navigate'){const copy=res.clone();caches.open(CACHE).then(cache=>cache.put('./index.html',copy));}return res}).catch(()=>caches.match('./index.html'))))});
