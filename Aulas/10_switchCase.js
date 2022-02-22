// comum, gerente, diretor
const permissaoUser = 'gerente';

switch (permissaoUser) {
    case 'comum':
        console.log('Usuário comum');
        break;

    case 'gerente':
        console.log('Usuário gerente');
        break;

    case 'diretor':
        console.log('Usuário diretor');
        break;

    default:
        console.log('Usuário não classificado');
}
