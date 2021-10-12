'use_strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const gallery = sequelize.define('gallery', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    relation_id: DataTypes.INTEGER,
    url: DataTypes.STRING,
    is_featured: DataTypes.BOOLEAN,
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    tableName: 'gallery',
    timestamps: true
  });

  gallery.associate = function (models) {
    gallery.belongsTo(models.products, { foreignKey: 'relation_id'})
  };

  // gallery.sync({ force: true });
  return gallery;
}