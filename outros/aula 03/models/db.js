const Sequelize = require('sequelize');
// Conexão com o banco de dados mySQL
const sequelize = new Sequelize('postapp', 'root', '1597532684', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
