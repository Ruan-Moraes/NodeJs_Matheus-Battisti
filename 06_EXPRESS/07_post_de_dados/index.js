const express = require('express');
const app = express();

const path = require('path');

const basePath = path.join(__dirname, 'templates');
const PORT = 3000; // Variável de Ambiente

// Ler o corpo da requisição

app.use(express.urlencoded({ extended: true }));

app.get('/user/add', (req, res) => {
  res.sendFile(`${basePath}/add.html`);
});

app.post('/user/save', (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const email = req.body.email;

  console.log(`Name: ${name} - Email: ${email}`);

  res.sendFile(`${basePath}/add.html`);
});

app.get('/user/:id', (req, res) => {
  // Leitura da tabela users, resgatando o usuário com o ID informado

  res.send(`User ID: ${req.params.id}`);

  console.log('Search user ID: ' + req.params.id);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(basePath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
