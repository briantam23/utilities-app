import axios from "axios";
import { LOAD_INITIAL_TODOS, CREATE_TODO, UPDATE_TODO, DESTROY_TODO } from '../constants';


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

export const _createTodo = todo => ({
    type: CREATE_TODO,
    todo
})
export const createTodo = todo => (
    dispatch => (
        axios.post('/api/todos', todo)
            .then(res => res.data)
            .then(_todo => dispatch(_createTodo(_todo)))
    )
)

const _updateTodo = todo => ({
    type: UPDATE_TODO,
    todo
})
export const updateTodo = (todo, history, redirectToTodos) => (
    dispatch => (
        axios.put(`/api/todos/${todo.id}`, todo)
            .then(res => res.data)
            .then(_todo => dispatch(_updateTodo(_todo)))
            .then(() => redirectToTodos ? history.push('/todos') : null)
    )
)

const _destroyTodo = todo => ({
    type: DESTROY_TODO,
    todo
})
export const destroyTodo = (todo, history) => (
    dispatch => (
        axios.delete(`/api/todos/${todo.id}`)
            .then(() => dispatch(_destroyTodo(todo)))
            .then(() => { 
                if(history) history.push('/todos'); 
            })
    )
)