'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail:true
      },
      unique: {
          args: true,
          msg: 'Email address already in use!'
      },
      len: {
        args: [9, 35],
        msg: 'Please provide field within 9 to 35 characters.'
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 15],
          msg: 'Username Minimum 5 and maximum 15 character'
        },
        unique: {
          args: true,
          msg: 'username in use!'
        }

      }
      
    },
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};