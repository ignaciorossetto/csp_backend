const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const Category = sequelize.define('Category', {
    id_category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    },
    
}, { timestamps: false })

module.exports = Category
 