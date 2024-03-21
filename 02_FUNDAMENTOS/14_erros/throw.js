const x = '10';

// checar se x é um número

if (!Number.isInteger(x)) {
  throw new Error('x não é um número');
}

console.log('Continuando código');
