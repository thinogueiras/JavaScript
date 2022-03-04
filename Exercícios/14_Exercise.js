/*
Crie um função que ao ser executada no terminal leia 10 valores e escrever quantos desses valores lidos são NEGATIVOS.
*/

const numbers = [1, -1, 3, 4, -22, 0, 9, -10, 10, -99];
let count = 0;
const arrayNegatives = [];
const arrayPositives = [];

function checkNegativeNumbers(args) {
    for (let index = 0; index < args.length; index++) {
        if (args[index] < 0) {
            arrayNegatives.push(args[index]);
            count += 1;
        } else if (args[index] > 0) {
            arrayPositives.push(args[index]);
        }
    }
    console.log('Qtde. de números negativos =', count);
    console.log('Números negativos: ', arrayNegatives);
    const positiveNumbers = numbers.length - arrayPositives.length;
    console.log('Qtde. de números positivos =', positiveNumbers);
    console.log('Números positivos: ', arrayPositives);
}

checkNegativeNumbers(numbers);
