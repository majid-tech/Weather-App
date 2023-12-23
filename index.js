const apikey = "819248939d02fb742f11b08c3d424374";

const weatherData = document.getElementById("weather-data");

const cityInput = document.getElementById("city-input");


const form = document.querySelector("form");

form.addEventListener("submit", ()=>{
    event.preventDefault();
    const cityValue = cityInput.value;
    getWeatherData(cityValue);
    }
);

async function getWeatherData(cityValue){
    try {
        const responds = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)
        
        if(!responds.ok){
            throw new Error("Network response was not ok")
        }

        const data = await response.json()

        console.log(data);
    } catch (error){

    }
}