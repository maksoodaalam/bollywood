const { products, gallery, product_details } = require('../models');

module.exports = {

  create: async (data) => {
    return await products.create(data);
  },

  findAll: async (conditions = {}) => {
    return await products.findAll({ where: conditions });
  },

  findSingle: async (condition) => {
    return await products.findOne({ where: condition });
  },

  update: async (value, condition) => {
    return await products.update(value, { where: condition });
  },

  delete: async (condition) => {
    return await products.destroy({ where: condition });
  },

  getProduct: async (condition={}) => {
    return await products.findAll({ 
      where: condition,
      include: [
        {
          model: gallery,
          required: false
        },
        {
          model: product_details,
          required: false
        }
      ] 
    })
  },

}