import { expect } from 'chai';
import { createStore } from 'redux';
import { _createTodo } from '../src/store/actions/todos';
import { CREATE_TODO } from '../src/store/constants';
import todosReducer from '../src/store/reducers/todos';


describe('The `Todo` Redux store', () => {

    const todo = {
        taskName: 'Muay Thai',
        assignee: 'Brian'
    }

    describe('action creator', () => {

        it('returns properly formatted action', () => {

            expect(_createTodo(todo)).to.be.deep.equal({
                type: CREATE_TODO,
                todos: todo
            })
        })
    })

    describe('todosReducer', () => {

        let testingStore;
        beforeEach('Create testing store from reducer', () => {
            testingStore = createStore(todosReducer);
        })

        it('has an initial state as an empty array', () => {

            const currentStoreState = testingStore.getState();

            expect(currentStoreState).to.be.deep.equal([]);
        })

        it('reduces on CREATE_TODO (without mutating previous state)', () => {

            const prevState = testingStore.getState();

            testingStore.dispatch({
                type: CREATE_TODO,
                todos: todo
            })

            const newState = testingStore.getState();

            expect(newState.length).to.be.equal(prevState.length + 1);
            expect(newState[newState.length - 1]).to.be.deep.equal(todo);
            expect(newState).to.not.be.equal(prevState);
        })

        it('handles unrecognized actions & returns the previous state', () => {

            const prevState = testingStore.getState();

            testingStore.dispatch({
                type: 'NOT_A_THING'
            })

            const newState = testingStore.getState();

            //these should be the same array in memory AND have equivalent key-value pairs
            expect(prevState).to.be.an('array');
            expect(newState).to.be.an('array');
            expect(newState).to.be.equal(prevState);
            expect(newState).to.be.deep.equal(prevState);
        })
    })
})