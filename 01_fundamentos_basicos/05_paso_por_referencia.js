let dias = ['lunes'];
dias.push('jueves');
console.log(dias);

let panes = ['🥐'];
let copiaPanes = panes;
copiaPanes.push('prueba');
console.log(panes); // La variable panes se modifica, ya que, copiaPanes tiene la misma referencia en memoria

// Creando un objeto
let frutas = {
    manzana: '🍎'
}
let vegetales = frutas;
vegetales.manzana = '🍆';
console.log(frutas); // La variable frutas se modifica, ya que, vegetales tiene la misma referencia en memoria

let ropa = {
    camisa: '👔'
}
ropa.pantalon = '👖';
console.log(ropa); // Crea una nueva dirección en memoria, javascript elimina la dirección de basura mediante el recolector de basura