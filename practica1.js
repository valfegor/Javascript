//Ejercicio de practica JS


let saludo = prompt("Ingresa por favor un saludo");


//el pipeline significa O el operador
//siempre se debe repetir cual es la variable.
//una de las dos opciones se debe cumplir
//si se cumple alguna de estas devuelve un true
//al devolver un true.
//cualquier opcion que de TRUE entra al bloque de codigo.
//&& Todas las opciones deben ser true , si alguna es false nunca va a entrar.
//transforma el saludo a miniscula.
saludo = saludo.toLowerCase();

//si deseo transformar el saludo a mayuscula
/* 
saludo = saludo.toUpperCase();
*/

if (saludo === "hola" || saludo === "que tal") {
    alert("Bien gracias por saludar");
} else {
    alert("Que mal , saluda primero");
}



//Ejercicio donde tenemos que ingresar un pueblo o una ciudad y debe responde la app
//con el departamento
//ejemplo armenia = armenia responde pertenece al quindio.

//variable -if/else
//4 ciudades - 4 departamentos.

//zipaquira pertenece a tal

