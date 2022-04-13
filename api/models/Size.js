const { DataTypes, Model } = require('sequelize');
const db = require('../config/db');

class Size extends Model {}

Size.init(
  {
    sizeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'sizes' }
);

module.exports = Size;
