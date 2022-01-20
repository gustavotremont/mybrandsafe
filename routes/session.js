const express = require('express');
const routes = express.Router();
const session = require('../controllers/session')

routes.post('/session/login', (req, res, next) => {
    session.login(req, res, next);
}) 
routes.post('/session/logout', session.logout)
routes.post('/session/auth', session.authSession)

module.exports = routes;