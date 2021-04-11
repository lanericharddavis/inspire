


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
      <div class="row">
        <div class="col text-center"
          <p class="tempDegrees" onclick="app.weathersController.toggleWeather()">${this.currentState ? celsius : fahrenhiet} ${this.currentState ? C : F}  ||  ${this.weather} in ${this.location}</p>
        </div>
      </div >
  `
  }

}