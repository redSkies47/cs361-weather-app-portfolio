const loadF = async () => {
    const serverURL = 'http://localhost:3000/forecastf';
    const response = await fetch(serverURL);
    const data = await response.json();
    // console.log("here is data when loading the page:\n");
    // console.log(data.currentTemp);

    return data;
};

export { loadF }