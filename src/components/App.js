import React, { Fragment } from 'react';
import Nav from './Nav';
import Stopwatch from './stopwatch/Stopwatch';


const App = () => {
    return(
        <Fragment>
            <Nav/>
            <Stopwatch/>
        </Fragment>
    )
}


export default App;