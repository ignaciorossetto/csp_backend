const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const Supply = require("./Supply");
const Supplier = require("./Supplier");
const Project = require("./Project");


const Quote = sequelize.define("Quote", {
  id_quote: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    primaryKey: true,
    autoIncrement: true,
  },
  price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  dolar_rate: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  supply_dolar_price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});


Supply.hasMany(Quote, {
    foreignKey: 'id_supply',
})
Quote.belongsTo(Supply, {
    foreignKey: 'id_supply',
})

Supplier.hasMany(Quote, {
    foreignKey: 'id_supplier',
})
Quote.belongsTo(Supplier, {
    foreignKey: 'id_supplier',
})

Project.hasMany(Quote, {
    foreignKey: 'id_project',
})
Quote.belongsTo(Project, {
    foreignKey: 'id_project',
})

module.exports = Quote;
