const express = require('express');
const router = express.Router();
const reports = require('../controllers/reports') 

router.post('/reports/:userUUID', reports.createReport )
router.get('/reports/:userUUID', reports.getReportsByUser )
router.get('/reports/:uuid', reports.getReportByUUID )
router.delete('/reports/:uuid', reports.deleteReport )

module.exports = router;