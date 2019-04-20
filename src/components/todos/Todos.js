import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import styles from './todos.less';
import TodoList from './TodoList';
import SingleTodo from './SingleTodo';


class Todos extends Component {
    render() {
        return(
            <div className={ styles.todosContainer }>
                <h1>Todos</h1>
                <Route exact path='/todos' component={ TodoList } />
                <Route path='/todos/:todoId' component={ SingleTodo } />
            </div>
        )
    }
}


export default Todos;