import React, { Component, Fragment } from 'react';
import SplitTimeList from './SplitTimeList';
import formatTime from '../utils';
import style from './app.less';


class App extends Component {
    
    state = {
        isRunning: false,
        time: 0,
        offset: 0,
        interval: null,
        splitTimes: []
    }

    start = () => {
        const { refresh } = this;
        this.setState({
            isRunning: true,
            offset: Date.now(),
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

    reset = (time = 0, idx) => {
        let { splitTimes } = this.state;
        this.setState({
            isRunning: false,
            time,
            offset: 0,
            interval: null
        })
        if(idx) splitTimes = splitTimes.slice(0, idx);
    }

    refresh = () => {
        const { time } = this.state;
        const { elapsed } = this;
        this.setState({ time: time + elapsed() });
    }

    elapsed = () => {
        const { offset } = this.state;
        this.setState({ offset: Date.now() });
        return Date.now() - offset;
    }

    render() {
        const { isRunning, time, splitTimes } = this.state;
        const { start, split, stop, reset, refresh, elapsed } = this;
        return(
            <Fragment>
                <h1 className={style.header}>Stopwatch</h1>
                <div>{ formatTime(time) }</div>
                <button onClick={ () => start() } disabled={ isRunning }>Start</button>
                <button onClick={ () => split() } disabled={ !isRunning }>Split</button>
                <button onClick={ () => stop() } disabled={ !isRunning }>Stop</button>
                <button onClick={ () => reset() } disabled={ isRunning }>Reset</button>
                <ul>
                    <SplitTimeList splitTimes={ splitTimes } isRunning={ isRunning } reset={ reset }/>
                </ul>
            </Fragment>
        )
    }
}


export default App;