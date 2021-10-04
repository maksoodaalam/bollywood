'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('menus', [{
      menu_name: 'Users',
      menu_label: 'Users',
      parent_menu: 0
    },
    {
      menu_name: 'Setting',
      menu_label: 'Setting',
      parent_menu: 0
    },{
      menu_name: 'Dialer',
      menu_label: 'Dialer',
      parent_menu: 0
    },
    {
      menu_name: 'SuperAdmin',
      menu_label: 'Super Admin',
      parent_menu: 0
    },
    {
      menu_name: 'User Information',
      menu_label: 'User Information',
      parent_menu: 1
    },
    {
      menu_name: 'Tools',
      menu_label: 'Tools',
      parent_menu: 1
    },
    {
      menu_name: 'Profile',
      menu_label: 'Profile',
      parent_menu: 2
    },
    {
      menu_name: 'Layout',
      menu_label: 'Layout',
      parent_menu: 2
    },
    {
      menu_name: 'DialerDashboard',
      menu_label: 'Dialer_Dashboard',
      parent_menu: 3
    },
    {
      menu_name: 'Admin Dashboard',
      menu_label: 'Admin Dashboard',
      parent_menu: 3
    },
    {
      menu_name: 'Tl Dashboard',
      menu_label: 'Tl_Dashboard',
      parent_menu: 3
    },
    {
      menu_name: 'Menu List',
      menu_label: 'Menu List',
      parent_menu: 4
    },
    {
      menu_name: 'Permission',
      menu_label: 'Permission',
      parent_menu: 4
    },
    {
      menu_name: 'User Group',
      menu_label: 'User Group',
      parent_menu: 5
    },
    {
      menu_name: 'User Role',
      menu_label: 'User Role',
      parent_menu: 5
    },
    {
      menu_name: 'User List',
      menu_label: 'User List',
      parent_menu: 5
    },
    {
      menu_name: 'Announcement',
      menu_label: 'Announcement',
      parent_menu: 6
    }, {
      menu_name:'MyCalender',
      menu_label: 'MyCalender',
      parent_menu: 6
    }, {
      menu_name: 'Task',
      menu_label: 'Task',
      parent_menu: 6
    }, {
      menu_name: 'data',
      menu_label: 'Data',
      parent_menu: 3
    }, {
      menu_name: 'Campaigns',
      menu_label: 'Campaigns',
      parent_menu: 3
    },
    {
      menu_name: 'Campaigns Setting',
      menu_label: 'Campaigns Setting',
      parent_menu: 3
    },
    {
      menu_name:'Campaign Data',
      menu_label: 'Campaign Data',
      parent_menu: 3
    },
    {
      menu_name: 'Pause Codes',
      menu_label: 'Pause Codes',
      parent_menu: 3
    },
    {
      menu_name: 'Dispositions',
      menu_label: 'Dispositions',
      parent_menu: 3
    },

  
  ]);

},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('menus', null, {});
  }
};