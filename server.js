var express = require('express')
var session = require('express-session')
var bodyparser = require('body-parser');
var croute = require('./routes/country')
var uroute = require('./routes/user')
var lroute = require('./routes/list')
var troute = require('./routes/task')
var siroute = require('./routes/login');
const initializeServer = () => {
    var app = express();
    app.use(session({
    secret:'Honda',
    resave:false,
    saveUninitialized:false    
    }))
    app.use(express.json())
    app.use(bodyparser.urlencoded({ extended: true }))
    app.use(bodyparser.json());
    app.use('/company', croute);
    app.use('/user', uroute);
    app.use('/list', lroute);
    app.use('/task', troute);
    app.use('/login', siroute);
    return app;
}
module.exports = { initializeServer }