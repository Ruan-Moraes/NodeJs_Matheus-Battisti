const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/index.html');
});

app.get('/sobre', function (req, res) {
  res.sendFile(__dirname + '/html/sobre.html');
});

app.get('/blog', function (req, res) {
  res.send('<h1>Bem-vindo ao meu blog!</h1>');
});

app.get('/ola/:nome/:empresa', function (req, res) {
  // REQ => DADOS ENVIADOS PELO USUÁRIO
  // RES => RESPOSTA QUE VAMOS ENVIAR PARA O USUÁRIO
  console.log(req.params);
  var nome = req.params.nome;
  var empresa = req.params.empresa;
  res.send('<h1>Olá ' + nome + ' da ' + empresa + '</h1>');
});

app.listen(8080, () => {
  console.log('Servidor rodando na url: http://localhost:8080');
});
