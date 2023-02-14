

// Variable EJE
var num1 = parseInt(window.prompt('Introduce tu primer número'));
var num2 = parseInt(window.prompt('Introduce tu segundo número'));

// FUNCIONES
function sumar(){
    var resultado = num1 + num2; // variable local
    swal('La suma es: '+resultado);
}
function restar(){
    swal('Su resta es: '+(num1-num2)); // variables globales
}
function multiplicar(num1, num2){ // Estructura definida y explícita de la función
    swal('La multiplicación es: '+(num1*num2)); // variables por parámetros
}
function dividir() {
    swal('La división es: '+(num1/num2));
}
