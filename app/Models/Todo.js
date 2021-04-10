export default class Todo {
  constructor({ id, completed, description }) {
    this.id = id
    this.completed = completed
    this.description = description
  }

  get todoTemplate() {
    return `
      <form>
        <row class="form-group text-light form-check d-flex">
          <div class="col-1">
          <input type="checkbox" name="todoItem" class="form-check-input" id="checkbox" value="${this.completed}">
          </div>
          <div class="col">
          <label class="form-check-label" for="todoItem">${this.description}</label>
          </div>
          <div class="col-2">
          <i class="far fa-times-circle" onclick="app.todosController.deleteTodo('${this.id}')"></i>
          </div>
        </row>
      </form>
    `
  }
}