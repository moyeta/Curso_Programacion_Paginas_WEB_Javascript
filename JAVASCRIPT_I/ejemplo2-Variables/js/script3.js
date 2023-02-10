// Declarando las Variables -eje-

var nombre;
var apellidos;
var edad;

// Asignación
nombre = window.prompt('Introduce un nombre');
apellidos = window.prompt('Introduce tu primer apellido');
edad = window.prompt('Introduce tu edad');

// Muestro la entrada de las variables
document.write('<h2>Bienvenido: </h2>'+nombre+' '+ apellidos+ '<br>'+'con edad: '+edad+' años');

// Ejercicio, desde un console log repetir la misma estructura que en el document.write

console.log('Bienvenido: \n'+nombre+' '+ apellidos+ '\ncon edad: '+edad+' años'+' 🧔')
