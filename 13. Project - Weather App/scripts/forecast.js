const key = 'dwSiVNLesTWVJLMnsGqS8MzYBT0PlvB6';

// get weather information
const getWeather = async (id) => {

    // base url
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    // wait to fetch data
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// get ciry information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    // query string parameters
    const query = `?apikey=${key}&q=${city}`;

    // wait to fetch data
    const response = await fetch(base + query);
    const data = await response.json();

    //returns a promise
    return data[0];
};


getCity('benha').then(data => {
    return getWeather(data.Key);
}).then(data => {
    console.log(data);
}).catch(err => console.log(err));

