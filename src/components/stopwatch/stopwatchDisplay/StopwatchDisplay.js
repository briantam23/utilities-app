import React, { Fragment } from 'react';
import style from './stopwatchDisplay.less';
import StopwatchButtons from '../stopwatchButtons/StopwatchButtons';
import formatTime from '../../../util/stopwatchUtil';


const StopwatchDisplay = ({ time, isRunning, start, split, stop, reset }) => (
    <Fragment>
        <h1 className={ style.header }>Stopwatch</h1>

        <div className={ style.mainTime }>{ formatTime(time) }</div>

        <StopwatchButtons
            isRunning={ isRunning } 
            start={ start } 
            split={ split } 
            stop={ stop } 
            reset={ reset }
        />
    </Fragment>
)


export default StopwatchDisplay;