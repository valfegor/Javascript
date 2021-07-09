display = document.getElementById("display");
num1 = document.getElementById("uno");
num2 = document.getElementById("dos");
num3 = document.getElementById("tres");
num4 = document.getElementById("cuatro");
num5 = document.getElementById("cinco");
num6 = document.getElementById("seis");
num7 = document.getElementById("siete");
num8 = document.getElementById("ocho");
num9 = document.getElementById("nueve");
num0 = document.getElementById("cero");
sum = document.getElementById("sumar");
rest = document.getElementById("restar");
div = document.getElementById("dividir");
mult = document.getElementById("multiplicar");
clear = document.getElementById("clear");
punto = document.getElementById("punto");
mod = document.getElementById("modulo");
const mos1 = () => {
  numero = display.value += "1";
};

const mos2 = () => {
  display.value += "2";
};
console.log(display);

const mos3 = () => {
  display.value += "3";
};
const mos4 = () => {
  display.value += "4";
};
const mos5 = () => {
  display.value += "5";
};
const mos6 = () => {
  display.value += "6";
};
const mos7 = () => {
  display.value += "7";
};
const mos8 = () => {
  display.value += "8";
};
const mos9 = () => {
  display.value += "9";
};
const mos0 = () => {
  display.value += "0";
};
const limp = () => {
  display.value = "";
};
const suma = () => {
    display.value += "+";
}
const dividir = () => {
    display.value += "/"
}
const resta = () => {
    display.value += "-";
}

const multi = () => {
    display.value+="x"
}

const modu = () => {
    display.value+="%";
}

const punt = () => {
    display.value+=".";
}
num1.onclick = function () {
  mos1();
};

num2.onclick = function () {
  mos2();
};
num3.onclick = function () {
  mos3();
};
num4.onclick = function () {
  mos4();
};
num5.onclick = function () {
  mos5();
};
num6.onclick = function () {
  mos6();
};
num7.onclick = function () {
  mos7();
};
num8.onclick = function () {
  mos8();
};
num9.onclick = function () {
  mos9();
};

num0.onclick = function (){
    mos0();
}
sum.onclick = function (){
    suma();
}

rest.onclick = function () {
    resta();
}
div.onclick = function () {
    dividir();
}
mult.onclick = function (){
    multi();
}
clear.onclick = function () {
    limp();
};

mod.onclick = function () {
    modu();
}

punto.onclick =function(){
    punt();
}