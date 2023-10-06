const sequelize = require("../db");
const {DataTypes} = require('sequelize')


const Project = sequelize.define("Project", {
  id_project: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  address: {
    type: DataTypes.STRING,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});


module.exports = Project;
