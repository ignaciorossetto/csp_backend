const express = require('express');
const config = require('./config/config');
const errorHandler = require('./middlewares/errorHandler.middleware')
const indexRoutes = require('./routes/index');
const badRequest = require('./middlewares/badRequest.middleware');
const sequelize = require('./database/db');
const app = express();
const Category = require('./database/models/Category')
const Project = require('./database/models/Project')
const Quote = require('./database/models/Quote')
const Supplier = require('./database/models/Supplier')
const Supply = require('./database/models/Supply')
const User = require('./database/models/User')
const cors = require('cors')


//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors('*'))

//routes
app.use('/api/v1', indexRoutes)
app.use('/', (req, res, next) =>{
    res.json({
        status: 'OK'
    })
})
//error middleware
app.use(errorHandler)

//bad request middleware
app.use(badRequest)


sequelize.sync({alter: true}).then(()=> {
    console.log('db connected successfully')
    app.listen(config.port, ()=> {
        console.log(`Listening on port ${config.port}`);
    })
}).catch((error)=> {
    console.log(error)
    process.exit()
})
