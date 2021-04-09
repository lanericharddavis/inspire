import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";
import Image from "../Models/Image.js";

class ImagesService {
  async collectImage() {
    let response = await sandboxApi.get('images')
    ProxyState.image = new Image(response.data)
  }
}

export const imagesService = new ImagesService();

