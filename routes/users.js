const express = require('express');
const router = express.Router();
const users = require('../controllers/users') 

router.post('/users', users.createUser )
router.get('/users', users.getUsers )
router.get('/users/:uuid', users.getUserByUUID )
router.put('/users/:uuid', users.updateUser )
router.delete('/users/:uuid', users.deleteUser )

module.exports = router;