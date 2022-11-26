import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../img/logo192.png';
import { BsArrowClockwise } from 'react-icons/bs';
import { WiCelsius, WiFahrenheit, WiNightCloudy, WiCloudy, WiDaySunny } from 'react-icons/wi';
import { MdWarning } from 'react-icons/md';
import DarkMode from '../components/DarkMode';
import * as myData from './getDataF';

function Forecast() {

    const [show, setShow]=useState(false);
    const [explain, setExplain]=useState(true);
    const [weather, setWeather] = useState(null);
    const history = useHistory();

    
    const onRedo = async () => {
        history.push('/');
    }

    const onCel = async() => {
        history.push('/forecast-c')
    }

    useEffect( () => {
        const fetchWeather = async () => {
            await myData.loadF().then(
                (data) => {
                    setWeather(data);
                });
        };

        fetchWeather();
    }, []);

    return (
        <div class='container2'>
            <img src={logo} class='logo' alt="logo"></img>
            <div class='options'>
                <label class='switch'>
                    <DarkMode />
                </label>
                <label class="again">
                    <p><BsArrowClockwise onClick={onRedo} id='redo-icon'/> Another search? Press to start again from the search page!</p>
                </label>
                <label class='unit'>
                    <WiCelsius onClick={onCel} id='celsius-icon' />
                    <WiFahrenheit class='selected' id='fahrenheit-icon'/>
                </label>
                {
                    explain?<p class='explain'>Switch between Celsius and Fahrenheit.
                        <button class='my-buttons' type='button' onClick={()=>setExplain(false)}>Ok!</button>
                    </p>:<div></div>
                
                }
                <button class='my-buttons' type='button' onClick={()=>setShow(!show)} id='more-info'>More info</button>
            </div>

            {weather && (
                <div class='main-info'>
                    <h4>Corvallis, OR <br/> 97331</h4>
                    <span class='current'>
                        <h1 class='temp'>{ weather.currentTemp } &#176;</h1>
                        <div class='details'>
                            <WiNightCloudy class='image'/>
                            <h2 class='description'>Mostly Cloudy</h2>
                        </div>
                    </span>
                    <h3><MdWarning/> Flash flood warning</h3>
                </div>
            )}
            {
                
            show?<div class='extra-info'>
                <table>
                    <tr class='days'>
                        <th></th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                    </tr>
                    <tr class='weather-icons'>
                        <td></td>
                        <td><WiCloudy/></td>
                        <td><WiDaySunny/></td>
                        <td><WiDaySunny/></td>
                    </tr>
                {weather &&
                    <tr class='highs'>
                        <td class='key'>highs</td>
                        <td>{weather.currentHi}&#176;</td>
                        <td>{weather.tomHi}&#176;</td>
                        <td>{weather.nextHi}&#176;</td>
                    </tr>
                }
                {weather &&
                    <tr class='lows'>
                        <td class='key'>lows</td>
                        <td>{weather.currentLo}&#176;</td>
                        <td>{weather.tomLo}&#176;</td>
                        <td>{weather.nextLo}&#176;</td>
                    </tr>
                }
                {weather &&
                    <tr class='humidity'>
                        <td class='key'>humidity</td>
                        <td>{weather.humidity}%</td>
                        <td></td>
                        <td></td>
                    </tr>
                }
                </table>
            </div>:null
            
        }
        </div>
    );
}

export default Forecast;