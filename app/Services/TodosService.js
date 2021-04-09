import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js";

class TodosService {
  async addTodo(todoItem) {
    console.log(todoItem)
    let response = await sandboxApi.post('lane/todos', todoItem)
    console.log(response.data)
    ProxyState.todos = [...ProxyState.todos, new Todo(response.data)]
    console.log(ProxyState.todos)
  }
}

export const todosService = new TodosService();

