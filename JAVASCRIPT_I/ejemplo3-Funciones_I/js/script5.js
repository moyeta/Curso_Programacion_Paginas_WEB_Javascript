function mensaje() {
    // Recogida de datos tradicional
    var miClave = document.getElementById('clave').value;
    // Recogida actual
    var eMail = email.value; // => Nombre_del_id.value
    
// Mostramos las Variables o sus interacciones
document.getElementById('resultado').innerHTML =
'Bienvenido al usuario: ' +'<br>' + eMail + '<br>' +
'Pulse para Ingresar';  
}

function limpiar() {
    document.getElementById('resultado').innerHTML ='';
}

function eventoSecundario() {
    window.print();
    /* location.href='ejercicio4-Value.html' localizar una pagina en concreto */
    /* location.href='https://google.es' */
}
