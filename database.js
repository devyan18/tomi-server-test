const { Sequelize } = require('sequelize');
const { environments } = require('./environments');


// destructuring
const {DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USERNAME} = environments

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = { sequelize }