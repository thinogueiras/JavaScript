const hora = 10;

if (hora >= 0 && hora < 12) {
    console.log('Bom dia');
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde');
} else {
    console.log('Boa noite');
}

const saudacao = () => {
    const data = new Date();
    return data.getHours() < 12 ? 'Bom dia' : data.getHours() < 18 ? 'Boa tarde' : 'Boa noite';
};

console.log(saudacao());
