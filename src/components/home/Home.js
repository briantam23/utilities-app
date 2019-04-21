import React from 'react';
import style from './home.less';


const Home = () => (
    <div className={ style.homeContainer }>
        <div className={ style.headerContainer }>
            <h1>Brian Tam's Utilities App</h1>
            <h2>A Single Page App created with React, Redux, LESS, & Express, along with multiple Testing libraries (Enzyme, Mocha, Chai, Sinon, SuperTest), and Continuous Integration using TravisCI.</h2>
        </div>
        <div>
            <img src='../../public/img/profile_picture.jpg' alt='profile picture'/>
        </div>
    </div>
)


export default Home;