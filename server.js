/****************** Nodejs Dependencies ******************/
const express = require('express')
const logger = require('morgan');
const path = require('path');
require('dotenv').config();

const { sequelize } = require('./models')

/****************** Project Dependencies ******************/


/****************** Import routes ******************/


/****************** Enable Express ******************/
const app = express()
const port = process.env.PORT || 5000;

/****************** Express Settings ******************/
app.use(express.json()); //Para habilitar envio de JSON al servidor
app.use(express.urlencoded( { extended: false } )); //Habilita la lectura del body por metodo post
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev')) // habilitar Morgan con preset dev

/****************** Routes ******************/
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

/****************** Actice Server ******************/
app.listen(port, () => {
    console.log(`ServerOn http://localhost:${port}`)
    await sequelize.authenticate()
    console.log('Database Connected');
})