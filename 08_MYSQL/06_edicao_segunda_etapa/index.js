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

app.get('/books/:id', (req, res) => {
  const id = req.params.id;

  connection.query(`SELECT * FROM books WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);

      return;
    }

    const book = result[0];

    res.render('book', { book });
  });
});

app.get('/books/edit/:id', (req, res) => {
  const id = req.params.id;

  connection.query(`SELECT * FROM books WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);

      return;
    }

    const book = result[0];

    res.render('editbook', { book });
  });
});

app.post('/books/updatebook', (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  connection.query(
    `UPDATE books SET title = '${title}', pageqty = ${pageqty} WHERE id = ${id};`,
    (err, result) => {
      if (err) {
        console.log(err);
      }

      if (result) {
        console.log('Livro atualizado com sucesso!');
      }

      res.redirect('/');
    }
  );
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
