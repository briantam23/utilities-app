import React, { Component } from 'react';
import style from './forecastChart.less';


class ForecastChart extends Component {
    render() {
        return( 
            <svg className={ style.chart }></svg>
        )
    }
}


export default ForecastChart;