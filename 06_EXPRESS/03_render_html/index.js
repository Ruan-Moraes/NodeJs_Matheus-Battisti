const express = require('express');
const app = express();

const path = require('path');

const basePath = path.join(__dirname, 'templates');
const PORT = 3000; // Variável de Ambiente

app.get('/', (req, res) => {
  res.sendFile(path.join(basePath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
