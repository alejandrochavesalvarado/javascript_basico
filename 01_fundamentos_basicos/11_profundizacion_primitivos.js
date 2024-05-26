// Tipo de dato null
// A pesar que el tipo sea objeto(Error JavaAcript), null como tal es un primitivo
const snoopy = null;
console.log(snoopy);
console.log(typeof(snoopy));

// Tipo de dato Undefined
let name;
console.log(name);

// Tipo de dato symbol - valor único
const uniqueId = Symbol('id');
const symboluno = Symbol(1);
const symbolDos = Symbol(1);
console.log(symboluno === symbolDos); // No son iguales ya que para cada uno crea una referencia en memoria
const Id = Symbol('id');
let user = {};
user[Id] = '123';
console.log(user);

// Tipo de dato Bigint
const bigNumber = 91243134123412341412342142143124314313414134141341234123412431243123421432143n;
console.log(bigNumber);
console.log(typeof(bigNumber));