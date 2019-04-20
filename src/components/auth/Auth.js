import React, { Component } from 'react';
import styles from './auth.less';


class Auth extends Component {

    state = {
        username: '',
        password: '',
        error: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { username, password, error } = this.state;
        const { handleChange } = this;
        return(
            <div className={ styles.authContainer }>
                <form className={ styles.authForm }>
                    <input 
                        onChange={ handleChange } 
                        value={ username } 
                        name='username' 
                        placeholder='Username' 
                        autoFocus 
                        />
                    <input 
                        onChange={ handleChange }
                        value={ password } 
                        name='password' 
                        placeholder='Password' 
                        />
                    <button className={ styles.authButton }>Login</button>
                </form>
            </div>
        )
    }
}


export default Auth;