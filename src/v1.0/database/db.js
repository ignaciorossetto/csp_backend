const Sequelize = require('sequelize');
const config = require('../config/config');


const sequelize = new Sequelize(config.db_name, config.db_username, config.db_password, {
    dialect: 'mysql',
    host:config.db_host,
    port: config.db_port,
    logging: false,
})


module.exports = sequelize
