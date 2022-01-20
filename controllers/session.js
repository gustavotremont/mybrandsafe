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
                    
                    const token = jwt.sign({ credential: user.email }, process.env.JWT_SECRET, {
                        expiresIn: '1d'
                    });
    
                    res.cookie('access_token', token, {
                        expires: new Date(Date.now() + 18000000),
                        secure: false, // set to true if your using https
                        httpOnly: true,
                    })
                    .status(200)
                    .json({ status: 'success', msg: 'Login Success', credential: user.email })
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

// const authSession = async (req, res) => {
//     const { credential } = req.query
//     try {
//         if (req.cookies['access_token']) {
//             jwt.verify(req.cookies['access_token'], process.env.JWT_SECRET, (err, decoded) => {
//                 decoded.credential === credential
//                     ? res.status(200).json({ status: true, msg: 'is login' })
//                     : res.status(401).json({ status: false, msg: 'is not login' })
//             });
//         } else {
//             res.status(401).json({ status: 'error', msg: 'is not login' })
//         }
//     } catch (err) {
//         res.status(401).json({ status: false, msg: 'session terminated due to an unexpected error' })
//     }
// }

// const authUserReturn = async (req, res) => {
//     try {
//         if (req.cookies['access_token']) {
//             jwt.verify(req.cookies['access_token'], process.env.JWT_SECRET, (err, decoded) => {
                
//             });
//         } else {
//             res.status(401).json({ status: 'error', msg: 'is not login' })
//         }
//     } catch (err) {
//         res.status(401).json({ status: false, msg: 'session terminated due to an unexpected error' })
//     }
// }

const authSession = async (req, res) => {
    const { credential, userReturn } = req.query
    try {
        if (req.cookies['access_token']) {
            jwt.verify(req.cookies['access_token'], process.env.JWT_SECRET, async (err, decoded) => {
                console.log(decoded)
                if(userReturn) {
                    const user = await Users.findOne({ where: { email: decoded.credential }})
                    user
                        ? res.status(200).json({ status: true, msg: 'is login', credential: user.email })
                        : res.status(401).json({ status: false, msg: 'the user is not register in the database' })
                } else {
                    credential === decoded.credential
                        ? res.status(200).json({ status: true, msg: 'is login', credential })
                        : res.status(401).json({ status: false, msg: 'is not login' })
                }
            });
        } else {
            res.status(401).json({ status: 'error', msg: 'is not login' })
        }
    } catch (err) {
        res.status(401).json({ status: false, msg: 'session terminated due to an unexpected error' })
    }
}

const session = {
    login,
    logout,
    authSession,
}

module.exports = session