function verificarEntrada() {
    nomeConvidado = document.getElementById('nomeConvidado').value;

    listaConvidadosMaria = ['Amanda', 'Sabrina', 'Gisele', 'José', 'Thiago'];

    listaConvidadosPedro = ['Thiago'];

    if (listaConvidadosMaria.includes(nomeConvidado) || listaConvidadosPedro.includes(nomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode entrar!!!';
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Infelizmente, você não pode entrar!';
    }
}

function setFocus() {
    document.getElementById('nomeConvidado').focus();
}
