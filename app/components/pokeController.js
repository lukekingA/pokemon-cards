import PokeService from './pokeService.js'

let _pkService = new PokeService()

function drawPokemons() {
  let pokes = _pkService.ApiCards
  let template = ''
  template += `
  <div class="row my-3">
  <div class="col">
  <button class="btn btn-dark text-light" onclick="app.controllers.pokeController.getApiPokes('${_pkService.PreviousUrl}')" ${_pkService.PreviousUrl ? '':'disabled'}>Previous</button>
  <button class="btn btn-dark text-light" onclick="app.controllers.pokeController.getApiPokes('${_pkService.NextUrl}')" ${_pkService.NextUrl ? '' : 'disabled'}>Next</button>
  </div>
  </div>
  <div class="row my-3">
  <div id="optionButtons" class="col d-flex flex-wrap justify-content-center">
  `
  pokes.forEach(p => {
    template += p.SimpleTemplate
  })
  template += `
  </div></div>
  `
  document.querySelector('#pokeAvaliable').innerHTML = template
}

function drawTeam() {
  let pokes = _pkService.MyCards
  let template = ''

  pokes.forEach(p => {
    template += p.CardTemplate

  })
  document.querySelector('#pokeTeam').innerHTML = template
}

export default class PokeController {
  constructor() {
    _pkService.addSubscriber('cards', drawPokemons)
    _pkService.addSubscriber('myCards', drawTeam)
  }

  addCardMember(url) {
    _pkService.addCardMember(url)
  }

  removeCard(id) {
    _pkService.removeCard(id)
  }

  getApiPokes(url) {
    console.log(url)
    _pkService.getApiPokes(url)
  }
}