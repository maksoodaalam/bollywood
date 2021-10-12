const { gallery } = require('../models');
const Sequelize = require('sequelize');
module.exports = {

  create: async (data) => {
    return await gallery.create(data);
  },

  findAll: async (conditions = {}) => {
    return await gallery.findAll({ where: conditions });
  },

  findSingle: async (condition) => {
    return await gallery.findOne({ where: condition });
  },

  update: async (value, condition) => {
    return await gallery.update(value, { where: condition });
  },

  delete: async (condition) => {
    return await gallery.destroy({ where: condition });
  },

  findMax: async (condition) => {
    return await gallery.findAll({
      attributes: [Sequelize.fn('max', Sequelize.col('id'))],
      raw: true,
    });
  }

}