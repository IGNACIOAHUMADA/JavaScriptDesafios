let carrito = []
let dataCarrito = localStorage.getItem("carrito");

if(dataCarrito) {
    carrito = JSON.parse(dataCarrito)
    mostrarCarrito()
}
function mostrarCarrito(){
    document.getElementById("seleccionProductos").innerHTML = ""
    for(const data of carrito){
        $('#seleccionProductos').append( `
        <div class="card" style="width: 18rem;" >
            <img src="${data.imagen}" class="card-img-top" alt="${data.nombre}"></img>
            <div class="card-body">
                <h5 class="card-title">${data.nombre}</h5>
                <p class="card-text">Unidades seleccionadas(${data.cantidad})</p>
                <p class="card-text">Productos disponibles(${data.stock})</p>
                <p class="card-text"><b>$ ${data.precio}</b></p>
                <button id="${data.idProducto}eliminar" class="btn btn-primary delete">🗑️</button>
            </div>
        </div>`)

        document.getElementById(`${data.idProducto}eliminar`).addEventListener('click', () => eliminar(data))
    }

}


function eliminar(producto){
    const eliminado = carrito.find(el => el.idProducto === producto.idProducto)
    if(eliminado.cantidad > 1 ){
        eliminado.cantidad--
    }else{
        carrito = carrito.filter(el => el.idProducto !== producto.idProducto)
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito()

}