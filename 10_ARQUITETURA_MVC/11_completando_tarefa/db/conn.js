const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodeWithMVC', 'root', '1597532684', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  sequelize.authenticate();

  console.log('Conexão realizada com sucesso! Endereço: localhost:3001');
} catch (error) {
  console.error('Erro ao tentar conectar: ', error);
}

module.exports = sequelize;
