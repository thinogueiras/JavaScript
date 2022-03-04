/*
if (mediaFinal < 59) return `Resultado: ${mediaFinal} - F`;
if (mediaFinal < 69) return `Resultado: ${mediaFinal} - D`;
if (mediaFinal < 79) return `Resultado: ${mediaFinal} - C`;
if (mediaFinal < 89) return `Resultado: ${mediaFinal} - B`;
return `Resultado: ${mediaFinal} - A`;
*/

const arrayNotas = [0, 100, 100];

function calcMedias(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    console.log('Soma total das notas:', soma);
    console.log('Total de notas:', array.length);
    return Math.floor(soma / array.length);
}

function calcMediaNotasAluno(notas) {
    const mediaFinal = calcMedias(notas);
    if (mediaFinal >= 0 && mediaFinal <= 59) {
        console.log('Resultado:', mediaFinal, '- F');
    }
    if (mediaFinal >= 60 && mediaFinal <= 69) {
        console.log('Resultado:', mediaFinal, '- D');
    }
    if (mediaFinal >= 70 && mediaFinal <= 79) {
        console.log('Resultado:', mediaFinal, '- C');
    }
    if (mediaFinal >= 80 && mediaFinal <= 89) {
        console.log('Resultado:', mediaFinal, '- B');
    }
    if (mediaFinal >= 90 && mediaFinal <= 100) {
        console.log('Resultado:', mediaFinal, '- A');
    }
}

calcMediaNotasAluno(arrayNotas);
