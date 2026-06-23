// GeoGuia - PWA offline

console.log("GeoGuia iniciada");


if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("./service-worker.js")
        .then(() => {

            console.log("GeoGuia funciona offline");

        })
        .catch(error => {

            console.log("Error instalando offline:", error);

        });

    });

}


// mensaje si pierde señal

window.addEventListener("offline", () => {

    alert("📴 Estás sin conexión. GeoGuia sigue funcionando.");

});


window.addEventListener("online", () => {

    console.log("Conexión restaurada");

});