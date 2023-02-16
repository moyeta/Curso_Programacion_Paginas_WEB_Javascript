

function hora() {
    var fecha = new Date();
    document.getElementById('resultado').innerHTML =
    'Son las ' + fecha.toLocaleTimeString();
}

function cierre() {
    document.getElementById('resultado').innerHTML = '';
}