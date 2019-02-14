//Variables
const carrito = document.querySelector('#carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

//Event Listener
cargarEventListener();

function cargarEventListener() {
    //Dispara cuando se presiona el carrito
    productos.addEventListener('click', comprarProducto);
    carrito.addEventListener('click', eliminarProducto);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}

//Funciones
function comprarProducto(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const producto = e.target.parentElement.parentElement.parentElement.parentElement;
        //Se encarga de leer lo que estoy seleccionando(que producto)
        leerDatosProducto(producto);
    }
}
function leerDatosProducto(producto) {
    //lee la información del producto
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        precio: producto.querySelector('.precio span').textContent,
        titulo: producto.querySelector('center').textContent,
        id: producto.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoProducto);
}
//Aca es donde inserto a el carrito con html
function insertarCarrito(producto) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${producto.imagen}" width=100 >
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
        </td>
    `;
    listaProductos.appendChild(row);
    guardarProductoLocalStorage(producto);
}
function eliminarProducto(e) {
    e.preventDefault();
    let producto,
        productoId;
    if(e.target.classList.contains('borrar-producto')) {
        e.target.parentElement.parentElement.remove();
        producto = e.target.parentElement.parentElement;
        productoId = producto.querySelector('a').getAttribute('data-id');
    }
    eliminarProductoLocalStorage(productoId);
}
function vaciarCarrito() {
    while(listaProductos.firstChild) {
        listaProductos.removeChild(listaProductos.firstChild);
    }
    vaciarLocalStorage();
    return false;
}
function guardarProductoLocalStorage(producto) {
    let productos;
    productos = obtenerProductoLocalStorage();
    //Añade el producto actual
    productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos))
}
//Comprueba que haya elementos en LocalStorage
function obtenerProductoLocalStorage() {
    let productosLS;
    if(localStorage.getItem('productos') === null) {
        productosLS = [];
    }else {
        productosLS = JSON.parse(localStorage.getItem('productos'));
    }
    return productosLS;
}
function leerLocalStorage() {
    let productosLS;
    productosLS = obtenerProductoLocalStorage();
    productosLS.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=100 >
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
            </td>
        `;
        listaProductos.appendChild(row);
    });
}
function eliminarProductoLocalStorage(producto) {
    let productosLS;
    productosLS = obtenerProductoLocalStorage();
    productosLS.forEach((productoLS, index) => {
        if(productoLS.id === producto) {
            productosLS.splice(index, 1);
        }
    });
    localStorage.getItem('productos', JSON.stringify('productosLS'))
}
//Elimina todos los productos del localStorage
function vaciarLocalStorage() {
    localStorage.clear();
}