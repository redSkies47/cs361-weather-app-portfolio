import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../img/logo192.png';
import { BsArrowClockwise } from 'react-icons/bs';
import { WiCelsius, WiFahrenheit, WiNightCloudy, WiCloudy, WiDaySunny } from 'react-icons/wi';
import { MdWarning } from 'react-icons/md';

function Forecast() {

    const [show, setShow]=useState(false);

    const [explain, setExplain]=useState(true);

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
                    <WiCelsius onClick={onCel} id='celsius-icon' />
                    <WiFahrenheit class='selected' onClick={onFah} id='fahrenheit-icon'/>
                </label>
                {
                    explain?<p class='explain'>Switch between Celsius and Fahrenheit.
                        <button class='my-buttons' type='button' onClick={()=>setExplain(false)}>Ok!</button>
                    </p>:<div></div>
                
                }
                <button class='my-buttons' type='button' onClick={()=>setShow(!show)} id='more-info'>More info</button>
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
            </div>:null
            
        }
        </body>
    );
}

export default Forecast;