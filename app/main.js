import TodosController from "./Controllers/TodosController.js";
import ImagesController from "./Controllers/ImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";
import WeathersController from "./Controllers/WeathersController.js";

class App {
  todosController = new TodosController();

  imagesController = new ImagesController();

  quotesController = new QuotesController();

  weathersController = new WeathersController();
}

window["app"] = new App();
