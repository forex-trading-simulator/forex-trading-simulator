'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all( [
      queryInterface.addColumn('Users','euroBalance', Sequelize.INTEGER),
      queryInterface.addColumn('Users','poundsBalance', Sequelize.INTEGER)
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all ( [
      queryInterface.removeColumn('Users','euroBalance'),
      queryInterface.removeColumn('Users','poundsBalance')
    ])
  }
};
