export default class Weather {
  constructor({ main, name, weather }) {
    this.temp = main.temp
    this.location = name
    this.weather = weather[0].description
  }

}