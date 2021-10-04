'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('inner_group', [{
      outer_group_id: 1,
      group_name: "Admin",
      group_role: "G1",
      depth: 1,
      group_parent_role: "G1",
      parent: 0,
  }]);
  
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('inner_group', null, {});
  }
};
