'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('licenses', [{
      licenseId: 'license9QPlAKLo_',
          outerGroupId: 1,
          createdDate: new Date(),
          expiryDate: new Date((new Date()).getTime() + (180 * 86400000)),
          duration: '180',
     
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('licenses', null, {});

  }
};