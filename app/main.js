import MainController from "./components/mainControler.js";
import PokeController from "./components/pokeController.js";

class App {
  constructor() {
    this.controller = {
      mainController: new MainController(),
      pokeController: new PokeController()
    }
  }
}

window.app = new App()