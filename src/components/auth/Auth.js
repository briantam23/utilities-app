import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import style from './auth.less';
import { login, logout } from '../../store/actions/auth';


class Auth extends Component {

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
    
    handleAuth = e => {
        e.preventDefault();
        const { auth, login, logout, history } = this.props;
        
        !auth.id ? (
            login(this.state, history)
                .catch(() => this.setState({ 
                    username: '', 
                    password: '',
                    error: 'Incorrect Username and/or Password. Please try again. (X)' 
                })) 
        ) : logout(history)
    }

    handleClearError = () => {
        this.setState({ error: '' });
    }

    render() {
        const { username, password, error } = this.state;
        const { handleChange, handleAuth, handleClearError } = this;
        const { auth, history } = this.props;
        return(
            <div className={ style.authContainer }>
                <form onSubmit={ handleAuth } className={ style.authForm }>
            {
                !auth.id ? (
                    <Fragment>
                    {
                        error ? (
                            <div onClick={ () => handleClearError() } className={ style.errorMessage }>
                                <strong>{ error }</strong>
                            </div> 
                        ): null
                    }
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
                        <button disabled={ !username && !password } className={ style.authLogin }>Login</button>
                    </Fragment>
                ) : (
                    <Fragment>
                        <div className={ style.authWelcome }>
                            <strong>Welcome { auth.username }!</strong>
                        </div>
                        <button className={ style.authLogout }>Logout</button>
                    </Fragment>
                )
            }
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }, { history }) => ({ auth, history });

const mapDisptachToProps = ({ login, logout });


export default connect(mapStateToProps, mapDisptachToProps)(Auth);