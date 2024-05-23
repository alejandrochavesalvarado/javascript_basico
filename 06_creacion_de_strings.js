// Creación de strings
const primeraOpcion = 'Comillas simples';
const segundaOpcion = "Comillas dobles";
const terceraOpcion = `Comillas simples template`;

// Concatenación con el operador +
let nombre = 'Johan';
let apellido = 'Chaves';
let nombreCompleto = nombre + ' '+ apellido;
console.log('Mi nombre completo es:' + ' ' + nombreCompleto);

// Concatenación con template literals
console.log(`Mi nombre completo es: ${nombre} ${apellido}`);

// Concatenación con join
let frase = ['Mi nombre completo es:', nombre, apellido].join(' ');
console.log(frase);

// Concatenación con el método concat()
frase = 'Mi nombre completo es:'.concat(' ').concat(nombre).concat(' ').concat(apellido);
console.log(frase);