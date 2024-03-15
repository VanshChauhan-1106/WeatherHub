const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "de7e7186fdf0edc83ecde54fb7d8666d";

const getWeather = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const result = await response.json();
  cityName.innerHTML = result.name;
  if (!(result.cod == 200)) {
    alert("Enter a valid city or location name!");
    getWeather("Delhi");
  }

  temp.innerHTML = Math.round(result.main.temp);
  feels_like.innerHTML = Math.round(result.main.feels_like);
  min_temp.innerHTML = Math.round(result.main.temp_min);
  max_temp.innerHTML = Math.round(result.main.temp_max);
  pressure.innerHTML = result.main.pressure;
  humidity.innerHTML = Math.round(result.main.humidity);
  wind_speed.innerHTML = Math.round((result.wind.speed * 3.6).toFixed(2));
  wind_degrees.innerHTML = Math.round(result.wind.deg);
  sunrise.innerHTML = toTime(result.sys.sunrise);
  sunset.innerHTML = toTime(result.sys.sunset);
  console.log(result);
};

getWeather("Delhi");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

function toTime(unix) {
  let d = new Date(unix * 1000);
  let hours = d.getHours() % 12 || 12;
  let minutes = d.getMinutes();

  let time = hours + ":" + minutes;
  return time;
}

const getWeather1 = async (city, name) => {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const result = await response.json();
  // let id1 = name+"_pct";
  let pressure = name + "_pressure";
  let feels = name + "_feels";
  let temp = name + "_temp";
  let humidity = name + "_humidity";
  let wind = name + "_wind";

  document.getElementById(pressure).innerHTML = Math.round(result.main.pressure);
  document.getElementById(feels).innerHTML = Math.round(result.main.feels_like);
  document.getElementById(temp).innerHTML = Math.round(result.main.temp);
  document.getElementById(humidity).innerHTML = Math.round(result.main.humidity);
  document.getElementById(wind).innerHTML = Math.round((result.wind.speed * 3.6).toFixed(2));
  console.log(result);
};

getWeather1("Mumbai", "m");
getWeather1("Bangalore", "b");
getWeather1("Chennai", "c");
getWeather1("Hyderabad", "h");
getWeather1("Kolkata", "k");
