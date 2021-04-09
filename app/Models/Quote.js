export default class Quote {
  constructor({ content, author }) {
    this.content = content
    this.author = author
  }

  // get quoteTemplate() {
  //   return `
  //     <div>
  //       <p>${this.content}</p>
  //       <p>${this.author}</p>
  //     </div>
  // `
  // }
}