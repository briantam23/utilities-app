import React from 'react';
import style from './stopwatchButtons.less';


const StopwatchButtons = ({ isRunning, start, split, stop, reset }) => (
    <div className={ style.buttons }>
        <button onClick={ () => start() } disabled={ isRunning }>Start</button>
        <button onClick={ () => split() } disabled={ !isRunning }>Split</button>
        <button onClick={ () => stop() } disabled={ !isRunning }>Stop</button>
        <button onClick={ () => reset() } disabled={ isRunning }>Reset</button>
    </div>
)


export default StopwatchButtons;