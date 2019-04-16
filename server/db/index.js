const conn = require('./conn');
const User = require('./models/User');


const syncAndSeed = () => {
    conn.sync({ force: true })
        .then(() => Promise.all([
            User.create({ name: 'brian', password: 'b' }),
            User.create({ name: 'mike', password: 'm' }),
            User.create({ name: 'johnny', password: 'j' })
        ]))
}


module.exports = {
    syncAndSeed,
    models: {
        User
    },
    conn
}