// Perfil red social

// 1. Información personal
const username = 'alejandrochavesalvarado';
const fullname = 'Johan Alejandro Chaves Alvarado';
const age = '29';
const isStudent = true;

// 2. Dirección
const address = {
    street: '123 Main Street',
    City: 'Zipaquirá',
    state: 'Cundinamarce',
    zipCode: 250251
}

// 3. Hobbies
const hobbies = ['Anime', 'Development', 'Gaming'];

// 4. Biografía
const personalized = `Hola, soy ${fullname}, tengo ${age} años, vivo en ${address.City} y mis hobbies son: ${hobbies.join(', ')}.`;

// 5. Mostrando mi biografía
console.log(personalized);