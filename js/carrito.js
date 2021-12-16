
$(() => {
    let carrito = []
    let dataCarrito = localStorage.getItem("carrito");

    if(dataCarrito) carrito = JSON.parse(dataCarrito)

    let stringHTML = "<div class='cardProductos'>";
    for (const data of carrito) {
        stringHTML += `
        <div class="card" style="width: 18rem;" >
        <img src="${data.imagen}" class="card-img-top" alt="${data.nombre}"></img>
        <div class="card-body">
            <h5 class="card-title">${data.nombre}</h5>
            <p class="card-text">Unidades seleccionadas(${data.cantidad})</p>
            <p class="card-text">Productos disponibles(${data.stock})</p>
            <p class="card-text"><b>$ ${data.precio}</b></p>
        </div>
    </div>`
    }
    stringHTML += "</div>"
    $("#seleccionProductos").html(stringHTML)
})