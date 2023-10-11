const { categoryArr, supplierArr, supplyArr, projectsArr } = require('../../../../file');
const Category = require('../../database/models/Category');
const Project = require('../../database/models/Project');
const Supplier = require('../../database/models/Supplier');
const Supply = require('../../database/models/Supply');

const router = require('express').Router();

router.get('/', async(req,res,next)=> {
    try {
        await Category.bulkCreate(categoryArr)
        await Supplier.bulkCreate(supplierArr)
        await Supply.bulkCreate(supplyArr)
        await Project.bulkCreate(projectsArr)
        res.json(({
            success: true,

        }))
    } catch (error) {
        console.log(error)
        next(error)
    }
   
})


module.exports = router