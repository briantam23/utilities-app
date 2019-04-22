import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './profileForm.less';


class ProfileForm extends Component {
    render() {
        const { auth } = this.props;
        return(
            <div className={ style.profileFormContainer }>
            {
                !auth.id ? <h1>Create Profile</h1> : <h1>Edit Profile</h1>
            }
            </div>
        )
    }
}


const mapStateToProps = ({ auth }) => ({ auth });


export default connect(mapStateToProps)(ProfileForm);