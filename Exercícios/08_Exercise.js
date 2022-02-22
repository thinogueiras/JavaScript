const data = new Date();

function getDays(dataNascimento) {
    let anos = data.getFullYear();
    const meses = data.getMonth() + 1;
    const dias = data.getDate();

    if (meses < dataNascimento.substr(5, 2)) {
        anos = (data.getFullYear() - dataNascimento.substr(0, 4)) - 1;
        console.log(anos);
    } else if (meses > dataNascimento.substr(5, 2)) {
        anos = data.getFullYear() - dataNascimento.substr(0, 4);
        console.log(anos);
    }
}

// console.log(`${anos}`);
// console.log(dataNascimento.substr(5, 2));
// console.log(dataNascimento.substr(8, 2));

getDays('1989-11-14');
