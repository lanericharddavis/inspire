import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";
import Todo from "../Models/Todo.js";

class TodosService {
  async addTodo(todoItem) {
    console.log(todoItem)
    let response = await sandboxApi.post('lane/todos', todoItem)
    console.log(response.data)
    ProxyState.todos = [...ProxyState.todos, new Todo(response.data)]
    console.log(ProxyState.todos)
  }

  async getTodos() {
    let response = await sandboxApi.get('lane/todos')
    ProxyState.todos = response.data.map(t => new Todo(t))
  }

  async deleteTodo(id) {
    await sandboxApi.delete('lane/todos/' + id)
    ProxyState.todos = ProxyState.todos.filter(todo => todo._id != id)
  }

}


export const todosService = new TodosService();

