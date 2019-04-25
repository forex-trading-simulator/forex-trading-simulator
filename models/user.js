'use strict';

const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    rupiahBalance: DataTypes.INTEGER,
    dollarBalance: DataTypes.INTEGER,
    euroBalance: DataTypes.INTEGER,
    poundsBalance: DataTypes.INTEGER
  },{});
  
  User.associate = function(models) {
    User.hasMany(models.Transactions, {
          foreignKey: 'userId'
    })
    
    // User.belongsToMany(models.Currencies,{
    //   through: 'Transactions',
    //   foreignKey: 'userId'
    // })
  };
  User.prototype.getFullName = function() {
    return [this.firstName, this.lastName].join(" ")
  }
  
  return User;
};