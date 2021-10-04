const cart = require('../dbServices/cart.db.services');
const ResponseData = require('../helper/responseData');
const messages = require('../helper/messages.json');
const bcrypt = require('bcrypt');
const { isEmpty } = require('lodash');

module.exports = {

  addToCart: async (data) => {
    try {
      console.log('the data we get', data);

      const condition = { user_id: data.user_id };
      let msgDy;
      let actionStatus;
      let dataDy = null;
      const ifExist = await cart.findSingle(condition);

      if (ifExist) {
        const condition2 = { product_id: data.product_id };
        const ifProductExist = await cart.findSingle(condition2);
        if (ifProductExist) {
          const toUpdate = { quantity: data.quantity };
          await cart.update(toUpdate, { product_id: data.product_id });
          actionStatus = true;
          msgDy = "Cart Updated";
        } else {
          // console.log('product not exist');
          await cart.create(data);
          actionStatus = true;
          msgDy = "Cart Updated";
        }
      } else {
        await cart.create(data);
        actionStatus = true;
        msgDy = "Cart Updated";
      }

      return new ResponseData({
        status: 200,
        success: actionStatus,
        result: { data: dataDy },
        msg: msgDy,
      });

    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
      return new ResponseData({
        status: 200,
        success: false,
        result: { data: null },
        msg: messages.SOMETHING_WRONG,
      });
    }
  },

  fetchCartItem: async (data) => {
    try {
      console.log('the data we get', data);

      const condition = { user_id: data.user_id };
      let msgDy;
      let actionStatus;
      let dataDy = null;
      const ifExist = await cart.findSingle(condition);

      if (ifExist) {
        actionStatus = true;
        dataDy = ifExist;
        msgDy = "available items in cart";
      } else {
        actionStatus = true;
        dataDy = null;
        msgDy = "Your cart is empity";
      }

      return new ResponseData({
        status: 200,
        success: actionStatus,
        result: { data: dataDy },
        msg: msgDy,
      });

    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
      return new ResponseData({
        status: 200,
        success: false,
        result: { data: null },
        msg: messages.SOMETHING_WRONG,
      });
    }
  },

  deleteCartItem: async (data) => {
    try {
      console.log('the data we get', data);

      const ifExist = await cart.findSingle(data);

      if(ifExist){
        
      }else{

      }

      return new ResponseData({
        status: 200,
        success: true,
        result: { data: null },
        msg: "Item removed from cart",
      });

    } catch (error) {
      console.log(messages.SOMETHING_WRONG, error);
      return new ResponseData({
        status: 200,
        success: false,
        result: { data: null },
        msg: messages.SOMETHING_WRONG,
      });
    }
  },
}