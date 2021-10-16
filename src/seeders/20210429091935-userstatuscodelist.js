'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_status_code', [{
      status: 'PAUSE',
      status_code: 'break',
      type: 'default',
      manager_approval: 'No',
      timer:30,
    },
    {
      status: 'PAUSE',
      status_code: 'lunch break',
      type: 'default',
      manager_approval: 'No',
      timer:30,
    },
    {
      status: 'PAUSE',
      status_code: ' loo break',
      type: 'default',
      manager_approval: 'No',
      timer:30,
    },
    {
      status: 'PAUSE',
      status_code: ' sutta break',
      type: 'default',
      manager_approval: 'No',
      timer:30,
    },
    {
      status: 'BUSY',
      status_code:'busy in meeting',
      type: 'default',
      manager_approval: 'No',
      timer:0,
    },
    {
      status: 'BUSY',
      status_code: 'busy on call',
      type: 'default',
      manager_approval: 'No',
      timer:0,
    },
  ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_status_code', null, {});

  }
};