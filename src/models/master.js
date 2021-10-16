'use_strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const master = sequelize.define('master', {
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
    tableName: 'master',
    timestamps: true
  });

  // users.associate = function (models) {
  //   groupTaskDiscription.belongsTo(models.groupTask, { foreignKey: 'taskId'})
  // };

  // master.sync({ force: true });
  return master;
}