const { variation, variationOption } = require('../models');

module.exports = {

  create: async (data) => {
    return await variation.create(data);
  },

  findAll: async (conditions = {}) => {
    return await variation.findAll({ where: conditions });
  },

  findSingle: async (condition) => {
    return await variation.findOne({ where: condition });
  },

  update: async (value, condition) => {
    return await variation.update(value, { where: condition });
  },

  delete: async (condition) => {
    return await variation.destroy({ where: condition });
  },

  findVariation: async (condition={}) => {
    return await variation.findAll({ 
      where: condition,
      include: [
        {
          model: variationOption,
          required: false
        }
      ] 
    })
  },

}