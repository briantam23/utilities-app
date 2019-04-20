const conn = require('../conn');


const Todo = conn.define('todos', {
    taskName: {
        type: conn.Sequelize.STRING,
        allowNull: false
    },
    assignee: {
        type: conn.Sequelize.STRING,
        allowNull: false
    }
})


module.exports = Todo;