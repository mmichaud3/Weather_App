// API_KEY for maps api
let API_KEY = 'a8e71c9932b20c4ceb0aed183e6a83bb';

getWeatherData = (city) => {
  const URL = 'https://api.openweathermap.org/data/2.5/weather';
  const Full_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(Full_URL);
  return weatherPromise.then((response) => {
    return response.json();
  });
};

searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
    .then((response) => {
      console.log(response);
      showWeatherData(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

showWeatherData = (weatherData) => {
  document.getElementById('city-name').innerText = weatherData.name;
  const weatherType = (document.getElementById('weather-type').innerText =
    weatherData.weather[0].main);
  document.getElementById('temp').innerText = weatherData.main.temp;
  document.getElementById('min-temp').innerText = weatherData.main.temp_min;
  document.getElementById('max-temp').innerText = weatherData.main.temp_max;
  backgroundChange();
};

backgroundChange = () => {
  let weatherType = document.getElementById('weather-type').innerText;

  switch (weatherType) {
    case 'Clear':
      document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1517495306984-f84210f9daa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60";
      break;
    case 'Rain':
      document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')";
      break;
    case 'Snow':
      document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')";
      break;
    case 'Mist':
      document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1438803235109-d737bc3129ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')";
      break;
    case 'Thunderstorm':
      document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')";
      break;
    case 'Clouds':
      document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1498496294664-d9372eb521f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')";
      break;
    default:
      document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1559060017-445fb9722f2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')";
  }
};
