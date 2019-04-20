import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from '../nav/Nav';
import Auth from '../auth/Auth';
import Home from '../home/Home';
import Stopwatch from '../stopwatch/Stopwatch';
import Events from '../events/Events';
import style from './app.less'


const App = () => {
    return(
        <Router>
            <div className={ style.mainContainer }>
                <Nav/>
                <Route render={ ({ history }) => <Auth history={ history }/> }/>
                <Route exact path='/' render={ () => <Home/> }/>
                <Route path='/stopwatch' render={ () => <Stopwatch/> }/>
                <Route path='/ticketmaster_events' render={ () => <Events/> }/>
            </div>
        </Router>
    )
}


export default App;