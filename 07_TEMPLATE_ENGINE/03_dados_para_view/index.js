const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  const user = {
    name: 'John Doe',
    age: 30,
  };

  const palavra = 'Mundo';

  res.render('home', { user, palavra });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
