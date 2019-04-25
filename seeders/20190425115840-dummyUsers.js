'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
      firstName: 'Rini',
      lastName: 'Reno',
      email: 'rini@gmail.com',
      username: 'riniria',
      password: 'asdasd123',
      createdAt: new Date(),
      updatedAt: new Date(),
      rupiahBalance:  1000000,
      dollarBalance: 0,
      euroBalance: 0,
      poundsBalance: 0
      },
      {
      firstName: 'Seruni',
      lastName: 'Mira',
      email: 'seruni@gmail.com',
      username: 'maria',
      password: 'asdasd123',
      createdAt: new Date(),
      updatedAt: new Date(),
      rupiahBalance:  1000000,
      dollarBalance: 0,
      euroBalance: 0,
      poundsBalance: 0
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
