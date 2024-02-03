
let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

condicionesIniciales();

function asignarextoUsuario(elemento,texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    //let parrafo = document.querySelector('p');
    //parrafo.innerHTML = 'Escoge un número del 1 al 100';
    return; //normalmente una función debe retornar algo, es una buena practica colocarlo asi la función no retorne nada
}

function verificarIntentos(){
    //alert ('click desde el boton');
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroUsuario);
    console.log(typeof(numeroUsuario)); // tipo de dato typeof
    console.log(intentos);
    if (numeroUsuario == numeroSecreto){
        asignarextoUsuario ('p', `Acertaste el número en ${intentos} ${(intentos ==1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (numeroUsuario > numeroSecreto){
            asignarextoUsuario ('p', 'El número secreto es menor');
        }else {
            asignarextoUsuario ('p', 'El número secreto es mayor');
        }
        limpiarCaja();
    }
    intentos ++;
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = "";
    return;
}

function condicionesIniciales(){
    //Indicar mensaje de intervalo de números
    asignarextoUsuario('h1', 'Juego del número secreto');
    asignarextoUsuario('p', 'Escoge un número del 1 al 10');
    //Generar número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el número de intentos
    intentos = 1;
}

function reiniciarJuego (){
    //limpiar caja
    limpiarCaja();
    
    condicionesIniciales();
    //Deshabilitar el bóton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    
}

function generarNumeroSecreto(){
     let numeroGenerado = Math.floor(Math.random()*10)+1;
     //Numero generado esta en la lista
     console.log(numeroGenerado); 

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarextoUsuario('p', 'Ya se sortearon todos los números posibles');
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
    
         }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
         }
    }

     
     
}

