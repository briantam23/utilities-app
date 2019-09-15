import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from '../nav/Nav';
import Auth from '../auth/Auth';
import Home from '../home/Home';
import Stopwatch from '../stopwatch/Stopwatch';
import Events from '../events/Events';
import Todos from '../todos/Todos';
import Forecast from '../forecast/Forecast';
import Profile from '../profile/Profile';
import style from './app.less'


const App = () => (
    <Router>
        <div className={ style.mainContainer }>
            <Route render={ ({ history }) => <Auth history={ history }/> }/>
            <Route render={ () => <Nav/> }/>
            <Route exact path='/' render={ () => <Home/> }/>
            <Route path='/stopwatch' render={ () => <Stopwatch/> }/>
            <Route path='/ticketmaster-events' render={ () => <Events/> }/>
            <Route path='/todos' render={ () => <Todos/> }/>
            <Route path='/forecast' render={ () => <Forecast/> }/>
            {/* <Route path='/sports' render={ () => <Sports/> }/> */}
            <Route path='/my-profile' render={ () => <Profile/> }/>
        </div>
    </Router>
)


export default App;