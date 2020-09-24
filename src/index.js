// set up das variaveis de ambiente
const dbConn = require('./database'),
    server = require('./server');

dbConn().then(() => {
    server()
}).catch(err => {
    throw (err)
})


