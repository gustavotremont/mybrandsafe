const { Users } = require('../models')
const { Op } = require("sequelize");
const { fieldUserValidation, fieldUserExist } = require('../utils/userValidation')
const bcrypt = require('../utils/cryptPassword')

const createUser= async (req, res) => {
    const { email, password, repeatPassword, name, address, cif } = req.body
    let errors = []
    try {
        errors = fieldUserValidation(email, password, repeatPassword, name, address, cif)

        if(errors.length > 0){
            return res.status(400).json({ status: 'error', errors })

        }else{
            const usersExist = await Users.findAll({ 
                where: {
                    [Op.or] : [ {email}, {name}, {cif} ]
                } 
            })

            if(usersExist.length > 0){
                errors = fieldUserExist(usersExist, email, name, cif)
                return res.status(400).json({ status: 'error', errors })

            }else{
                const cryptPassword = await bcrypt.hashPassword(password)
                const user = await Users.create({email, password: cryptPassword, name, address, cif})
                return res.status(200).json({ status: 'success', user })
            }
        }      
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: 'error', err })
    } 
}

const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({ attributes: { exclude: ['id', 'password', 'createdAt', 'updatedAt'] } })
        return res.status(200).json({ status: 'success', users })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: 'error', err })
    }
}

const getUserByUUID = async (req, res) => {
    const { uuid } = req.params
    try {
        const user = await Users.findOne({
            where: { uuid },
            attributes: { exclude: ['id', 'password', 'createdAt', 'updatedAt'] },
            include: {
                association: 'assets',
                attributes: ['uuid', 'domains', 'emails', 'images']
            }
        })
        return res.status(200).json({ status: 'success', user })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: 'error', err })
    }
}

const updateUser= async (req, res) => {
    const { uuid } = req.params
    const { email, name, address, cif } = req.body
    let errors = []
    try {
        errors = fieldUserValidation(email, 'notneccesary', 'notneccesary', name, address, cif)

        if(errors.length > 0){
            return res.status(400).json({ status: 'error', errors })

        }else{
            const user = await Users.findOne({ where: {uuid} })

            const usersExist = await Users.findAll({ 
                where: {      
                    [Op.or] : [ {email}, {name}, {cif} ]    
                } 
            })

            const usersExistFilter = usersExist.filter(userExist => {
                return userExist.name !== user.name || userExist.email !== user.email || userExist.cif !== user.cif
            })

            if(usersExistFilter.length > 0){
                errors = fieldUserExist(usersExistFilter, email, name, cif)
                return res.status(400).json({ status: 'error', errors })

            }else{
                user.email = email
                user.name = name
                user.address = address
                user.cif = cif

                await user.save()
                return res.status(200).json({ status: 'success', user })
            }
        }  
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: 'error', err }) 
    }
}

const deleteUser= async (req, res) => {
    const { uuid } = req.params
    try {
        const user = await Users.findOne({ where: {uuid} })
        await user.destroy()
        return res.status(200).json({ status: 'success', user })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: 'error', err })
    }
}


const users = {
    createUser,
    getUsers,
    getUserByUUID,
    updateUser,
    deleteUser
}

module.exports = users