// Enlace implícito
const house = {
    dogName: 'Fido',
    dogGreeting: function () {
        console.log(`Hi, I'm ${this.dogName}`);
    }
}

// Al declarar objetos directos en JavaScript los podemos utilizar sin necesidad de una instancia
house.dogGreeting();

// Enlace explícito
function saludoPersona(ciudad) {
    console.log(`Hola, soy ${this.name} y vivo en ${ciudad}`);
}
const persona = {
    name: 'Johan',
    edad: 29
}
saludoPersona.call(persona, 'Zipaquirá'); // Creando enlace entre una función con parámetros y el objeto
