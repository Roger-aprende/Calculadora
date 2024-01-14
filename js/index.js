const botonesNumeros = document.querySelectorAll('.numero');
const signos = document.querySelectorAll('.operador');

const displayOperacion = document.getElementById('input-op');
const displayResult = document.getElementById('input-re');
const botonIgual = document.getElementById('igual');



signos.forEach(element =>{
    element.addEventListener('click', ()=>{
        displayOperacion.value += element.textContent
    })
});


botonesNumeros.forEach(element =>{
    element.addEventListener('click' , () =>
    displayOperacion.value += element.innerHTML

    )    
});

botonIgual.addEventListener('click',() =>{
    displayResult.value =  eval(displayOperacion.value)
});


function borrarC(){
    displayOperacion.value = '';
    displayResult.value = '';
}