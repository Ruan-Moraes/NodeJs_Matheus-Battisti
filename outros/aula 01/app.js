var http = require('http');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Olá, mundo!</h1>');
  })
  .listen(8080);

console.log('Servidor rodando na porta 8080!');
