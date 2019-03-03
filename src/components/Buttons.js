import React, { Fragment } from 'react';


const Buttons = ({ isRunning, start, split, stop, reset }) => (
    <Fragment>
        <button onClick={ () => start() } disabled={ isRunning }>Start</button>
        <button onClick={ () => split() } disabled={ !isRunning }>Split</button>
        <button onClick={ () => stop() } disabled={ !isRunning }>Stop</button>
        <button onClick={ () => reset() } disabled={ isRunning }>Reset</button>
    </Fragment>
)


export default Buttons;