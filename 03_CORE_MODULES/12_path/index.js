const path = require('path');

const customPath = path.join("/relatorios/ruan/relatorio.pdf");

console.log(path.basename(customPath));
console.log(path.dirname(customPath));
console.log(path.extname(customPath));