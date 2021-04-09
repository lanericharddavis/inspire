import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";
import Weather from "../Models/Weather.js";

class WeathersService {
  async collectWeather() {
    let response = await sandboxApi.get('weather')
    ProxyState.weather = new Weather(response.data)
  }
}

export const weathersService = new WeathersService();