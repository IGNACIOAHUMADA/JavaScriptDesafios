let usuario;
let pedido;
let cuentaUsuario = 1;
const arrayDatosUsuario = [];
const carrito = [];
const tienda = [];
const prodcutosSeleccionados = [];
const contenedorPadre = document.getElementById('tienda');

class Usuario {
    constructor(idUsuario, nombre, apellido,direccion, email, provincia, codigoPostal) {
        this.idUsuario = idUsuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.email = email;
        this.provincia = provincia;
        this.codigoPostal = codigoPostal;
    }
}
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
tienda.push(new Productos("01", "Macarrons", "250", "../imagenes/macarrones.jpeg", 20,0 ));
tienda.push(new Productos("02", "Pavlova", "1500", "../imagenes/pavlova.jpeg",10));
tienda.push(new Productos("03", "Torta Kit Kat", "1200", "../imagenes/torta_colores.jpeg", 3));
tienda.push(new Productos("04", "Tabletas", "300","../imagenes/tabletas.jpeg",15));
for (const Productos of tienda) {
    Productos.sumaIva();
}


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



