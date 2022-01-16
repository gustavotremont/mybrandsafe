const express = require('express');
const router = express.Router();
const assets = require('../controllers/assets') 

router.post('/assets/:userUUID', assets.createAssets )
router.get('/assets/:userUUID', assets.getAssetsByUser )
router.put('/assets/:userUUID', assets.updateAssets )

module.exports = router;