// Declarar las variables EJE
var contador=0;
var total=0;
function incrementarClick() {
    // Variable funcional incrementa el contador en una unidad con el operador lógico ++
    // Función anidada en otra REDUNDANCIA
    sumarClick(++contador);
    venta();
}

function borrarContador() {
    contador=0;
    total=0;
    sumarClick(contador);
    document.getElementById('resultado').innerHTML = total;
}

// Funcion con parámetro
function sumarClick(contador) {
    document.getElementById('nº_Click').innerHTML = contador;
}

function venta() {
    total = (contador*14.95);
    document.getElementById('resultado').innerHTML = 'Venta Total: ' + total + '€';
}