const dotenv = require('dotenv');
const {Command} = require('commander');
const program = new Command()

program.option('--mode <mode>', 'deployment mode', 'production')
program.parse()

const environment = program.opts().mode

dotenv.config({
    path: environment == "test" ? './.env.test' : environment == 'dev' ? './.env.dev' : './.env'
})

dotenv.config()



module.exports = {
    port: process.env.PORT || 8001,
    db_name: process.env.DB_NAME,
    db_username: process.env.DB_USERNAME,
    db_password: process.env.DB_PASSWORD,
    db_port: process.env.DB_PORT,
    db_host: process.env.DB_HOST
}