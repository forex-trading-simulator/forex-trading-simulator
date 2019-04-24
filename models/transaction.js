'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transactions', {
    userId: DataTypes.INTEGER,
    currencyId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
  };
  return Transaction;
};