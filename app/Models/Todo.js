export default class Todo {
  constructor({ id, completed, description }) {
    this.id = id
    this.completed = completed
    this.description = description
  }

  get todoTemplate() {
    return /*html*/`
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" value="${completed}">
          <label class="form-check-label text-light" for="exampleCheck1">${this.description}</label>
        </div>
    `
  }
}