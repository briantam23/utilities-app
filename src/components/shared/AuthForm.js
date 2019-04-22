/* import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import style from './authForm.less';


class AuthForm extends Component {

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
        const { handleChange, handleAuth } = this;
        const { auth } = this.props;
        return(
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
                        <AuthForm/>
                    </Fragment>
                ) : (
                    <Fragment>
                        <div className={ style.authWelcome }>
                            Welcome { auth.username }!
                        </div>
                        <button className={ style.authLogout }>Logout</button>
                    </Fragment>
                )
            }
            </form>
        )
    }
}


const mapStateToProps = ({ auth }) => ({ auth });


export default connect(mapStateToProps)(AuthForm); */