const fs = require('fs');

if (!fs.existsSync('files')) {
  console.log('Pasta não existe');
}

if (fs.existsSync('files')) {
  console.log('Pasta existe');
}

fs.mkdir('files', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Pasta criada com sucesso!');
  }
});
