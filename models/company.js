const { sequelize } = require('../config/dbconfig');
const { DataTypes } = require("sequelize");
const Country = sequelize.define('company', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
    }
   
})
try {
    Country.sync({ force: false });    
    console.log("The table for the Company model was just (re)created!");
} catch (error) {
    console.log("Some problem Occured");    
}
 
module.exports=Country;