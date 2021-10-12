const { product_details } = require('../models');

module.exports = {

  create: async (data) => {
    return await product_details.create(data);
  },

  findAll: async (conditions = {}) => {
    return await product_details.findAll({ where: conditions });
  },

  findSingle: async (condition) => {
    return await product_details.findOne({ where: condition });
  },

  update: async (value, condition) => {
    return await product_details.update(value, { where: condition });
  },

  delete: async (condition) => {
    return await product_details.destroy({ where: condition });
  }

}