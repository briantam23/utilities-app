import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './profileForm.less';


// Use HOC??

class ProfileForm extends Component {

    state = {
        username: '',
        password: '',
        error: ''
    }

    componentDidUpdate = prevProps => {
        const { auth } = this.props;
        if(prevProps !== this.props) {
            if(auth.id) this.setState({ username: '', password: '', error: '' });
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    handleClearError = () => {
        this.setState({ error: '' });
    }

    render() {
        const { username, password, error } = this.state;
        const { handleChange, handleClearError, handleSubmit } = this;
        const { auth } = this.props;
        return(
            <div className={ style.profileFormContainer }>
            {
                !auth.id ? <h1>Create Profile</h1> : <h1>Edit Profile</h1>
            }
                <form onSubmit={ handleSubmit } className={ style.authForm }>
                    <input 
                        onChange={ handleChange } 
                        value={ username } 
                        name='username' 
                        placeholder='Username'
                        size='20'
                        required
                        autoFocus 
                        />
                    <input 
                        onChange={ handleChange }
                        value={ password } 
                        name='password' 
                        placeholder='Password'
                        size='20'
                        required
                        type='password'
                        />
                    <button disabled={ !username && !password } className={ style.authSubmit }>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = ({ auth }) => ({ auth });


export default connect(mapStateToProps)(ProfileForm);