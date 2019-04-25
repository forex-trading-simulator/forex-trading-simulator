'use strict';
const random = require('../helpers/randomNnumber')
module.exports = (sequelize, DataTypes) => {
  const Currency = sequelize.define('Currencies', {
    name: DataTypes.STRING,
    value: DataTypes.INTEGER
  }, {
    hooks: {
      afterFind: function(result) {
          for (let i = 0; i < result.length; i++) {
            let gotRandom = random(1000,5000)
            result[i].value += gotRandom
            
          }
          return result;
      }
    }
  });
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