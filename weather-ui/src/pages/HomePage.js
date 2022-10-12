import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {

    const history = useHistory();
    
    return (
        <body>
            <h1>My name is Weather App</h1>
            <p>this is the homepage.</p>
        </body>
    );
}

export default HomePage;