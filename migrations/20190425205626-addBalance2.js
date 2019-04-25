'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all( [
      queryInterface.addColumn('Users','rupiahBalance', Sequelize.INTEGER),
      queryInterface.addColumn('Users','dollarBalance', Sequelize.INTEGER),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all ( [
      queryInterface.removeColumn('Users','rupiahBalance'),
      queryInterface.removeColumn('Users','dollarBalance')
    ])
  }
};
