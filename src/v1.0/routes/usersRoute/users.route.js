const User = require('../../database/models/User');
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
            password: hashedPassword
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
        const user = await User.findOne({where: {
            email: req.body.email
        }})
        console.log('first', user)
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


module.exports = router