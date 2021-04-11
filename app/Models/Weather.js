


export default class Weather {
  constructor({ main, name, weather }) {
    this.temp = main.temp
    this.location = name
    this.weather = weather[0].description
    this.currentState = false
  }




  get weatherTemplate() {
    // let temperature = null
    // <p onclick="app.weathersController.toggleWeather(${ProxyState.weather.temp})">${temperature}</p>
    let fahrenhiet = Math.floor(1.8 * (this.temp - 273) + 32)
    let celsius = Math.floor(this.temp - 273)
    let F = `*F`
    let C = `*C`
    return `
      <div>
        <h5 class="text-center" onclick="app.weathersController.toggleWeather()">${this.currentState ? celsius : fahrenhiet} ${this.currentState ? C : F}</h5>
        <h7>${this.weather} in ${this.location}</h7>
        <p></p>
      </div >
  `
  }

}