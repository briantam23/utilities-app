import React from 'react';
import { useDispatch } from 'react-redux';
import style from './singleTodo.less';
import { destroyTodo } from '../../../store/actions/todos';


const SingleTodo = ({ todo }) => {

    const dispatch = useDispatch();
    const handleDelete = () => dispatch(destroyTodo(todo));

    return(
        <div className={ style.todoRow }>
            <div className={ style.todoColumn }>
                <h3>{ todo.taskName }</h3>
                <h4>{ 'Assigned to: ' + todo.assignee }</h4>
            </div>
            <div className={ style.todoColumn }>
                <button onClick={ () => handleDelete() } className={ style.todoDeleteButton }>Delete</button>
            </div>
        </div>
    )
}


export default SingleTodo;