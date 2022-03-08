function Celular(marcaCelular, tamanhoTela, preco, tamanhoBateriabateria) {
    this.marcaCelular = marcaCelular;
    this.tamanhoTela = tamanhoTela;
    this.preco = preco;
    this.tamanhoBateriabateria = tamanhoBateriabateria;
    this.ligar = function () {
        console.log('Fazendo ligação...');
    };
}

const celular = new Celular('Asus', 6.5, 3500, 5500);
console.log(celular);
