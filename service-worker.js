const CACHE_NAME = "GeoGuia-v2";


const ARCHIVOS = [

"./",

"./index.html",
"./style.css",
"./app.js",
"./manifest.json",


"./geositios/domuyo.html",


"./img/domuyo.jpg",
"./img/los-bolillos.jpg"

];




// instalar

self.addEventListener("install", evento => {


evento.waitUntil(

caches.open(CACHE_NAME)

.then(cache => {

console.log("Guardando GeoGuia offline");

return cache.addAll(ARCHIVOS);

})

);


});





// cargar desde memoria

self.addEventListener("fetch", evento => {


evento.respondWith(


caches.match(evento.request)

.then(respuesta => {


return respuesta || fetch(evento.request);


})


);


});





// limpiar versiones viejas

self.addEventListener("activate", evento => {


evento.waitUntil(

caches.keys().then(keys => {


return Promise.all(

keys.map(key => {


if(key !== CACHE_NAME){

return caches.delete(key);

}


})

);


})


);


});