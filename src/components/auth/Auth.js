import React, { Component, Fragment } from 'react';
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
            <div className={ styles.authContainer }>
                <form className={ styles.authForm }>
                {
                    !auth.id ? (
                        <Fragment>
                            <input 
                                onChange={ handleChange } 
                                value={ username } 
                                name='username' 
                                placeholder='Username'
                                size='20'
                                autoFocus 
                                />
                            <input 
                                onChange={ handleChange }
                                value={ password } 
                                name='password' 
                                placeholder='Password'
                                size='20'
                                type='password'
                                />
                            <button onClick={ () => handleLogin() } className={ styles.authLogin }>Login</button>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div className={ styles.authWelcome }>
                                <strong>Welcome { auth.username }!</strong>
                            </div>
                            <button onClick={ () => logout(history) } className={ styles.authLogout }>Logout</button>
                        </Fragment>
                    )
                }
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }, { history }) => ({ history, auth });

const mapDisptachToProps = ({ login, logout });

export default connect(mapStateToProps, mapDisptachToProps)(Auth);