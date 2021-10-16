'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_status', [{
      status:'LIVE',
    },
    {
      status:'BUSY',
    },
    {
      status:'PAUSE',
    },
  ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_status', null, {});

  }
};