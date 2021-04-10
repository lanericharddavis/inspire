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
          <div class="col">
          <label class="form-check-label" for="todoItem">${this.description}</label>
          </div>
          <div class="col-2">
          <i class="far fa-times-circle text-danger" onclick="app.todosController.deleteTodo('${this.id}')"></i>
          </div>
        </row>
      </form>
    `
  }
}


{/* <div class="col-12 my-2">
  <input type="checkbox" aria-label="Task Checkbox" class="action cursor" id="todo-ck-box" onclick="app.todosController.completedTodo('${this.id}')"
  ${this.completed ? 'checked' : ''}>
    ${this.description}
    <i class="fas fa-times ml-3 text-danger" title='Delete Your ToDo'
      onclick="app.todosController.deleteTodo('${this.id}')">
      
    </i>
  </div> */}