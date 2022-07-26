const { sequelize } = require('../config/dbconfig');
const { DataTypes } = require("sequelize");
const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    cid: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    job: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        validate: {
            isEmail: true
        },
        unique: {
            args: 'email',
            msg: 'The email is already taken!'
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        validate: {
            min: 4

        }}
    })

try {
    User.sync({ force: false });
    console.log("The table for the User model was just (re)created!");
} catch (error) {
    console.log("Some problem Occured");
}

module.exports = User;