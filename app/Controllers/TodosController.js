import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js"
import { todosService } from "../Services/TodosService.js";


//Private
// function _drawTodo() {
//   let todos = ProxyState.todos;
//   let template = ''
//   todos.forEach(t => template += t.template)
//   document.getElementById("todoItem").innerHTML = template
// }

//Public
export default class TodosController {
  constructor() {
    // ProxyState.on("todos", _drawTodo);
    // _drawTodo()
  }

  // async addTodo() {
  //   try {
  //     window.event.preventDefault()
  //     let form = window.event.target
  //     let todoItem = form['todoItem'].values
  //     await todosService.addTodo(todoItem)
  //     form.reset()
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

}
