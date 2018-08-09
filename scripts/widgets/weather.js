import { WEATHER_API_KEY } from '../../secrets.js'

const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${WEATHER_API_KEY}`;

async function getData(){
    try {
        const result = await fetch(url);
        const jsonData = await result.json();
        return jsonData
    } catch (error) {
        console.log(error);
    }
}

async function populateWeatherElement(){
    const weatherData = await getData();
    return `
        <p> ${weatherData.name} </p>
        <p> Todays Forecast: ${weatherData.weather[0].main} </p>
        <p> <img src="http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png"> </p>
        <p> Min: ${kelvinToCelcius(weatherData.main.temp_min)}C </p>
        <p> Max: ${kelvinToCelcius(weatherData.main.temp_max)}C </p>
    `
}

function kelvinToCelcius(temp){
    return temp - 273.15;
}

export default () => async function render() {
    const html = `
        <div id="weather">
            ${await populateWeatherElement()}
        </div >
      `
    return html;
}

/*
TODO

* be able to save the location persistence (chrome extension)


*/