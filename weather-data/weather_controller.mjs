import 'dotenv/config';
import * as forecasts from './forecast_model.mjs';
import express from 'express';

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

/**
 * Retrieve the weather data corresponding to the provided
 * postal code
 */
 app.get('/', (req, res) => {
    forecasts.findWeatherByPostalCode()
        .then (forecast => {
            if (forecast !== null) {
                console.log(JSON.stringify(forecast));
                res.json(forecast);
            } else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            res.status(400).json({ Error: 'Request failed' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});