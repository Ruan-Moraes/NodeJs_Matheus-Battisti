const express = require('express');
const exphbs = require('express-handlebars');
const pool = require('./db/conn');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/books', (req, res) => {
  const query = 'SELECT * FROM books';

  pool.query(query, (err, result) => {
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

  pool.query(`SELECT * FROM books WHERE ?? = ?`, ['id', id], (err, result) => {
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

  pool.query(`SELECT * FROM books WHERE ?? = ?`, ['id', id], (err, result) => {
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

  pool.query(
    `UPDATE books SET ?? = ?, ?? = ? WHERE id = ?;`,
    ['title', title, 'pageqty', pageqty, id],
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

app.post('/books/deletebook/:id', (req, res) => {
  const id = req.params.id;

  pool.query(`DELETE FROM books WHERE ?? = ?;`, ['id', id], (err, result) => {
    if (err) {
      console.log(err);
    }

    if (result) {
      console.log('Livro deletado com sucesso!');
    }

    res.redirect('/');
  });
});

app.post('/books/insertbooks', (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  pool.query(
    `INSERT INTO books (??, ??) VALUES (?, ?);`,
    ['title', 'pageqty', title, pageqty],
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

app.listen(3000, () => {
  console.log(
    'Servidor rodando na porta 3000! Clique em http://localhost:3000/ para acessar.'
  );
});

// create table books (id int primary key not null auto_increment, title varchar(256) not null, pagegty int not null);
