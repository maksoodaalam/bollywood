'use_strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const variationOption = sequelize.define('variationOption', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    attribute_id: DataTypes.INTEGER,
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
    tableName: 'variation_option',
    timestamps: true
  });

  variationOption.associate = function (models) {
    variationOption.belongsTo(models.variation, { foreignKey: 'attribute_id' })
  };

  // variationOption.sync({ force: true });
  return variationOption;
}