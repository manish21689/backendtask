var List = require('../models/list');
const Createdata = async (data) => {
    try {
        const result = await List.create(data);
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const getAll = async () => {
    try {
        const result = await List.findAll();
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const getById = async (id) => {
    try {
        const result = await List.findAll({where:{id:id}});
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}

const updateById = async (data,id) => {
    try {
        const result = await List.update(data,{where:{id:id}});
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const deletetById = async (id) => {
    try {
        const result = await List.destroy({where:{id:id}});
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
const rcounts = async () => {
    try {
        const result = await List.count();
        return [result, null];
    } catch (error) {
        return [null, error];
    }
}
module.exports={Createdata,getAll,getById,updateById,deletetById,
                rcounts}