import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './todoList.less';
import SingleTodo from '../singleTodo/SingleTodo';


class TodoList extends Component {
    render() {
        const { todos } = this.props;
        return(
            <div className={ style.todoListContainer }>
                { todos.map((todo, idx) => <SingleTodo todo={ todo } key={ idx }/>) }
            </div>
        )
    }
}


const mapStateToProps = ({ todos }) => ({ todos });


export default connect(mapStateToProps)(TodoList);