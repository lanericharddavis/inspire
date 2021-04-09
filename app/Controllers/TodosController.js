import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";


//Private
function _draw() {
  let values = ProxyState.todos;
  let template = ''
  todos.forEach(t => template += t.Template)
  document.getElementById("todoItem").innerHTML = /*html*/`

  `
}

//Public
export default class TodosController {
  constructor() {
    ProxyState.on("todos", _draw);
    _draw()
  }

  addTodo() {
    todosService.addTodo()
  }

}
