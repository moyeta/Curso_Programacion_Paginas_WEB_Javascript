/*
Cómo método su sintaxis: .getElementById('nombreId')
Definido como LA PROYECCIÓN DE UN ELEMENTO QUE CONTENDRÁ LA DEFINICIÓN
QUE TRASLADA EL id
EN definitiva poder manipular u obtener información de un elemento y su
contenido dentro del DocType
id- referenciador que html para conectar el documento desde otros entornos

*/

/*
Objeto Math integrado(metalenguaje de js), permitirá realizar operaciones matemáticas en js.
(Math es un objeto global de js, con una característica que lo diferencia de otros, es estático y además
    no podrá instanciar objetos) trbajará como otros métodos hacia las clases
 */

function funcionesMath() {
    document.getElementById('resultado').innerHTML =
        '<label style="color: red"> Logaritmo: ' + Math.log(1000) + '</label>' + '<br>' + // Dentro de la etiqueta cambiamos colores en html
        '<label style="color: blue"> Exponencial: ' + Math.exp(8) + '</label>' + '<br>' +
        '<label style="color: yellow">Raiz Cuadrada: ' + Math.sqrt(9) + '</label>' + '<br>' +
        '<label style="color: orange">Potencia de Base 4 y exponente 8: ' + Math.pow(4, 8) + '</label>' + '<br>' + // Base, exponente
        '<label style="color: yellowgreen">Valor Absoluto: ' + Math.abs(-6586) + '</label>' + '<br>' +
        'Redondeo Medio: ' + Math.round(6.3458) + '<br>' +
        'Redondeo al Alza: ' + Math.ceil(6.3458) + '<br>' +
        'Redondeo a la Baja: ' + Math.floor(6.3458) + '<br>' +
        'Random o Semilla: ' + Math.random() + '<br>' +
        'Random del 1 al 10: ' + Math.random(1) * 10 + '<br>' +
        'Valores Máximos: ' + Math.max(5, 8, 9, 2, 1, 6) + '<br>' +
        'Valor mínimo: ' + Math.min(5, 8, 9, 2, 1, 6) + '<br>' +
        'Valor del número e: ' + Math.E + '<br>' +
        'Valor del número pi: ' + Math.PI + '<br>' +
        'Coseno de PI (Anidando un método en otro): ' + Math.cos(Math.PI);

}

/*
Funciones de caracteres String, de uso principal para las representaciones o manipulaciones de una secuencia
de caracteres. Siendo muy útil que los caracteres, puede estar todo definido como string/caracteres
y almacenar datos
*/

function funcionesString() {
    // Variables locales, concepto de objeto frente a ejecución de un determinado metodo
    
    var texto = 'JAVASCRIPT Estructura de Cadena de Texto (6)'
    document.getElementById('resultado').innerHTML =
       '<label style="color: yellow">minúsculas: ' + texto.toLocaleLowerCase() + '</label>' + '<br>' +
       '<label style="color: orange">MAYUSCULAS: ' + texto.toLocaleUpperCase() + '</label>' + '<br>' +
       '<label style="color: red">Longitud de la Cadena de Texto: ' + texto.length + '</label>' + '<br>' +
       'Valor del UNICODE: ' + texto.charCodeAt(texto.indexOf('J')) + '<br>' +
       // Llamamos a un objeto String, al igual que a Math 
       'Unicode: ' + String.fromCharCode(960)
}

/*
Objeto Date, integrado en js, y nos ofrece y almacena las fechas, horas,..., y provee
de metodo para manejarlos, ed como Math.metodos(), esa característica estática de Math, no 
se producirá aquí
Sintaxis:
var fecha = new Date() -> Cada vez que invoco, llamo, instancio la variable fecha, me asigna automáticamente
un objeto definido por su metodo; dicho objeto se presenta súbitamente y desaparece súbitamente
*/

function funcionesDate(){
    var fecha = new Date();
    const nombreDelDiaSegunFecha = [
        'domingo',
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
        'domingo',
      ]
    document.getElementById('resultado').innerHTML =
    'Fecha: ' + fecha.toLocaleDateString() + '<br>' +
    'Hora: ' + fecha.toLocaleTimeString() + '<br>' +
    '<label style="color: orange">Minutos: ' + fecha.getMinutes() + '</label>' + '<br>' +
    'Segundos: ' + fecha.getSeconds() + '<br>' +
    'Mes: ' + fecha.getMonth() + '<br>' + //? El primer elemento siempre es el 0 (0 enero, 1 febrero...)
    'Día de la semana: ' + fecha.getDay()  + ' que es ' + fecha.getVarDate + '<br>' +
    'Día del mes: ' + fecha.getDate();
}

