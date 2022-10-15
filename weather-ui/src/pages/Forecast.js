import React from 'react';
// import { useHistory } from 'react-router-dom';
import logo from '../img/logo192.png';
import { BsArrowClockwise } from 'react-icons/bs';
import { WiNightCloudy, WiCloudy, WiDaySunny } from 'react-icons/wi';
import { MdWarning } from 'react-icons/md';

function Forecast() {
    return (
        <body class='container2'>
            <img src={logo} class='logo' alt="logo"></img>
            <div class='options'>
                <label class='switch'>
                    <input id='toggle-forecast' type='checkbox'></input>
                </label>
                <label class="again">
                    <BsArrowClockwise id='redo-icon'/>
                    <p>do another search</p>
                </label>
                <p>&#176;C <b>&#176;F</b></p>
                <p class='feature-explain'>Switch between Celsius and Fahrenheit.
                    <button type='button'>Ok!</button>
                </p>
                <button type='button'>More info</button>
            </div>
            <div class='main-info'>
                <h4>Corvallis, OR <br/> 97331</h4>
                <span class='current'>
                    <h1 class='temp'>65&#176;</h1>
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
                        <td>78&#176;</td>
                        <td>71&#176;</td>
                        <td>78&#176;</td>
                    </tr>
                    <tr class='lows'>
                        <td class='key'>lows</td>
                        <td>46&#176;</td>
                        <td>49&#176;</td>
                        <td>47&#176;</td>
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

export default Forecast;