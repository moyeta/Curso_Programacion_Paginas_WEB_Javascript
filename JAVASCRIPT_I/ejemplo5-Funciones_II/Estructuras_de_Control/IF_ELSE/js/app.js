/**
 * Cálculo del crédito
 * crt = crédito*rédito*tiempo
 * 
 * Partiendo de las siguientes condiciones que ofrece esta empresa de créditos: Micro-créditos
 * Definimos:
 * a. Tiempo:
 *  - a 24 meses el tipo de interés será del 15%
 *  - a 60 meses el tipo de interés será del 10%
 *  - a partir de 60 meses el tipo de interés será del 8%
 */

function calcular() {
    // Variables EJE
    var tiempo = parseFloat(window.prompt('Introduce el tiempo a pagar cómodamente: '));
    var capital = parseFloat(window.prompt('Introduce lo que vale tu ilusión: '));
    var interes = 0; // VARIABLE CLAVE. Asignamos número pero sin valor, variable tipada

    // variable sucedanea
    var mordida = 0;

    // Desarrollamos el análisis de las varibles, estructura de control
    if (tiempo <= 24) {
        interes = 0.15;
    } else if(tiempo <= 60){
        interes = 0.1;
    } else {
        interes = 0.08;
    }

    var pago = ((capital*interes)/tiempo);
    document.getElementById('resultado').innerText =
    'Credito solicitado: ' + capital + ' €\n' +
    'Tipo de Interés: ' + (interes*100) + ' %\n' +
    'Tiempo a pagar: ' + (tiempo) + ' meses\n' +
    'Total a pagar cómodamente: ' + pago + ' €/mes';

    var mordida = pago*0.03; // Abono a CCAA
    console.log('Importe por Asesoramiento: '+mordida);
}

// Revisar para Imprimir