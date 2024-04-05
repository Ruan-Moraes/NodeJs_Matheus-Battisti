const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.write('<h1>Olá, mundo!</h1>');
  // res.end();

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Olá, mundo!</h1>');
});

server.listen(port, () => {
  console.log(`Servidor rodando na url: http://localhost:${port}`);
});
