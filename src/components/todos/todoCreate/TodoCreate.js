import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import style from './todoCreate.less';


class TodoCreate extends Component {

    state = {
        taskName: '',
        assignee: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { taskName, assignee } = this.state;
        const { handleChange } = this;
        return(
            <div className={ style.todoCreateContainer }>
                <form className={ style.todoForm }>
                    <input onChange={ handleChange } value={ taskName } name='taskName'/>
                    <input onChange={ handleChange } value={ taskName } name='assignee'/>
                    <button className={ style.todoSubmit }>Create</button>
                </form>
            </div>
        )
    }
}


export default connect()(TodoCreate);