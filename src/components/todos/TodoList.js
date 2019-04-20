import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import style from './todoList.less';


class TodoList extends Component {
    render() {
        const { todos } = this.props;
        return(
            <Fragment>
                <h2>TodoList</h2>
            {
                todos.map((todo, idx) =>
                    <div key={ idx }className={ style.todoRow }>
                        <div className={ style.todoColumn }>
                            { todo.taskName }
                        </div>
                        {/* <div className={ style.todoColumn }>
                            { todo.assignee }
                        </div> */}
                    </div>
                )
            }
            </Fragment>
        )
    }
}


const mapStateToProps = ({ todos }) => ({ todos });


export default connect(mapStateToProps)(TodoList);