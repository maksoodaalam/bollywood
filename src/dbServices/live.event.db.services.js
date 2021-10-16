const { liveEvent, logins } = require('../models');
const models = require('../models');
module.exports = {
    findAll: async (condition={}) => {
        return await liveEvent.findAll({ where: condition })
    },

    findAllWithUserName: async (condition={}) => {
      return await liveEvent.findAll({ 
        where: condition,
        include: [
          {
            model: logins,
            required: false
          }
        ] 
      })
    },
    findSingle: async (condition) => {
        return await liveEvent.findOne({where: condition});
    },
    update:async(data,conditions) =>{
        return await liveEvent.update(data, {where: conditions});

     },
     delete: async (condition) => {
        return await liveEvent.destroy({ where: condition });
    },
    create: async (eventdata) => {
        return await liveEvent.create(eventdata);
    },

    customQuery: async (sql) => {
      const result = await models.sequelize.query(sql);
      return result[0] || [];
    }

}   