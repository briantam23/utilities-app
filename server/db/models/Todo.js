const conn = require('../conn');
const _ = require('lodash');


const Todo = conn.define('todos', 
    {
        taskName: {
            type: conn.Sequelize.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },
        assignee: {
            type: conn.Sequelize.STRING,
            allowNull: false
        }
    },
    {
        hooks: {
            beforeCreate: (todo, options) => todoHook(todo),
            beforeUpdate: (todo, options) => todoHook(todo)
        }
    }
)

const todoHook = todo => {
    const { assignee } = todo;
    //todo.assignee = assignee.charAt(0).toUpperCase() + assignee.slice(1);
    todo.assignee = _.capitalize(assignee);
}


module.exports = Todo;