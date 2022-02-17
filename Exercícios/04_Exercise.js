// Crie um função que ao ser executada no terminal leia três números distintos e mostra o maior dos 3.

function verificaNumeroMaior(numero1, numero2, numero3) {
    if (numero1 > numero2 && numero1 > numero3) {
        console.log('Número maior: ', numero1);
    } else if (numero2 > numero1 && numero2 > numero3) {
        console.log('Número maior: ', numero2);
    } else if (numero3 > numero2 && numero3 > numero1) {
        console.log('Número maior: ', numero3);
    }
}
