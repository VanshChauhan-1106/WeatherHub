const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': '0f048fa590msh0d1eee29d7de413p1740cajsnfd0b846b0027',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = async (city) => {
  try {
    cityName.innerHTML = city;
    const response = await fetch(url + city, options);
    const result = await response.json();
    cloud_pct.innerHTML = result.cloud_pct;
    temp.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = (result.wind_speed * 3.6).toFixed(2);
    wind_degrees.innerHTML = result.wind_degrees;
    sunrise.innerHTML = toTime(result.sunrise);
    sunset.innerHTML = toTime(result.sunset);
    console.log(result);

    if(result.temp == undefined) {
      alert("Enter a valid city or location name!");
      getWeather("Delhi");
    }
    
  } catch (error) {
    console.error(error);
  }
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
  try {
    const response = await fetch(url + city, options);
    const result = await response.json();
    // let id1 = name+"_pct";
    let pct = name+"_pct";
    let feels = name+"_feels";
    let temp = name+"_temp";
    let humidity = name+"_humidity";
    let wind = name+"_wind";

    document.getElementById(pct).innerHTML = result.cloud_pct;
    document.getElementById(feels).innerHTML = result.feels_like;
    document.getElementById(temp).innerHTML = result.temp;
    document.getElementById(humidity).innerHTML = result.humidity;
    document.getElementById(wind).innerHTML = (result.wind_speed * 3.6).toFixed(2);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

getWeather1("Mumbai", "m");
getWeather1("Bangalore", "b");
getWeather1("Chennai", "c");
getWeather1("Hyderabad", "h");
getWeather1("Kolkata", "k");

