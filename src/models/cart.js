'use_strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const cart_table = sequelize.define('cart_table', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    product_varient_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    tableName: 'cart',
    timestamps: true
  });

  cart_table.associate = function (models) {
    cart_table.hasMany(models.product_details, { foreignKey: 'id', sourceKey: 'product_varient_id' })
  };

  // cart_table.sync({ force: true });
  return cart_table;
}