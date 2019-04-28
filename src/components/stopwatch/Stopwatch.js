import React, { Component } from 'react';
import style from './stopwatch.less';
import StopwatchButtons from './stopwatchButtons/StopwatchButtons';
import SplitTimeList from './splitTimeList/SplitTimeList';
import formatTime from '../../util';


class Stopwatch extends Component {
    
    state = {
        isRunning: false,
        time: 0,
        shift: 0,
        interval: null,
        splitTimes: [],
        index: -1
    }

    start = () => {
        const { refresh } = this;
        this.setState({
            isRunning: true,
            shift: Date.now(),
            interval: setInterval(refresh, 10)
        })
    }

    split = () => {
        const { time, splitTimes } = this.state;
        this.setState({ splitTimes: [...splitTimes, time] });
    }

    stop = () => {
        const { interval } = this.state;
        this.setState({ 
            isRunning: false,
            interval: clearInterval(interval)
        })
    }

    reset = (time = 0, idx, e) => {
        let { splitTimes } = this.state;
        this.setState({
            time,
            shift: 0,
            interval: null,
            splitTimes: [],
            index: -1
        })
        if(idx) {
            this.setState({
                splitTimes: splitTimes.slice(0, idx),
                index: idx - 1
            })
        };
    }

    refresh = () => {
        const { time } = this.state;
        const { elapsed } = this;
        this.setState({ time: time + elapsed() });
    }

    elapsed = () => {
        const { shift } = this.state;
        this.setState({ shift: Date.now() });
        return Date.now() - shift;
    }

    render() {
        const { isRunning, time, splitTimes, index } = this.state;
        const { start, split, stop, reset } = this;
        return(
            <div className={ style.container }>

                <h1 className={ style.header }>
                    Stopwatch
                </h1>

                <div className={ style.mainTime }>
                    { formatTime(time) }
                </div>

                <StopwatchButtons
                    isRunning={ isRunning } 
                    start={ start } 
                    split={ split } 
                    stop={ stop } 
                    reset={ reset }
                />

                <ul>
                    <SplitTimeList 
                        isRunning={ isRunning } 
                        splitTimes={ splitTimes } 
                        index={ index } 
                        reset={ reset } 
                    />
                </ul>
            </div>
        )
    }
}


export default Stopwatch;