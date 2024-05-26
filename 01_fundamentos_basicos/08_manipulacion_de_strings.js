// Strings primitivos
const stringPrimitivo = 'Soy un string primitivo';
console.log(typeof(stringPrimitivo));

const stringPrimitivoTambien = String('Soy un string primitivo también');
console.log(typeof(stringPrimitivoTambien));

// String complejo
const stringObjeto = new String('Soy un string objeto');
console.log(typeof(stringObjeto));

// Manipulación de strings
// 1) Accediendo a caracteres
let letra = stringPrimitivo[0];
console.log(letra);
letra = stringObjeto[1];
console.log(letra);
letra = stringPrimitivo.charAt(2);
console.log(letra);
// 2) Conociendo el indice de un caracter - Primera coincidencia
console.log(stringObjeto.indexOf('o'));
// 3) Conociendo el indice de un caracter - Última coincidencia
console.log(stringObjeto.lastIndexOf('o'));
// 4) Subcadena string primitivo
let subcadenaStringPrimitivo = stringPrimitivo.slice(0, 3);
console.log(subcadenaStringPrimitivo);
console.log(stringPrimitivo);
// 5) Subcadena string primitivo
let subcadenaStringObjeto = stringPrimitivo.slice(7, 14);
console.log(subcadenaStringObjeto);
console.log(stringObjeto); // A pesar de ser un objeto, no se modificó su valor al utilizar slice()
// 6) Tamaño de una cadena
console.log(stringObjeto.length);
// 7) Convertir un string en mayúsculas
console.log(stringPrimitivo.toUpperCase());
// 8) Convertir un string en minúsculas
console.log(stringPrimitivo.toLowerCase());
// 9) Pasar de string a cadena
console.log(stringPrimitivo.split(' '));
// 10) Eliminando espacios al inicio y final de una subcandena
let saludo = '     Hola Mundo '
console.log(saludo.trim());
// 11) Reemplazando una subcadena por otra - Primera Coincidencia
console.log(saludo.trim().replace('o', '*'));
// 12) Reemplazando una subcadena por otra - Todas las Coincidencias
console.log(saludo.trim().replaceAll('o', '*'));