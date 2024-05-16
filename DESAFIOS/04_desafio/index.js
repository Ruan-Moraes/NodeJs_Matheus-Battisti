const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// make 20 products with random prices and with randoms names and create link to each one to see more details

const products = [
  {
    name: 'Product 1',
    price: Math.floor(Math.random() * 1000),
    link: '/product/1',
  },
  {
    name: 'Product 2',
    price: Math.floor(Math.random() * 1000),
    link: '/product/2',
  },
  {
    name: 'Product 3',
    price: Math.floor(Math.random() * 1000),
    link: '/product/3',
  },
  {
    name: 'Product 4',
    price: Math.floor(Math.random() * 1000),
    link: '/product/4',
  },
  {
    name: 'Product 5',
    price: Math.floor(Math.random() * 1000),
    link: '/product/5',
  },
  {
    name: 'Product 6',
    price: Math.floor(Math.random() * 1000),
    link: '/product/6',
  },
  {
    name: 'Product 7',
    price: Math.floor(Math.random() * 1000),
    link: '/product/7',
  },
  {
    name: 'Product 8',
    price: Math.floor(Math.random() * 1000),
    link: '/product/8',
  },
  {
    name: 'Product 9',
    price: Math.floor(Math.random() * 1000),
    link: '/product/9',
  },
  {
    name: 'Product 10',
    price: Math.floor(Math.random() * 1000),
    link: '/product/10',
  },
  {
    name: 'Product 11',
    price: Math.floor(Math.random() * 1000),
    link: '/product/11',
  },
  {
    name: 'Product 12',
    price: Math.floor(Math.random() * 1000),
    link: '/product/12',
  },
  {
    name: 'Product 13',
    price: Math.floor(Math.random() * 1000),
    link: '/product/13',
  },
  {
    name: 'Product 14',
    price: Math.floor(Math.random() * 1000),
    link: '/product/14',
  },
  {
    name: 'Product 15',
    price: Math.floor(Math.random() * 1000),
    link: '/product/15',
  },
];

app.get('/products', (req, res) => {
  res.render('products', { products });
});

app.get('/product/:id', (req, res) => {
  const { id } = req.params;

  const product = products.find((product) => product.link === `/product/${id}`);

  console.log(product);

  res.render('product', { product });
});

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3008, () => {
  console.log('Server is running on http://localhost:3008');
});
