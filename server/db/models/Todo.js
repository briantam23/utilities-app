const conn = require('../conn');
const _ = require('lodash');


const Todo = conn.define('todos', {
    taskName: {
        type: conn.Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: true }
    },
    assignee: {
        type: conn.Sequelize.STRING,
        allowNull: false
    }
})

const todoHook = todo => {
    const { assignee } = todo;
    //todo.assignee = assignee.charAt(0).toUpperCase() + assignee.slice(1);
    todo.assignee = _.capitalize(assignee);
}

Todo.beforeCreate((todo, options) => todoHook(todo));
Todo.beforeUpdate((todo, options) => todoHook(todo));


module.exports = Todo;