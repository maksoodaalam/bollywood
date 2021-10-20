const MSG = require('../helper/messages.json');
const uploadServics = require('../services/upload.services');
module.exports = {

  uploadSingle: async (req, res, file) => {
    try {
      const result = await uploadServics.uploadSingle(req, res, file);
      res.json(result);
    } catch (error) {
      console.log(MSG.SOMETHING_WRONG, error);
    }
  }
}