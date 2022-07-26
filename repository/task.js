var Task = require('../models/task');
const Createdata = async (data) => {
    try {
        const result = await Task.create(data);
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const getAll = async () => {
    try {
        const result = await Task.findAll();
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const getById = async (id) => {
    try {
        const result = await Task.findAll({where:{id:id}});
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}

const updateById = async (data,id) => {
    try {
        const result = await Task.update(data,{where:{id:id}});
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const deletetById = async (id) => {
    try {
        const result = await Task.destroy({where:{id:id}});
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const rcounts = async () => {
    try {
        const result = await Task.count();
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
module.exports={Createdata,getAll,getById,updateById,deletetById,
                rcounts}