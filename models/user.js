'use strict';

const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          len: {
              args: [6, 128],
              msg: "Email address must be between 6 and 128 characters in length"
          },
          isEmail: {
              msg: "Email address must be valid"
          }
      }
  },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          len: {
              args: [5, 15],
              msg: "username must be atleast 5 and maxmium 15 characters in length"
          }
      }
  },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: {
              args: [5, 15],
              msg: "password must be atleast 5 and maxmium 15 characters in length"
          }
      }
},
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