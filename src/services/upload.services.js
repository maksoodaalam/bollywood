const ResponseData = require('../helper/responseData');
const MSG = require('../helper/messages.json');
const Helper = require('../helper/helper');


module.exports = {


  uploadSingle: async (req, res, file) => {
    try {
      let actionStatus, msgDy;

      // console.log('file', req);
      console.log('file', req.file);
      console.log('file', file);

      await Helper.uploadSingle(req, res, file);

      return new ResponseData({
        status: 200,
        success: actionStatus,
        result: { data: null },
        msg: msgDy,
      });

    } catch (error) {
      console.log(MSG.SOMETHING_WRONG, error);
      return new ResponseData({
        status: 200,
        success: false,
        result: { data: null },
        msg: MSG.SOMETHING_WRONG,
      });
    }
  }

}
