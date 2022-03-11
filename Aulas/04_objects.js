// Objeto pessoa

const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Nogueira',
    idade: 32,
    estaAprovado: true,
};

console.log(pessoa);

const carro = {
    marca: 'Fiat',
    modelo: 'Bravo',
    ano: 2021,
    ligado: false,

    ligar(ligado) {
        if (ligado === true) {
            this.ligado = true;
            console.log(`Ligando o carro: ${this.marca} ${this.modelo}`);
        } else {
            console.log('Carro desligado');
        }
    },

    acelerar() {
        if (this.ligado === true) {
            console.log('Acelerando......30..50..100 km/h');
        } else {
            console.log('Opss.....só é possível acelerar com o carro ligado!!!');
        }
    },
};

console.log(carro);
console.log('');
carro.ligar(false);
carro.acelerar();
console.log('');
carro.ligar(true);
carro.acelerar();
