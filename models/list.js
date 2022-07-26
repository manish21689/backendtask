const { sequelize } = require('../config/dbconfig');
const { DataTypes } = require("sequelize");
const List = sequelize.define('list', {
    list_details: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    uid: {
        type: DataTypes.INTEGER,
        allowNull: false
        
    },
    option: {
        type: DataTypes.STRING,
        allowNull: false,
        enum:['Play','Pause'],
        defaultValue:'Play'
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        enum:['Completed','Pending'],
        defaultValue:'Pending'
    }

})
try {
    List.sync({ force: false });    
    console.log("The table for the List model was just (re)created!");
} catch (error) {
    console.log("Some problem Occured");    
}
 
module.exports=List;