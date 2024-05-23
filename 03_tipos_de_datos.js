/**
 * Tipos de datos primitivos - inmutables - se pasan por valor:
 * - string
 * - number
 * - boolean
 * - null
 * - undefined
 * - symbol
 * - bigint
 * 
 * Tipos de datos complejos - mutables - se pasan por referencia:
 * - object
 * - array
 * - function
 */


// Conociendo el tipo de dato de una variable
let temperatura = 19.3;
console.log(typeof(temperatura));

// Tipo de dato primitivo
// inmutabilidad -> No es que la variable cambie de valor sino que se crea un valor totalmente nuevo para la variable
let numero = 23;
numero += 1;
console.log(numero);

// Tipo de dato complejo
// mutabilidad -> Si se cambia el valor original
let usuario = {nombre: 'Pepito', edad: 15};
console.log(usuario);
usuario.nombre = 'Johan';
usuario.edad = 29;
console.log(usuario);

let frutas = ['manzana', 'pera'];
console.log(frutas);
frutas[0] = 'mango';
console.log(frutas);

function cambiarNombre(objeto) {
    objeto.nombre = 'Alejandro';
}

cambiarNombre(usuario);
console.log(usuario);