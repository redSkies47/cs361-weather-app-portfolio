import { readFile } from 'fs';

const forecast = {};

readFile('./data.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    const lines = data.split(/;|\r\n|\n/, 8);

    //  only grab the humidity number
    let humiditylen = lines[3].length;
    let humidityNum = lines[3].slice(2, humiditylen-2);

    forecast.currentTemp = parseInt(lines[0]);
    forecast.currentHi = parseInt(lines[1]);
    forecast.currentLo = parseInt(lines[2]);
    forecast.humidity = parseInt(humidityNum);
    forecast.tomHi = parseInt(lines[4]);
    forecast.tomLo = parseInt(lines[5]);
    forecast.nextHi = parseInt(lines[6]);
    forecast.nextLo = parseInt(lines[7]);
});

/**
 * Find the weather data with the the postal code
 */
const findWeatherByPostalCode = async () => {
    return forecast;
}

export { findWeatherByPostalCode }