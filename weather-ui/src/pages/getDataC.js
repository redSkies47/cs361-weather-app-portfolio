const loadC = async () => {
    const serverURL = 'http://localhost:3000/forecastc';
    const response = await fetch(serverURL);
    const data = await response.json();

    return data;
};

export { loadC }