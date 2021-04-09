import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";
import Quote from "../Models/Quote.js";

class QuotesService {
  async collectQuote() {
    let response = await sandboxApi.get('quotes')
    ProxyState.quote = new Quote(response.data)
  }
}

export const quotesService = new QuotesService();
