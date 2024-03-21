const fs = require('fs');

console.log('Start');

fs.writeFileSync('./arquivo.txt', 'Hello, world!');

console.log('End');
