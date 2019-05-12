import React, { Fragment } from 'react';
import style from './forecastChart.less';
import { LineChart, CartesianGrid, Line, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const ForecastChart = ({ mainForecast }) => {
    console.log(mainForecast);
    return (
        <div className={ style.chart }>
        {
            mainForecast.length ? (
                <Fragment>
                    <ResponsiveContainer width="100%" height={400} >

                        <LineChart
                            data={mainForecast}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >

                            <XAxis
                                dataKey="idx"
                                tick={{ fontSize: '11px', padding: '12px' }}
                            />
                            <YAxis
                                type="number"
                                domain={['dataMin+10000', 'auto']}
                                tick={{ fontSize: '11px', padding: '12px' }}
                            />

                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />

                            <Line type="monotone" dataKey="temp" stroke="#00008b" />
                            {/* <Line type="monotone" dataKey="temp_max" stroke="#ff0000" />
                            <Line type="monotone" dataKey="temp_min" stroke="#0000ff" /> */}
                            <Line type="monotone" dataKey="humidity" stroke="#1C1C1C" />

                        </LineChart>

                    </ResponsiveContainer>
                </Fragment>
            ) : null
        }
        </div>
    )
}


export default ForecastChart;