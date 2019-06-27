import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadInitialTodos } from '../../store/actions/todos';
import { Route } from 'react-router-dom';
import style from './todos.less';
import TodoCreate from './todoCreate/TodoCreate';
import TodoList from './todoList/TodoList';


class Todos extends Component {
    
    componentDidMount = () => {
        this.props.loadInitialTodos()
    }

    render() {
        return(
            <Fragment>
                <h1 className={ style.todosHeader }>Todos</h1>
                <div className={ style.todosContainer }>
                    <TodoCreate/>
                    <TodoList/>
                </div>
            </Fragment>
        )
    }
}


const mapDispatchToProps = { loadInitialTodos };


export default connect(null, mapDispatchToProps)(Todos);