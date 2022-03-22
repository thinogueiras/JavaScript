// For in

const pessoa = {
    nome: 'Thiago',
    idade: 32,
};

for (const chave in pessoa) {
    console.log(`${chave.toUpperCase()}: ${pessoa[chave]}`);
}

console.log('');

// For off

const cores = ['Red', 'Blue', 'Green'];

for (const cor of cores) {
    console.log(cor);
}
