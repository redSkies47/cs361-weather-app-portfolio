import React, { useState } from 'react';
import logo from '../img/logo192.png';
import { MdSearch } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import DarkMode from '../components/DarkMode';

function HomePage() {

    const [explain, setExplain]=useState(true);
    const history = useHistory();

    
    const onSearch = async () => {
        history.pushState('/forecast-f')
    }
    
    return (
        <body class='container'>
            <img src={logo} class='logo' alt="logo"></img>
            <div class='toggle'>
                <label class='switch'>
                    <DarkMode />
                </label>
                {
                    
                    explain?<p class='explain'>You can now change between modes.
                        <button class='my-buttons' type='button' onClick={()=>setExplain(false)}>Ok!</button>
                    </p>:<div></div>
    
                }
            </div>
            <div class='search'>
                <h4>See today's weather forecast by searching for a postal code or a city!</h4>
                <form action='/forecast-f' method='get'>
                    <div class='search-bar'>
                        <label for='query' id='query' name='query'></label>
                        <input type='text' id='query' name='query' placeholder='(ex. 97331)'></input>

                        <button type='submit' value='submit'><MdSearch id='search-icon' onClick={onSearch}/></button>
                    </div>
                </form>
            </div>
        </body>
    );
}

export default HomePage;