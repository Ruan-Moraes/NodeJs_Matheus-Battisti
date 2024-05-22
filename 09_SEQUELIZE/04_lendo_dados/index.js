const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');

const User = require('./models/User');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', async (req, res) => {
  const users = await User.findAll({ raw: true });

  console.log(users);

  res.render('home', { users });
});

app.get('/users/create', async (req, res) => {
  res.render('adduser');
});

app.post('/users/create', async (req, res) => {
  const name = req.body.name;
  const ocuppation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter === 'on') {
    newsletter = true;
  } else {
    newsletter = false;
  }

  console.log(name, ocuppation, newsletter);

  await User.create({
    name,
    ocuppation,
    newsletter,
  })
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      console.error('Não foi possível criar o usuário:', error);
    });
});

conn
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log(
        'Servidor rodando na porta 3000! Clique em http://localhost:3000/ para acessar.'
      );
    });
  })
  .catch((error) => {
    console.error('Não foi possível conectar ao banco de dados:', error);
  });
