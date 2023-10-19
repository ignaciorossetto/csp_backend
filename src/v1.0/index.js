const express = require('express');
const config = require('./config/config');
const errorHandler = require('./middlewares/errorHandler.middleware')
const indexRoutes = require('./routes/index');
const badRequest = require('./middlewares/badRequest.middleware');
const sequelize = require('./database/db');
const app = express();
const cors = require('cors');
const corsOptions = require('./utils/corsConf');


//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

//routes
app.use('/api/v1', indexRoutes)

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
    console.error(error)
    process.exit(1)
})
