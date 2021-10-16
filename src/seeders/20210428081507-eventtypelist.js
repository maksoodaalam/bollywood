'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('eventtypes', [{
      eventname: 'login',
      color: '#888',
      outerGroup: '1'
     
  }]);
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('eventtypes', null, {});

  }
};
