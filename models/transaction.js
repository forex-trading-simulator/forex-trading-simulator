'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transactions', {
    userId: DataTypes.INTEGER,
    currencyId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Transaction.associate = function(models) {
    Transaction.belongsTo(models.Users, {
      foreignKey: 'userId'
    })
    Transaction.belongsTo(models.Currencies, {
      foreignKey: 'currencyId'
    })
  };
  return Transaction;
};