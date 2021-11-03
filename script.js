let nombre = prompt ('Ingrese su nombre:');
let apellido = prompt ("Ingrese su apellido:");
let edad = prompt("Ingrese su edad:");
let suNombre  =   " "  +  "Bienvenido "  +  " "  +  nombre + " " + apellido ;


if ((nombre === "") || (apellido === "") || (edad === "")) {
    console.log ("Error al ingresar los datos");
} else {
    alert(suNombre);
    console.log ("Bienvenido a Java Scrip");
} 