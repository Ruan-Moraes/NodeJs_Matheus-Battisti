const express = require('express');
const app = express();

const path = require('path');

const basePath = path.join(__dirname, 'templates');
const PORT = 3000; // Variável de Ambiente

const usersRouter = require('./users');

// Ler o corpo da requisição

app.use(express.urlencoded({ extended: true }));

app.use('/user', usersRouter);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(basePath, 'index.html'));
});

app.use((req, res) => {
  console.log(__dirname);
  res
    .status(404)
    .sendFile('404.html', { root: path.join(__dirname, 'templates') });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
