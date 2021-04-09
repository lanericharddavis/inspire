import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js";

class TodosService {
  // async addTodo() {
  //   let response = await sandboxApi.post('', ProxyState.todos)
  //   console.log(response.data)
  //   ProxyState.todos = [...ProxyState.todos, new Todo(response.data)]
  // }
}

export const todosService = new TodosService();

