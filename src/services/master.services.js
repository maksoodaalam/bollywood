const master = require('../dbServices/variations.db.services');
const ResponseData = require('../helper/responseData');
const msg = require('../helper/messages.json');

module.exports = {

  fetchMasterData: async () => {
    try {
      let messageDy;
      let actionStatus;

      const data = await master.findAll({});
      if (data) {
        actionStatus = true; messageDy = msg.FETCHED_MASTER;
      } else {
        actionStatus = true; messageDy = "";
      }
      // console.log('will see', data);


      return new ResponseData({
        status: 200,
        success: actionStatus,
        result: { data: data },
        msg: messageDy,
      });

    } catch (error) {
      console.log(msg.SOMETHING_WRONG, error);
      return new ResponseData({
        status: 200,
        success: false,
        result: { data: null },
        msg: msg.SOMETHING_WRONG,
      });
    }
  },

  setMasterData: async (data) => {
    try {
      let messageDy;
      let actionStatus;

      const ifExist = await master.findSingle({ key: data.key });

      if (!ifExist) {

        const created = await master.create(data);
        if (created) {
          actionStatus = true; messageDy = msg.DATA_CREATED;
        } else {
          actionStatus = false; messageDy = msg.SOMETHING_WRONG;
        }

      } else {
        actionStatus = false; messageDy = msg.DUPLICATE_KEY_NAME;
      }

      return new ResponseData({
        status: 200,
        success: actionStatus,
        result: { data: null },
        msg: messageDy,
      });

    } catch (error) {
      console.log(msg.SOMETHING_WRONG, error);
      return new ResponseData({
        status: 200,
        success: false,
        result: { data: null },
        msg: msg.SOMETHING_WRONG,
      });
    }
  }

}