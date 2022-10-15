import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../img/logo192.png';

function HomePage() {

    const history = useHistory();
    
    return (
        <body class='container'>
            <img src={logo} class='logo' alt="logo"></img>
            <div class='toggle'>
                <label classname='switch'>
                    <input id='toggler' type='checkbox'></input>
                    <span class='slider round'></span>
                </label>
                <p class='explain'>You can now change between modes.
                    <button type='button'>Ok!</button>
                </p>
            </div>
            <div class='search'>
                <h4>See today's weather forecast by searching for a postal code!</h4>
                <form action='/'>
                    <form class='search-bar'>
                        <label for='postalcode' id='postalcode' name='postalcode'></label>
                        <input type='text' pattern="[0-9]*" id='postalcode' name='postalcode' placeholder='(ex. 97331)'></input>

                        <button type='submit'>Search</button>
                    </form>
                    <form class='search-type'>
                        <input type='radio' id='postalsearch' name='searchtype' value='postalsearch' checked></input>
                        <label for='postalsearch'>Postal Code</label>
                    
                        <input type='radio' id='citysearch' name='searchtype' value='citysearch'></input>
                        <label for='citysearch'>City, State</label>
                    </form>
                </form>
            </div>
        </body>
    );
}

export default HomePage;