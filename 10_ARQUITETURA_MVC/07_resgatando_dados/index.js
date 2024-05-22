const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const conn = require('./db/conn');

const Task = require('./models/Task');
const tasksRoutes = require('./routes/tasksRoutes');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/tasks', tasksRoutes);

conn
  .sync()
  .then(() => {
    app.listen(3001, () => {
      console.log('Servidor rodando na porta 3001');
    });
  })
  .catch((error) => {
    console.error('Erro ao tentar conectar: ', error);
  });
