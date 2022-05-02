require('dotenv').config();
const { NODE_ENV, DATABASE_URL } = process.env;

const databaseName = NODE_ENV === 'test' ? 'ecommercetest' : 'ecommercev2';
const Sequelize = require('sequelize');

const db = new Sequelize(`${DATABASE_URL}/${databaseName}`, {
  logging: false,
});

module.exports = db;
