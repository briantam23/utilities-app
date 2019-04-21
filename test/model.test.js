'use strict';

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const { Todo } = require('../server/db').models;
const { conn } = require('../server/db');


describe('The `Todo` model:', () => {

    // First we claer the database and recreate the tables before beginning a run
    before(() => {
        return conn.sync({ force: true });
    });

    // Next, we create an (un-saved!) article instance before every spec
    let todo;
    beforeEach(() => {
        todo = Todo.build({
            taskName: 'Muay Thai',
            assignee: 'Brian'
        })
    })

    // Also, we empty the table after each spec
    afterEach(() => {
        return Todo.truncate({ cascade: true })
    })

    describe('attributes definition', () => {
        it('includes `taskName and assignee` fields', async () => {

            const savedTodo = await todo.save();
            expect(savedTodo.taskName).to.equal('Muay Thai');
            expect(savedTodo.assignee).to.equal('Brian');
        })
    })
})