import React, { Fragment } from 'react';
import Nav from './Nav';
import Home from './Home';
import Stopwatch from './stopwatch';
import { HashRouter as Router, Route } from 'react-router-dom';


const App = () => {
    return(
        <Router>
            <Fragment>
                <Nav/>
                <Route exact path='/' render={ () => <Home/> }/>
                <Route path='/stopwatch' render={ () => <Stopwatch/> }/>
            </Fragment>
        </Router>
    )
}


export default App;