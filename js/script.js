//inicio del proceso

//funcion general
function general() {
    //imprimir en consola opciones para debug
    console.log("Las opciones corresponden a piedra (0), papel(1) y tijera(2)");

    //ingreso del limite de jugadas
    let oportunidades = parseInt(prompt("Ingrese cantidad de veces que desea jugar."));

    //contador que almacena los ciclos
    let contador = 0;

    //contadores de las jugadas de usuario y maquina
    let contadorUsuario = 0;
    let contadorMaquina = 0;

    //iterar las jugadas hasta el limite asignado por el usuario
    while (contador < oportunidades) {

        //Resultado de cada juego
        let ganador = estadisticasGanador(jugadaUsuario(), resultadoMaquina());
        console.log(`El resultado de este juego es: ${ganador}`);

        //contador aumentado
        contador++;

        //establecer comparación juego
        if (ganador == "Gana usuario") {
            contadorUsuario++;
        }
        if (ganador == "Gana maquina") {
            contadorMaquina++;
        }
    }

    //comparador de contadores de jugadas
    //gano usuario
    if (contadorUsuario > contadorMaquina) {
        console.log("Winner Winner, Chicken Dinner! Has ganado a la maquina!!");
        alert("Winner Winner, Chicken Dinner! Has ganado a la maquina!!");
    }
    //gano maquina
    else if (contadorMaquina > contadorUsuario) {
        console.log("Game Over! Vuelve a intentarlo, perdiste.");
        alert("Game Over! Vuelve a intentarlo, perdiste.");
    }
    //empate
    else {
        console.log("Empataste! Casi lo consigues, solo es una maquina, puedes ganar.");
        alert("Empataste! Casi lo consigues, solo es una maquina, puedes ganar.");
    }
}

//funcion que establece jugada del usuario
function jugadaUsuario() {
    //ingresar jugada del usuario
    let jugada = prompt("Ingrese piedra, papel o tijera.");

    switch (jugada) {
        case "piedra":
            return piedra = 0;
            break;
        case "papel":
            return papel = 1;
            break;
        case "tijera":
            return tijera = 2;
            break;
    }
}

//funcion que establece jugada de la maquina
function resultadoMaquina() {
    //crear jugada de la maquina con funcion Math.random
    switch (Math.floor(Math.random() * 3)) {
        //convertir jugada numerica a cadena
        case 0:
            var piedra = 0;
            return piedra;
            break;
        case 1:
            var papel = 1;
            return papel;
            break;
        case 2:
            var tijera = 2;
            return tijera;
            break;
    }
}

//funcion que compara las jugadas de la maquina y el usuario
function estadisticasGanador(jugada, maquina) {

    //variable para almacenar resultado final de la jugada
    let resultado = "";

    //debug de la jugada
    let mostrarResultadoJugada = `usuario eligio ${jugada} / maquina eligio ${maquina}`;

    //define cuando gana usuario
    if (maquina == 0 && jugada == 1 || maquina == 1 && jugada == 2 || maquina == 2 && jugada == 0) {
        console.log(mostrarResultadoJugada)
        resultado = "Gana usuario";
    }

    //define cuando gana maquina
    else if (maquina == 1 && jugada == 0 || maquina == 2 && jugada == 1 || maquina == 0 && jugada == 2) {
        console.log(mostrarResultadoJugada)
        resultado = "Gana maquina";
    }

    //declara un empate
    else if (maquina == jugada) {
        console.log(mostrarResultadoJugada)
        resultado = "Empate!";
    }

    //declara un valor que no corresponde al juego
    else {
        console.log(`usuario ingreso ${jugada}`);
        alert("Valor incorrecto, por favor ingrese nuevamente su elección (piedra, papel o tijera)");
    }
    return resultado;
}