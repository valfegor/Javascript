//condicional SWITCH.


let nombre = prompt("Bienvenido digite su nombre");

//todos los datos que recibimos por parte del usuario es un string
let edad = prompt("Digite por favor su edad");

parseInt(edad);

switch (edad>=18) {
    case "18":
        alert("Tienes acceso al catalogo de peliculas violentas");
        //si no tiene un break sigue revisando
        break;

    default:
        alert("Debes ser mayor de 18 años para acceder al catalogo");
        break;
}

