const express = require('express');
const router = express.Router();

const path = require('path');

const basePath = path.join(__dirname, '../templates');

router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/add.html`);
});

router.post('/save', (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const email = req.body.email;

  console.log(`Name: ${name} - Email: ${email}`);

  res.sendFile(`${basePath}/add.html`);
});

router.get('/:id', (req, res) => {
  // Leitura da tabela users, resgatando o usuário com o ID informado

  res.send(`User ID: ${req.params.id}`);

  console.log('Search user ID: ' + req.params.id);
});

module.exports = router;