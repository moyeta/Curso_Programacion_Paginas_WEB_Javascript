

function genero() {
    var sexo = window.prompt('Cuál es tu genero definido? ');

    switch (sexo.toLocaleLowerCase()) { /* Pasará la variable sexo siempre a minúscula */
        case 'hombre':
            // Sentencias
            swal('Estás dentro del colectivo heterosexual');
            break;
        case 'mujer':
            swal('Estás dentro del colectivo heterosexual');
            break;
        case 'transgenero':
            swal('Estás dentro del colectivo homosexual');
            break;
        case 'fluido':
            swal('Estás dentro del colectivo pansexual');
            break;
        case 'binario':
            swal('Estás dentro del colectivo homosexual');
            break;
        default:
            swal('Perteneces a otro colectivo no identificado aquí')
            break;
    }

}