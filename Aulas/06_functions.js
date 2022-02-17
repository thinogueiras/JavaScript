let corSite = 'azul';

// Função sem parâmetros
function resetarCor() {
    corSite = '';
}

console.log(corSite);
resetarCor();
console.log(corSite);

// Função com parâmetros
function alterarCor(cor) {
    corSite = cor;
}

alterarCor('vermelho');
console.log(corSite);

function alterarCorAndTonalidade(cor, tonalidade) {
    corSite = `${cor} ${tonalidade}`;
}

alterarCorAndTonalidade('verde', 'claro');
console.log(corSite);
