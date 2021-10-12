'use_strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const variation = sequelize.define('variation', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    attribute: DataTypes.STRING,
    createdBy: DataTypes.INTEGER,
    modifiedBy: DataTypes.INTEGER,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    tableName: 'variation',
    timestamps: true
  });

  variation.associate = function (models) {
    variation.hasMany(models.variationOption, { foreignKey: 'attribute_id', sourceKey: 'id'})
  };

  // variation.sync({ force: true });
  return variation;
}