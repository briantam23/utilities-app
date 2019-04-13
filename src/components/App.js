import React, { Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Events from './Events/Events';
import Stopwatch from './Stopwatch/Stopwatch';


const App = () => {
    return(
        <Router>
            <Fragment>
                <Nav/>
                <Route exact path='/' render={ () => <Home/> }/>
                <Route path='/stopwatch' render={ () => <Stopwatch/> }/>
                <Route path='/ticketmaster_events' render={ () => <Events/> }/>
            </Fragment>
        </Router>
    )
}


export default App;