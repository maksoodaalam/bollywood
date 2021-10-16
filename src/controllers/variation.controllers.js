const variationServices = require('../services/variation.services');
const messages = require('../helper/messages.json');

module.exports = {

  addAttribute: async (req, res) => {
    try {
      const result = await variationServices.addAttribute(req.body);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },

  getAllAttribute: async (req, res) => {
    try {
      const result = await variationServices.getAllAttribute();
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },

  addVariation: async (req, res) => {
    try {
      const result = await variationServices.addVariation(req.body);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },

  getVariationWithAttribute: async (req, res) => {
    try {
      const result = await variationServices.getVariationWithAttribute();
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },

}