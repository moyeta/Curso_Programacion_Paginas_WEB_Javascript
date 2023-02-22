function presionar() {
    // Variable EJE
    var fecha = new Date();
    var dia = fecha.getDay();
    // variables residuales
    var menu = '';

    switch (dia) {
        case 0:
            menu = 'Cocido Madrileño Completo';
            break;
        case 1:
            menu = 'Cerrado por descanso del personal';
            break;
        case 2:
            menu = 'Alubiones del Cantábrico';
            break;
        case 3:
            menu = 'Judiones a la Madrileña';
            break;
        case 4:
            menu = 'Cocido Montañés';
            break;
        case 5:
            menu = 'Potage Asturiano';
            break;
        case 6:
            menu = 'Salmorejo Cordobés';
            break;

        default:
            menu='Error de Conexión!'
            break;
    }
// Seleccionada la variable que define la condición del switch (getDay), muestro el resultado
document.getElementById('resultado').innerHTML = 'El menú del día es: ' + menu;


}