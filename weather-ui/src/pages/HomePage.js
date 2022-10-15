import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../img/logo01.png';

function HomePage() {

    const history = useHistory();
    
    return (
        <body>
            <img src={logo} classname='logo' alt="logo"></img>
            <label classname='switch'>
                <input id='toggler' type='checkbox'></input>
            </label>
            <p classname='feature-explain'>You can now change between modes.
                <button type='button'>Ok!</button>
            </p>
            <h4>See today's weather forecast by 
                searching for a postal code!
            </h4>
            <form action='/'>
                <fieldset>
                    <label for='postalcode' id='postalcode' name='postalcode'></label>
                    <input type='number' id='postalcode' name='postalcode' min='5' max='5' placeholder='(ex. 97331)'></input>

                    <button type='submit'>Search</button>

                    <input type='radio' id='postalsearch' name='searchtype' value='postalsearch' checked></input>
                    <label for='postalsearch'>Postal Code</label>
                
                    <input type='radio' id='citysearch' name='searchtype' value='citysearch'></input>
                    <label for='citysearch'>City, State</label>
                </fieldset>
            </form>
        </body>
    );
}

export default HomePage;