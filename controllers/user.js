var crepository = require('../repository/user')
const bcrypt = require('../helpers/utils')
var Createdata = async (req, res) => {
    console.log(req.body)
    const hashed=bcrypt.encpwd(req.body.password)
    const newdata = {
        name: req.body.name,
        id: req.body.id,
        cid: req.body.cid,
        salary: req.body.salary,
        job: req.body.job,
        password: hashed,
        email:req.body.email
    }
    const [result, err] = await crepository.Createdata(newdata);
    
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

var gettaskbylistid = async (req, res) => {
    const [result, err] = await crepository.gettaskbylistid(req.params.id,req.params.lid,req.params.status);
    
    if (err) {
        return res.status(400).json("Error in raw Query")
    }
    else {
        return res.status(200).json(result);
    }

}

var gettasks = async (req, res) => {
    const [result, err] = await crepository.gettasks(req.params.id);
    
    if (err) {
        return res.status(400).json("Error in raw Query")
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

module.exports = { Createdata, getAll, getById,updateById,deletetById,rcounts,gettaskbylistid,gettasks }
