// Valor divisível por 3 => Fizz
// Valor divisível por 5 => Buzz
// Valor divisível por 3 e 5 => FizzBuzz
// Valor não divisível por 3 e 5 => valor
// Não é número => 'Não é número'

function fizzBuzz(valor) {
    if (typeof valor !== 'number') {
        console.log('Não é um número');
    } else if (valor % 3 === 0 && valor % 5 === 0) {
        console.log('FizzBuzz');
    } else if (valor % 3 === 0) {
        console.log('Fizz');
    } else if (valor % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(valor);
    }
}

fizzBuzz(3); // Fizz
fizzBuzz(5); // Buzz
fizzBuzz(9); // Fizz
fizzBuzz(10); // Buzz
fizzBuzz(11); // 11
fizzBuzz(15); // FizzBuzz
fizzBuzz(20); // Buzz
fizzBuzz('a'); // Não é um número
