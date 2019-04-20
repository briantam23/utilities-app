import axios from "axios";
import { LOAD_INITIAL_TODOS } from '../constants';


const _loadInitialTodos = todos => ({
    type: LOAD_INITIAL_TODOS,
    todos
})
export const loadInitialTodos = () => (
    dispatch => (
        axios.get('/api/todos')
            .then(res => res.data)
            .then(todos => dispatch(_loadInitialTodos(todos)))
    )
)