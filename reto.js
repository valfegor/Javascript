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

let numeros = 1;
let letras = 1;


const A1 = () => {
  if (letras == 11 && numeros == 1) {
    numero.innerHTML = "1";
    numeros = 2;
  } else if (letras == 11 && numeros > 1) {
    alert("Ya esta");
  }

  if (letras == 1) {
    letra.innerHTML = "A";
    letras = 2;
  } else if (letras > 1) {
    alert("Ya esta");
  }
};

const A2 = () => {
  if (letras == 11 && numeros == 2) {
    numero.innerHTML += "2";
    numeros = 3;
  } else if (letras == 11 && numeros > 2) {
    alert("Ya esta");
  } else if (letras == 11 && numeros < 2) {
    alert("Falta Numeros");
  } else if (letras == 2) {
    letra.innerHTML += "B";
    letras = 3;
  } else if (letras > 2) {
    alert("Ya esta");
  } else if (letras < 2) {
    alert("Falta Letras");
  }
};

const A3 = () => {
  if (letras == 11 && numeros == 3) {
    numero.innerHTML += "3";
    numeros = 4;
  } else if (letras == 11 && numeros > 3) {
    alert("Ya esta");
  } else if (letras == 11 && numeros < 3) {
    alert("Falta Numeros");
  } else if (letras == 3) {
    letra.innerHTML += "C";
    letras = 4;
  } else if (letras > 3) {
    alert("Ya esta");
  } else if (letras < 3) {
    alert("Falta Letras");
  }
};

const A4 = () => {
  if (letras == 11 && numeros == 4) {
    numero.innerHTML += "4";
    numeros = 5;
  } else if (letras == 11 && numeros > 4) {
    alert("Ya esta");
  } else if (letras == 11 && numeros < 4) {
    alert("Falta Numeros");
  } else if (letras == 4) {
    letra.innerHTML += "D";
    letras = 5;
  } else if (letras > 4) {
    alert("Ya esta");
  } else if (letras < 4) {
    alert("Falta Letras");
  }
};

const A5 = () => {
  if (letras == 11 && numeros == 5) {
    numero.innerHTML += "5";
    numeros = 6;
  } else if (letras == 11 && numeros > 5) {
    alert("Ya esta");
  } else if (letras == 11 && numeros < 5) {
    alert("Falta Numeros");
  } else if (letras == 5) {
    letra.innerHTML += "E";
    letras = 6;
  } else if (letras > 5) {
    alert("Ya esta");
  } else if (letras < 5) {
    alert("Falta Letras");
  }
};

const A6 = () => {
  if (letras == 11 && numeros == 6) {
    numero.innerHTML += "6";
    numeros = 7;
  } else if (letras == 11 && numeros > 6) {
    alert("Ya esta");
  } else if (letras == 11 && numeros < 6) {
    alert("Falta Numeros");
  } else if (letras == 6) {
    letra.innerHTML += "F";
    letras = 7;
  } else if (letras > 6) {
    alert("Ya esta");
  } else if (letras < 6) {
    alert("Falta Letras");
  }
};

const A7 = () => {
  if (letras == 11 && numeros == 7) {
    numero.innerHTML += "7";
    numeros = 8;
  } else if (letras == 11 && numeros > 7) {
    alert("Ya esta");
  } else if (letras == 11 && numeros < 7) {
    alert("Falta Numeros");
  } else if (letras == 7) {
    letra.innerHTML += "G";
    letras = 8;
  } else if (letras > 7) {
    alert("Ya esta");
  } else if (letras < 7) {
    alert("Falta Letras");
  }
};

const A8 = () => {
  if (letras == 11 && numeros == 8) {
    numero.innerHTML += "8";
    numeros = 9;
  } else if (letras == 11 && numeros > 8) {
    alert("Ya esta");
  } else if (letras == 11 && numeros < 8) {
    alert("Falta Numeros");
  } else if (letras == 8) {
    letra.innerHTML += "H";
    letras = 9;
  } else if (letras > 8) {
    alert("Ya esta");
  } else if (letras < 8) {
    alert("Falta Letras");
  }
};

const A9 = () => {
  if (letras == 11 && numeros == 9) {
    numero.innerHTML += "9";
    numeros = 10;
  } else if (letras == 11 && numeros > 9) {
    alert("Ya esta");
  } else if (letras == 11 && numeros < 9) {
    alert("Falta Numeros");
  } else if (letras == 9) {
    letra.innerHTML += "I";
    letras = 10;
  } else if (letras > 9) {
    alert("Ya esta");
  } else if (letras < 9) {
    alert("Falta Letras");
  }
};

const A10 = () => {
  if (letras == 11 && numeros == 10) {
    numero.innerHTML += "0";
    numeros = 11;
    alert("Trabajo finalizado");
  } else if (letras == 11 && numeros > 10) {
    alert("Ya esta");
  } else if (letras == 11 && numeros < 10) {
    alert("Falta Numeros");
  } else if (letras == 10) {
    letra.innerHTML += "J";
    letras = 11;
    alert("Excelente hemos finalizado");
  } else if (letras > 10) {
    alert("Ya esta");
  } else if (letras < 10) {
    alert("Falta Letras");
  }
};

//eventos
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