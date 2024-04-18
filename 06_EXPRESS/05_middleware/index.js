const express = require('express');
const app = express();

const path = require('path');

const basePath = path.join(__dirname, 'templates');
const PORT = 3000; // Variável de Ambiente

const checkAuth = (req, res, next) => {
  req.authStatus = false;

  if (req.authStatus) {
    console.log('User is authenticated');

    next();
  } else {
    console.log('User is not authenticated');

    res.status(401).send('User is not authenticated');

    // next();
  }
};

app.use(checkAuth);

app.get('/', (req, res) => {
  res.sendFile(path.join(basePath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
