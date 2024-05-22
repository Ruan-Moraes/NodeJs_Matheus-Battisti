const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');

const User = require('./models/User');
const Address = require('./models/Address');

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

app.get('/users/:id', async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({
    raw: true,
    where: {
      id,
    },
  });

  res.render('userview', { user });
});

app.get('/users/edit/:id', async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({
    raw: true,
    where: {
      id,
    },
  });

  res.render('useredit', { user });
});

app.post('/users/update', async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const ocuppation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter === 'on') {
    newsletter = true;
  } else {
    newsletter = false;
  }

  const userDate = { id, name, ocuppation, newsletter };

  await User.update(userDate, {
    where: {
      id,
    },
  })
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      console.error('Não foi possível atualizar o usuário:', error);
    });
});

app.post('/users/delete/:id', async (req, res) => {
  const id = req.params.id;

  await User.destroy({
    where: {
      id,
    },
  })
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      console.error('Não foi possível deletar o usuário:', error);
    });
});

conn
  .sync({ force: true })
  // .sync()
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
