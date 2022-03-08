/*
Número primo é divisível por 1 e por ele mesmo
*/

function numeroPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}

function showPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        if (numeroPrimo(numero)) console.log(numero);
    }
}

showPrimos(20);
