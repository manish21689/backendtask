var crepository = require('../repository/task')
var Createdata = async (req, res) => {
   
    const [result, err] = await crepository.Createdata(req.body);
    console.log(err);
    
    if (err) {
        return res.status(400).json("Can not create new records")
    }
    else {
        return res.status(200).json(result);
    }

}

var getAll = async (req, res) => {
    const [result, err] = await crepository.getAll({});
    
    if (err) {
        return res.status(400).json("Can not Fetch Records")
    }
    else {
        return res.status(200).json(result);
    }

}

var getById = async (req, res) => {
    const [result, err] = await crepository.getById(req.params.id);
    
    if (err) {
        return res.status(400).json("Can not Fetch Record By Id")
    }
    else {
        return res.status(200).json(result);
    }

}
var updateById = async (req, res) => {
    const [result, err] = await crepository.updateById(req.body,req.params.id);
    
    if (err) {
        return res.status(400).json("Can not update Records....")
    }
    else {
        console.log(result)
        return res.status(200).json({msg:"Records Updated Successfully"});
    }

}

var deletetById = async (req, res) => {
    const [result, err] = await crepository.deletetById(req.params.id);
    
    if (err) {
        return res.status(400).json("Can not Delete Records")
    }
    else {
        return res.status(200).json(result);
    }

}

const rcounts = async (req, res) => {
    const [result, err] = await crepository.rcounts()
    
    
    if (err) {
        return res.status(400).json("Error Occured in Counting")
    }
    else {
        return res.status(200).json(result);
    }

}

module.exports = { Createdata, getAll, getById,updateById,deletetById,rcounts }
