const express = require('express'),
    routes = require('./routes'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    port = process.env.PORT,
    server = express();

module.exports = () => {
    // global middlewares
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(cookieParser())

    server.use('/user', routes.userRoute)
    server.listen(port, ()=>console.log(`Server is listening on port ${port}`))
}