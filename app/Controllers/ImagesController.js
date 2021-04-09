import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";


//Private
function _drawImage() {
  let image = ProxyState.image;
  document.body.style.backgroundImage = `url(${image.url})`;
}

//Public
export default class ImagessController {
  constructor() {
    ProxyState.on("image", _drawImage);
    this.collectImage()
  }

  async collectImage() {
    try {
      await imagesService.collectImage()
    } catch (error) {
      console.error(error)
    }
  }

}