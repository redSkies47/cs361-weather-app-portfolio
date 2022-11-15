import * as myRequest from './request.mjs';
import * as receive from './receive.mjs';


/**
 * Find the weather data with the the postal code
 */
const findWeatherByPostalCode = async () => {

    myRequest.writeCommand();

    const forecast = await receive.getConvertedData();
    return forecast;
    
}

export { findWeatherByPostalCode }