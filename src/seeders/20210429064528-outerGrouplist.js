'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('outergroups', [{
      groupName:'OneTouch',
      userName: 'jojijohn',
      firstName: 'Joji',
      lastName:'John',
      email: 'jojijohn@gmail.com',
      password: '123456',
      contact: '9929207331',
      address: '604,okay plus mansarovar',
      state: 'rajasthan',
      country: 'India',
      users: 10, 
      licenseId: 'license9QPlAKLo_',
      status: 'PAUSE',
      createdDate:Sequelize.literal('CURRENT_TIMESTAMP'),
  }]);
   
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('outergroups', null, {});
  }
};
