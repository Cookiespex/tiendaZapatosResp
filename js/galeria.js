//Variables
const imgGaleria = document.querySelectorAll('#texto-secundario #galeria ul li img');
let cuerpoDom = document.querySelector('body');
let rutaImagen = null;
let lightbox = null;
let modal = null;

//Event listener
cargarEventListener();

function cargarEventListener() {
    imgGaleria.forEach(img => {
        img.addEventListener('click', capturaImagen)
    })
}

//Funciones
function capturaImagen(img) {
    rutaImagen = img.target;

    lightboxx(rutaImagen)
}
function lightboxx(img) {
    //Se pone la pantalla mas oscura
    cuerpoDom.appendChild(document.createElement('div')).setAttribute('id', 'lightbox');

    lightbox = document.querySelector('#lightbox');
    lightbox.style.width = '100%';
	lightbox.style.height = '100%';
	lightbox.style.position = 'fixed';
	lightbox.style.zIndex = '10';
	lightbox.style.background = "rgba(0,0,0,.8)";
	lightbox.style.top = 0;
	lightbox.style.lefts = 0;
    //Etiqueta donde esta la img
    lightbox.appendChild(document.createElement('div')).setAttribute('id', 'modal');

	modal = document.querySelector('#modal');
	modal.innerHTML = img.outerHTML + '<div>x</div>';
	modal.style.display = 'block';
    modal.style.position = 'relative';
    modal.style.width = '30%'
	modal.childNodes[0].style.width = '100%';
    modal.childNodes[0].style.border = '15px solid white';
    //como aparece la imagen
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.opacity = 0;

    setTimeout(function() {
        modal.style.transition = ".5s left ease"
        modal.style.opacity = 1;
        modal.style.marginLeft = -modal.childNodes[0].width / 2 + 'px';
        modal.style.marginTop = -modal.childNodes[0].height / 2 + 'px';
    }, 50)
    //Es el segundo nodo es decir la x
    modal.childNodes[1].style.position = 'absolute';
    modal.childNodes[1].style.right = '5px';
    modal.childNodes[1].style.top = '5px';
    modal.childNodes[1].style.color = 'silver';
    modal.childNodes[1].style.cursor = 'pointer';
    modal.childNodes[1].style.fontSize = '30px';
    modal.childNodes[1].style.width = '40px';
    modal.childNodes[1].style.height = '40px';
    modal.childNodes[1].style.textAlign = 'center';
    modal.childNodes[1].style.background = 'white';
    modal.childNodes[1].style.borderRadius = '0px 0px 0px 5px';

    modal.childNodes[1].addEventListener('click', salirGaleria);
}
function salirGaleria() {
    lightbox.parentNode.removeChild(lightbox);
}