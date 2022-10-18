import React, { useState } from 'react';
import logo from '../img/logo192.png';
import { MdSearch } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import DarkMode from '../components/DarkMode';

function HomePage() {

    const [explain, setExplain]=useState(true);

    // const [isToggled, setIsToggled]=useState(false);

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
                    {/* <input type='checkbox'isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}></input>
                    <span class='slider'></span> */}
                </label>
                {
                    
                    explain?<p class='explain'>You can now change between modes.
                        <button class='my-buttons' type='button' onClick={()=>setExplain(false)}>Ok!</button>
                    </p>:<div></div>
                
                }
            </div>
            <div class='search'>
                <h4>See today's weather forecast by searching for a postal code!</h4>
                <form action='/forecast-f' method='get'>
                    <div class='search-bar'>
                        <label for='postalcode' id='postalcode' name='postalcode'></label>
                        <input type='text' pattern="[0-9]*" id='postalcode' name='postalcode' placeholder='(ex. 97331)'></input>

                        <button type='submit' value='submit'><MdSearch id='search-icon' onClick={onSearch}/></button>
                    </div>
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