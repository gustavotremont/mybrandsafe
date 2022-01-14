/****************** Nodejs Dependencies ******************/
const express = require('express')
const logger = require('morgan');

/****************** Project Dependencies ******************/


/****************** Import routes ******************/


/****************** Enable Express ******************/
const app = express()
const port = process.env.PORT || 5000;

/****************** Express Settings ******************/
app.use(express.json()); //Para habilitar envio de JSON al servidor
app.use(express.urlencoded( { extended: false } )); //Habilita la lectura del body por metodo post
app.use(logger('dev')) // habilitar Morgan con preset dev

/****************** Routes ******************/


/****************** Actice Server ******************/
app.listen(port, () => {
    console.log(`ServerOn http://localhost:${port}`)
})