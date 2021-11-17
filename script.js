let usuario;
let pedido;
let cuentaUsuario = 1;
const arrayDatosUsuario =[];
const tienda = [];

class Usuario {
    constructor(idUsuario, nombre, apellido, email,edad) {
        this.idUsuario = idUsuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
    }
}
class Productos {
    constructor(idProducto, nombre, precio) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
tienda.push (new Productos("01", "Macarrons", "250"));
tienda.push (new Productos("02", "Pavlova", "1500"));
tienda.push (new Productos("03", "Torta oreo", "1200"));
tienda.push (new Productos("04", "Tabletas", "300"));
for(const Productos of tienda){
    Productos.sumaIva();
}
tienda.sort((a, b) => {
    return a.precio - b.precio;
});
console.log(tienda);

function ingreseDatos(){
    const nombreUsuario = prompt('Ingresa tu nombre:');
    const apellidoUsuario = prompt('Ingrese su apellido:');
    const emailUsuario = prompt('Ingrese su email:')
    const edadUsuario = parseInt(prompt('Ingresa tu edad:'));
    alert ('Bienvenido A PUNTO CARAMELO ' + nombreUsuario + " " + apellidoUsuario);
    console.log(`
        Bienvenido su datos son:\n
        Su nombre y apellido : ${nombreUsuario} ${apellidoUsuario}\n
        su edad es: ${edadUsuario}
        Su email es: ${emailUsuario}`);

    usuarioIngresado = new Usuario (cuentaUsuario, nombreUsuario,apellidoUsuario, emailUsuario, edadUsuario);
    console.log(usuarioIngresado)
    
    arrayDatosUsuario.push(usuarioIngresado);
    console.log(arrayDatosUsuario)
    cuentaUsuario++;
}
ingreseDatos();


let productosSeleccionados = prompt("Selecciona un producto \n 1 - Macarrons \n 2 - Pavlova \n 3 - Torta oreo \n 4 - Tabletas");

switch (productosSeleccionados) {
    case "1":
        alert('Usted va pagar ' + tienda[0].precio)
        console.log(tienda[0]);
        break;
    case "2":
        alert('Usted va pagar ' + tienda[1].precio)
        console.log(tienda[1]);
        break;
    case "3":
        alert('Usted va pagar ' + tienda[2].precio)
        console.log(tienda[2]);
        break;
    case "4":
        alert('Usted va pagar ' + tienda[3].precio)
        console.log(tienda[3]);
        break;
    default:
    break;
}

