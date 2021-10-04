'use_strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const cart_table = sequelize.define('cart_table', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    cart_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    product_id: DataTypes.STRING,
    quantity: DataTypes.STRING,
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    tableName: 'cart',
    timestamps: true
  });

  // users.associate = function (models) {
  //   groupTaskDiscription.belongsTo(models.groupTask, { foreignKey: 'taskId'})
  // };

  // cart_table.sync({ force: true });
  return cart_table;
}