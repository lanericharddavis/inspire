import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";


//Private
function _drawQuote() {
  document.getElementById('quoteHere').innerHTML = ProxyState.quote.quoteTemplate;
}

function showTime() {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  let time = h + ":" + m + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  setTimeout(showTime, 1000);
}


//Public
export default class QuotesController {
  constructor() {
    ProxyState.on("quote", _drawQuote);
    this.collectQuote()
    showTime();
  }

  async collectQuote() {
    try {
      await quotesService.collectQuote()
    } catch (error) {
      console.error(error)
    }
  }

}