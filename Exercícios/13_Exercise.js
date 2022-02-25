/*
Crie um função que ao ser executada no terminal que modifique o  exercício anterior para aceitar somente valores maiores que 0 para N. Caso o valor informado (para N) não seja maior que 0, deverá ser lido um novo valor para N.
*/

function printN() {
    let n = prompt('Digite um valor para N');
    while (n <= 0) {
        n = prompt('N deve ser numérico e maior que zero!!!');
    }
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printN();
