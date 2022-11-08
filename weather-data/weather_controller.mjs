import 'dotenv/config';
import * as forecasts from './forecast_model.mjs';
import express from 'express';
import { body, validationResult } from 'express-validator';

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

/**
 * Retrieve the weather data corresponding to the provided
 * postal code in the URL
 */
app.get('/forecast-f/:_postalCode', (req, res) => {
    const postalCode = req.params._postalCode;
    forecasts.findWeatherByPostalCode(postalCode)
        .then (forecast => {
            if (forecast !== null) {
                res.json(forecast);
            } else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            res.status(400).json({ Error: 'Request failed' });
        });
});