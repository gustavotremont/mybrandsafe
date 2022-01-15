const { Reports } = require('../models')
const { Op } = require("sequelize");

const createReport= async (req, res) => {

    try {
    
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: 'error', err })
    } 
}

const getReportsByUser = async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: 'error', err })
    }
}

const getReportByUUID = async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: 'error', err })
    }
}

const updateReport= async (req, res) => {
    
    try {
        
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: 'error', err }) 
    }
}

const deleteReport= async (req, res) => {

    try {
      
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: 'error', err })
    }
}


const reports = {
    createReport,
    getReportsByUser,
    getReportByUUID,
    updateReport,
    deleteReport
}

module.exports = reports