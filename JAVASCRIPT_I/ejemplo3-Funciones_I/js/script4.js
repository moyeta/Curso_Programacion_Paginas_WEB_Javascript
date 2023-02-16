// Variables EJE
var nombre='';
var primerApellido='';
var segundoApellido; // Práctica de abrir otro campo y recoger ese valor
var eMail='';

function autorizacion() {
    // Doy valor a las Variables
    nombre = document.getElementById('nombre').value;
    primerApellido = document.getElementById('apellido').value;
    eMail = document.getElementById('email').value;

    // Gestionamos las varibles #PROXIMAMENTE# ⛔👨‍🔧

    // Mostramos las Variables o sus interacciones
    document.getElementById('resultado').innerHTML =
    'AUTORIZADO ACCESO A: <br>' + nombre + ' ' + primerApellido +'<br>' +
    'Validado por el email: <br>' + eMail;
}