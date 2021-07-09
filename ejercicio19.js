let operaciones = document.getElementById("datos");


console.log(operaciones);

const ope=()=>{
    op=parseInt(prompt("Bienvenido por favor seleccione 1. suma 2.resta 3.multiplicacion 4.division"))

    if(op!==1 && op!==2 && op!==3 && op!==4){
        alert("Le indique que debe seleccionar una opcion correcta");
    }
    let numero1 = parseFloat(prompt("Digite por favor el primer numero"));
    let numero2 = parseFloat(prompt("Por favor digite el segundo numero"));
    let resultado=0;
    if(op===1){
        alert("Bienvenido mijo a realizar sumitas");
        resultado=numero1+numero2;
        return document.write(`el resultado de su suma es ${resultado}`)
    }
    if(op===2){
        alert("Bienvenido mijo a realizar restas");
        resultado=numero1-numero2;
        return document.write(`el resultado de su resta es ${resultado}`)
    }
    if(op===3){
        alert("Bienvenido mijo a realizar multiplicaciones");
        resultado=numero1*numero2;
        return document.write(`el resultado de su multiplicacion es ${resultado}`)
    }
    if(op===4){
        alert("Bienvenido mijo a realizar divisiones");
        if(numero1===0||numero2===0){
        return alert("No se puede no sea pendeja");
        }
        else{
            resultado=numero1/numero2;
            return document.write(`el resultado de su division es ${resultado}`)
        }

    }

}

console.log(ope);

console.log(operaciones);


operaciones.onclick=function(){
    ope();
}