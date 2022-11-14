import * as myRequest from './request.mjs';
import * as receive from './receive.mjs';

/**
 * Find the weather data with the the postal code
 */
const findWeatherByPostalCode = async () => {

    myRequest.writeCommand();

    // const forecast = await receive.getConvertedData();
    // console.log('within the find weather method:\n')
    // console.log(JSON.stringify(forecast));
    // return forecast;

    const forecast = receive.getConvertedData();
        
    return forecast;

    // setTimeout(function () {

    //     const forecast = receive.getConvertedData();
        
    //     return forecast;
    //    }, 100);

    // setTimeout(function () {
    //     console.log('this waited successfully');
    //     const forecast = receive.getConvertedData();
    //     console.log(JSON.stringify(forecast));
    //     return forecast;
    // }, 1000);
    
}

export { findWeatherByPostalCode }