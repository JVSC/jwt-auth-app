const mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    login: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

userSchema.method('compare', async (password, userPassword) => {
    return bcrypt.compare(password, userPassword)
})

module.exports = mongoose.model("User", userSchema)

