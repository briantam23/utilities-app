'use strict';

const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server/app');
const agent = request.agent(app);

const { conn } = require('../server/db');
const { Todo, User } = require('../server/db').models;


describe('The Express Server', () => {

    describe('USE `public` Folder', () => {

        it('serves public files', () => {

            return agent
                .get('/public/index.html')
                .expect('Content-type', 'text/html; charset=UTF-8')
                .expect(200)
        })

        it('does not serve private files', async () => {
             
            const res = await agent
                .get('/src/utils.js')
                .expect(404)

            expect(res['headers']['content-type']).to.not.equal('application/javascript; charset=UTF-8');
        })
    })

    describe('GET `/` Route', () => {
        
        it('sends the index.html file', () => {

            return agent
                .get('/')
                .expect('Content-type', 'text/html; charset=UTF-8')
                .expect(200);
        })
    })
    
    describe('The `Todos` Route:', () => {

        // First we clear the database before beginning each run
        before(() => {
            return conn.sync({ force: true });
        })
    
        // Also, we empty the tables after each spec
        afterEach(() => {
            return Promise.all([
                Todo.truncate({ cascade: true }),
                User.truncate({ cascade: true })
            ])
        })
    
        describe('GET /api/todos', () => {
            it('responds with a array via JSON', async () => {
    
                const res = await agent
                    .get('/api/todos')
                    .expect('Content-Type', /json/)
                    .expect(200);
    
                expect(res.body).to.be.an.instanceOf(Array);
                expect(res.body).to.have.length(0);
            })

            // Save a Todo in the database using our model and then retrieve it
            it('returns a Todo if there is one in the DB', async () => {

                await Todo.create({
                    taskName: 'Brazilian Jiu-Jitsu',
                    assignee: 'Brian'
                })

                const res = await agent 
                    .get('/api/todos')
                    .expect(200)

                expect(res.body).to.be.an.instanceOf(Array);
                expect(res.body[0].assignee).to.equal('Brian');
            })

            it('returns another Todo if there is one in the DB', async() => {

                await Todo.create({
                    taskName: 'Brazilian Jiu-Jitsu',
                    assignee: 'Brian'
                })
                await Todo.create({
                    taskName: 'Muay Thai', 
                    assignee: 'Mike' 
                })
    
                const res = await agent
                    .get('/api/todos')
                    .expect(200)
    
                expect(res.body).to.be.an.instanceOf(Array);
                expect(res.body[0].assignee).to.equal('Brian');
                expect(res.body[1].assignee).to.equal('Mike');
            })

        })

        describe('GET /api/todos/:todoId', () => {

            let testTodo; 
            beforeEach(async () => {
                const creatingTodos = [{
                    taskName: 'Brazilian Jiu-Jitsu',
                    assignee: 'Brian'
                }, {
                    taskName: 'Muay Thai', 
                    assignee: 'Mike' 
                }]
                .map(data => Todo.create(data));
                
                const createdTodos = await Promise.all(creatingTodos);
                testTodo = createdTodos[1];
            })

            it('returns the JSON of the Todo based on the id', async () => {

                const res = await agent
                    .get('/api/todos/' + testTodo.id)
                    .expect(200);
    
                if(typeof res.body === 'string') {
                    res.body = JSON.parse(res.body);
                }
                expect(res.body.assignee).to.equal('Mike');
            })

            it('returns a 404 error if the ID is not correct', () => {

                return agent
                    .get('/api/todos/79740')
                    .expect(404);
            })
        })

        describe('POST /api/todos', () => {
            it('creates a new Todo', async () => {
    
                const res = await agent
                    .post('/api/todos')
                    .send({
                        taskName: 'muay thai',
                        assignee: 'Brian'
                    })
                    .expect(200);
                
                expect(res.body.id).to.not.be.an('undefined');
                expect(res.body.assignee).to.equal('Brian');
            })
    
            it('does not create a new Todo without an assignee', () => {
    
                return agent    
                    .post('/api/todos')
                    .send({
                        taskName: 'This Todo should not be allowed.'
                    })
                    .expect(500);
            })
            
            // Check if the Todos were actually saved to the DB
            it('saves the Todo to the DB', async () => {
                
                await agent
                    .post('/api/todos')
                    .send({
                        taskName: 'Brazilian Jiu-Jitsu',
                        assignee: 'Brian'
                    })
                    .expect(200);

                const foundTodo = await Todo.findOne({
                    where: { taskName: 'Brazilian Jiu-Jitsu' }
                })

                expect(foundTodo).to.exist;
                expect(foundTodo.assignee).to.equal('Brian');
            })

            // Do not assume async operations (like db writes) will work; always check
            it('sends back JSON of the actual created Todo, not just the POSTed data', async () => {

                const res = await agent
                    .post('/api/todos')
                    .send({
                        taskName: 'Brazilian Jiu-Jitsu',
                        assignee: 'Brian',
                        extraneous: 'Sequelize will quietly ignore this non-schema property'
                    })
                    .expect(200);

                expect(res.body.extraneous).to.be.an('undefined');
                expect(res.body.createdAt).to.exist;
            })
        })

        describe('PUT /api/todos/:id', () => {

            let todo;
    
            beforeEach(async() => {
                todo = await Todo.create({
                    taskName: 'Brazilian Jiu-Jitsu',
                    assignee: 'Brian'
                })
            })

            it('updates a Todo', async() => {

                const res = await agent 
                    .put('/api/todos/' + todo.id)
                    .send({
                        taskName: 'Coding'
                    })
                    .expect(200);
    
                expect(res.body.id).to.not.be.an('undefined');
                expect(res.body.taskName).to.equal('Coding');
                expect(res.body.assignee).to.equal('Brian');
            })

            it('saves updates to the DB', async() => {

                await agent 
                    .put('/api/todos/' + todo.id)
                    .send({
                        taskName: 'Muay Thai'
                    })
    
                const foundTodo = await Todo.findByPk(todo.id);
    
                expect(foundTodo).to.exist;
                expect(foundTodo.taskName).to.equal('Muay Thai');
            })
    
            it('gets 500 for invalid update', () => {
    
                return agent
                    .put('/api/todos/' + todo.id)
                    .send({ assignee: null })
                    .expect(500);
            })
        })

        describe('DELETE, /api/todos/:todoId', () => {

            let todo;
    
            beforeEach(async() => {
                todo = await Todo.create({
                    taskName: 'Brazilian Jiu-Jitsu',
                    assignee: 'Brian'
                })
            })
    
            it('deletes a Todo', async() => {
    
                const res = await agent
                    .delete('/api/todos/' + todo.id)
                    .expect(204)
    
                expect(res.body.id).to.be.an('undefined');
            })
    
            it('saves changes in database', async() => {
    
                const res = await agent
                    .delete('/api/todos/' + todo.id)
                    .expect(204)
    
                const foundTodo = await Todo.findByPk(todo.id);
    
                expect(foundTodo).to.not.exist;
            })
    
            it('responds with a 500 if a Todo does not exist', () => {
                
                return agent
                    .delete('/api/todos/123')
                    .expect(500)
            })
        })
    })
})