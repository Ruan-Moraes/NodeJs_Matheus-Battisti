const http = require('http');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
  const url_parts = url.parse(req.url, true);
  const nameUser = url_parts.query?.name;

  res.writeHead(200, {
    'Content-Type': 'text/html',
    Charset: 'utf-8',
  });

  if (nameUser) {
    res.write(`<h1>Olá, ${nameUser}!</h1>`);

    return res.end();
  }

  res.write(`
    <form method="GET" action="/">
        <label for="name">Nome:</label>
        <input type="text" name="name" id="name">
        <button type="submit">Enviar</button>
    </form>
  `);
  res.end();
});

server.listen(port, () => {
  console.log(`Servidor rodando na url: http://localhost:${port}`);
});
