const fs = require('fs');

console.log('Start');

fs.writeFile('./arquivo2.txt', 'Hello, world!', () => {
  setTimeout(() => {
    console.log('Arquivo escrito!');
  }, 2000);
});

console.log('End');
