// Variables EJE
var nombre='';
var primerApellido='';
var segundoApellido;
var eMail='';

function autorizacion() {
    // Doy valor a las Variables
    nombre = document.getElementById('nombre').value;
    primerApellido = document.getElementById('apellido').value;
    eMail = document.getElementById('email').value;

    // Gestionamos las varibles #PROXIMAMENTE# ⛔

    // Mostramos las Variables o sus interacciones
    document.getElementById('resultado').innerHTML =
    '';
}