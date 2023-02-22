function mensaje() {
    var miClave = inputClave.value;
    var eMail = inputEmail.value;

    if (miClave.length != 0 && eMail.length != 0) { // Famosos patter o estructuras de control, siendo muy útil el método .test
        document.getElementById('resultado').innerHTML=
        'Clave Correcta: Acceda a página principal, pulse para ingresar';
    } else {
        swal('Son necesarios clave y email')
    }
}

function limpiar() {
    document.getElementById('resultado').innerHTML=''
}

function secundaria() {
    location.href='Validaciones.html';

}