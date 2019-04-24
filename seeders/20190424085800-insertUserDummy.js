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
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Deddy',
      lastName: 'Simamora',
      email: 'deddysimamora@gmail.com',
      username: 'deddysimamora',
      password: 'deddy',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Elia',
      lastName: 'Victor',
      email: 'eliavictor@gmail.com',
      username: 'eliavictor',
      password: 'elia',
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
   return queryInterface.bulkDelete('Users', null, {});
  }
};
