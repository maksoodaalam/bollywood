'use_strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const product_category = sequelize.define('product_category', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    product_id: DataTypes.STRING,
    category_id: DataTypes.STRING
  }, {
    tableName: 'product_category',
    timestamps: true
  });

  product_category.associate = function (models) {
    product_category.hasMany(models.products, { foreignKey: 'id' , sourceKey: 'product_id' } );
  };

  // product_category.sync({ force: true });
  return product_category;
}