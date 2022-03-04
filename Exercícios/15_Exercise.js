/* Crie um função que ao ser executada no terminal que leia um número inteiro e imprima o seu antecessor e seu sucessor.
*/

function printSucessorAntecessor(numero) {
    if (!Number.isInteger(numero)) {
        console.log('Informe apenas números inteiros');
    } else {
        console.log(`${numero - 1},${numero + 1}`);
    }
}

printSucessorAntecessor(1.1);
printSucessorAntecessor('a');
printSucessorAntecessor(2);
