'use_strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const category_table = sequelize.define('category_table', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    parent_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    slugs: DataTypes.STRING,
    descriptions: DataTypes.STRING,
    featured: DataTypes.STRING,
    for: DataTypes.STRING,
    url: DataTypes.STRING,
    image: DataTypes.STRING,
    level: DataTypes.INTEGER,
    createdby: DataTypes.STRING,
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    tableName: 'category',
    timestamps: true
  });

  // users.associate = function (models) {
  //   groupTaskDiscription.belongsTo(models.groupTask, { foreignKey: 'taskId'})
  // };

  // category_table.sync({ force: true });
  return category_table;
}