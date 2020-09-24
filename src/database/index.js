const mongoose = require('mongoose'),
    url = process.env.DATABASE_URL

const conn = () => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = conn