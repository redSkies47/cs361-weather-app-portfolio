import React from 'react';
// import { useHistory } from 'react-router-dom';
import logo from '../img/logo192.png';
import { BsArrowClockwise } from 'react-icons/bs';
import { WiNightCloudy, WiCloudy, WiDaySunny } from 'react-icons/wi';
import { MdWarning } from 'react-icons/md'

function Forecast() {
    return (
        <body>
            <img src={logo} classname='logo' alt="logo"></img>
            <div classname='options'>
                <label classname='switch'>
                    <input id='toggle-forecast' type='checkbox'></input>
                </label>
                <label classname="again">
                    <BsArrowClockwise/>
                    <p>do another search</p>
                </label>
                <p>&#176;C <b>&#176;F</b></p>
                <p classname='feature-explain'>Switch between Celsius and Fahrenheit.
                    <button type='button'>Ok!</button>
                </p>
                <p>More info</p>
            </div>
            <div classname='main-info'>
                <h4>Corvallis, OR</h4>
                <h4>97331</h4>
                <h1 classname='curren-temp'>65&#176;</h1>
                <WiNightCloudy/>
                <h2 className='weather-description'>Mostly Cloudy</h2>
                <h3><MdWarning/> Flash flood warning</h3>
            </div>
            <div className='extra-info'>
                <table>
                    <tr className='days'>
                        <th></th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                    </tr>
                    <tr classname='weather-icons'>
                        <td></td>
                        <td><WiCloudy/></td>
                        <td><WiDaySunny/></td>
                        <td><WiDaySunny/></td>
                    </tr>
                    <tr className='highs'>
                        <td>highs</td>
                        <td>78&#176;</td>
                        <td>71&#176;</td>
                        <td>78&#176;</td>
                    </tr>
                    <tr className='lows'>
                        <td>lows</td>
                        <td>46&#176;</td>
                        <td>49&#176;</td>
                        <td>47&#176;</td>
                    </tr>
                    <tr className='humidity'>
                        <td>humidity</td>
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