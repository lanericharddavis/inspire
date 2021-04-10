import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";
import Todo from "../Models/Todo.js";

class TodosService {
  async addTodo(todoItem) {
    let response = await sandboxApi.post('lane/todos', todoItem)
    ProxyState.todos = [...ProxyState.todos, new Todo(response.data)]
  }

  async getTodos() {
    let response = await sandboxApi.get('lane/todos')
    ProxyState.todos = response.data.map(t => new Todo(t))
    console.log(ProxyState.todos)
  }

  async deleteTodo(id) {
    let todoItem = ProxyState.todos.find(todo => todo.id === id)
    await sandboxApi.delete('lane/todos/' + id, todoItem)
    ProxyState.todos = ProxyState.todos.filter(todo => todo.id !== id)
  }

  async toggleTodo(id) {
    console.log(id)
    let todoItem = ProxyState.todos.find(todo => todo.id === id)
    if (todoItem.completed == false) {
      todoItem.completed = true
    } else {
      todoItem.completed = false
    }
    await sandboxApi.put('lane/todos/' + id, todoItem)
    ProxyState.todos = ProxyState.todos
    console.log('todos after', ProxyState.todos)
  }

}


export const todosService = new TodosService();

