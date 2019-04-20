const conn = require('./conn');
const User = require('./models/User');
const Todo = require('./models/Todo');


const syncAndSeed = () => {
    conn.sync({ force: true })
        .then(() => Promise.all([
            User.create({ username: 'Brian', password: 'Briantam23@' }),
            User.create({ username: 'Mike', password: 'Mike12#' }),
            User.create({ username: 'Johnny', password: 'Johnny34&' })
        ]))
        .then(() => Promise.all([
            Todo.create({ taskName: 'Code', assignee: 'Brian' }),
            Todo.create({ taskName: 'Take Brazilian Jiu-Jitsu class', assignee: 'Brian' })
        ]))
}


module.exports = {
    syncAndSeed,
    models: {
        User,
        Todo
    },
    conn
}