import React from 'react';
import style from './home.less';


const Home = () => (
    <div className={ style.homeContainer }>
        <div className={ style.headerContainer }>
            <h1>Brian Tam's Utilities App</h1>
            <h2>A Single Page App created with React, Redux, LESS, & Express, along with multiple Testing libraries (Enzyme, Mocha, Chai, Sinon, SuperTest), and Continuous Integration using TravisCI.</h2>
            <div className={ style.technologies }>
                <img src='../../../public/img/technologies/node.png' alt='NodeJS'/>
                <img src='../../../public/img/technologies/express.png' alt='Express'/>
                <img src='../../../public/img/technologies/redux.png' alt='Redux'/>
                <img src='../../../public/img/technologies/babel.png' alt='Babel'/>
                <img src='../../../public/img/technologies/heroku.png' alt='Heroku'/>
            </div>
        </div>
        <div>
            <img src='../../public/img/profile_picture.jpg' alt='profile picture' className={ style.profilePic }/>
        </div>
    </div>
)


export default Home;