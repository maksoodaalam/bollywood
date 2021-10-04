'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('phones', [{
      user_id: 'jojijohn',
      extension: '801',
      server_ip: '78.138.98.114',
      createdAt: new Date(),
      updatedAt: new Date()
  }]);
      
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('phones', null, {});
  }
};
