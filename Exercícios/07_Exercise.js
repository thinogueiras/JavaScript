/*
Crie um função que ao ser executada no terminal ao ler um valor e escrever se é positivo, negativo ou zero.
*/

function verificaNumero(numero) {
    if (numero > 0) {
        console.log('Positivo.');
    } else if (numero < 0) {
        console.log('Negativo.');
    } else {
        console.log('Número igual a 0 (zero).');
    }
}

// Cenários de teste

verificaNumero(10000);
verificaNumero(0.00);
verificaNumero(0.01);
verificaNumero(-1.02);
verificaNumero(-0.02);
