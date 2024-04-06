const fs = require('fs');

const arqAntigo = 'arquivo.txt';
const arqNovo = 'novo_arquivo.txt';

fs.rename(arqAntigo, arqNovo, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Arquivo renomeado de ${arqAntigo} para ${arqNovo}!`);
  }
});
