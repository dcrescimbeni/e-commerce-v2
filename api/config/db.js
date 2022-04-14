require('dotenv').config();
const { NODE_ENV } = process.env;
const databaseName = NODE_ENV === 'test' ? 'ecommercetest' : 'ecommercev2';
const Sequelize = require('sequelize');

const db = new Sequelize(
  `postgres://postgres:postgres@localhost:5432/${databaseName}`,
  {
    logging: false,
  }
);

module.exports = db;
