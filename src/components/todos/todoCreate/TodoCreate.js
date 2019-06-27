import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import style from './todoCreate.less';
import { createTodo } from '../../../store/actions/todos';


class TodoCreate extends Component {

    state = {
        taskName: '',
        assignee: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        const { createTodo } = this.props;

        e.preventDefault();
        createTodo(this.state);
    }

    render() {
        const { taskName, assignee } = this.state;
        const { handleChange, handleSubmit } = this;
        return(
            <div className={ style.todoCreateContainer }>
                <h1>Create Todo</h1>
                <form onSubmit={ handleSubmit } className={ style.todoForm }>
                    <input 
                        onChange={ handleChange } 
                        value={ taskName } 
                        name='taskName'
                        placeholder='Task Name'
                        />
                    <input 
                        onChange={ handleChange } 
                        value={ assignee } 
                        name='assignee'
                        placeholder='Assignee'
                        />
                    <button className={ style.todoSubmit }>Create</button>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = ({ createTodo });


export default connect(null, mapDispatchToProps)(TodoCreate);