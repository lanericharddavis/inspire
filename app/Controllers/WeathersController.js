import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";


//Private
function _drawWeather() {
  document.getElementById('weatherHere').innerHTML = `
      <div>
        <p>${ProxyState.weather.temp}</p>
        <p>${ProxyState.weather.weather}</p>
        <p>${ProxyState.weather.location}</p>
      </div>
  `;
}

//Public
export default class WeathersController {
  constructor() {
    ProxyState.on("weather", _drawWeather);
    this.collectWeather()
  }

  async collectWeather() {
    try {
      await weathersService.collectWeather()
    } catch (error) {
      console.error(error)
    }
  }

}

// kelvin to Fahrenheit
// ((K - 273.15) * 1.8) + 32

// kelvin to Celsius
// K - 273.15