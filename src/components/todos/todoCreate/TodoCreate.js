import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class TodoCreate extends Component {
    render() {
        return(
            <form>
                <input name='taskName'/>
                <input name='assignee'/>
                <button>Create</button>
            </form>
        )
    }
}


export default connect()(TodoCreate);