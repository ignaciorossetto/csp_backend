const bcrypt = require('bcrypt')

const hashPassword = (password) => {
    const hashedPassword = bcrypt.hashSync(password, 10)
    return hashedPassword
}

const comparePassword = (reqPswd, pswd) => {
    return bcrypt.compareSync(reqPswd, pswd)
}

module.exports = {
    hashPassword,
    comparePassword
}