require('dotenv').config();
var Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql'
    })
try {
    sequelize.authenticate();
    console.log('mysql connected by sequelize');
} catch (error) {
    console.log('Connextion Failed...');
}
module.exports = { sequelize }
