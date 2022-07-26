var Country = require('../models/company');
const Createdata = async (data) => {
    try {
        const result = await Country.create(data);
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const getAll = async () => {
    try {
        const result = await Country.findAll();
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const getById = async (id) => {
    try {
        const result = await Country.findAll({where:{id:id}});
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}

const updateById = async (data,id) => {
    try {
        const result = await Country.update(data,{where:{id:id}});
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const deletetById = async (id) => {
    try {
        const result = await Country.destroy({where:{id:id}});
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const rcounts = async () => {
    try {
        const result = await Country.count();
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
module.exports={Createdata,getAll,getById,updateById,deletetById,
                rcounts}