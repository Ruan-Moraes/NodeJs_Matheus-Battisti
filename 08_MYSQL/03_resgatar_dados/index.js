const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1597532684',
  database: 'nodemysql',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  }

  console.log('Conectado ao MySQL com sucesso!');

  app.listen(3000, () => {
    console.log(
      'Servidor rodando na porta 3000! Clique em http://localhost:3000/ para acessar.'
    );
  });
});

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/books', (req, res) => {
  const query = 'SELECT * FROM books';

  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);

      return;
    }

    const books = result;

    res.render('books', { books });
  });
});

app.post('/books/insertbooks', (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  connection.query(
    `INSERT INTO books (title, pageqty) VALUES ('${title}', ${pageqty});`,
    (err, result) => {
      if (err) {
        console.log(err);
      }

      if (result) {
        console.log('Livro inserido com sucesso!');
      }

      res.redirect('/');
    }
  );
});

// create table books (id int primary key not null auto_increment, title varchar(256) not null, pagegty int not null);
