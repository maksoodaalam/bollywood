const product = require('../dbServices/product.db.services');
const category = require('../dbServices/category.db.services');
const categoryAndProduct = require('../dbServices/product_category.db.services');
const ResponseData = require('../helper/responseData');
const MSG = require('../helper/messages.json');

module.exports = {

  addProduct: async (data) => {
    try {
      let msgDy;
      let actionStatus;

      // console.log('got here', data.categoryId);

      const ifExist = await product.findSingle({ productname: data.productname });

      if (!ifExist) {

        // console.log('will see', data.categoryId.length, data.categoryId, typeof data.categoryId);
        let ifExist = false;
        const promises = data.categoryId.map(async (item, val) => {
          const ifCategoryExist = await category.findSingle({ id: parseInt(item) });
          if (ifCategoryExist) {
            // console.log(`id ${item} exist in category table`);
            ifExist = true;
          } else {
            // console.log(`id ${item} not exist in category table`);
          }
        });

        await Promise.all(promises).then(() => { });

        if (ifExist) {
          const created = await product.create(data);

          const promisesTwo = data.categoryId.map(async (item, val) => {
            const ifCategoryExist = await category.findSingle({ id: parseInt(item) });
            if (ifCategoryExist) {
              let category_and_product = { product_id: created.id, category_id: item };
              // console.log('running here', category_and_product);
              await categoryAndProduct.create(category_and_product);
            } else {
              // console.log(`id ${item} not exist in category table`);
            }
          });

          await Promise.all(promisesTwo).then(() => { });

          actionStatus = true; msgDy = MSG.PRODUCT_CREATED;





        } else {
          actionStatus = false; msgDy = MSG.CATEGORY_NOT_EXIST_WITH_ID;

        }

      } else {
        actionStatus = false; msgDy = MSG.DUPLICATE_PRODUCT_NAME;
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

  getProduct: async () => {
    try {

      const products = await product.findAll({});

      return new ResponseData({
        status: 200,
        success: true,
        result: { data: products },
        msg: MSG.All_PRODUCTS,
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

  getProductById: async (data) => {
    try {
      let msgDy;
      let actionStatus;
      // console.log('will see', data.id);
      const catId = parseInt(data.id); 
      // console.log('will see', catId);
      const products = await categoryAndProduct.findProductWithCategory({ category_id: catId });
      // console.log('will see', products.length);
      if(products.length > 0){
        actionStatus = true; msgDy = MSG.CATEGORY_LIST;
      }else{
        actionStatus = false; msgDy = MSG.CATEGORY_NOT_EXIST_WITH_ID;
      }

      return new ResponseData({
        status: 200,
        success: actionStatus,
        result: { data: products },
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

}
