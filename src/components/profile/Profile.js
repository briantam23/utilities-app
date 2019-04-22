import React, { Fragment } from 'react';
import style from './profile.less';
import ProfileForm from './profileForm/ProfileForm';
import AWS from './aws/AWS';


const Profile = () => (
    <Fragment>
        <h1 className={ style.profileHeader }>My Profile</h1>
        <div className={ style.profileDetail }>
            <ProfileForm/>
            <AWS/>
        </div>
    </Fragment>
)


export default Profile;