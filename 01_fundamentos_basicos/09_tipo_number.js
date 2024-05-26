// 1. Tipo entero y decimal
let edad = 29;
let peso = 68.9;
console.log(typeof(edad));
console.log(typeof(peso));

// 2. Notación cientifica
const numeroCientifico = 5e3;
console.log(numeroCientifico);

// 3. Infiritos y NaN
const numeroInfinito = Infinity;
const noEsUnNumero = NaN;

// 4. Operaciones Aritmeticas
// Suma, resta, multiplicación y división
console.log(4 + 9);
console.log(4 - 9);
console.log(4 * 9);
console.log(4 / 9);
// Modulo y potencia
console.log(4 % 2);
console.log(5 ** 3);
// Precisión
const resultado = 0.1 + 0.2;
console.log(resultado);
console.log(typeof(resultado.toFixed(2))); //toFixed() convierte de number a string
// Comparando por valor
console.log('3' == 3);
console.log('3' === 3);

// 5. Operaciones avanzadas
console.log(Math.sqrt(81));
console.log(Math.abs(-3));

// 6. Número aleatorio -> Entre 0 y 1
const numeroAleatorio = Math.random();
console.log(numeroAleatorio);