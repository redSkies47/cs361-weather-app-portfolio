import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../img/logo192.png';
import { BsArrowClockwise } from 'react-icons/bs';
import { WiCelsius, WiFahrenheit, WiNightCloudy, WiCloudy, WiDaySunny } from 'react-icons/wi';
import { MdWarning } from 'react-icons/md';

function Celsius() {

    const history = useHistory();

    const onRedo = async () => {
        history.push('/');
    }

    const onCel = async() => {
        history.push('forecast-c')
    }

    const onFah = async () => {
        history.push('/forecast')
    }

    return (
        <body class='container2'>
            <img src={logo} class='logo' alt="logo"></img>
            <div class='options'>
                <label class='switch'>
                    <input id='toggle-forecast' type='checkbox'></input>
                </label>
                <label class="again">
                    <p><BsArrowClockwise onClick={onRedo} id='redo-icon'/> do another search</p>
                </label>
                <label class='unit'>
                    <WiCelsius class='selected' onClick={onCel} id='celsius-icon' />
                    <WiFahrenheit onClick={onFah} id='fahrenheit-icon'/>
                </label>
                <p class='explain'>Switch between Celsius and Fahrenheit.
                    <button class='my-buttons' type='button'>Ok!</button>
                </p>
                <button class='my-buttons' type='button'>More info</button>
            </div>
            <div class='main-info'>
                <h4>Corvallis, OR <br/> 97331</h4>
                <span class='current'>
                    <h1 class='temp'>18&#176;</h1>
                    <div class='details'>
                        <WiNightCloudy class='image'/>
                        <h2 class='description'>Mostly Cloudy</h2>
                    </div>
                </span>
                <h3><MdWarning/> Flash flood warning</h3>
            </div>
            <div class='extra-info'>
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
                    <tr class='highs'>
                        <td class='key'>highs</td>
                        <td>26&#176;</td>
                        <td>22&#176;</td>
                        <td>26&#176;</td>
                    </tr>
                    <tr class='lows'>
                        <td class='key'>lows</td>
                        <td>7&#176;</td>
                        <td>9&#176;</td>
                        <td>8&#176;</td>
                    </tr>
                    <tr class='humidity'>
                        <td class='key'>humidity</td>
                        <td>81%</td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </body>
    );
}

export default Celsius;