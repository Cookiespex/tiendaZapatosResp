//Variables
const barraFija = document.querySelector('#fijo')
const botoneraNav = document.querySelectorAll('nav#principal a');
let posicionScroll = 0;
let destinoScroll = 0;
let padding = 0;
let enlace = null;
let intervaloTiempo = null;

//Event Listener
cargarEventListener();

function cargarEventListener() {
    document.addEventListener('scroll', efectoFijo)
    botoneraNav.forEach(boton => {
        boton.addEventListener('click', desplazamiento)
    })
}

//Funciones
function efectoFijo() {
    posicionScroll = window.pageYOffset;
    if (posicionScroll > 110) {
        fijo.style.position = 'fixed';
        fijo.style.zIndex = 10;
        fijo.style.width = 100 + '%';

        if (window.matchMedia("(min-width: 750px)").matches) {
            padding = 80;
        } else {
            padding = 140;
        }
    } else {
        fijo.style.position = 'relative';
        fijo.style.zIndex = 0;

        if (window.matchMedia("(min-width: 750px)").matches) {
            padding = 180;
        } else {
            padding = 280;
        }
    }
}
function desplazamiento(ruta) {
    ruta.preventDefault();
    enlace = ruta.target.getAttribute('href');
    destinoScroll = document.querySelector(enlace).offsetTop - padding;
    intervaloTiempo = setInterval(() => {
        if(posicionScroll < destinoScroll) {
            posicionScroll += 100;
            if(posicionScroll >= destinoScroll) {
                posicionScroll = destinoScroll;
                clearInterval(intervaloTiempo)
            }
        } else {
            posicionScroll -= 100;
            if(posicionScroll <= destinoScroll) {
                posicionScroll = destinoScroll;
                clearInterval(intervaloTiempo)
            }
        }
        window.scrollTo(0, posicionScroll);
    }, 50)
}