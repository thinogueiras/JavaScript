function showQtdAsteriscos(linhas) {
    for (let i = 1; i <= linhas; i++) {
        let padrao = '';
        for (let z = 0; z < i; z++) {
            padrao += '*';
        }
        console.log(padrao);
    }
}

showQtdAsteriscos(4);
