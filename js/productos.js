let usuario;
let pedido;
let cuentaUsuario = 1;
const arrayDatosUsuario = [];
const carrito = [];
const tienda = [];
const prodcutosSeleccionados = [];
const contenedorPadre = document.getElementById('tienda');

class Productos {
    constructor(idProducto, nombre, precio, imagen,stock,cantidad) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.imagen = imagen;
        this.stock = stock;
        this.cantidad = cantidad || 0
    }
    aumentarCantidad() {
        this.cantidad++
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
$.getJSON('http://127.0.0.1:5501/js/stock.json', function(datita){
    datita.forEach(element => tienda.push(element) );
    mostrarProductos();
})

function mostrarProductos(){
for (const producto of tienda) {
    $('#tienda').append(`
    <div class="card" style="width: 18rem;" >
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}"></img>
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text"><b>$ ${producto.precio}</b></p>
            <button id="${producto.idProducto}" class="btn btn-primary">Agregar al carrito</button>
        </div>
    </div>
    `)
    document.getElementById(`${producto.idProducto}`).addEventListener('click', () => comprarProductos(producto));
}
}

function comprarProductos(producto) {
    let comprar = carrito.find(el => el.nombre === producto.nombre)
    if (comprar) {
        if (comprar.cantidad < producto.stock) {
            comprar.aumentarCantidad();
        } 
    } else {
        carrito.push(producto);
        producto.aumentarCantidad();
    } 

    let total = 0;
        for (let i = 0; i < carrito.length; i++) {
            total += carrito[i].cantidad;
        }
    const compraTotal = document.getElementById('compraTotal');
    compraTotal.innerHTML = total;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarProductos();
}

function cargarLocalStorage() {
    let shop = JSON.parse(localStorage.getItem('carrito'))
    localStorage.setItem('carrito', shop)
    if (shop) {
        for (let i = 0; i < shop.length; i++) {
            carrito.push(new Productos(shop[i].idProducto, shop[i].nombre, shop[i].precio, shop[i].imagen,shop[i].stock, shop[i].cantidad))
        }
        let total = 0;
        for (let i = 0; i < carrito.length; i++) {
            total += carrito[i].cantidad;
        }
        const compraTotal = document.getElementById('compraTotal');
        compraTotal.innerHTML = total;
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
}
cargarLocalStorage(); 


