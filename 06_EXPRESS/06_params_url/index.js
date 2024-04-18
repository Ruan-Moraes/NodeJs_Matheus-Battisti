const express = require('express');
const app = express();

const path = require('path');

const basePath = path.join(__dirname, 'templates');
const PORT = 3000; // Variável de Ambiente

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
