function ingreseDatos(){
    let nombreUsuario = prompt('Ingresa tu nombre:');
    let apellidoUsuario = prompt('Ingrese su apellido:');
    alert ('Bienvenido A PUNTO CARAMELO ' + nombreUsuario + " " + apellidoUsuario);
    let edadUsuario = parseInt(prompt('Ingresa tu edad:'));
    console.log('tu edad es: ' + edadUsuario);

}
ingreseDatos();


let prodictosSeleccionados = prompt("Selecciona un producto \n 1 - Macarrons \n 2 - Pavlova \n 3 - Torta oreo \n 4 - Tabletas");

const producto1 = 250;
const producto2 = 1500;
const producto3 = 1200;
const producto4 = 300;
const iva = 0.21;
let producto1Iva = (precio, iva) => precio * iva;
let producto2Iva = (precio, iva) => precio * iva;
let producto3Iva = (precio, iva) => precio * iva;
let producto4Iva = (precio, iva) => precio * iva;




switch (prodictosSeleccionados) {
    case "1":
        alert( "el precio es de " + (producto1 + (producto1Iva(producto1, iva))))
        console.log(producto1 + (producto1Iva(producto1, iva)));
        break;
    case "2":
        alert( "el precio es de " + (producto2 + (producto2Iva(producto2, iva))))
        console.log(producto2 + (producto2Iva(producto2, iva)));
        break;
    case "3":
        alert( "el precio es de " + (producto3 + (producto3Iva(producto3, iva))))
        console.log(producto3 + (producto3Iva(producto3, iva)));
        break;
    case "4":
        alert( "el precio es de " + (producto4 + (producto4Iva(producto4, iva))))
        console.log(producto3 + (producto4Iva(producto3, iva)));
        break;
    default:
    break;
}