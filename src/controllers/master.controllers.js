const masterServices = require('../services/master.services');
const messages = require('../helper/messages.json');

module.exports = {

  fetchMasterData: async (req, res) => {
    try {
      const result = await masterServices.fetchMasterData(req.body);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  },
  
  setMasterData: async (req, res) => {
    try {
      const result = await masterServices.setMasterData(req.body);
      res.json(result);
    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
    }
  }

}