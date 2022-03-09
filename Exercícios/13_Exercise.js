// Informar uma string
// Informar o número 0
// Informar um número maior que 0

function printN() {
    const { n } = process.env;
    if (n <= 0) {
        console.log('N deve maior que zero!!!');
    } else if (typeof n === 'string') {
        console.log('N deve ser numérico');
    }
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printN();
