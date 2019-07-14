import { LOAD_INITIAL_TODOS, CREATE_TODO, UPDATE_TODO, DESTROY_TODO } from '../constants';


const todosReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD_INITIAL_TODOS:
            return action.todos;
        case CREATE_TODO:
            return [...state, action.todo];
        case UPDATE_TODO:
            return state.map(todo => todo.id !== action.todo.id ? todo : action.todo);
        case DESTROY_TODO:
            return state.filter(todo => todo.id !== action.todo.id);
        default:
            return state;
    }
}

export default todosReducer;