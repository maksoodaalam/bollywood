const category = require('../dbServices/category.db.services');
const ResponseData = require('../helper/responseData');
const messages = require('../helper/messages.json');

module.exports = {

  addToCategory: async (data) => {
    try {
      let msgDy;
      let actionStatus;
      // console.log('the data we get', data);

      const condition = { name: data.name };

      const ifExist = await category.findSingle(condition);

      if (ifExist) {
        msgDy = "A category with the same name already exist";
        actionStatus = false;
      } else {

        if (data.parent_category !== undefined) {

          const ifExist = await category.findSingle({ id: data.parent_category });

          if (ifExist) {
            msgDy = "Category created";
            actionStatus = true;
            await category.create(data);
          } else {
            msgDy = "No parent category exist with given id.";
            actionStatus = false;
          }
        } else {
          msgDy = "Category created";
          actionStatus = true;
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
      console.log(messages.SOMETHING_WRONG, error);
      return new ResponseData({
        status: 200,
        success: false,
        result: { data: null },
        msg: messages.SOMETHING_WRONG,
      });
    }
  },

  fetchCategory: async () => {
    try {

      const allCategories = await category.findAll();
      let allEntries = Object.entries(allCategories);
      let all = {};
      let allArray = [];
      let allSubs = [];
      let k = 0;

      await Promise.resolve()
        .then(function () {
          for (let i = 0; i < allCategories.length; i++) {
            if (!allCategories[i].parent_category) {
              all[k] = allCategories[i].dataValues;
              allArray.push(allCategories[i].dataValues.id);
              k++;
            }
          }
        }).then(() => {
          for (let k = 0; k < allCategories.length; k++) {
            for (let z = 0; z < allArray.length; z++) {
              if (allCategories[k].parent_category == allArray[z]) {
                // console.log('will see', z);
                all[`${z}`][`sub_category_${z}`] = allCategories[k];
                allSubs.push(allCategories[k]);
              }
            }
          }
        }).then(() => {
          // for (let n = 0; n < allSubs.length; n++) {
          //   if (allSubs[n].parent_category) {
          //     for (let q = 0; q < allEntries.length; q++) {
          //       if (allSubs[n].id == allEntries[q][1].dataValues.parent_category) {
          //         // console.log('will see ', all[`${n}`].sub_category.dataValues);
          //         all[`${n}`].sub_category.dataValues['sub_category'] = allCategories[q];
          //       }
          //     }
          //   }
          // }
        });



      return new ResponseData({
        status: 200,
        success: true,
        result: { data: all },
        msg: "All categories",
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
  }
}