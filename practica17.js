let datos = document.getElementById("datos");

let nombre = document.getElementById("nombre");


//funciones

const nombreUsuario= () =>{
    let nombreusuario = prompt("Ingresa tu nombre");
    //nombre es el div
    nombre.innerHTML="Bienvenido/a"+nombreusuario;
    console.log(nombre);
}

//eventos

datos.onclick = function (){
    nombreUsuario();
}