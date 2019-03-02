import React, { Component, Fragment } from 'react';
import formatTime from '../utils';
import style from './app.less';


class App extends Component {
    
    state = {
        isRunning: false,
        time: 0,
        offset: 0
    }

    start = () => {
        const { isRunning } = this.state;
        const { refresh } = this;
        if(!isRunning) {
            this.setState({
                isRunning: true,
                offset: Date.now(),
            })
            setInterval(refresh, 10);
        }
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
        const { isRunning, time } = this.state;
        const { start, refresh, elapsed } = this;
        return(
            <Fragment>
                <h1 className={style.header}>Stopwatch</h1>
                <div>{ formatTime(time) }</div>
                <button onClick={ () => start() }>Start</button>
                
            </Fragment>
        )
    }
}


export default App;