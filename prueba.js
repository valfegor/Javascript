let numero = document.getElementById("numero");

let letra = document.getElementById("letra");

let btna1 = document.getElementById("btna1");

let btna2 = document.getElementById("btna2");

let btna3 = document.getElementById("btna3");

let btna4 = document.getElementById("btna4");

let btna5 = document.getElementById("btna5");

let btna6 = document.getElementById("btna6");

let btna7 = document.getElementById("btna7");

let btna8 = document.getElementById("btna8");

let btna9 = document.getElementById("btna9");


let numeros = 0;
let letras = 1;

const A1 = () =>{
    if(letra.innerHTML==="ABCDEFGHIJ" ){
        numero.innerHTML="1";
    }
    else if(letra.innerHTML==""){
        letra.innerHTML="A";
    }
    else if(numero.innerHTML==="12345678910"){
        alert("No puede pulsar la misma tecla");
    }
    else{
        alert("Ya esta");
    }
    
};

const A2 = () =>{
    if(letra.innerHTML==="A"){
        letra.innerHTML += "B";
    }
    else if(letra.innerHTML==="ABCDEFGHIJ" && numero.innerHTML==="1"){
        numero.innerHTML+="2";
    }
    else if(letra.innerHTML==="ABCDEFGHIJ"){
        alert("Faltan letras");
    }
    else if(numero.innerHTML==="12"){
        alert("faltan numeros");
    }
    else{
        alert("Ya esta");
    }
}

const A3 = () =>{
    if(letra.innerHTML==="AB"){
        letra.innerHTML += "C";
    }
    else if(letra.innerHTML==""){
        alert("No es posible utilizar esa tecla");
    }
    else if(letra.innerHTML=="ABCDEFGHIJ" && numero.innerHTML=="12"){
      numero.innerHTML+="3";
    }
    else if(letra.innerHTML==="ABCDEFGHIJ"){
        alert("Faltan letras");
    }
    else{
        alert("Ya esta");
    }
}

const A4 = () =>{
if(letra.innerHTML==="ABC"){
    letra.innerHTML += "D";
}
else if(letra.innerHTML===""){
    alert("No puedes usar esa tecla antes de la secuencia");
}
else if(letra.innerHTML==="ABCDEFGHIJ" && numero.innerHTML==="123"){
    numero.innerHTML+="4";
}
else if(letra.innerHTML=="ABCDEFGHIJ"){
    alert("Faltan letras");
}
else{
    alert("Ya esta");
}

}


const A5 = () =>{
if (letra.innerHTML=="") {
    alert("No se puede pulsar esa tecla antes de la secuencia");
}
else if(letra.innerHTML=="ABCD"){
letra.innerHTML+="E";
}
else if (letra.innerHTML=="ABCDEFGHIJ" && numero.innerHTML =="1234"){
    numero.innerHTML+="5";
}
else if(letra.innerHTML=="ABCDE"){
    alert("Faltan letras");
}
else{
    alert("Ya esta");
}

}

const A6 = () =>{
    if (letra.innerHTML=="") {
        alert("No se puede pulsar esa tecla antes de la secuencia");
    }
    else if(letra.innerHTML=="ABCDE"){
    letra.innerHTML+="F";
    }
    else if (letra.innerHTML=="ABCDEFGHIJ" && numero.innerHTML =="12345"){
        numero.innerHTML+="6";
    }
    else if(letra.innerHTML=="ABCDEFGHIJ"){
        alert("Faltan letras");
    }
    else{
        alert("Ya esta");
    }
}

const A7 = () =>{
    if (letra.innerHTML=="") {
        alert("No se puede pulsar esa tecla antes de la secuencia");
    }
    else if(letra.innerHTML=="ABCDEF"){
    letra.innerHTML+="G";
    }
    else if (letra.innerHTML=="ABCDEFGHIJ" && numero.innerHTML =="123456"){
        numero.innerHTML+="7";
    }
    else if(letra.innerHTML=="ABCDEFGHIJ"){
        alert("Faltan letras");
    }
    else{
        alert("Ya esta");
    }
}

const A8 = () =>{
    if (letra.innerHTML=="") {
        alert("No se puede pulsar esa tecla antes de la secuencia");
    }
    else if(letra.innerHTML=="ABCDEFG"){
    letra.innerHTML+="H";
    }
    else if (letra.innerHTML=="ABCDEFGHIJ" && numero.innerHTML =="1234567"){
        numero.innerHTML+="8";
    }
    else if(letra.innerHTML=="ABCDEFGHIJ"){
        alert("Faltan letras");
    }
    else{
        alert("Ya esta");
    }
}

const A9 = () =>{
    if (letra.innerHTML=="") {
        alert("No se puede pulsar esa tecla antes de la secuencia");
    }
    else if(letra.innerHTML=="ABCDEFGH"){
    letra.innerHTML+="I";
    }
    else if (letra.innerHTML=="ABCDEFGHIJ" && numero.innerHTML =="12345678"){
        numero.innerHTML+="9";
    }
    else if(letra.innerHTML=="ABCDEFGHIJ"){
        alert("Faltan letras");
    }
    else{
        alert("Ya esta");
    }
}

const A10 = () =>{
    if (letra.innerHTML=="") {
        alert("No se puede pulsar esa tecla antes de la secuencia");
    }
    else if(letra.innerHTML=="ABCDEFGHI"){
    letra.innerHTML+="J";
    }
    else if (letra.innerHTML=="ABCDEFGHIJ" && numero.innerHTML =="123456789"){
        numero.innerHTML+="10";
    }
    else if(letra.innerHTML=="ABCDEFGHIJ"){
        alert("Finalizaste la secuencia");
    }
    else{
        alert("Ya esta");
    }
}




btna1.onclick = function (){
    A1();
}

btna2.onclick = function (){
    A2();
}

btna3.onclick = function (){
    A3();
}

btna4.onclick = function (){
A4();
}

btna5.onclick = function (){
    A5();
}

btna6.onclick = function (){
    A6();
}

btna7.onclick = function (){
    A7();
}

btna8.onclick = function (){
    A8();
}

btna9.onclick = function (){
    A9();
}

btna10.onclick = function (){
    A10();
}