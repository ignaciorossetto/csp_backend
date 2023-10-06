const Supplier = require('../../database/models/Supplier');
const Supply = require('../../database/models/Supply');

const router = require('express').Router();

router.get('/add-quote/select', async(req,res,next)=> {
   try {
    const suppliers = await Supplier.findAll()
    const supplies = await Supply.findAll()
    res.json({
        status: 'OK',
        payload: {
            suppliers: suppliers,
            supplies: supplies
        }
    })
   } catch (error) {
    next(error)
   }
})


module.exports = router