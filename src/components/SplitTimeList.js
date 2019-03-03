import React, { Fragment } from 'react';
import formatTime from '../utils';


const SplitTimeList = ({ splitTimes, isRunning, reset }) => {
    return(
        <Fragment>
        {
            splitTimes.map((splitTime, idx) => (
                <Fragment key={ idx }>
                    <li>{ formatTime(splitTime) }</li>
                    <button onClick={ () => reset(splitTime, idx + 1) } disabled={ isRunning }>Reset time to this split</button>
                </Fragment>
            ))
        }
        </Fragment>
    )
}

export default SplitTimeList;