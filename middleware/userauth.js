const utils = require('../helpers/utils')

const checkCredential = (req, res, next) => {
    const authorizationValue = req.headers["authorization"]
    if (!authorizationValue) {
        return sendUnathorizedResponse(res)
    }
    token = authorizationValue.substring(7)
    console.log(token)
    const payload = utils.parseToken(token)
    console.log(payload)
    console.log(req.user)
    if (!payload) return sendUnathorizedResponse(res)
    if (payload.user.email === req.session.email) return sendUnathorizedResponse(res)
    console.log("User Verified")
    next()
}

const sendUnathorizedResponse = (res) => {
    return res.status(401).send("Unauthorized")
}

module.exports = { checkCredential }