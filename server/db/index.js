const conn = require('./conn');
const User = require('./models/User');
const Todo = require('./models/Todo');


Todo.belongsTo(User);
User.hasMany(Todo);


const syncAndSeed = () => {
    let Brian, Mike, Johnny, codeGameApp, takeMuayThaiClass, codeUtilitiesApp, takeBJJClass;
    conn.sync({ force: true })
        .then(() => Promise.all([
            User.create({ username: 'Brian', password: 'Briantam23@' }),
            User.create({ username: 'Mike', password: 'Mike12#' }),
            User.create({ username: 'Johnny', password: 'Johnny34&' })
        ]))
        .then(users => {
            [Brian, Mike, Johnny] = users;
            return Promise.all([
                Todo.create({ taskName: 'Code a game app', assignee: 'Guest' }),
                Todo.create({ taskName: 'Take Muay Thai class', assignee: 'Guest' }),
                Todo.create({ taskName: 'Code Utilities App', assignee: 'Brian' }),
                Todo.create({ taskName: 'Take Brazilian Jiu-Jitsu class', assignee: 'Brian' })
            ])
        })
        .then(todos => {
            [codeGameApp, takeMuayThaiClass, codeUtilitiesApp, takeBJJClass] = todos;
            codeUtilitiesApp.setUser(Brian);
            takeBJJClass.setUser(Brian);
        })
}


module.exports = {
    syncAndSeed,
    models: {
        User,
        Todo
    },
    conn
}