// Conversión explícita
// Conversión a entero
const numerString = '12';
let numeroEntero = parseInt(numerString);
console.log(numeroEntero);
console.log(typeof(numeroEntero));
// Conversión a tipo number
numeroEntero = Number(numerString);
console.log(numeroEntero);
console.log(typeof(numeroEntero));
// Conversión a float
const piString = '3.1415'
let piFloat = parseFloat(piString);
console.log(piFloat);
console.log(typeof(piFloat));
// Conversión de binario a decimal
const binario = '1010';
const decimal = parseInt(binario, 2); // Le indicamos la base
console.log(decimal);
console.log(typeof(decimal));

// Conversión explícita
console.log(3 * '9');
console.log('9' + 5);
console.log(1 + true);