const { variationOption } = require('../models');

module.exports = {

  create: async (data) => {
    return await variationOption.create(data);
  },

  findAll: async (conditions = {}) => {
    return await variationOption.findAll({ where: conditions });
  },

  findSingle: async (condition) => {
    return await variationOption.findOne({ where: condition });
  },

  update: async (value, condition) => {
    return await variationOption.update(value, { where: condition });
  },

  delete: async (condition) => {
    return await variationOption.destroy({ where: condition });
  }

}