const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const User = require('./User');

const Address = db.define('Andress', {
  street: {
    type: DataTypes.STRING,
    required: true,
  },
  number: {
    type: DataTypes.INTEGER,
    required: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
});

Address.belongsTo(User, { foreignKey: 'userId' });
