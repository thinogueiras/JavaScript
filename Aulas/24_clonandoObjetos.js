const filme = {
    title: 'Avengers',
    year: 2018,
    director: 'Joss Whedon',
    characters: ['Steve Rogers', 'Tony Stark', 'Bruce Banner', 'Thor'],
    numberOfPerson: 25,
    getFilme() {
        console.log('Teste...');
    },
};

// Objeto clonado e adicionada uma nova propriedade

const newFilme = {
    firstAvenger: 'Captain America',
    ...filme,
};

console.log(newFilme);
console.log(`${newFilme.characters[0]} - Captain America`);
