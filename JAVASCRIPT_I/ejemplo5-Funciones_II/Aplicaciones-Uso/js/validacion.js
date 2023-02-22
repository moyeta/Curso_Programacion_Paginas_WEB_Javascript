// 1 Declaramos las variables
var nombre = "";
var apellidos = "";
var email = "";
var telefono = "";
var direccion = "";
/* var ciudad = ""; */
var codigoPostal = "";
var edad = "";
var dni = "";
var sexo = "";

// 2 Tratamiento de los datos
/*
                                El método addEventListener

    Como un elemento expectante, dentro del entorno de nuestro cliente (Navegador),
    a un evento o la interacción del usuario.
    ** Se trabaja directamente desde JavaScript y solo hace referencias al evento
    ** Sintaxis:
        Parte de una referencia, asociada al HTML y expectante a su presencia (primer parámetro),
        seguidamente se ejecutará la función asociada o indicada (segundo parámetro). Podremos encontrar
        de forma opcional redefinido por las variables TRUE o FALSE (tercer parámetro)

        Target.addEventListener('Tipo de Evento', funcion_a_lanzar, boolean)

*/

enviar.addEventListener('click', capturarForm);

function capturarForm() {
    nombre = document.getElementById('inputNombre').value;
    apellidos = document.getElementById('inputApellidos').value;
    email = document.getElementById('inputEmail').value;
    telefono = document.getElementById('inputTelefono').value ;
    direccion = document.getElementById('inputDireccion').value;
   /* ciudad = document.getElementById('inputCiudad').value; */
    codigoPostal = document.getElementById('inputCp').value;
    edad = document.getElementById('inputEdad').value;
    dni = document.getElementById('inputDni').value;
    sexo = document.getElementById('inputSexo').selectedIndex; /* El seleccionado a la hora de inyectar */

    validarDatos();
}

function exito() {
    swal('¡Enhorabuena! Datos enviados correctamente');
}

// Desgranamos las funciones
function validarDatos() {
    if (!(isNaN(nombre))) {
        mostrarError('inputNombre');
    } 
    if (apellidos=='') {
        mostrarError('inputApellidos');
    }
    if (direccion=='') {
        mostrarError('inputDireccion');
    }
    /* if (ciudad='') {
        mostrarError('inputCiudad');
    } */
    /*
    el método .test() compara la expresión regular con la variable, si cumple los parámetros de las expresión regular entonces == TRUE
    ESTRUCTURAS DE CONTROL (PATTERN)
    /^\ Incicio de Estructura
    {d} núm de dígitos
    /$ final de la expresión regular
    [A-Z][0-9] condiciones de intervalo de los caracteres y números
    ? Operador condicional
    */
    if (!(/^\d{5}$/.test(codigoPostal))) { // Trabajamos la forma inversa
        mostrarError('inputCp');
    }
    if (email=='') {
        mostrarError('inputEmail');
    }
    if (!(/^\d{9}$/.test(telefono))) {
        mostrarError('inputTelefono');
    }
    if ((isNaN(edad)) || edad=='') {
        mostrarError('inputEdad');
    }
    if (dni=='') {
        mostrarError('inputDni');
    }
    if (sexo==null || sexo==0) {
        mostrarError('inputSexo');
    }
}

function mostrarError(id) {
    document.getElementById(id).value = '⚠'; // Valores Añadidos
    /**
     * Métodos de llamada desde JavaScript a css, precisamente con el interés de mostrar cambios perceptivos
     * al usuario desde error hasta exito
     */
    document.getElementById(id).classList.add('is-invalid'); // "is-invalid"  Podemos añadir clases de otros framework 

    /**
     * mensaje al usuario
     */
    swal('Revise los campos');
}
