const jwt = require("jsonwebtoken")

const authenticated = async (req, res, next) => {
    console.log("Authenticating user")
    const token = req.cookies.token
    if (token) {
        try {
            const data = await jwt.verify(token, process.env.TOKEN_SECRET)
            if (data.auth) next()
            else return res.status(401).end();
        } catch (err) {
            return res.status(401).end();
        }
    } else {
        return res.status(401).end();
    }
}
const masterOnly = async (req, res, next) => {
    console.log("Master only!")
    const token = req.cookies.token
    if (token) {
        try {
            const data = await jwt.verify(token, process.env.TOKEN_SECRET)
            if (data.isMaster) next()
            else return res.status(401).end();
        } catch (err) {
            return res.status(401).end();
        }
    } else {
        return res.status(401).end();
    }
}
module.exports = {
    masterOnly,
    authenticated
}