'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('menu_permissions', [{
      menu_id: 1,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
  
    {
      menu_id: 2,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 3,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 4,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 5,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 6,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 7,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 8,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 9,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 10,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 11,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 12,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 13,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 14,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 15,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 16,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 17,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 18,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 19,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 20,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 21,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 22,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 23,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 24,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },
    {
      menu_id: 25,
      outer_group_id: 1,
      role_id:1,
      read_permission: 1,
      edit_permission: 1,
      add_permission: 1,
      delete_permission: 1
    },

  ]);
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('menu_permissions', null, {});
  }
};
