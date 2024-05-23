const esSoltero = true;
const esEstudiante = false;

// Conversión Implícita
let validacion = 5 > 4;
console.log(validacion);
console.log(typeof(validacion));
console.log(!!validacion); // Validar si una variable existe

// Conversión explícita
validacion = Boolean('false'); // Es verdadero, ya que, todo valor diferente de cero se convierte a verdadero
console.log(validacion);
validacion = Boolean(1);
console.log(validacion);
validacion = Boolean(0); // Única forma en que la conversión de falso, ya que, el número es cero
console.log(validacion);