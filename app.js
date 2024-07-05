const api_key = "9bd6f8641ade2097b2338de88ebe51bc";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector('.search-city');
const weatherIcon = document.querySelector('.weather-icon');

const btn = document.querySelector('.btn');

const temp = document.querySelector('.temp');

const cityElement = document.querySelector('.city');

const humidity = document.querySelector('.humidity');

const wind = document.querySelector('.wind');

async function checkWeather(city) {
    const response = await fetch(api_url + city + `&appid=${api_key}`);
    var data = await response.json();
    console.log(data);
    cityElement.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + '%';
    wind.innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Rain") {
        weatherIcon.src = "weather-app-img/images/rain.png"
    }
    else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "weather-app-img/images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "weather-app-img/images/clear.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "weather-app-img/images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "weather-app-img/images/mist.png"
    }
}
btn.addEventListener('click', () => {
    checkWeather(search.value)
})
