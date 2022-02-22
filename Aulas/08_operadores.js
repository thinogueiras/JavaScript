// Operadores aritméticos(matemáticos)
// ++ -- += -= *= /= **

const salario = 5;
console.log('Operações mais básicas com a variável salário');

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);

let idade = 20;
console.log('Operações com a variável idade');
console.log('Operadores de incremento');
console.log(++idade);
console.log(--idade);

// Operadores de atribuição
console.log('Operadores de atribuição');
console.log(idade += 3);
console.log(idade -= 2);
console.log(idade *= 2);
console.log(idade /= 1.5);

// Operadores de igualdade
// Igualdade estrita - Compara o valor e o tipo
console.log('Operadores de igualdade');
console.log(1 === 1);
console.log('1' === 1);

// Igualdade comum
console.log(1 === 1);
console.log(1 === '1'); // Compara apenas o valor - realiza a conversação

// Operadore ternário
// Se o cliente pontuação maior que 100, é Premium, se não, é comum

const pontos = 200;
const tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

// Operadores lógicos

// And (&&)
console.log('Operador lógico AND');
console.log(true && true);
console.log(true && false);

let maiorIdade = true;
let possuiCnh = true;
let podeAplicar = maiorIdade && possuiCnh;
console.log('Pode aplicar: ', podeAplicar);

// Or (||)
console.log('Operador lógico OR');
console.log(true || true);
console.log(true || false); // Retorna true

possuiCnh = false;
podeAplicar = maiorIdade || possuiCnh;
console.log('Pode aplicar: ', podeAplicar);

// NOT (!)
console.log('Operador lógico NOT');
maiorIdade = false;
possuiCnh = false;

podeAplicar = maiorIdade || possuiCnh;

console.log('Pode aplicar: ', podeAplicar);

const candidatoRecusado = !podeAplicar;

console.log('Candidato recusado: ', candidatoRecusado);

// Falsy - Undefined, null, 0, false, string vazia, NaN - not a number

// Truthy
console.log('Truthy');
const corPersonalizada = 'Vermelho';
const corPadrao = 'Azul';
const corPerfil = corPersonalizada || corPadrao; // Stopa a comparação quando encontra um valor Truthy

console.log(corPerfil);
