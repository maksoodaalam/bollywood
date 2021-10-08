const { product_category, products } = require('../models');

module.exports = {

  create: async (data) => {
    return await product_category.create(data);
  },

  findAll: async (conditions = {}) => {
    return await product_category.findAll({ where: conditions });
  },

  findSingle: async (condition) => {
    return await product_category.findOne({ where: condition });
  },

  update: async (value, condition) => {
    return await product_category.update(value, { where: condition });
  },

  delete: async (condition) => {
    return await product_category.destroy({ where: condition });
  },

  findProductWithCategory: async (condition={}) => {
    return await product_category.findAll({ 
      where: condition,
      include: [
        {
          model: products,
          required: false
        }
      ] 
    })
  },

}