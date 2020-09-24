const User = require("../../../database/models/user"),
    jwt = require('jsonwebtoken');

const find = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await User.findById(id)
        return res.status(200).json(doc)
    } catch (err) {
        return res.status(500).json({ msg: "Failed..." })
    }
}

const create = async (req, res) => {
    const userData = req.body.formData
    try {
        await User.create(userData)
        return res.status(200).json({ msg: "User created!" })
    } catch (err) {
        return res.status(500).json({ msg: "Failed..." })
    }
}

const update = async (req, res) => {
    const { id, newData } = req.body.formData
    try {
        await User.findByIdAndUpdate(id, newData, { upsert: false })
        return res.status(200).json({ msg: "Updated!" })
    } catch (err) {
        return res.status(500).json({ msg: "Failed..." })
    }
}

const remove = async (req, res) => {
    const id = req.body.id
    try {
        await User.findByIdAndDelete(id)
        return res.status(200).json({ msg: "User deleted" })
    } catch (err) {
        return res.status(500).json({ msg: "failed..." })
    }
}

const auth = async (req, res) => {
    const id = req.body.id
    const password = req.body.password

    try {

        const user = await User.findById(id)
        if (!user) return res.status(404).json({ msg: "User not found" })

        const match = await user.compare(password, user.password)
        if (!match) return res.status(401).json({ msh: "Wrong password" })

        let isMaster
        if (user.login) isMaster = true
        else isMaster = false

        jwt.sign({ isMaster: isMaster, id: user._id, auth: true }, process.env.TOKEN_SECRET, { algorithm: 'RS256' }, function (err, token) {
            if (err) return res.status(500).json({ msg: "failed..." })
            return res
                .status(200)
                .cookie('token', token, { httpOnly: true })
                .json({ auth: true, msg:"Login realizado com sucesso" })
        })

    } catch (err) {
        res.status(500).json({ msg: "failed..." })
    }
} 

const findAll = async(req, res)=> {
    try {
       const docs = await User.find({})
       res.status(200).json(docs)
    } catch(err){
        res.status(500).json({msg:"failed..."})
    }
}

module.exports  = {
    find, create, update, remove, auth, findAll
}