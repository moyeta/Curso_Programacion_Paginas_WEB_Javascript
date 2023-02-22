function inicio() {
    // Declaración de variables EJE
    var hoy = new Date();
    var h = hoy.getHours();
    var m = hoy.getMinutes();
    var s = hoy.getSeconds();

    var dia = hoy.getDate();
    var numeroDia = hoy.getDay();
    var mes = hoy.getMonth();
    var año = hoy.getFullYear();
    const nombreDia = [
        'domingo',
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
        'domingo',
      ];

    // Hacemos funcionar la Maquina Perfecta
    m = ponerCero(m);
    s = ponerCero(s);
    h = ponerMeridiem(h);

    document.getElementById('reloj').innerHTML = '🕑 ' + h + ':' + m + ':' + s;

    switch (mes) {
        case 0:
            mes = 'Enero';
            break;
        case 1:
            mes = 'Febrero';
            break;
        case 2:
            mes = 'Marzo';
            break;
        case 3:
            mes = 'Abril';
            break;
        case 4:
            mes = 'Mayo';
            break;
        case 5:
            mes = 'Junio';
            break;
        case 6:
            mes = 'Julio';
            break;
        case 7:
            mes = 'Agosto';
            break;
        case 8:
            mes = 'Septiembre';
            break;
        case 9:
            mes = 'Octubre';
            break;
        case 10:
            mes = 'Noviembre';
            break;
        case 11:
            mes = 'Diciembre';
            break;
        case 12:
            mes = 'Enero';
            break;

        default:
            mes = 'Error de Conexión';
            break;
    }
document.getElementById('hoy').innerHTML = dia + ' ' + mes + ' ' + año +'<br>'+'Hoy es <label style="color: red"><strong>' + nombreDia[numeroDia] + '</label></strong>';
// Redundancia de Funciones
/* 
Aparte de poder mostrar la redundancia de funciones, podemos ver la capacidad de los CallBack
setTimeout() con una función principal que no es otra que la de ejecutar una función tras un
periodo de tiempo determinado
    Sintaxis:
    argumento1: llama a la función a ejecutar en el tiempo acotado
    argumento2: tiempo que se ha acotado a la función en milisegundos, default 1 segundo

    setTimeout(function(){
        function callback/argumento1
    }, tiempo/argumento2)
*/

var t = setTimeout(function(){inicio()},1000); // Redunda la funcion inicio durante un segundo, POLIMORFISMO

}

// Maquina perfecta: ESTRUCTURA DE EJECUCIÓN PURA
// Funcion que genera una estructura que mimetizará con el arámetro
function ponerCero(i){
    if (i<10) {
        i = '0' + i;
    }
    return i;
}

// Ejercicio. Replicar la estructura de EJECUCION PURA para el parámetro horas y que defina en una condición
// si es AM/PM un sol o una luna
function ponerMeridiem(x) {
    if (x<=12) {
        x = 'AM 🌞 ' + x;
    } else {
        x = 'PM 🌜 ' + x;
    }
    return x; // No olvide sacar la variable que sustituye el parámetro
} 
