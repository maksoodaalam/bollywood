const { category_table } = require('../models');

module.exports = {

  create: async (data) => {
    return await category_table.create(data);
  },

  findAll: async (conditions = {}) => {
    return await category_table.findAll({ where: conditions });
  },

  findSingle: async (condition) => {
    return await category_table.findOne({ where: condition });
  },

  update: async (value, condition) => {
    return await category_table.update(value, { where: condition });
  },

  delete: async (condition) => {
    return await category_table.destroy({ where: condition });
  }

}