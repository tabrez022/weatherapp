const apikey = "1a07198d0e24e6776d04dc9d187b7ab8";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "kmph";

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "./images/clouds.png";
    }
    if(data.weather[0].main == "Clear"){
        weathericon.src = "./images/clear.png";
    }
    if(data.weather[0].main == "Rain"){
        weathericon.src = "./images/rain.png";
    }
    if(data.weather[0].main == "Drizzle"){
        weathericon.src = "./images/drizzle.png";
    }
    if(data.weather[0].main == "Mist"){
        weathericon.src = "./images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }

    
}

searchbtn.addEventListener("click", ()=>{
checkweather(searchbox.value);  
})
