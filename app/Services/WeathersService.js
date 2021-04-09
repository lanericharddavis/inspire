import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";
import Weather from "../Models/Weather.js";

class WeathersService {
  async collectWeather() {
    let response = await sandboxApi.get('weather')
    console.log(response.data)
    ProxyState.weather = new Weather(response.data)
    console.log(ProxyState.weather)
  }
}

export const weathersService = new WeathersService();