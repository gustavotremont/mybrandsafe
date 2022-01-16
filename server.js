/****************** Nodejs Dependencies ******************/
const express = require("express");
const logger = require("morgan");
const path = require("path");
require("dotenv").config();

const { sequelize } = require("./models");

/****************** Project Dependencies ******************/

/****************** Import routes ******************/
const usersIndex = require('./routes/users')
const assetsIndex = require('./routes/assets')
const reportsIndex = require("./routes/reports");

/****************** Enable Express ******************/
const app = express();
const port = process.env.PORT || 5000;

/****************** Express Settings ******************/
app.use(express.json()); //Para habilitar envio de JSON al servidor
app.use(express.urlencoded({ extended: false })); //Habilita la lectura del body por metodo post
app.use(express.static(path.join(__dirname, "client/build")));
app.use(logger("dev")); // habilitar Morgan con preset dev

/****************** Routes ******************/
app.use('/api', usersIndex )
app.use('/api', assetsIndex )
app.use("/api", reportsIndex);
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

/****************** Actice Server ******************/
app.listen(port, async () => {
  console.log(`ServerOn http://localhost:${port}`);
  await sequelize.authenticate();
  console.log("Database Connected");
});
