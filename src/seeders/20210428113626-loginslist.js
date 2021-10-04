'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('logins', [{

      user_id:'jojijohn',
      first_name: 'joji',
      last_name: 'john',
      email: 'jojijohn@gmail.com',
      password:'$2a$10$qvvgszwh3Wq8szUh80oxJ.oyj93Z5lI/8AYisEniAO9N55zduf/zG',
      ip_address: '49.36.240.235',
      outer_group_id: '1',
      inner_group_id: '1',
      role_id: '1',
      status: "PAUSE",
      status_type: "",
      status_comment: "",
    }]);
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('logins', null, {});
  }
};
