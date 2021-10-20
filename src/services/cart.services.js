const cart = require('../dbServices/cart.db.services');
const product = require('../dbServices/product.db.services');
const product_detail = require('../dbServices/product_detail.db.services');
const user = require('../dbServices/users.db.services');
const ResponseData = require('../helper/responseData');
const MSG = require('../helper/messages.json');
const bcrypt = require('bcrypt');
const { isEmpty } = require('lodash');

module.exports = {

  addToCart: async (data, user) => {
    try {

      let msgDy, actionStatus, dataDy;

      const ifProductExist = await product.findSingle({ id: data.product_id });
      if (ifProductExist) {
        const details = await product_detail.findSingle({ id: data.product_varient_id });
        if (details) {

          console.log('the data we get', details.quantity, data.quantity);

          if (data.quantity > details.quantity) {
            actionStatus = false; dataDy = null; msgDy = MSG.QUANTITY_ACCEED.replace('%type%', details.quantity);
          } else {

            // const product_details = [details];
            // ifProductExist.dataValues.product_details = product_details;
            // actionStatus = true; dataDy = ifProductExist; msgDy = MSG.PRODUCTS_IN_CART;

            const condition = {
              product_id: data.product_id,
              product_varient_id: data.product_varient_id,
              user_id: user.id
            }

            const ifProductExistInCart = await cart.findSingle(condition);

            if (ifProductExistInCart) {
              const toUpdate = { quantity: data.quantity, is_deleted: data.is_deleted };
              const updateBool = await cart.update(toUpdate, condition);
              actionStatus = true; dataDy = null; msgDy = MSG.CART_UPDATED;
            } else {
              const tableFields = {
                user_id: user.id,
                product_id: data.product_id,
                product_varient_id: data.product_varient_id,
                quantity: data.quantity,
                is_deleted: false
              }
              const createBool = await cart.create(tableFields);
              actionStatus = true; dataDy = null; msgDy = MSG.CART_UPDATED;
            }

          }


        } else {
          actionStatus = false; dataDy = null; msgDy = MSG.PRODUCT_VARIENT_NOT_EXIST;
        }
      } else {
        actionStatus = false; dataDy = null; msgDy = MSG.PRODUCT_NOT_EXIST;
      }

      return new ResponseData({
        status: 200,
        success: actionStatus,
        result: { data: dataDy },
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

  fetchCartItem: async (data) => {
    try {
      console.log('the data we get', data);

      let msgDy, actionStatus, dataDy = null;
      const condition = { user_id: data.id };
      const ifExist = await cart.getCartItemWithProduct(condition);

      actionStatus = true; dataDy = ifExist; msgDy = MSG.ITEMS_IN_CART;

      return new ResponseData({
        status: 200,
        success: actionStatus,
        result: { data: dataDy },
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

  deleteCartItem: async (data) => {
    try {
      console.log('the data we get', data);

      const ifExist = await cart.findSingle(data);

      if (ifExist) {

      } else {

      }

      return new ResponseData({
        status: 200,
        success: true,
        result: { data: null },
        msg: "Item removed from cart",
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
}