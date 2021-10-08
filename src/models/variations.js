'use_strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const variation = sequelize.define('variation', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    key: DataTypes.STRING,
    json: DataTypes.JSON,
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    tableName: 'variation',
    timestamps: true
  });

  // users.associate = function (models) {
  //   groupTaskDiscription.belongsTo(models.groupTask, { foreignKey: 'taskId'})
  // };

  // variation.sync({ force: true });
  return variation;
}