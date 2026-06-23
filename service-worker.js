const CACHE="geoguia-v1";


const archivos=[

"/GeoGuia/",

"/GeoGuia/index.html",

"/GeoGuia/style.css",

"/GeoGuia/app.js"

];




self.addEventListener("install", e=>{


e.waitUntil(

caches.open(CACHE)
.then(cache=>cache.addAll(archivos))

);


});




self.addEventListener("fetch", e=>{


e.respondWith(

caches.match(e.request)

.then(resp=>resp || fetch(e.request))

);


});