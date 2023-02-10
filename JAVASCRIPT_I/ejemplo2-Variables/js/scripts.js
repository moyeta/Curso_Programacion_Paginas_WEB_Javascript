/* ⛏ Creación y 📢 declaración de variables:

Sintaxis:
var minisculaNombre = "" ASIGNAMOS A LA VARIABLE CON EL NOMBRE: minusculaNombre un valor
Declaración:
a) explicita:
var minusculaNombre;
minusculaNombre = "";
b) implicita:
var minusculaNombre = ""
*/

var nombre = 'Moyeta';
swal({
    title: 'Me llamo ' + nombre, // Título
    text: "Nombre de Pila", // Texto del botón
    icon: "info", // Tipos de iconos [success, warning, info...]
    button: 'Un placer teneros aquí!'

});

alert('Me llamo: ' + nombre);