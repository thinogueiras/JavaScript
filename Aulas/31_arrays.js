/*
Adicionar novos elementos
Encontrar elementos
Remover elementos
Dividir elementos
Dividir arrays
Combinar arrays
*/

const numeros = [1, 2, 3];
console.log('Números:', numeros);

numeros.unshift(0);
console.log('\nUnshift:', numeros);

numeros.push(4);
console.log('Push:', numeros);

numeros.splice(2, 0, 1.5);
console.log('Splice:', numeros);

console.log('IndexOf:', numeros.indexOf(2)); // Número 2 está no índice 3

numeros.push(2);
console.log('\n', numeros);
console.log('\nLastIndexOf:', numeros.lastIndexOf(2)); // Última ocorrência do número 2 dentro do array, retorna o índice

console.log(numeros.includes(1.5)); // Verifica se existe dentro do array, retorna true or false

const newArray = [5, 10, -1, 9.5, 10.5, 44, 101];

const test = newArray.find((element) => element > 10); // Retorna somente o primeiro elemento maior que 10

console.log('\nTest find:', test);

console.log('\n', numeros);
numeros.pop();
console.log('\nPop - remove do final:', numeros); // Removeu o número 2
numeros.shift();
console.log('Shift - remove do início:', numeros); // Removeu o número 0
numeros.splice(1, 2);
console.log('Splice - remove do meio:', numeros); // Removeu os números: 1.5 e 2

numeros.splice(0, numeros.length);
console.log('Esvaziando o array com Splice:', numeros);
console.log(`\nArray números: ${numeros}`);

const newArrayNumeros = [96, 97, 98, 99];
console.log('\nArray newArray:', newArray);
console.log('\nArray newArrayNumeros:', newArrayNumeros);
const arrayConcat = newArrayNumeros.concat(newArray);
console.log('\nArrays concatenados:', arrayConcat);

const arrayDividido = arrayConcat.slice(3, 6);
console.log('\nArray dividido:', arrayDividido);

const arrayCombinado = arrayConcat.join('<>');
console.log('\nCombinação em arrays:', arrayCombinado);

const frase = 'Bem vindo ao curso';
const resultado = frase.split(' ');
console.log('\n', resultado);

console.log('\n', resultado.join('-').toLowerCase());
