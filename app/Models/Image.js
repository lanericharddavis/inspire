export default class Image {
  constructor({ url }) {
    this.url = url
  }

  get imageTemplate() {
    return /*html*/`
    <div style= "background-image: url('${this.url}')"></div>
    `
  }
}