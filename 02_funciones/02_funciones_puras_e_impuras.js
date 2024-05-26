// Funciones puras
// No producen efectos secundarios

// Efectos secundarios que vuelven a una función impura
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulación del DOM
// 6. Obtener la hora actual

// Ejemplo de función pura
function suma(a, b) {
    // console.log('Hola'); -> Esto ya hace que la función sea impura
    return a + b;
}

// Ejemplo de una función impura
let total = 0;
function incrementarTotal(x) {
    total += x; // Se modifica una variable global
}

// Otro ejemplo de una función pura
function cuadrado(x) {
    return x * x;
}

// Otro ejemplo de una función pura
function adicionarNumero(y) {
    return y + 10;
}

// Otro ejemplo de una función pura
console.log(adicionarNumero(cuadrado(6)));