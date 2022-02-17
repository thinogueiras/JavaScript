/* Crie um função que ao ser executada no terminal enviando a variavel de ambiente $MY_NAME_IS mostre a frase :

Hello $MY_NAME_IS, how are you?".
Do contrario a frase : "Hello World! Who's there?" */

function imprimir() {
    const name = process.env.NAME;

    if (name) {
        exibir = `Hello ${name}, how are you?`;
    } else {
        exibir = "Hello World! Who's there?";
    }
    console.log(exibir);
}

imprimir();
