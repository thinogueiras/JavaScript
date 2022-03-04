const filme = {
    title: 'Avengers',
    year: 2018,
    director: 'Desconhecido',
    person: 'Hulk',
    numberOfPerson: 25,
};

function showProperties(obj) {
    for (prop in obj) {
        if (typeof obj[prop] === 'string') {
            console.log(`${prop}: ${obj[prop]}`);
        }
    }
}

showProperties(filme);
