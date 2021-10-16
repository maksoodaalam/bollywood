const { users_table } = require('../models');

module.exports = {

  create: async (data) => {
    return await users_table.create(data);
  },

  findAll: async (conditions = {}) => {
    return await users_table.findAll({ where: conditions });
  },

  findSingle: async (condition) => {
    return await users_table.findOne({ where: condition });
  },

  update: async (value, condition) => {
    return await users_table.update(value, { where: condition });
  },

  delete: async (condition) => {
    return await users_table.destroy({ where: condition });
  }

}