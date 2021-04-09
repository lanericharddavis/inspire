import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/quotesService.js";


//Private
function _drawQuote() {
  document.getElementById('quoteHere').innerHTML = `
      <div>
        <p>${ProxyState.quote.content}</p>
        <p>${ProxyState.quote.author}</p>
      </div>
  `;
}

//Public
export default class QuotesController {
  constructor() {
    ProxyState.on("quote", _drawQuote);
    this.collectQuote()
  }

  async collectQuote() {
    try {
      await quotesService.collectQuote()
    } catch (error) {
      console.error(error)
    }
  }

}