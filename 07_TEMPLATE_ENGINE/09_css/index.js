const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
  partialsDir: 'views/partials',
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/dashboard', (req, res) => {
  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
  ];

  res.render('dashboard', { items });
});

app.get('/post', (req, res) => {
  const post = {
    title: 'Post Title',
    content: 'Post Content',
    footer: 'Post Footer',
  };

  res.render('blogpost', { post });
});

app.get('/blog', (req, res) => {
  const posts = {
    post1: {
      title: 'Post 1',
      content: 'Content 1',
      footer: 'Footer 1',
    },
    post2: {
      title: 'Post 2',
      content: 'Content 2',
      footer: 'Footer 2',
    },
    post3: {
      title: 'Post 3',
      content: 'Content 3',
      footer: 'Footer 3',
    },
  };

  res.render('blog', { posts });
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

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
