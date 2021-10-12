const product = require('../dbServices/product.db.services');
const category = require('../dbServices/category.db.services');
const gallery = require('../dbServices/gallery.db.services');
const productDetails = require('../dbServices/product_detail.db.services');
const categoryAndProduct = require('../dbServices/product_category.db.services');
const ResponseData = require('../helper/responseData');
const MSG = require('../helper/messages.json');

module.exports = {

  addProduct: async (data) => {
    try {
      let msgDy;
      let actionStatus;

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

          const galleryJson = {
            relation_id: created.id,
            url: data.featuredimg,
            is_featured: true
          }

          await gallery.create(galleryJson);

          const productDetailGalleryJson = {
            url: data.featuredimg,
            is_featured: false
          }

          const productDetailGallry = await gallery.create(productDetailGalleryJson);

          // const maxId = await gallery.findMax();
          // const maxIdNumber = Object.entries(maxId[0])[0][1];
          // console.log('i will see', maxIdNumber);

          await productDetails.create({ product_id: created.id, image: productDetailGallry.id });

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

      const products = await product.getProduct({});

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

  addProductDetail: async (data) => {
    try {
      let msgDy;
      let actionStatus;

      const ifExist = await product.findSingle({ id: data.product_id });

      if (ifExist) {

        const ifUnique = await productDetails.findSingle({ skucode: data.skucode });

        if (!ifUnique) {

          const created = await productDetails.create(data);
          if(created){
            actionStatus = true; msgDy = MSG.DETAIL_ADDED;
          }else{
            actionStatus = true; msgDy = MSG.SOMETHING_WRONG;
          }

        } else {
          actionStatus = false; msgDy = MSG.SKU_CODE_EXIST;
        }


      } else {
        actionStatus = false; msgDy = MSG.PRODUCT_NOT_EXIST;
      }

      console.log('got here', data);

      return new ResponseData({
        status: 200,
        success: actionStatus,
        result: { data: "products" },
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
