function parOrImpar(number) {
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            console.log(i, 'Par');
        } else {
            console.log(i, 'Ímpar');
        }
    }
}

parOrImpar(5);
