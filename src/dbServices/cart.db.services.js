const { cart_table, product_details } = require('../models');

module.exports = {

  create: async (data) => {
    return await cart_table.create(data);
  },

  findAll: async (conditions = {}) => {
    return await cart_table.findAll({ where: conditions });
  },

  findSingle: async (condition) => {
    return await cart_table.findOne({ where: condition });
  },

  update: async (value, condition) => {
    return await cart_table.update(value, { where: condition });
  },

  delete: async (condition) => {
    return await cart_table.destroy({ where: condition });
  },

  getCartItemWithProduct: async (condition={}) => {
    return await cart_table.findAll({ 
      where: condition,
      include: [
        {
          model: product_details,
          required: false
        }
      ] 
    })
  },

}