/*
Crie um função que ao ser executada no terminal ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
*/

function printN(n) {
    if (n <= 0) {
        console.log('N deve ser maior que zero!!!');
    }
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// Cenários de teste

printN(5);
printN(0);
printN(-22);
