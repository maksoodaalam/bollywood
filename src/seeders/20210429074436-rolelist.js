'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [{
      outer_group_id: '1',
      role_name: "Admin",
      role: "H1",
      parent_role_list: "H1",
      parent: 0,

    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});

  }
};