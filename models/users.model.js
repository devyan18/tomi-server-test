const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const UserModel = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

UserModel.sync() // If table doesn't exist, create it

module.exports = { UserModel }
