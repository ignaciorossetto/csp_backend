const sequelize = require("../db");
const {DataTypes} = require('sequelize')


const Supplier = sequelize.define("Supplier", {
  id_supplier: {
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
});
module.exports = Supplier;
