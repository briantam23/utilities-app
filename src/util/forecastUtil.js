const getMainForecast = forecast => {
    const mainForecast = [];
    forecast.map((el, idx) => {
        el["main"]["idx"] = idx;
        mainForecast.push(el.main);
    })
    return mainForecast;
}


export default getMainForecast;