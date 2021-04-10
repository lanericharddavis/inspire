


export default class Weather {
  constructor({ main, name, weather }) {
    this.temp = main.temp
    this.location = name
    this.weather = weather[0].description
  }




  get weatherTemplate() {
    // let temperature = null
    // <p onclick="app.weathersController.toggleWeather(${ProxyState.weather.temp})">${temperature}</p>
    let fahrenhiet = Math.floor(((this.temp - 273.15) * 1.8) + 32)
    let celsius = Math.floor(this.temp - 273.15)
    return `
      <div>
        <p>${fahrenhiet}*F || ${celsius}*C</p>
        <p>${this.weather} in ${this.location}</p>
        <p></p>
      </div>
  `
  }

}