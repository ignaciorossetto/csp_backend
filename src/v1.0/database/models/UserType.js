const sequelize = require("../db");
const {DataTypes} = require('sequelize');
const User = require("./User");

const UserType = sequelize.define("UserType", {
  id_userType: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.STRING
  },
});



module.exports = UserType;
