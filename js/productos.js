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

$.getJSON('../data/stock.json', function(datita){
    if(datita){
        for(const product of datita){
            tienda.push(new Productos(product.idProducto, product.nombre, product.precio, product.imagen, product.stock))
        }
        for (const Productos of tienda) {
            Productos.sumaIva();
        }
        mostrarProductos();
    }
})
for (const Productos of tienda) {
    Productos.sumaIva();
}

function mostrarProductos(){
    for (const producto of tienda) {
        $('#tienda').append(`
        <div class="card" style="width: 18rem;" >
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}"></img>
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text"><b>$ ${producto.precio}</b></p>
                <button id=${producto.idProducto} class="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
        `)
        document.getElementById(`${producto.idProducto}`).addEventListener('click', () => comprarProductos(producto));
    }
}

function comprarProductos(producto) {
    let comprar = carrito.find(el => el.idProducto === producto.idProducto)
    if (comprar) {
        if (comprar.cantidad < producto.stock) {
            comprar.aumentarCantidad();
        }
    } else {
        producto.aumentarCantidad();
        carrito.push(producto);
    }

    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].cantidad;
    }
    const compraTotal = document.getElementById('totalCompra');
    compraTotal.innerHTML = total;
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarLocalStorage() {
    let shop = JSON.parse(localStorage.getItem('carrito'))
    
    if (shop) {
        for (let i = 0; i < shop.length; i++) {
            carrito.push(new Productos(shop[i].idProducto, shop[i].nombre, shop[i].precio, shop[i].imagen,shop[i].stock, shop[i].cantidad))
        }
        let total = 0;
        for (let i = 0; i < carrito.length; i++) {
            total += carrito[i].cantidad;
        }
        const compraTotal = document.getElementById('totalCompra');
        compraTotal.innerHTML = total;
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
}
cargarLocalStorage(); 