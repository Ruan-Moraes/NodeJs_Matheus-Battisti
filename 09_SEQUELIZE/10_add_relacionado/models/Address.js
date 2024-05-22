const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const User = require('./User');

const Address = db.define('Andress', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  city: {
    type: DataTypes.STRING,
    required: true,
  },
  street: {
    type: DataTypes.STRING,
    required: true,
  },
  number: {
    type: DataTypes.INTEGER,
    required: true,
  },
});

Address.belongsTo(User, { foreignKey: 'userId' });

module.exports = Address;
