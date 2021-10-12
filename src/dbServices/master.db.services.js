const { master } = require('../models');

module.exports = {

  create: async (data) => {
    return await master.create(data);
  },

  findAll: async (conditions = {}) => {
    return await master.findAll({ where: conditions });
  },

  findSingle: async (condition) => {
    return await master.findOne({ where: condition });
  },

  update: async (value, condition) => {
    return await master.update(value, { where: condition });
  },

  delete: async (condition) => {
    return await master.destroy({ where: condition });
  }

}