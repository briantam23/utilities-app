const conn = require('./conn');
const User = require('./models/User');


const syncAndSeed = () => {
    conn.sync({ force: true })
        .then(() => Promise.all([
            User.create({ username: 'Brian', password: 'Briantam23@' }),
            User.create({ username: 'Mike', password: 'Mike12#' }),
            User.create({ username: 'Johnny', password: 'Johnny34&' })
        ]))
}


module.exports = {
    syncAndSeed,
    models: {
        User
    },
    conn
}