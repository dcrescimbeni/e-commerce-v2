const { DataTypes, Model } = require('sequelize');
const db = require('../config/db');

class OrderDetails extends Model {}

OrderDetails.init(
  {
    orderDetailsId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'orderDetails' }
);

module.exports = OrderDetails;
