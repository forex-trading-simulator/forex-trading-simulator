'use strict';
module.exports = (sequelize, DataTypes) => {
  const Currency = sequelize.define('Currencies', {
    name: DataTypes.STRING,
    value: DataTypes.INTEGER
  }, {});
  Currency.associate = function(models) {
    Currency.hasMany(models.Transactions, {
      foreignKey: 'currencyId'
    })
    
    
    // Currency.belongsToMany(models.Users,{
    //   through: 'Transactions',
    //   foreignKey: 'currencyId'
    // })
  };
  return Currency;
  
};