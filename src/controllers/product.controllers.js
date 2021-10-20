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

  addProductDetail: async (req, res) => {
    try {
      const result = await productServices.addProductDetail(req.body);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },

  getProductFilter: async (req, res) => {
    // const categoryId = req.query.categoryId;
    // const priceFrom = req.query.priceFrom;
    // const priceTo = req.query.priceTo;
    // console.log(categoryId,priceFrom,priceTo);
    try {
      const result = await productServices.getProductFilter(req.query);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },

}
