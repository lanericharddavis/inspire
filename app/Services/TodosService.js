import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";

class TodosService {
  addTodo() {
    ProxyState.todos = [...ProxyState.todos, new Todo({})]
  }
}

export const todosService = new TodosService();

