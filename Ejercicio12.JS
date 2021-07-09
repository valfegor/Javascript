//ejemplo SWITCHFUNCIONAL
//El switch evalua los casos
//el switch solo funciona si el mensaje a mostrar es diferente.

let nombre = prompt("Ingresa tu nombre");

let color = prompt("Ingresa tu color favorito");

switch (color) {
    case "amarillo":
        alert("Eres una persona alegre");
        break;
    case "verde":
    alert("Eres una persona saludable");
    break;
    case "azul":
    alert("Eres una persona tranquila");
    break;

    default:
        alert("Por favor ingresa un color");
        break;
}