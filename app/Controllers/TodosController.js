import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";


//Private
function _drawTodo() {
  let todos = ProxyState.todos;
  let template = ''
  todos.forEach(t => template += t.todoTemplate)
  document.getElementById("todoItem").innerHTML = template
}

function _drawStillTodo() {
  let todos = ProxyState.todos;
  let totalTodos = ProxyState.todos.length
  let checked = 0
  todos.forEach(t => {
    if (t.completed === true) {
      checked += 1
    }
  })
  document.getElementById("stillTodo").innerHTML = `List: ${checked}/${totalTodos}`
}


//Public
export default class TodosController {
  constructor() {
    ProxyState.on("todos", _drawTodo);
    ProxyState.on("todos", _drawStillTodo)
    this.getTodos()
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

  async toggleTodo(id) {
    try {
      await todosService.toggleTodo(id)
    } catch (error) {
      console.error(error)
    }
  }
}
