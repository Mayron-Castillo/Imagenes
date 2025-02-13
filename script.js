let botonAnterior = document.querySelector(".botonAnterior");
let botonSiguiente = document.querySelector(".botonSiguiente");
let imagen = document.querySelector(".img");
let descripcion = document.querySelector(".descripcion");

let images = [
    "https://pugachev.miami/wp-content/uploads/2023/09/bmw-x6-m-competition-graphite-1.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/2023-mercedes-amg-c63-s-e-performance-109-65d79697e865a.jpg?crop=0.651xw:0.549xh;0.0897xw,0.326xh&resize=1200:*",
    "https://i.ytimg.com/vi/R3neG59lFCM/maxresdefault.jpg",
    "https://deluxerentalcars.ch/wp-content/uploads/2023/08/Ferrari-488-spider-e1722751004360.jpg",
];

let descriptions = [
    "BMW X6",
    "Mercedes AMG",
    "G Wagon",
    "Ferrari 488 Spider"
];

let currentIndex = 0;

// Primer imagen y descripcion 
imagen.src = images[currentIndex];
descripcion.textContent = descriptions[currentIndex];

//Con este boton se cambia a la imagen siguiente
botonSiguiente.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    actualizarImagen();
});

//con este boton se cambia a la imagen anterior
botonAnterior.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    actualizarImagen();
});

// Cambio de imagen y descripción
function actualizarImagen() {
    imagen.src = images[currentIndex];
    descripcion.textContent = descriptions[currentIndex];
}