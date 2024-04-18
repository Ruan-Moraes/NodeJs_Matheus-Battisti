const express = require('express');
const app = express();

const path = require('path');

const basePath = path.join(__dirname, 'templates');
const PORT = 3000; // Variável de Ambiente

const usersRouter = require('./users');

// Ler o corpo da requisição

app.use(express.urlencoded({ extended: true }));

app.use('/user', usersRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(basePath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
