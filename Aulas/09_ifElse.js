const hora = 10;

if (hora >= 0 && hora < 12) {
    console.log('Bom dia');
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde');
} else {
    console.log('Boa noite');
}

// const saudacao = () => {
//     const data = new Date();
//     return data.getHours() < 12 ? 'Bom dia' : data.getHours() < 18 ? 'Boa tarde' : 'Boa noite';
// };

const getSaudacao = function saudacao() {
    const data = new Date();
    if (data.getHours() >= 0 && data.getHours() < 12) {
        console.log('Bom dia: -', data.getHours(), 'horas');
    } else if (data.getHours() >= 12 && data.getHours() < 18) {
        console.log('Boa tarde -', data.getHours(), 'horas');
    } else {
        console.log('Boa noite -', data.getHours(), 'horas');
    }
};

console.log(getSaudacao());
