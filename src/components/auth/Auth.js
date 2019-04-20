import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './auth.less';
import { login, logout } from '../../store/actions/auth';


class Auth extends Component {

    state = {
        username: '',
        password: '',
        error: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    handleLogin = () => {
        const { login, history } = this.props;
        login(this.state, history)
            .catch(() => this.setState({ error: 'Incorrect Username and/or Password. Please try again.' })) 
    }

    render() {
        const { username, password, error } = this.state;
        const { handleChange, handleLogin } = this;
        const { login, logout, auth, history } = this.props;
        return(
            !auth.id ? (
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
                        <button onClick={ () => handleLogin() } className={ styles.authButton }>Login</button>
                    </form>
                </div>
            ) : (
                <div className={ styles.authContainer }>
                    <div className={ styles.authForm }>
                        <button onClick={ () => logout(history) }>Logout</button>
                        <h3 style={{ display: 'inline-block', float: 'right' }} >Welcome { auth.name }!&emsp;</h3>
                    </div>
                </div>
            )
        )
    }
}

const mapStateToProps = ({ auth }, { history }) => ({ history, auth });

const mapDisptachToProps = ({ login, logout });

export default connect(mapStateToProps, mapDisptachToProps)(Auth);