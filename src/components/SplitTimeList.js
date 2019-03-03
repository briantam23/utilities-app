import React, { Fragment } from 'react';
import formatTime from '../utils';


const SplitTimeList = ({ splitTimes, isRunning, reset, index }) => {
    return(
        <Fragment>
        {
            splitTimes.map((splitTime, idx) => (
                <Fragment key={ idx }>
                    <li>{ formatTime(splitTime) }</li>
                    {
                       idx === index ? (
                        <button style={{ backgroundColor: 'yellow' }} onClick={ (e) => reset(splitTime, idx + 1, e) } disabled={ isRunning }>
                            Reset time to this split
                        </button>
                        ) : ( 
                        <button onClick={ (e) => reset(splitTime, idx + 1, e) } disabled={ isRunning }> 
                            Reset time to this split
                        </button>
                        )
                    }     
                </Fragment>
            ))
        }
        </Fragment>
    )
}

export default SplitTimeList;