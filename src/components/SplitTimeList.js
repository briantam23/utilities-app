import React, { Component, Fragment } from 'react';
import formatTime from '../utils';


class SplitTimeList extends Component {
    render() {
        const { splitTimes, isRunning, reset } = this.props;
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
}

export default SplitTimeList;