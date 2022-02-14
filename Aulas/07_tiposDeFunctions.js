function setarNome() {
    console.log("Thiago");
}

setarNome();

function multiplicarValor(valor) {
    return valor * 2;
}

console.log(multiplicarValor(10));

let resultado = multiplicarValor(3.3);

console.log(resultado);

function soma(a, b){
    return a + b;
}

console.log(soma(1, 2));

// Função anônima
const somaTeste01 = function(a, b){
    return a + b;
}

console.log(somaTeste01(1.5, 1.4));

// Arrow Functions

const somaTeste02 = (a, b) => {
    return a + b;
}

console.log(somaTeste02(1.5, 1.33));

//

const somaTeste03 = (a, b) => a + b;

console.log(somaTeste03(1.5, 1.32));

// Simplificando a sintaxe quando existe apenas um parâmetro

// const somaTeste04 = (a) => a + a
const somaTeste04 = a => a + a;

console.log(somaTeste04(1.2, 1.2));

//

