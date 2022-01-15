const { Assets } = require('../models')
const { Op } = require("sequelize");

const createAssets= async (req, res) => {

    try {
    
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: 'error', err })
    } 
}

const getAssetsByUser = async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: 'error', err })
    }
}

const updateAssets= async (req, res) => {
    
    try {
        
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: 'error', err }) 
    }
}

const deleteAssets= async (req, res) => {

    try {
      
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: 'error', err })
    }
}


const assets = {
    createAssets,
    getAssetsByUser,
    updateAssets,
    deleteAssets
}

module.exports = assets