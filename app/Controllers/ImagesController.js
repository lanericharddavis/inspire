import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";


//Private
function _drawImage() {
  let images = ProxyState.images;
  let template = ''
  images.forEach(i => template += i.template)
  document.getElementById("imageGoesHere").innerHTML = `<div style="background-image: url('${this.url}')"></div>`
}

//Public
export default class ImagessController {
  constructor() {
    ProxyState.on("images", _drawImage);
    _drawImage()
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