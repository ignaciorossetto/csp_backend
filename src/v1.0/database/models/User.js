const sequelize = require("../db");
const {DataTypes} = require('sequelize');
const UserType = require("./UserType");

const User = sequelize.define("User", {
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  address: {
    type: DataTypes.STRING,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  
});

UserType.hasMany(User, {
  foreignKey: 'id_userType',
})
User.belongsTo(UserType, {
  foreignKey: 'id_userType',
})



module.exports = User;
