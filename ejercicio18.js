//ESTO ES EL BOTON
let datos = document.getElementById("datos");

//BOTON A1

let btna1 = document.getElementById("btna1");

//boton B2

let btna2 = document.getElementById("btna2");

//esto es el DIV
let letra = document.getElementById("letra");
//Esto es el div
let numero = document.getElementById("numero");

//funciones

const nombreUsuario= () =>{
    let nombreusuario = prompt("Ingresa tu nombre");
    //nombre es el div
    nombre.innerHTML="Bienvenido/a"+nombreusuario;
    console.log(nombre);
}


const a1 = () =>{
letra.innerHTML = "A";
}

const b2 = () =>{
letra.innerHTML+="B";
}


//eventos

datos.onclick = function (){
    nombreUsuario();
}


btna1.onclick = function (){
a1();
}


btna2.onclick = function (){
b2();
}