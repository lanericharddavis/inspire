export default class Todo {
  constructor({ id, completed, description }) {
    this.id = id
    this.completed = completed
    this.description = description
  }

  get todoTemplate() {
    return `
        <div class="form-group text-light form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" value="${this.completed}">
          <label class="form-check-label" for="exampleCheck1">${this.description}</label>
          <i class="far fa-times-circle" onclick="app.todosController.deleteTodo('${this.id}')"></i>
        </div>
    `
  }
}