const router = require('express').Router();
const suppliesRoute = require('./suppliesRoute/supplies.route.js')
const quotesRoute = require('./quotesRoute/quotes.route.js')
const infoRoute = require('./infoRoute/info.route.js')

router.use('/supplies', suppliesRoute)
router.use('/quotes', quotesRoute)
router.use('/info', infoRoute)


module.exports = router