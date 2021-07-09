//arrow function

const suma = () =>{
    let num1 = parseFloat(prompt("Por favor Digite uno de los numeros"));
    let num2 = parseFloat(prompt("Por favor Digite uno de los numeros"));
    let resultado = num1+num2;
    alert(resultado);
    console.log(resultado);

}

const resta = () =>{
    let num1 = parseFloat(prompt("Por favor Digite uno de los numeros"));
    let num2 = parseFloat(prompt("Por favor Digite uno de los numeros"));
    let resultado = num1-num2;
    alert(resultado);
    console.log(resultado);

}

const Multiplicacion = () =>{
    let num1 = parseFloat(prompt("Por favor Digite uno de los numeros"));
    let num2 = parseFloat(prompt("Por favor Digite uno de los numeros"));
    let resultado = num1*num2;
    alert(resultado);
    console.log(resultado);

}

//la regla especifica de la division no se puede dividir por 0;

const Division = () =>{
    let num1 = parseFloat(prompt("Por favor Digite uno de los numeros"));
    let num2 = parseFloat(prompt("Por favor Digite uno de los numeros"));
    //luego de pedir los dos numeros
    if (num2===0) {
        alert("La division por 0 no esta permitida");
    }
    else{
        let resultado = num1/num2;
        alert(resultado);
        console.log(resultado);
    }
    

}

