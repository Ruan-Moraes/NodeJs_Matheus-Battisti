const path = require('path');

// Path absoluto

console.log(path.resolve('arquivo.txt'));

// Formar Path

const midPath = 'relatorios/ruan';
const file = 'relatorio.pdf';

console.log(path.join(midPath, file));
