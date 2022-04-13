const { DataTypes, Model } = require('sequelize');
const db = require('../config/db');
const Product = require('./Product');

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
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    validate: {
      async sizeUniqueness() {
        let checkUnique = await Size.count({
          where: {
            size: this.size,
            productId: this.productId,
          },
        });
        if (checkUnique > 0) {
          throw new Error('Cannot add more than one size to the same product');
        }
      },
    },
    modelName: 'sizes',
  }
);

module.exports = Size;
