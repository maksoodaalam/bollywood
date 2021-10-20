const cartServices = require('../services/cart.services');
const messages = require('../helper/messages.json');

module.exports = {

  addToCart: async (req, res) => {
    try {
      const result = await cartServices.addToCart(req.body, req.user);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },

  fetchCartItem: async (req, res) => {
    try {
      const result = await cartServices.fetchCartItem(req.user);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },

  deleteCartItem: async (req, res) => {
    try {
      const result = await cartServices.deleteCartItem(req.body);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  }

}