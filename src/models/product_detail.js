'use_strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const product_details = sequelize.define('product_details', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    product_id: DataTypes.INTEGER,
    skucode: DataTypes.STRING,
    variations: DataTypes.INTEGER,
    image: DataTypes.STRING,
    weight: DataTypes.STRING,
    dimension: DataTypes.STRING,
    short_description: DataTypes.STRING,
    long_description: DataTypes.STRING,
    mrp: DataTypes.STRING,
    selling_price: DataTypes.STRING,
    is_featured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    quantity: DataTypes.INTEGER,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdBy: DataTypes.STRING,
    modifiedBy: DataTypes.STRING,
  }, {
    tableName: 'product_details',
    timestamps: true
  });

  product_details.associate = function (models) {
    product_details.belongsTo(models.products, { foreignKey: 'id', sourceKey: 'product_id' });
    product_details.belongsTo(models.cart_table, { foreignKey: 'id', sourceKey: 'id' });
  };

  // product_details.sync({ force: true });
  return product_details;
}