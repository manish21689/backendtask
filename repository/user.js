var { sequelize } = require('../config/dbconfig')
var User = require('../models/user');
const Createdata = async (data) => {
    try {
        const result = await User.create(data);
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const getAll = async () => {
    try {
        const result = await User.findAll();
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const getById = async (id) => {
    try {
        const result = await User.findAll({ where: { id: id } });
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}

const updateById = async (data, id) => {
    try {
        const result = await User.update(data, { where: { id: id } });
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const deletetById = async (id) => {
    try {
        const result = await User.destroy({ where: { id: id } });
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const rcounts = async () => {
    try {
        const result = await User.count();
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const gettaskbylistid = async (var1, var2, var3) => {
    try {
        const result = await sequelize.query("select a.task_data,a.completed,a.lid,b.uid,b.id,b.option from tasks a join lists b on a.lid=b.id join users c on b.uid=c.id and c.id=? and b.id=? and a.completed=?",
            { replacements: [var1, var2, var3], type: sequelize.QueryTypes.SELECT });
        console.log(result)
        return [result, null];

    } catch (error) {
        console.log(error)
        return [null, error];
    }
}
const gettasks = async (var1) => {
    try {
        const result = await sequelize.query("select a.task_data,a.completed,a.lid,b.uid,b.id,b.option from tasks a join lists b on a.lid=b.id join users c on b.uid=c.id and c.id=? and b.option='Play'",
            { replacements: [var1], type: sequelize.QueryTypes.SELECT });
        console.log(result)
        return [result, null];

    } catch (error) {
        console.log(error)
        return [null, error];
    }
}
module.exports = {
    Createdata, getAll, getById, updateById, deletetById,
    rcounts, gettaskbylistid, gettasks
}