//condicionales

//existen 2 maneras para tomar desciones if/else.
//entre los parentesis va la condicion , el resultado de los parentesis devuelve un TRUE O UN FALSE
//si esto se cumple es decir si es true ejecuta el primero si es false ejecuta el ultimo.


//creamos una variable

let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad");

//ejemplo plataforma de STREAM y tiene restriccion de edad.
/*
>=18;
<Menor
<=menor o igual
== se utiliza solo para que sea igual
*/

//Si la condicion se cumple ejecuta la primera parte , si no ejecuta la segunda
if (edad>=18) {
    alert("Tienes acceso al catalogo de peliculas violentas");
} else {
    alert("Debe ser mayor de 18 años para acceder al catalogo");
}


