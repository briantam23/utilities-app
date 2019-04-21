import React, { Fragment } from 'react';
import style from './profile.less';
import AWS from './aws/AWS';


const Profile = () => (
    <Fragment>
        <h1>My Profile</h1>
        <AWS/>
    </Fragment>
)


export default Profile;