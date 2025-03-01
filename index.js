const apiKey = 'c428fe61b19d0149a58c4ef042e6aae5'; // Replace with your OpenWeatherMap API key
const url = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('search').addEventListener('click', () => {
    const locationInput = document.getElementById('locationinput').value;
    if (locationInput) {
        fetchWeather(locationInput);
    } else {
        alert('Please enter a location');
    }
});
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {  // Check if Enter key is pressed
      const locationInput = document.getElementById('locationinput').value;
      if (locationInput) {
          fetchWeather(locationInput); // Call the function with input value
      } else {
          alert('Please enter a location');
      }
  }
});



async function fetchWeather(location) {
    try {
        const response = await fetch(`${url}?q=${location}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            displayWeather(data);
        } else {
            alert('Location not found.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    
    const cityElement = document.createElement('p');
    cityElement.textContent = `City: ${data.name}`;
    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
    const humidityElement = document.createElement('p');
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
    const forecastElement = document.createElement('p');
    forecastElement.textContent = `Forecast: ${data.weather[0].description}`;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
   const flexContainer = document.querySelector('.flex');
    flexContainer.innerHTML = ''; 
    flexContainer.appendChild(cityElement);
    flexContainer.appendChild(temperatureElement);
    flexContainer.appendChild(humidityElement);
    flexContainer.appendChild(forecastElement);
}




//c428fe61b19d0149a58c4ef042e6aae5