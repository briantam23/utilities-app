import React, { Fragment } from 'react';
import style from './forecastChart.less';
import { LineChart, CartesianGrid, Line, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const ForecastChart = ({ mainForecast }) => {
    console.log(mainForecast);
    return( 
        <Fragment>
            <ResponsiveContainer width="100%" height={ 400 } >
    
                <LineChart 
                    data={ mainForecast } 
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >

 
                </LineChart>

            </ResponsiveContainer>
      </Fragment>
    )
}


export default ForecastChart;