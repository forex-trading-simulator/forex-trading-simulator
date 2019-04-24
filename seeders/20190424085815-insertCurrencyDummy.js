'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Currencies', [{
      name: 'USD',
      value: 14000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'EUR',
      value: 16000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'GBP',
      value: 18000,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Curencies', null, {});
  }
};
