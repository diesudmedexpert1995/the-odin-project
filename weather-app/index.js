const wqForm = document.getElementById('weatherQueryForm')
const cityInput = document.getElementById('cityInput')
const weatherResults = document.getElementById('weatherResults')
const WEATHER_KEY="HHB3MF4ANV2GS25Z3YYKAX9GQ"

wqForm.addEventListener('submit', async(e) =>{
    e.preventDefault()
    e.preventDefault
    const cityName = cityInput.value.trim();
    if(!cityName){
        weatherResults.innerHTML = 'Please enter a correct city name'
        return
    }
    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=${WEATHER_KEY}&contentType=json`,
          );
      
          if (!response.ok) {
            throw new Error("Couldn't fetch Weather data!");
          }
      
          const responseJSON = await response.json();
          weatherResults.innerHTML = `<h1>${responseJSON.resolvedAddress}</h1>
          <h2>${responseJSON.description}</h2>
          <div class="results">
      
            <div class="weatherResult">
              <i class="fa-solid fa-temperature-full"></i>
              <p><b>Temperature:</b> ${responseJSON.currentConditions.temp}°C</p>
            </div>
            <div class="weatherResult">
              <i class="fa-solid fa-umbrella"></i>
              <p><b>Conditions:</b> ${responseJSON.currentConditions.conditions}</p>
            </div>
            <div class="weatherResult">
              <i class="fa-solid fa-cloud-showers-heavy"></i>
              <p><b>Precipitation:</b> ${responseJSON.currentConditions.precip} mm</p>
            </div>
            <div class="weatherResult">
              <i class="fa-solid fa-droplet"></i>
              <p><b>Humidity:</b> ${responseJSON.currentConditions.humidity}%</p>
            </div>
            <div class="weatherResult">
              <i class="fa-solid fa-wind"></i>
              <p><b>Wind:</b> ${responseJSON.currentConditions.windspeed} KM/H</p>
            </div>
            <div class="weatherResult">
              <i class="fa-solid fa-eye"></i>
              <p><b>Visibility:</b> ${responseJSON.currentConditions.visibility} KM</p>
            </div>
            <div class="weatherResult">
              <i class="fa-solid fa-water"></i> <!--yes I know, I just couldn't find a free bar/pressure icon -->
              <p><b>Pressure:</b> ${responseJSON.currentConditions.pressure} Millibars</p>
            </div>
            <div class="weatherResult">
              <i class="fa-solid fa-sun"></i>
              <p><b>Solar Radiation:</b> ${responseJSON.currentConditions.solarradiation} W/m²</p>
            </div>
            <div class="weatherResult">
              <i class="fa-solid fa-poo-storm"></i>
              <p><b>Solar Energy:</b> ${responseJSON.currentConditions.solarenergy} MJ/m²</p>
            </div>
            
          </div>`
    } catch (error) {
        wqForm.innerHTML = `<p>Error: ${error.message}`;
    }
})