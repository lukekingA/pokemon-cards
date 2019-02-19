import PokeController from './pokeController.js'
//private


function mainInjector() {
  let template = `
  <header class="row">
    <div class="col">
      <h1 class="textcenter">Pokemon Players</h1>
    </div>
  </header>
  <main class="row">
    <div class="col" id="pokeAvaliable">

    </div>
    <div class="col" id="pokeTeam">

    </div>
  </main>
  <footer class="row">
    <div class="col">
      
    </div>
  </footer>`
  document.querySelector('body').innerHTML = template
}


//public

export default class MainController {
  constructor() {
    mainInjector()



  }
}