
export default class Todo {
  constructor({ id, completed, description }) {
    this.id = id
    this.completed = completed || false
    this.description = description
  }

  get todoTemplate() {
    return `
      <form>
        <row class="form-group text-light form-check d-flex">
          <div class="col-1">
          <input type="checkbox" name="todoItem" class="form-check-input" onclick="app.todosController.toggleTodo('${this.id}')" ${this.completed ? 'checked' : ''}>
          </div>
          <div class="col-8">
          <label class="form-check-label" for="todoItem">${this.description}</label>
          </div>
          <div class="col-1">
          <i class="far fa-times-circle text-danger" onclick="app.todosController.deleteTodo('${this.id}')"></i>
          </div>
        </row>
      </form>
    `
  }

}



