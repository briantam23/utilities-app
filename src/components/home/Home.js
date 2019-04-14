import React from 'react';
import style from './home.less';


const Home = () => (
    <div className={ style.homeContainer }>
        <h1>Brian Tam's Utilities App</h1>
        <h2>A Single Page App created with React, LESS, & Express, along with multiple Testing libraries (Enzyme, Mocha, Chai, Sinon, SuperTest).</h2>
        <img src='../../public/img/profile_picture.jpg' alt='profile picture'/>
    </div>
)


export default Home;