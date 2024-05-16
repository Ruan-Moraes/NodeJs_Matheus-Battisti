const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.get('/', (req, res) => {
  const user = {
    name: 'John Doe',
    age: 30,
  };

  const palavra = 'Mundo';

  const auth = true;

  const approved = false;

  res.render('home', { user, palavra, auth, approved });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
