!function(){"use strict";const e=1619177660154,t=`cache${e}`,n=["/client/client.43100493.js","/client/inject_styles.5607aec6.js","/client/index.435ca0eb.js","/client/about.aadab249.js","/client/index.d2acaa7a.js","/client/[slug].89bbc869.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),a=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),s=n.protocol.startsWith("http"),c=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&a.has(n.pathname),o="only-if-cached"===t.request.cache&&!i;!s||c||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const a=await n.match(t);if(a)return a;throw e}}(t.request))())}))}();
