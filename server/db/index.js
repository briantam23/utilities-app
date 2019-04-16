const conn = require('./conn');


const syncAndSeed = () => {
    conn.sync({ force: true })
}


module.exports = {
    syncAndSeed,
    models: {
        User
    },
    conn
}