const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', '1597532684', {
  host: 'localhost',
  dialect: 'mysql',
});

const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING,
  },
  conteudo: {
    type: Sequelize.TEXT,
  },
});

// Postagem.create({
//   titulo: 'Um título qualquer',
//   conteudo: 'O conteúdo de alguma coisa',
// });

const Usuario = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING,
  },
  sobrenome: {
    type: Sequelize.STRING,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
  email: {
    type: Sequelize.STRING,
  },
});

// Usuario.create({
//   nome: 'João',
//   sobrenome: 'da Silva',
//   idade: 30,
//   email: 'joao@email.com',
// });

Postagem.sync({ force: true });
Usuario.sync({ force: true });
