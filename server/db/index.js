const conn = require('./conn');
const User = require('./models/User');


const syncAndSeed = () => {
    conn.sync({ force: true })
        .then(() => Promise.all([
            User.create({ username: 'brian', password: 'Briantam23@' }),
            User.create({ username: 'mike', password: 'Mike12#' }),
            User.create({ username: 'johnny', password: 'Johnny34&' })
        ]))
}


module.exports = {
    syncAndSeed,
    models: {
        User
    },
    conn
}