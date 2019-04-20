import { LOAD_INITIAL_STUDENTS, CREATE_STUDENT, UPDATE_STUDENT, DESTROY_STUDENT } from '../constants';
import { LOAD_INITIAL_TODOS } from '../constants';


const todosReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD_INITIAL_TODOS:
            return action.todos;
        default:
            return state;
    }
}

export default todosReducer;