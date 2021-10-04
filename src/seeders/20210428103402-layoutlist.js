'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('layout', [{
      user_id:'jojijohn',
      outer_group_id: 1,
      tabsColor: '$2e5249',
      theme_name: 'selected',
      sidebarColor: '#0d876e',
      iconColor:'#41effb',
      textColor:'#ffffff', 
      HeaderBackgroundColor: '#719480',
      status: 1,
      cost: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('layout', null, {});

  }
};
