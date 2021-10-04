const categoryServices = require('../services/category.services');
const messages = require('../helper/messages.json');

module.exports = {

  addCategory: async (req, res) => {
    try {
      const result = await categoryServices.addToCategory(req.body);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },

  fetchCategory: async (req, res) => {
    try {
      const result = await categoryServices.fetchCategory(req.body);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  }

}