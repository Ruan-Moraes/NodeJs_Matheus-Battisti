const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const user = db.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ocuppation: {
    type: DataTypes.STRING,
    required: true,
  },
  newsletter: {
    type: DataTypes.BOOLEAN,
    required: true,
  },
});

module.exports = user;
