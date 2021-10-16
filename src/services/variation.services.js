const product = require('../dbServices/product.db.services');
const category = require('../dbServices/category.db.services');
const variation = require('../dbServices/variation.db.services');
const variationOption = require('../dbServices/variation_option.db.services');
const categoryAndProduct = require('../dbServices/product_category.db.services');
const ResponseData = require('../helper/responseData');
const MSG = require('../helper/messages.json');

module.exports = {

  addAttribute: async (data) => {
    try {
      let msgDy;
      let actionStatus;

      console.log('got here somehow', data.attribute);

      const ifExist = await variation.findSingle({ attribute: data.attribute });


      if (ifExist == null) {
        const created = await variation.create({ attribute: data.attribute });
        if (created) {
          actionStatus = true; msgDy = MSG.ATTRIBUTE_CREATED;
        } else {
          actionStatus = false; msgDy = MSG.SOMETHING_WRONG;
        }
      } else {
        actionStatus = false; msgDy = MSG.ATTRIBUTE_NAME_EXIST;
      }


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
  },

  getAllAttribute: async () => {
    try {
      const allAttribute = await variation.findAll({ is_deleted: false });

      return new ResponseData({
        status: 200,
        success: true,
        result: { data: allAttribute },
        msg: MSG.ALL_ATTRIBUTE,
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
  },

  addVariation: async (data) => {
    try {
      let msgDy;
      let actionStatus;
      // console.log('got here', data);

      const ifIdExist = await variation.findSingle({ id: data.attribute_id });
      // console.log('got here', ifIdExist);

      if (ifIdExist) {

        const ifExist = await variationOption.findSingle({ name: data.name, attribute_id: data.attribute_id });

        if (ifExist == null) {

          const created = await variationOption.create(data);
          if (created) {
            actionStatus = true; msgDy = MSG.VARIATION_CREATED;
          } else {
            actionStatus = false; msgDy = MSG.SOMETHING_WRONG;
          }
        } else {
          actionStatus = false; msgDy = MSG.VARIATION_NAME_EXIST;
        }



      } else {
        actionStatus = false; msgDy = MSG.NO_VARIATION_EXIST_WITH_ID;
      }

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
  },

  getVariationWithAttribute: async () => {
    try {
      // console.log('i m sone');

      const variationAndAttribute = await variation.findVariation();

      // console.log('i m sone', variationAndAttribute);

      return new ResponseData({
        status: 200,
        success: true,
        result: { data: variationAndAttribute },
        msg: MSG.ALL_VARIATION_AND_ATTRIBUTE,
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
