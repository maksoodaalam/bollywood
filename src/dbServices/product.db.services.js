const { products, gallery, product_details } = require('../models');
const Sequelize = require('sequelize');
const { toArray } = require('lodash');
const Op = Sequelize.Op;

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
  getProductById: async (id) => {
    console.log(id);
   return await products.findOne({
     where: id,
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

  getProductByCatagoryId: async (id) => {
    
    // try {
      // console.log(id);
      // var ids = [id]
      return await products.findAll({
        where: {
          categoryId: {  
            [Op.in]: [3,4]
          }
        },
         include: [
          {
            model: gallery,
            required: false
          },
          {
           model: product_details,
           required: false
          } ]
       
    })

  },


  getProductByPriceRange: async (priceFrom, priceTo) => {
    console.log('product db service price range ===>', priceFrom, priceTo);
    return await product_details.findAll({
      where: {
        mrp: {
          [Op.between]: [priceFrom, priceTo]
            }
      },
    })
  }
}