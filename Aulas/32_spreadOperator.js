const primeiro = [1, 2, 3, 4];
const segundo = [4, 5, 6, 7];

const combinado = primeiro.concat(segundo);
console.log(combinado);

const cortado = combinado.slice(4); // Seleciona a partir do índice 4
console.log(cortado);

// Spread

const newCombinado = [...primeiro, 'a', ...segundo, 'b'];
console.log('\nCombinado com Spread Operator:', newCombinado);

const arrayClonado = [...combinado];
console.log('\nArray Clonado a partir do array Combinado:', arrayClonado);
