// Velocidade máxima de até 70
// a cada 5km acima do limite, o condutor perde 1 ponto na CNH
// Math.Floor()
// caso pontos maior > 12 => "CNH suspendida"

let pontos;
const quilometragemDeCorte = 5;
const valorMaximoPontosCNH = 12;
const velocidadeMaxima = 70;

function verificarVelocidade(velocidade) {
    if (velocidade <= velocidadeMaxima) {
        console.log('OK');
    } else if (velocidade > velocidadeMaxima) {
        pontos = Math.floor(((velocidade - velocidadeMaxima) / quilometragemDeCorte));
        if (pontos >= valorMaximoPontosCNH) {
            console.log('CNH Suspensa');
        } else if (pontos === 0) {
            console.log('CNH OK - sem pontos');
        } else {
            console.log('Pontos: ', pontos);
        }
    }
}

verificarVelocidade(50); // OK
verificarVelocidade(70); // OK
verificarVelocidade(71); // 'CNH OK - sem pontos'
verificarVelocidade(80); // 2
verificarVelocidade(81); // 2
verificarVelocidade(85.50); // 3
verificarVelocidade(125); // 11
verificarVelocidade(130); // 'CNH Suspensa'
