// select HTML elements in the document
const myTown = document.querySelector('#town');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast');

// Create required variables for the url
const myKey = 'fff63fc02b97fe4679dd1d15e9f07e83';
const myLat = '5.735258438233097';
const myLon = '-0.06696515186046105';

//construct a full path using template literals
const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`
const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`

//Grabbing the current weather data
async function apiFetch() {
    try {
        const response = await fetch(myUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Grabbing the weather forecast
async function apiFetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

//Displaying the json data on the page
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

//Displaying the weather forecast data
function displayForecast(data) {
    const forecastList = data.list;
    const dailyForecast = {};

    forecastList.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toDateString();

        if (!dailyForecast[day]) {
            dailyForecast[day] = {
                temps: [],
                icons: [],
                descriptions: []
            };
        }

        dailyForecast[day].temps.push(item.main.temp);
        dailyForecast[day].icons.push(item.weather[0].icon);
        dailyForecast[day].descriptions.push(item.weather[0].description);
    });

    forecastContainer.innerHTML = '';

    Object.keys(dailyForecast).slice(0, 3).forEach(day => {
        const dayData = dailyForecast[day];
        const minTemp = Math.min(...dayData.temps);
        const maxTemp = Math.max(...dayData.temps);
        const icon = dayData.icons[0]; // Use the first icon of the day
        const desc = dayData.descriptions[0];

        const dayElement = document.createElement('div');
        dayElement.classList.add('forecast-day');
        dayElement.innerHTML = `
            <h3>${day}</h3>
            <img src="https://openweathermap.org/img/w/${icon}.png" alt="${desc}">
            <p>High: ${maxTemp}&deg;F</p>
            <p>Low: ${minTemp}&deg;F</p>
            <p>${desc}</p>
        `;
        forecastContainer.appendChild(dayElement);
    });
}

apiFetch();
apiFetchForecast();