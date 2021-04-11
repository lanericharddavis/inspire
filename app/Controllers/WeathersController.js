import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";


//Private
function _drawWeather() {
  document.getElementById('weatherHere').innerHTML = ProxyState.weather.weatherTemplate;
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

  toggleWeather() {
    weathersService.toggleWeather()
  }

}

