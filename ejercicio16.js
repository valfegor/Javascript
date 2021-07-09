//Variables globales

let datos = document.getElementsById('datos');




const nombreUsuario = (nombre) =>{
    alert(`bienvenido ${nombre}`)
}

nombreUsuario("Anthony");


//Eventos.

datos.onclick = function(){
    nombreUsuario();
}