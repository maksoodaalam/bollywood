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

  getProductByCatagoryId: async(req, res) =>{
    try {
      const result = await productServices.getProductByCatagoryId(req.query);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },

  getProductByPriceRange: async(req, res) =>{
    let priceFrom = req.query.priceFrom;
    let priceTo = req.query.priceTo;
    try {
      const result = await productServices.getProductByPriceRange(priceFrom,priceTo);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },
   

}
