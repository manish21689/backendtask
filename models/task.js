const { sequelize } = require('../config/dbconfig');
const { DataTypes } = require("sequelize");
const Task = sequelize.define('task', {
    task_data: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    lid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:false
    },
})
try {
    Task.sync({ force: false });
    console.log("The table for the Task model was just (re)created!");
} catch (error) {
    console.log("Some problem Occured");
}
module.exports = Task;