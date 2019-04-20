import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authReducer from './reducers/auth';
import todosReducer from './reducers/todos';


const reducer = combineReducers({
    auth: authReducer,
    todos: todosReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger));


export default store;