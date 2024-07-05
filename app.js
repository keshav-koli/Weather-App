const api_key="9bd6f8641ade2097b2338de88ebe51bc";
const api_url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather(){
    const response= await fetch(api_url+`&appid=${api_key}`);
    var data=await response.json();
    console.log(data);
    
}
checkWeather();
