import React, { Component, Fragment } from 'react';
import style from './singleTodo.less';


const SingleTodo = ({ todo }) => (
    <div className={ style.todoRow }>
        <div className={ style.todoColumn }>
            <h3>{ todo.taskName }</h3>
            <h4>{ 'Assigned to: ' + todo.assignee }</h4>
        </div>
        <div className={ style.todoColumn }>
            <button className={ style.todoDeleteButton }>Delete</button>
        </div>
    </div>
)


export default SingleTodo;