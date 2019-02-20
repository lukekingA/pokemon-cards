import PokeService from './pokeService.js'

//private
let _pkService = new PokeService()



function mainInjector() {
  let template = `
  <header class="row">
    <div class="col my-4">
      <h1 class="text-center">Pokemon Players</h1>
    </div>
  </header>
  <main class="row">
    <div class="col-12" id="pokeAvaliable">

    </div>
    
    <div class="col-12">
    <div class="row" id="pokeTeam">

    </div
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
    _pkService.getApiPokes()
    _pkService.getMyCards()
  }
}