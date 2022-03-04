/*
Crie um função que ao ser executada no terminal ao ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).
*/

function verificaPositivoNegativo(valor) {
    if (valor < 0) {
        console.log(`Valor: ${valor} é negativo`);
    } else {
        console.log(`Valor: ${valor} é positivo`);
    }
}

// Cenários de teste

verificaPositivoNegativo(0);
verificaPositivoNegativo(-1);
verificaPositivoNegativo(1);
