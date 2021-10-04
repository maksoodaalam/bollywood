'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('dispo_fields', [{
      fieldName: 'Inputbox',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        fieldName: 'Selectbox',
      createdAt: new Date(),
      updatedAt: new Date()
      
      },
      {
        fieldName: 'Checkbox',
      createdAt: new Date(),
      updatedAt: new Date()
      
      },
      {
        fieldName: 'Radiobox',
      createdAt: new Date(),
      updatedAt: new Date()
      
      },
      {
        fieldName: 'Datetime',
      createdAt: new Date(),
      updatedAt: new Date()
      
      },
      {
        fieldName: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
      
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('dispo_fields', null, {});

  }
};
