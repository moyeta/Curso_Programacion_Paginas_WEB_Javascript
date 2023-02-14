/*
                *************
                LAS FUNCIONES
                *************

    Entendidas y definidas como declaraciones de expresiones
    Palaba clave reservada function
    seguida y definida:
        1. Nombre de la función () declaramos la misma
        2. Lita de parámetros (que la definen, entre paréntesis, separados por coma)
        3. Las expresiones en JavaScript van a generar una acción en la función
        controlada por su ámbito (la acotación de {})
    Sintaxis:
        function nombreFuncion(a, b, c){
            dentro del ámbito de la funcion podremos declarar expresion de acciones...
        }

        <<< AMBITOS DE LA VARIABLE >>>
        🎈 Variables Globales
        Características:
        -> Cuando podemos acceder a su valor o conenido desde cualquier punto de la página donde
        reside su script
        -> Para poderlas definir como globales, tendrán que ser declaradas fuera de cualquier otro
        procedimiento o función
        -> cargan de manera permanente en la memoria adyacente, actúa directamente en el motor
        de carga de la página
        -> Recomendaciones [Usos y abusos]: Uso de variables globales cuando exista la necesidad;
        indice de compartición de dicha variable es transversal a varias funciones
        Ejemplo:
        var global = 0 [variable Global];
        -> Las variables locales solo podrán acceder dentro del ámbito de su función

        function lolaFLores(guitarrista, palmeros){ [funcion nombre] + [(parametros)]
            global = guitarristas + palmeros
        }

        lolaFLores(2+4)
*/
var nombre = window.prompt('Introduce tu nombre'); // variable global
function saludar() {
    swal('Hola! Bienvenido ' + nombre);
}

        /*
        🔄 Variables locales
        Características:
        -> Aquellas que son definidas dentro del entorno de la propia función
        -> Su carga adyacene se genera solamente en la propia ejecución de la función
        -> Una vez ejecutada, se desaloja de la memoria ganando eficiencia 
        
        */
function despedir() {
    var apellido = 'Moya';
    swal('Adios alma de cántaro! ' + nombre + ' ' + apellido);
}

/*
¿Puede la funcion saludar utilizar la variable apellido?
*/