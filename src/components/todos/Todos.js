import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadInitialTodos } from '../../store/actions/todos';
import { Route } from 'react-router-dom';
import style from './todos.less';
import TodoList from './TodoList';
import SingleTodo from './SingleTodo';


class Todos extends Component {
    
    componentDidMount = () => {
        const { loadInitialTodos } = this.props;
        loadInitialTodos()
    }

    render() {
        return(
            <div className={ style.todosContainer }>
                <h1>Todos</h1>
                <Route exact path='/todos' render={ () => <TodoList/> } />
                <Route path='/todos/:todoId' render={ () => <SingleTodo/> } />
            </div>
        )
    }
}


const mapDispatchToProps = { loadInitialTodos };


export default connect(null, mapDispatchToProps)(Todos);