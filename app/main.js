import TodosController from "./Controllers/TodosController.js";
import ImagesController from "./Controllers/ImagesController.js";

class App {
  todosController = new TodosController();

  imagesController = new ImagesController();
}

window["app"] = new App();
