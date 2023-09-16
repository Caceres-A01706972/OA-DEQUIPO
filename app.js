const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

const port = 3000;
app.set("port", port);

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(flash());

app.use(session({
    secret: 'kf2enkIEN8Y3NJ3OJN4', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const homeRoutes = require('./routes/home.routes.js');
app.use('/', homeRoutes);

app.listen(port, ()=>{
    console.log("APP RUNNING en port " + port);
});

module.exports = app;
