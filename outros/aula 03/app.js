const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

// Config

// Template Engine
app.engine(
  'handlebars',
  handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set('view engine', 'handlebars');
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  Post.findAll({ order: [['id', 'DESC']] })
    .then((posts) => {
      console.log(posts);
      res.render('home', { posts: posts });
    })
    .catch((err) => {
      res.send(`Erro ao listar postagens: ${err}`);
    });
});

app.get('/post', (req, res) => {
  res.render('formulario');
});

app.post('/add', (req, res) => {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      res.send(`Erro ao criar postagem: ${err}`);
    });
});

app.listen(8080, () => {
  console.log('Servidor rodando na url http://localhost:8080');
});
