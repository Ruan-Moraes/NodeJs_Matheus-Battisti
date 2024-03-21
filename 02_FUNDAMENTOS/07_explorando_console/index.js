// mais de uma valor

const x = 10;
const y = 'lorem ipsum';
const z = [1, 2, 3, 4, 5];

console.log(x, y, z);

// contagem de impressões

console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de x é ${x}, contagem`);

console.count(`O valor de y é ${y}, contagem`);
console.count(`O valor de y é ${y}, contagem`);
console.count(`O valor de y é ${y}, contagem`);

console.count(`O valor de z é ${z}, contagem`);
console.count(`O valor de z é ${z}, contagem`);

// Variável entre string

console.log('O valor de y é %s', y);
console.log('O valor de x é %d', x);

// Limpar o console

setTimeout(() => {
  console.clear();
}, 2000);
