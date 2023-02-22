function calcular() {
    // Variables EJE
    var peso = parseFloat(calculoPeso.value);
    var altura = parseFloat(calculoAltura.value);

    // variable residual
    var imc = 0;
    var respuesta = document.getElementById('resultado');
    // Función del IMC
    imc = peso / (Math.pow(altura, 2));
    console.log('IMC: ' + imc);

    /**
     * Intervalos de IMC:
     * -> Menores o iguales a 18.5, por debajo de lo normal
     * -> Menor o igual a 24.9, estándar o saludable
     * -> Menor o igual a 29.9 sobre peso poco saludable
     * -> Mayor de 30 obesidad y transtorno
     */

    if (imc <= 18.5) {
        respuesta.innerHTML = 'Peso por bebajo de lo normal';
    } else if (imc <= 24.9) {
        respuesta.innerHTML = 'Peso estándar o saludable';
    } else if (imc < 30) {
        respuesta.innerHTML = 'Sobrepeso poco saludable';
    } else {
        respuesta.innerHTML = 'Obesidad. Transtorno! 🐷';
    }
}

function limpiar() {
    document.getElementById('limpiar').reset(); // Limpia campos y en este caso no admite el borrado del campo id="resultado" ojo! data-bs-dismiss
    document.getElementById('resultado').innerHTML = '';
}