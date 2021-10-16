const category = require('../dbServices/category.db.services');
const ResponseData = require('../helper/responseData');
const msg = require('../helper/messages.json');

module.exports = {

  addToCategory: async (data) => {
    try {
      let msgDy;
      let actionStatus;
      
      const condition = { name: data.name };

      const ifExist = await category.findSingle(condition);

      if (ifExist) {
        actionStatus = false; msgDy = msg.DUPLICATE_CAT_NAME;
      } else {

        if (data.parent_category !== 0) {

          const ifExist = await category.findSingle({ id: data.parent_category });

          if (ifExist) {
            actionStatus = true; msgDy = msg.CATEGORY_CREATED;
            await category.create(data);
          } else {
            actionStatus = false; msgDy = msg.PARENT_CAT_NOT_EXIST;
          }
        } else {
          actionStatus = true; msgDy = msg.CATEGORY_CREATED;
          await category.create(data);
        }
      }

      return new ResponseData({
        status: 200,
        success: actionStatus,
        result: { data: null },
        msg: msgDy,
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

  fetchCategory: async () => {
    try {
      const condition = { parent_category: 0 };
      const masterCategories = await category.findAll(condition);
      const allCatObj = await category.findAll(condition);

      const blankObj = {};

      const promises = masterCategories.map(async (item, key) => {
        const conditionSub = { parent_category: item.id };
        const childOfCurrent = await category.findAll(conditionSub);
        // console.log('childOfCurrent length', childOfCurrent);
        if (childOfCurrent.length >= 1) {
          const will = childOfCurrent.map(async (item, keyOne) => {
            // console.log('more childs', item.id);

            const thirdChild = await category.findAll({ parent_category: item.id });
            if (thirdChild.length >= 1) {
              thirdChild.map((thirdItem, thirdKey) => {
                // console.log('third level child', thirdChild[thirdKey].dataValues.id + ' of ' + item.id);
                item.dataValues[`sub_${thirdItem.name}`] = thirdItem;
              });
              // console.log(item.dataValues);
            } else {
              // console.log('this has no third level child');
              item.dataValues['sub_category'] = null;
            }

            allCatObj[key].dataValues[`sub_${item.name}`] = item;

          });

          await Promise.all(will).then(() => { });

        } else {
          allCatObj[key].dataValues['sub_category'] = null;
        }
        if (masterCategories.length == key + 1) {
          blankObj['data'] = allCatObj;
        }
      });

      // const willcheck = await category.findSingle({ parent_category: 13 });
      // console.log('willcheck length', willcheck);

      return await Promise.all(promises).then(() => {
        // console.log('Map Opration Successfully Completed', blankObj);
        return new ResponseData({
          status: 200,
          success: true,
          result: { data: blankObj },
          msg: "All categories",
        });
      })

      // console.log('at end at once will start again', result);


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
