const conn = require('./conn');


const syncAndSeed = () => {
    conn.sync({ force: true })
}


module.exports = {
    syncAndSeed,
    conn
}