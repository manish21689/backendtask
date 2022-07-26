// var db= require('./config/dbconfig.js');
// var Master= require('./models/master')
var Server=require('./server')
const app =Server.initializeServer();
app.listen(process.env.PORT||3000,err=>{
console.log(`sever is running on port${process.env.PORT}`)
})