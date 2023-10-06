const sequelize = require("../db");
const {DataTypes} = require('sequelize');
const Category = require("./Category");


const Supply = sequelize.define("Supply", {
  id_supply: {
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
  }
});

Category.hasMany(Supply, {
  foreignKey: 'id_category',
})
Supply.belongsTo(Category, {
  foreignKey: 'id_category',
})


module.exports = Supply;
