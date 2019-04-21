import { LOAD_INITIAL_STUDENTS, CREATE_STUDENT, UPDATE_STUDENT, DESTROY_STUDENT } from '../constants';
import { LOAD_INITIAL_TODOS, CREATE_TODO, UPDATE_TODO, DESTROY_TODO } from '../constants';


const todosReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD_INITIAL_TODOS:
            return action.todos;
        case CREATE_TODO:
            return [...state, action.todos];
        case UPDATE_TODO:
            return state.map(todo => todo.id !== action.todos.id ? todo : action.todos);
        case DESTROY_TODO:
            return state.filter(todo => todo.id !== action.todos.id);
        default:
            return state;
    }
}

export default todosReducer;