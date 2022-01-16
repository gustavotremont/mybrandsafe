const { Users } = require('../models')
const bcrypt = require('../utils/cryptPassword')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const { email, password } = req.body
    let errors = [];
    try {
        if(!email || !password ) {
            errors.push("Completa todos los campos")    
        } 

        if(errors.length > 0 ) {
            return res.status(403).json({ status: 'error', errors })
        } else {
            const user = await Users.findOne({ where: { email } })
            if (user) {
                const passwordMatch = await bcrypt.verifyPassword(password, user.password)
                if (passwordMatch) {
                    
                    const token = jwt.sign({ uuid: user.uuid, email: user.uuid }, process.env.JWT_SECRET, {
                        expiresIn: '1d'
                    });
    
                    res.cookie('access_token', token, {
                        expires: new Date(Date.now() + 18000000),
                        secure: false, // set to true if your using https
                        httpOnly: true,
                    })
                    .status(200)
                    .json({ status: 'success', msg: 'Login Success' })
                }else {
                    errors.push("las contraseñas es incorrecta")
                    return res.status(403).json({ status: 'error', errors })
                }
            } else {
                errors.push("Usuario no Registrado")
                return res.status(403).json({ status: 'error', errors })
            }
        }
    } catch (err) {
        console.log(err);
        return res.status(403).json({ status: 'error', err })
    }
}

const logout = (req, res) => {
    if (req.cookies['access_token']) {
        res
        .clearCookie('access_token')
        .status(200)
        .json({ status: 'success', msg: 'logout success' })
    } else {
        res.status(401).json({ status: 'error', msg: 'something go wrong' })
    }
}

const authLogin = async (req, res) => {
    if (req.cookies['access_token']) {
        jwt.verify(req.cookies['access_token'], process.env.JWT_SECRET, (err, decoded) => {
            decoded 
                ? res.status(200).json({ status: true, msg: 'is login' })
                : res.status(401).json({ status: false, msg: 'is not login' })
        });
    } else {
        res.status(401).json({ status: 'error', msg: 'something go wrong' })
    }
}

const session = {
    login,
    logout,
    authLogin
}

module.exports = session