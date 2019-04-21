'use strict';

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const { Todo, User } = require('../server/db').models;
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

    // Also, we empty the tables after each spec
    afterEach(() => {
        return Promise.all([
            Todo.truncate({ cascade: true }),
            User.truncate({ cascade: true })
        ])
    })

    describe('attributes definition', () => {
        it('includes `taskName and assignee` fields', async () => {

            const savedTodo = await todo.save();
            expect(savedTodo.taskName).to.equal('Muay Thai');
            expect(savedTodo.assignee).to.equal('Brian');
        })

        it('requires `taskName`', async () => {
            todo.taskName = null;

            let result, error;
            try {
                result = await todo.validate();
            } catch(err) {
                error = err;
            }

            if(result) throw Error('validation should fail when name is null');

            expect(error).to.be.an.instanceOf(Error);
        })

        it('requires `taskName` (strict)', async () => {

            todo.taskName = '';

            let result, error;
            try {
                result = await todo.validate();
            } catch(err) {
                error = err;
            }

            if(result) throw Error('validation should fail when address is an empty string');

            expect(error).to.be.an.instanceOf(Error);
            expect(error.message).to.contain('Validation error');
        })
    })

    describe('associations', () => {
        it('belongs to User', async () => {

            const creatingTodo = await Todo.create({ 
                taskName: 'Muay Thai', 
                assignee: 'Mike' 
            })
            const creatingUser = await User.create({ 
                username: 'Brian', 
                password: 'Briantam23@' 
            })

            const [createdTodo, createdUser] = await Promise.all([creatingTodo, creatingUser]);

            await createdUser.setTodos(createdTodo);

            const foundUser = await User.findOne({
                where: { username: 'Brian' },
                include: { model: Todo }
            })

            expect(foundUser.todos).to.exist;
            expect(foundUser.todos[0].taskName).to.equal('Muay Thai');
        })
    })

    describe('capitalization hooks', () => {

        it('capitalizes before creating', async () => {

            const createdTodo = await Todo.create({
                taskName: 'muay thai',
                assignee: 'brian'
            })

            expect(createdTodo.assignee).to.equal('Brian');
        })

        it('capitalizes before updating', async () => {

            const createdTodo = await Todo.create({
                taskName: 'muay thai',
                assignee: 'brian'
            })

            const updatedTodo = await createdTodo.update({ assignee: 'johnny' });
            expect(updatedTodo.assignee).to.equal('Johnny');
        })
    })
})