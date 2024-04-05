const fs = require('fs');

fs.unlink('./index.html', (err) => {
  if (err) {
    console.log('Erro ao remover arquivo');
  } else {
    console.log('Arquivo removido com sucesso');
  }
});
