/*
Múltiplos de 3 e 5 dentro de 10.
3, 6, 9
e
5, 10
Informar o resultado da soma total dos múltiplos = 33
*/

const multiplosTres = [];
const multiplosCinco = [];

function multiplosTresAndCinco(limiteMultiplos) {
    let countMultTres = 0;
    let countMultCinco = 0;
    for (i = 0; i <= limiteMultiplos; i++) {
        if (i % 3 === 0) {
            multiplosTres.push(i);
            countMultTres += i;
        } else if (i % 5 === 0) {
            multiplosCinco.push(i);
            countMultCinco += i;
        }
    }
    const resultadoSomaMultiplos = countMultTres + countMultCinco;
    console.log('Múltiplos de três:', multiplosTres);
    console.log('Múltiplos de cinco:', multiplosCinco);
    console.log('Soma total:', resultadoSomaMultiplos);
}

multiplosTresAndCinco(10);
