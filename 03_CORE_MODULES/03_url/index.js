const url = require('url');
const adress = 'http://localhost:3000/default.html?ano=2021&mes=fevereiro';
const parsedUrl = url.parse(adress);

console.log(parsedUrl);
console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
