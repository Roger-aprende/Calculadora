let numeros = document.querySelectorAll('.number');
let inputRespuesta = document.querySelector('#input-respuesta');
let inputOperacion = document.querySelector('#input-operacion');


// const regex = /^(?!.*[-+*%]{2})[0-9]*$/;






// const regex = /^(?!.*[-+*%]{2})[0-9]+([-+*%][0-9]+)*$/;
// const regex = /^(?!.*[-+*%]{2})[a-zA-Z0-9\s]*[a-zA-Z0-9]*$/;
// const regex =/^(?!.*[-+*%]{2})[a-zA-Z0-9\s]*[a-zA-Z0-9]*$/;
// const regex = /^[^+*%\-]*$/g;
// const regex = /^[^+*%\-]*[0-9]+.*$/









let operadoresArray = ['+,-,*,%'];

numeros.forEach( numero =>{
    numero.addEventListener('click', writeInput);
});


let operadores = document.querySelectorAll('.operador');
operadores.forEach( operador =>{
    operador.addEventListener('click', writeInput);
});


//==================================
// =====  Funciones =======
//==================================

function writeInput(e){
    inputOperacion.value += e.target.innerHTML; 
    
    // if(regex.test(inputOperacion.value)){
    //     inputOperacion.value += e.target.innerHTML; 
    // }

    // else{
    //     inputOperacion.value[length - 1] = e.target.innerHTML; 
    // }
}

function reset(){
    inputOperacion.value = '';
    inputRespuesta.value = '';
}

function deleteWord(){
    inputOperacion.value = inputOperacion.value.slice(0,-1)
}

function result(){
    enteroDecimal = eval(inputOperacion.value) % 1;

    if(enteroDecimal !== 0){
        decimales = Number(inputRespuesta.value);
        inputRespuesta.value = decimales.toFixed(2);
    } 

    else{
        inputRespuesta.value = (eval(inputOperacion.value));
    }
}


// Matematica basica, si divides un numero por 1 siempre sera 0
// a menos que sea decimal