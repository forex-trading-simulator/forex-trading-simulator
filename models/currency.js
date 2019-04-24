'use strict';
module.exports = (sequelize, DataTypes) => {
  const Currency = sequelize.define('Currencies', {
    name: DataTypes.STRING,
    value: DataTypes.INTEGER
  }, {});
  Currency.associate = function(models) {
    // associations can be defined here
  };
  return Currency;
};