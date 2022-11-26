import 'dotenv/config';
import * as forecast_fs from './forecast_f.mjs';
import * as forecast_cs from './forecast_c.mjs';

import express from 'express';

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

/**
 * Get fahrenheit forecast
 */
 app.get('/forecastf', (req, res) => {
    forecast_fs.findWeatherByPostalCode()
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

/**
 * Get celsuis forecast
 */
 app.get('/forecastc', (req, res) => {
    forecast_cs.findWeatherByPostalCode()
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

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});