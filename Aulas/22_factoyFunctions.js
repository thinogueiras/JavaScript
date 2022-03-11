function cadastrarCelular(marca, tamanhoTela, preco, tamanhoBateria) {
    return {
        marca,
        tamanhoTela,
        preco,
        tamanhoBateria,
        ligar() {
            console.log('Fazendo ligação...');
        },
    };
}

const celular = cadastrarCelular('Samsung', 7, 3000, 5500);
console.log(celular);
