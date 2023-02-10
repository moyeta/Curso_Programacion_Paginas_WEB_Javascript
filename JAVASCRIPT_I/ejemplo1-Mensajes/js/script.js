/* Comentarios */

// Comentario simple

/**             ========
 *              MENSAJES
 *              ========
 *      Conatos, llamadas, información,... al usuario
 */

/* 1 Alertas 
Sintaxis:
    alert('(parámetros) texto, cadena de caracteres, frases...'+variables);
*/

/* 1.1 Alertas + microServicioes (Framework)
1 Instala con inyección de su scipt, un conjunto de librerías, de estética y proyección (alert)
2 script src="->librerías" dentro del head, donde sustituye las directivas que hemos definido en el script
*/
swal({
    title: "Bienvenidos a un Alert en condiciones!", // Título
    text: "SWEET ALERT", // Texto del botón
    icon: "success", // Tipos de iconos [success, warning, info...]
    button: 'Gracias y Funcionando'

  }); // 2 CICLO

/*
2 (Backstage),
Llamadas transversales
SIntaxis:
console.log('(parámetros) textos, cadenas de caracteres,... frases'+variables);
*/

/* alert('Bienvenidos a mi primer Script'); Comentado para que no interfiera en la ejecución */
console.log(3+2);
console.log('hola');
// Conclusión, en el momento que detecta números, accedemos literalmente a todos operadores matemáticos (+, -, *, /)
console.log(2+2+8+'adios'+(5+3+5)); //concatenación después del string, se evita forzando la operación entre parentesis
// Cuando haya una variable entre un operador que no sean numéricas, obien, variables numéricas con otras, ese elemento
// será o bien + CONCATENADOR

/*
3 Mensajes Escritos
Sintaxis:
document.write('(parámetros) textos, cadenas de caracteres,... frases'+variables);
*/
document.write('<h3>HOLA! Bienvenidos a mi primer script dentro de mi página </h3>'); // Etiquetas dentro del mensaje <h2>