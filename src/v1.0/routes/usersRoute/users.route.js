const User = require('../../database/models/User');
const UserType = require('../../database/models/UserType');
const { hashPassword, comparePassword } = require('../../utils/hashFunctions');
const router = require('express').Router();

router.post('/sign-up', async(req,res,next)=> {
    const {username, password, email} = req.body
   try {
        const user = await User.findOne({
            where: {
                email:email
            }
        })
        if(user) {
            return res.status(404).json({
                status: 'Error',
                message: 'Email ya esta registrado'
            })
        }
        const hashedPassword = hashPassword(password)
        const newUser = {
            username: username,
            email: email,
            password: hashedPassword,
            id_userType: 1
        }
        await User.create(newUser)
        res.status(200).json({
            status: 'OK',
            message: 'Usuario creado correctamente'
        })
   } catch (error) {
     next(error)
   }
})

router.post('/login', async(req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            },
            include: [{
                model: UserType,
                attributes: ['title']
            }]
    })
        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'Error en usuario/contraseña'
            })
        }
        if (!comparePassword(req.body.password, user.password)) {
            return res.status(404).json({
                status: 'error',
                message: 'Error en usuario/contraseña'
            })
        }
        const {password, ...other} = user.dataValues
        res.json({
            status: 'success',
            payload: other
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.get('/not-active', async(req,res,next)=>{
    try {
        const response = await User.findAll({
            where: {
                active: false
            }
        })
        console.log('not ative users: ', response)
        res.json({
            status: 'success',
            payload: response
        })

    } catch (error) {
        next(error)
    }
})
router.get('/activate/:id', async(req,res,next)=>{
    const id = req.params.id
    const del = req.query.del
    console.log('del: ', del)
    console.log('id: ', id)
    if (del) {
        try {
            await User.destroy(
                {
                    where: {id_user: id}
                }
            )
            return res.json({
                status: 'success',
                payload: 'User was successfully deleted'
            })
        } catch (error) {
            return next(error)
        }
    }
    try {
        const response = await User.update({active: true},
            {
            where: {
                active: false,
                id_user: id
            }
        })
        console.log('response', response)
        res.json({
            status: 'success',
            payload: 'User succesfully activated'
        })

    } catch (error) {
        next(error)
    }
})


module.exports = router