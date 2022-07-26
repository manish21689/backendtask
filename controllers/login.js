const userRepository = require("../repository/user")
const utils = require("../helpers/utils")
require('dotenv').config()
const Login = async (req, res) => {
    var id = req.body.id
    var password = req.body.password
    let resultFromDB;
    if (!id || !password) { return res.send("Provide details..") }
    const [result, err] = await userRepository.getById(id)
    resultFromDB = result[0];
    const ismatched = utils.dcrpwd(req.body.password, resultFromDB.password)
    if (!ismatched) {
        return res.status(401).send("Token not Matched So Login failed")
    }
    const user = {
        id: req.body.id,
        password: req.body.password,
        email: resultFromDB.email
    }
    const token = utils.generateToken(user)
    req.user = user;
    req.session=user;
    res.status(200).send({ msg: "login Successful..", token })
}
module.exports = { Login }