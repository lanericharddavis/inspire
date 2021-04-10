import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";


//Private
function _drawTodo() {
  let todos = ProxyState.todos;
  let template = ''
  todos.forEach(t => template += t.todoTemplate)
  document.getElementById("todoItem").innerHTML = template
}

// function _drawTodoItems() {
//   let template = ''
//   ProxyState.todos.forEach(t => template += t.todoTemplate)
//   document.getElementById("todoItem").innerHTML = template
// }

//Public
export default class TodosController {
  constructor() {
    ProxyState.on("todos", _drawTodo);
    this.getTodos()
    // this.addTodo()
    // _drawTodo()
    // _drawTodoItems()
  }

  async addTodo() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let todoItem = { description: form['todoItem'].value }
      await todosService.addTodo(todoItem)
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }

  async deleteTodo(id) {
    try {
      window.confirm('Confirm Delete Item')
      await todosService.deleteTodo(id)
    } catch (error) {
      console.error(error)
    }

  }
}
