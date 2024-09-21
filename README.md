
# Weather App 🌦️

A simple, responsive weather app that allows users to search for the current weather of any city in the world using the OpenWeatherMap API. The app provides real-time information such as temperature, humidity, and wind speed.



## Features

- 🌍 Search Any City: Enter the name of any city to get the latest weather information.
- 🌡️ Real-time Temperature: Get the current temperature in Celsius.
- 💧 Humidity Levels: View the humidity percentage of the selected city.
- 🌬️ Wind Speed: See how fast the wind is blowing in the selected city.
- 🔄 Dynamic UI: The UI updates dynamically based on the city you search for.


## Installation

### Prerequisites
Ensure you have the following installed:

- A modern web browser (e.g., Chrome, Firefox, or Edge)
- A text editor like Visual Studio Code (optional, for editing the code)

1 Clone the repository:

```bash
  git clone https://github.com/your-username/weather-app.git

```

2 Navigate to the project folder:

```bash
  cd weather-app

```
3 Open index.html in your browser:
```bash
  open index.html
```
## Usage

- Enter the name of a city in the search bar.
- Click the search button 🔍.
- The app will display the current temperature, humidity, and wind speed for the city you searched.



## Technologies Used
- HTML: For the structure and layout of the app.
- CSS: For styling the app to make it visually appealing.
- JavaScript (ES6): For adding interactivity and connecting to the OpenWeatherMap API.
- OpenWeatherMap API: To fetch real-time weather data.


## API Reference

The app integrates with the OpenWeatherMap API to retrieve the weather data. Ensure you have a valid API key from OpenWeatherMap.

```javascript
const api_key = "YOUR_API_KEY_HERE";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
```



## Future Improvements
- 📍 Add Geolocation: Automatically fetch the weather for the user's current location.
- 🌄 Background Changes: Update background images based on the weather (e.g., sunny, rainy).
- 📱 Improve Responsiveness: Further enhancements to the mobile UI for better user experience.
