const mensagem = 'Bom dia grupo Linx';

console.log(typeof mensagem); // string
console.log('Tamanho da string = ', mensagem.length); // 18
console.log(mensagem[2]); // m
console.log(mensagem.includes('Linx')); // true
console.log(mensagem.includes('2022')); // false
console.log(mensagem.startsWith('Bom')); // true
console.log(mensagem.endsWith('Linx')); // true
console.log(mensagem.indexOf('grupo')); // 8
console.log(mensagem.replace('Linx', 'Stone-Linx')); // Bom dia grupo Stone-Linx
novaMensagem = mensagem.replace('Linx', 'Stone-Linx');
console.log('Tamanho da string =', novaMensagem.length);
console.log(novaMensagem.split(' ')); // [ 'Bom', 'dia', 'grupo', 'Linx' ]
console.log(novaMensagem.substring(0, 3)); // Bom
console.log(novaMensagem.substring(14, 24)); // Stone-Linx
console.log(mensagem.concat('/', novaMensagem.substring(14, 24)));
