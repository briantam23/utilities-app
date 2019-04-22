import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './todoList.less';


class TodoList extends Component {
    render() {
        const { todos } = this.props;
        return(
            <div className={ style.todoListContainer }>
            {
                todos.map((todo, idx) =>
                    <div key={ idx }className={ style.todoRow }>
                        <div className={ style.todoColumn }>
                            <h3>{ todo.taskName }</h3>
                            <h4>{ 'Assigned to: ' + todo.assignee }</h4>
                        </div>
                        <div className={ style.todoColumn }>
                            <button className={ style.todoDeleteButton }>Delete</button>
                        </div>
                    </div>
                )
            }
            </div>
        )
    }
}


const mapStateToProps = ({ todos }) => ({ todos });


export default connect(mapStateToProps)(TodoList);