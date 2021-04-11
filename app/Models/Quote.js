export default class Quote {
  constructor({ content, author }) {
    this.content = content
    this.author = author
  }

  get quoteTemplate() {
    return `
      <div class="divForHidden">
        <h6 class="quote">"${this.content}"</h6>
        <p class="author">-${this.author}</p>
      </div>
  `
  }
}