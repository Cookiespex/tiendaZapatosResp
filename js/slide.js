//Variables
const paginacion = document.querySelectorAll('#paginacion li');
let item = 0;
let cajaSlide = document.querySelector('#slide ul');
let imgSlide = document.querySelectorAll('#slide ul li');
//Variable que ayuda que cuando uno interrumpe el intervalo siga normal 
let formatearLoop = false;

//Event Listener
cargarEventListener();

function cargarEventListener() {
    //Recorre los li para agregarle el event listener para que cambie de página
    paginacion.forEach(pagina => {
        pagina.addEventListener('click', paginacionSlide);
        /*console.log(pagina)*/
    });
    //Pa que se pueda hacer el intervalo
    intervalo();
}

//Funciones
//Funcion para ver a cual item estoy dando click
function paginacionSlide(item) {
    item = item.target.parentNode.getAttribute('item') - 1;
        /*console.log(item)*/
    movimientoSlide(item);
}
function avanzar() {

    if (item == imgSlide.length - 1) {
        item = 0;
    } else {
        item++;
    }

    movimientoSlide(item);
}
function movimientoSlide(item) {
    formatearLoop = true;
    //ya cambia la paginacion con left
    cajaSlide.style.left = item * - 100 + '%'
        /*console.log(item * - 100 + '%')*/
    //Agregar style
    paginacion.forEach(pagina => {
        //Los citculos se ponen iguales en opacidad
        pagina.style.opacity = .5;
    });
    //Muestra en cual item estoy posicionado
    paginacion[item].style.opacity = 1;
    //La transicion que hace cuando cambia la foto
    cajaSlide.style.transition = ".7s left ease-in-out";
}
function intervalo() {
    setInterval(() => {
        if (formatearLoop) {
            formatearLoop = false
        } else {
            avanzar();
        }
    }, 3000)
}