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

const p1 = {
    name: 'Computador',
    price: 3000.0,
    quantity: 2,
};

const Product = function (name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
};

// Arrow Function
Product.prototype.total = () => this.price * this.quantity;

// Arrow Function
Product.prototype.add = (amount) => this.quantity += amount;

Product.prototype.remove = function (amount) {
    if (this.quantity >= amount) {
        this.quantity -= amount;
    }
    console.log('Amount inválido');
};

Product.prototype.label = () => `Dados: ${this.name}, ${this.price.toFixed(2)}`;

const p2 = new Product('Monitor', 800.0, 10);
console.log(p2);

const p3 = new Product('Mouse', 50.0, 4);
console.log(p3);

p2.remove(11);
console.log('');
console.log(p2);
