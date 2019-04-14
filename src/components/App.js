import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Stopwatch from './stopwatch/Stopwatch';
import Events from './events/Events';
import style from './app.less'


const App = () => {
    return(
        <Router>
            <div className={ style.mainContainer }>
                <Nav/>
                <Route exact path='/' render={ () => <Home/> }/>
                <Route path='/stopwatch' render={ () => <Stopwatch/> }/>
                <Route path='/ticketmaster_events' render={ () => <Events/> }/>
            </div>
        </Router>
    )
}


export default App;