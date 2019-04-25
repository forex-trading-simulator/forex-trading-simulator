'use strict';
const crypto = require('crypto')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate : function(user){
        const secret = 'wakanda'
        const hash = crypto.createHmac('sha256',secret)
                                      .update(user.password)
                                      .digest('hex')
        user.password = hash
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};