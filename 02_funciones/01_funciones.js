// Declarando una función
function suma(a, b) {
    return a + b;
}

// Llamando e imprimiendo la función declarada anteriormente
console.log(suma(3, -9));

// Tipo de dato de una función
// Tipo function -> También es un objeto
console.log(typeof(suma));

// Pasar funciones como argumentos -> callback
function a () {}
function b (a) {}

// Retornando una función
function c() {
    return function d() {}
}

// Asignar funciones a variables -> Expresión de función
const resta = function(x, y) { return x - y}
console.log(resta(10, 2));

// Propiedades y métodos
function f() {}
const obj = {}
f.call(obj); // Contexto de ejecución

// Anidar funciones -> Nested functions
function h() {
    function k () {

    }

    k();
}
h();

// ¿Es posible almacenar funciones en objetos? -> Si es posible, a estas funciones se les denomina métodos
const rocket = {
    name: 'Falcon 9',
    lauchMessage: function () {
        console.log('Fire')
    }
}
rocket.lauchMessage()