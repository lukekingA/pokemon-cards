import PokeService from './pokeService.js'

let _pkService = new PokeService()

function drawPokemons() {
  let pokes = _pkService.ApiCards
  let template = ''
  template += `
  <button class="btn btn-dark text-light" onclick="app.controllers.pokeController.getApiPokes('${_pkService.PreviousUrl}')" ${_pkService.PreviousUrl ? '':'disabled'}>Previous</button>
  <button class="btn btn-dark text-light" onclick="app.controllers.pokeController.getApiPokes('${_pkService.NextUrl}')" ${_pkService.NextUrl ? '': 'disabled'}>Next</button>
  `
  pokes.forEach(p => {
    template += p.SimpleTemplate
  })
  document.querySelector('#pokeAvaliable').innerHTML = template
}

function drawTeam() {
  let pokes = _pkService.MyCards
  let template = ''

  pokes.forEach(p => {
    template += p.CardTemplate
    //put in button to delete
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