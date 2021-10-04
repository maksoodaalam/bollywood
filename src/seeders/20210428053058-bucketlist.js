'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bucket', [{
      bucketName: 'Happy',
      createdAt: new Date(),
      updatedAt: new Date()
    }, { 
      bucketName: 'Unhappy',
      createdAt: new Date(), 
      updatedAt: new Date()
    },
    {
      bucketName: 'Netural',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bucket', null, {});
  }
};





