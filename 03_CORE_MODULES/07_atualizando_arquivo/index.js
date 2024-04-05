const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true);
  const nameUser = urlInfo.query.name;

  if (!nameUser) {
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, {
        'Content-Type': 'text/html',
      });
      res.write(data);

      return res.end();
    });
  } else {
    const nameNewLine = `\n${nameUser}`;

    fs.write('arquivo.txt', nameNewLine, (er, data) => {
      res.writeHead(302, {
        location: '/',
      });

      return res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na url: http://localhost:${port}`);
});
