function Endereco(rua, cidade, cep) {
    this.rua = rua;
    this.cidade = cidade;
    this.cep = cep;
}

const endereco1 = new Endereco('a', 'b', 'c');
const endereco2 = new Endereco('a', 'b', 'c');

function isEqual(address1, address2) {
    return address1.rua === address2.rua
        && address1.cidade === address2.cidade
        && address1.cep === address2.cep;
}

console.log(isEqual(endereco1, endereco2));

function memoryAddress(address1, address2) {
    return address1 === address2;
}

console.log(memoryAddress(endereco1, endereco2));
