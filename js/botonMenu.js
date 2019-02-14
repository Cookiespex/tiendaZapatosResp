//Variables
const botonMenu = document.querySelector("#btnMenu span");
const botonera = document.querySelector("nav");
const botones = document.querySelectorAll("nav#principal a");
let vistaBotones = false;

//Event listener
cargarEventListener();

function cargarEventListener() {
    botonMenu.addEventListener('click', mostrarBotonera);
    botones.forEach(boton => {
        boton.addEventListener('click', ocultarBotonera)
    })
}

//Funciones
function mostrarBotonera() {
    if(!vistaBotones) {
        vistaBotones = true;
        botonera.className = 'one columns';
    } else {
        vistaBotones = false;
        botonera.className = 'nine columns';
    }
}
function ocultarBotonera() {
    if (window.matchMedia('(max-width: 749px)').matches) {
        vistaBotones = false;
        botonera.className = 'nine columns'
    } else {
        vistaBotones = false;
        botonera.className = 'nine columns'
    }
}