import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { sandboxApi } from "./AxiosService.js";

class ImagesService {
  async collectImage() {

    let response = await sandboxApi.get('images', ProxyState.images)
    console.log(response.data)
    ProxyState.images = [...ProxyState.images, new Image(response.data)]
  }
}

export const imagesService = new ImagesService();

