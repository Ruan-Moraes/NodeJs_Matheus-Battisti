const express = require('express');
const app = express();

const PORT = 5000;

const contactsRouter = require('./contacts');

app.use(contactsRouter);
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/templates/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
