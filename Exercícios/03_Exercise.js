// Crie um função que ao ser executada no terminal que lê dois números inteiros distintos e diz qual desses dois números é o maior.

function verificaNumeroMaior(numero1, numero2) {
    if (numero1 > numero2) {
        console.log('Número maior: ', numero1);
    } else if (numero1 === numero2) {
        console.log('Os números são iguais!!!');
    } else {
        console.log('Número maior: ', numero2);
    }
}

function max(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

const valorMaior = max(0.001, 0.01);
console.log(valorMaior);
