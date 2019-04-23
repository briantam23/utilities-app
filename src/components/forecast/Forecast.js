import React, { Fragment } from 'react';
import style from './forecast.less';
import ForecastChart from './forecastChart/ForecastChart';


const Forecast = () => (
    <Fragment>
        <h1 className={ style.forecastHeader }>Weather Forecast created with D3!</h1>
        <ForecastChart/>
    </Fragment> 
)


export default Forecast;