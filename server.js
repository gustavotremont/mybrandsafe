/****************** Nodejs Dependencies ******************/
const express = require("express");
const logger = require("morgan");
const path = require("path");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport')

const { sequelize } = require("./models");

/****************** Import routes ******************/
const usersRoutes = require('./routes/users')
const assetsRoutes = require('./routes/assets')
const reportsRoutes = require("./routes/reports");
const sessionRoutes = require("./routes/session");

/****************** Enable Express ******************/
const app = express();
const port = process.env.PORT || 5000;

/****************** Express Settings ******************/
app.disable('x-powered-by');
app.use(express.json()); //Para habilitar envio de JSON al servidor
app.use(express.urlencoded({ extended: false })); //Habilita la lectura del body por metodo post
app.use(express.static(path.join(__dirname, "client/build")));
app.use(cookieParser()); //Permite trabajar con cookies
app.use(cors()); //Inhabilita el error de CORS
app.use(logger('dev')); // habilitar Morgan con preset dev
app.use(passport.initialize());

/****************** Passport Strategies ******************/
const passportStrategies = require('./utils/passport')
passportStrategies.passportJWTStrategy(passport); //habilita el cliente

/****************** Routes ******************/
app.use('/api', usersRoutes)
app.use('/api', assetsRoutes)
app.use("/api", reportsRoutes);
app.use("/api", sessionRoutes);
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

/****************** Actice Server ******************/
app.listen(port, async () => {
  console.log(`ServerOn http://localhost:${port}`);
  await sequelize.authenticate();
  console.log("Database Connected");
});
