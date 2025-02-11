let botonAnterior = document.querySelector(".botonAnterior");
let botonSiguiente = document.querySelector(".botonSiguiente");
let imagen = document.querySelector(".img");
let descripcion = document.querySelector(".descripcion");

let images = [
    "https://pugachev.miami/wp-content/uploads/2023/09/bmw-x6-m-competition-graphite-1.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/2023-mercedes-amg-c63-s-e-performance-109-65d79697e865a.jpg?crop=0.651xw:0.549xh;0.0897xw,0.326xh&resize=1200:*",
    "https://instagram.fsyq9-1.fna.fbcdn.net/v/t39.30808-6/470664654_18052538474079976_3144744733587253021_n.jpg?stp=dst-jpg_e15_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsyq9-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2AH-N3wbPZ2AgvoGuLzStspCZuVcJaBxYbrMfdrclfkS0w0XKRU3hBMdqYh53nKIABk&_nc_ohc=yNEL4Y_I6XUQ7kNvgGSh2kV&_nc_gid=6587e0796c684404a946d9def97da679&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQyMDg4ODgzNzgwMTg1NDI5OA%3D%3D.3-ccb7-5&oh=00_AYA-8xyd35foEyhsnBwn-EDNjEWpndCPqC5c7KnJhCi2WA&oe=67AC2CEB&_nc_sid=10d13b",
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