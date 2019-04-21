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

            describe('GET /api/todos/:id', () => {

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
        })
    })
})