const productServices = require('../services/product.services');
const messages = require('../helper/messages.json');

module.exports = {

  addProduct: async (req, res) => {
    try {
      const result = await productServices.addProduct(req.body);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },

  getProduct: async (req, res) => {
    try {
      const result = await productServices.getProduct();
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },


  getProductById: async (req, res) => {
    try {
      const result = await productServices.getProductById(req.query);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },



}