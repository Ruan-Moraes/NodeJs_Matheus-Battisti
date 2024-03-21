const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question('Qual a sua linguagem preferida?', (Language) => {
    if (Language === 'JavaScript') {
      console.log('Você está no caminho certo!');
    } else {
      console.log(`A minha linguagem preferida é ${Language}!`);
    }

    readline.close();
  });
  