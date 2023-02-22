// 1 Declaro las variables
var estiloBorde = false; // No va a tener borde, Una cosa es la declaración y otra la instanciación de la variable
var estiloColor = false;
var estiloSombra = false;

function borde() {
    if (estiloBorde == false) {
        document.getElementById('cuadrado').style.border = '3px solid #35393f'; /* #88939c */
        estiloBorde = true;
    } else {
        document.getElementById('cuadrado').style.border = 'none';
        estiloBorde = false;
    }
}

function color() {
    if (!estiloColor) { // La condición siempre parte de TRUE, no tiene que ver con la asignación de la variable
        document.getElementById('cuadrado').style.backgroundColor = 'pink';
        estiloColor = true;
    } else {
        document.getElementById('cuadrado').style.backgroundColor = '#2196f3';
        estiloColor = false;

    }
}

/* 
Ejercicio:
Utilizando la misma estructura de control de iteración, con el método .style,
para la sombra el método .className apuntando a la clase .sombra de nuestra hoja de estilos css
*/
function sombra() {
    if (!estiloSombra) {
        document.getElementById('cuadrado').className = 'sombra';
        /* estiloSombra = true;  */ // Aquí se cambia la funcionalidad del booleano
    } else {
        document.getElementById('cuadrado').className = null;
        /* estiloSombra = false; */ // Aquí se cambia la funcionalidad del booleano
    }
    // Saliendo de la condición y utilizando un cambio de varaible
    estiloSombra = (!estiloSombra); // estiloSombra se iguala al distinto del estiloSombra, a su contrario
                                  // No es lo mismo que estiloSombra != estiloSombra
}
