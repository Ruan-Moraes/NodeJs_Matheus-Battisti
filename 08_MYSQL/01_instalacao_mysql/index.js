const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

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
    console.log('Servidor rodando na porta 3000');
  });
});

// create table books (id int primary key not null auto_increment, title varchar(256) not null, pagegty int not null);