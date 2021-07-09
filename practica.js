//Ejercicio donde tenemos que ingresar un pueblo o una ciudad y debe responde la app
//con el departamento
//ejemplo armenia = armenia responde pertenece al quindio.

//variable -if/else
//4 ciudades - 4 departamentos.

//zipaquira pertenece a tal


alert("Bienvenido");

const departamentos = () => {
    let departamento = prompt("Bienvenido por favor seleccione un departamento Amazonas , Antioquia ,Arauca , Atlántico");

    departamento=departamento.toLowerCase();

    if (departamento==="amazonas") {
        alert("El departamento seleccionado fue Amazonas");
        document.write("Leticia , Puerto Nariño , La chorrera , El encanto");
    }
    else if(departamento==="antioquia"){
        alert("El departamento seleccionado fue Antioquia");
        document.write("Medellin , Envigado , Bello , Rionegro");
    }
    else if(departamento==="arauca"){
        alert("El departamento seleccionado fue Arauca");
        document.write("Arauquita , Ciudad de Cravo Norte , Ciudad de Fortul , Ciudad de Saravena");
    }
    else if(departamento==="atlantico"){
        alert("El departamento seleccionado fue Atlantico");
        document.write("Barranquilla , Baranoa , Campo de la Cruz , Malambo");
    }
    else{
        alert("Mi viejo no es una opcion valida revise nuevamente");
    }

}

departamentos();
